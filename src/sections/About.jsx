import React from "react";
import { Reveal } from "../components/Reveal";
import profileImage from "../assets/1.jpeg";

export default function About() {
    const stats = [
        { label: "Projects Completed", value: "6+" },
        { label: "Years of Experience", value: "2+" },
        { label: "Technologies Mastered", value: "15+" }
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center relative py-20">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Image/Visual */}
                <div className="order-2 md:order-1 relative">
                    <div className="relative rounded-2xl overflow-hidden glass p-4 bg-white/5 mx-auto w-full max-w-sm border border-white/10 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500">
                        <div className="aspect-square bg-gray-800/50 rounded-xl overflow-hidden">
                            <img src={profileImage} alt="Profile" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/30 rounded-full blur-[80px] -z-10"></div>
                </div>

                {/* Content */}
                <div className="order-1 md:order-2 space-y-6">
                    <Reveal>
                        <h2 className="text-4xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
                    </Reveal>

                    <Reveal>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            I am a Full Stack Engineer with experience in building end-to-end web applications, AI-powered solutions, and data-driven systems. I specialize in designing clean user interfaces, developing scalable backend services, and deploying production-ready systems.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            My journey started at Sri Ramakrishna Polytechnic College, and I'm currently honing my skills at Kumaraguru College of Technology.
                        </p>
                    </Reveal>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center p-4 glass rounded-lg hover:-translate-y-2 transition-transform">
                                <h3 className="text-3xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                                    {stat.value}
                                </h3>
                                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
