import React, { useEffect } from "react";
import { Reveal } from "../components/Reveal"; // We'll create this helper
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black -z-10"></div>
            <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-[128px] animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse"></div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="space-y-6">
                    <h2 className="text-primary tracking-widest text-sm uppercase font-semibold">
                        Welcome to my portfolio
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Hi, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                            Lifnin Danish J
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                        AI Systems & Full Stack Engineer building intelligent, scalable web applications and data-driven solutions.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="#projects" className="px-8 py-3 bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-black transition-all rounded-full flex items-center gap-2 group">
                            View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="/cv.pdf" className="px-8 py-3 bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all rounded-full flex items-center gap-2">
                            Download CV <Download size={18} />
                        </a>
                    </div>
                </div>

                {/* Visual/Image */}
                <div className="relative flex justify-center">
                    <div className="w-80 h-80 md:w-[28rem] md:h-[28rem] bg-black/50 rounded-full flex items-center justify-center relative border border-white/5 backdrop-blur-3xl glow-container overflow-hidden">

                        <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                            <p className="text-gray-400 text-lg italic font-light leading-relaxed">
                                "The best way to predict the future is to <span className="text-primary font-normal not-italic">create it</span>."
                            </p>
                        </div>

                        {/* Orbiting Skills */}
                        <div className="absolute w-full h-full animate-spin-slow rounded-full border border-white/5 pointer-events-none">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black border border-primary/50 rounded-full flex items-center justify-center text-xs text-primary shadow-lg shadow-primary/20">
                                AI
                            </div>
                        </div>
                        <div className="absolute w-[80%] h-[80%] animate-spin-reverse-slow rounded-full border border-white/5 pointer-events-none">
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 bg-black border border-purple-500/50 rounded-full flex items-center justify-center text-xs text-purple-400 shadow-lg shadow-purple-500/20">
                                Web
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
