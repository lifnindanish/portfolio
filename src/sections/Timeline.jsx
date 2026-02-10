import React from "react";
import { Reveal } from "../components/Reveal";

const education = [
    {
        institution: "Kumaraguru College of Technology",
        period: "2024 – 2026",
        degree: "Engineering",
        grade: "CGPA: 7.2"
    },
    {
        institution: "Sri Ramakrishna Polytechnic College",
        period: "2021 – 2024",
        degree: "Diploma in Engineering",
        grade: ""
    }
];

const experience = [
    {
        role: "Innovation Fellow",
        company: "Forge Innovation Ventures",
        period: "2026 – 2027",
        desc: "Focusing on Innovation, Entrepreneurship, and Product Development."
    }
];

export default function Timeline() {
    return (
        <section id="experience" className="py-20 px-6">
            <div className="max-w-4xl mx-auto space-y-20">

                {/* Experience */}
                <div>
                    <Reveal>
                        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                            Work <span className="text-primary">Experience</span>
                            <div className="h-px bg-white/10 flex-grow"></div>
                        </h2>
                    </Reveal>

                    <div className="space-y-8 border-l-2 border-white/10 ml-3 pl-8 relative">
                        {experience.map((exp, index) => (
                            <Reveal key={index}>
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-black border-2 border-primary"></div>
                                    <div className="glass p-6 rounded-xl hover:bg-white/5 transition-colors">
                                        <span className="text-primary text-sm font-mono mb-2 block">{exp.period}</span>
                                        <h3 className="text-xl font-bold">{exp.role}</h3>
                                        <p className="text-gray-400 mb-2">{exp.company}</p>
                                        <p className="text-gray-500 text-sm">{exp.desc}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div>
                    <Reveal>
                        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                            Education <span className="text-secondary">History</span>
                            <div className="h-px bg-white/10 flex-grow"></div>
                        </h2>
                    </Reveal>

                    <div className="space-y-8 border-l-2 border-white/10 ml-3 pl-8 relative">
                        {education.map((edu, index) => (
                            <Reveal key={index}>
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-black border-2 border-secondary"></div>
                                    <div className="glass p-6 rounded-xl hover:bg-white/5 transition-colors">
                                        <span className="text-secondary text-sm font-mono mb-2 block">{edu.period}</span>
                                        <h3 className="text-xl font-bold">{edu.institution}</h3>
                                        <p className="text-gray-400">{edu.degree}</p>
                                        {edu.grade && <p className="text-gray-500 text-sm mt-1">{edu.grade}</p>}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
