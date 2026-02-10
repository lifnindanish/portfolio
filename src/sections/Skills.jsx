import React from "react";
import { Reveal } from "../components/Reveal";

const skills = {
    Frontend: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "SASS", "Tailwind"],
    Backend: ["Node.js", "Express.js", "Python", "Flask", "REST APIs", "SQL", "MongoDB"],
    "AI & Data": ["TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-learn", "LLMs", "RAG"],
    "Tools & DevOps": ["Git", "Docker", "AWS", "Linux", "Postman"]
};

export default function Skills() {
    return (
        <section id="skills" className="min-h-screen flex items-center justify-center py-20 relative">

            <div className="max-w-7xl mx-auto px-6 w-full">
                <Reveal>
                    <h2 className="text-4xl font-bold text-center mb-16">Technical <span className="text-secondary">Skills</span></h2>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <Reveal key={category}>
                            <div className="glass p-8 rounded-2xl hover:border-primary/30 transition-colors group">
                                <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors">{category}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {items.map((skill) => (
                                        <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all cursor-default text-gray-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );

}
