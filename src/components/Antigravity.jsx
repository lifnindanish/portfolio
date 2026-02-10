import React, { useRef, useEffect } from 'react';

const Antigravity = ({
    count = 300,
    magnetRadius = 100, // Multiplied by 10 for better visibility in this impl
    ringRadius = 100,
    waveSpeed = 0.4,
    waveAmplitude = 1,
    particleSize = 1.5,
    lerpSpeed = 0.05,
    color = "#5227FF",
    autoAnimate = true,
    particleVariance = 1,
    rotationSpeed = 0,
    depthFactor = 1,
    pulseSpeed = 3,
    particleShape = "capsule",
    fieldStrength = 10
}) => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0, isActive: false });
    const particles = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = canvas.offsetWidth;
        let height = canvas.offsetHeight;

        const resize = () => {
            width = canvas.offsetWidth;
            height = canvas.offsetHeight;
            canvas.width = width;
            canvas.height = height;
            initParticles();
        };

        const initParticles = () => {
            particles.current = [];
            for (let i = 0; i < count; i++) {
                particles.current.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * waveSpeed,
                    vy: (Math.random() - 0.5) * waveSpeed,
                    baseX: Math.random() * width,
                    baseY: Math.random() * height,
                    size: (Math.random() * particleVariance + 0.5) * particleSize,
                    angle: Math.random() * Math.PI * 2
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = color;

            const magnetRad = magnetRadius * 20; // Scale up for visibility

            particles.current.forEach(p => {
                // Wave motion
                p.angle += 0.01 * waveSpeed;
                const waveX = Math.cos(p.angle) * waveAmplitude;
                const waveY = Math.sin(p.angle) * waveAmplitude;

                // Mouse interaction (Antigravity/Magnet)
                let targetX = p.baseX + waveX;
                let targetY = p.baseY + waveY;

                if (mouse.current.isActive) {
                    const dx = mouse.current.x - p.x;
                    const dy = mouse.current.y - p.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < magnetRad) {
                        const force = (magnetRad - distance) / magnetRad;
                        const angle = Math.atan2(dy, dx);
                        // Push away (Antigravity)
                        targetX -= Math.cos(angle) * force * fieldStrength * 20;
                        targetY -= Math.sin(angle) * force * fieldStrength * 20;
                    }
                }

                // Smooth movement (Lerp)
                p.x += (targetX - p.x) * lerpSpeed;
                p.y += (targetY - p.y) * lerpSpeed;

                // Draw
                ctx.beginPath();
                if (particleShape === 'capsule') {
                    ctx.ellipse(p.x, p.y, p.size * 2, p.size, 0, 0, Math.PI * 2);
                } else {
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                }
                ctx.fill();
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.current.x = e.clientX - rect.left;
            mouse.current.y = e.clientY - rect.top;
            mouse.current.isActive = true;
        });
        window.addEventListener('mouseleave', () => {
            mouse.current.isActive = false;
        });

        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationRef.current);
        };
    }, [count, magnetRadius, waveSpeed, particleSize, color, fieldStrength]);

    return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />;
};

export default Antigravity;
