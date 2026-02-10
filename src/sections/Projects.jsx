import React from "react";
import { Reveal } from "../components/Reveal";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Agro-Mart",
        description: "Digital agriculture marketplace connecting farmers and buyers with order tracking.",
        tech: ["React", "Python", "Flask", "SQL"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "Face Emotion Detection",
        description: "Real-time emotion classification using CNN and computer vision.",
        tech: ["Python", "OpenCV", "TensorFlow"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "Multiple Disease Prediction",
        description: "ML-based healthcare prediction system using Scikit-learn.",
        tech: ["Python", "Pandas", "NumPy"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "EV-EnergyGPT",
        description: "Deep learning web app predicting EV energy consumption.",
        tech: ["Python", "Flask", "TensorFlow"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "InsightGPT",
        description: "LLM-powered BI platform enabling NL to SQL interaction.",
        tech: ["JavaScript", "OpenAI API", "SQL"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "Geospatial Risk Scoring",
        description: "Location-based intelligent risk assessment system.",
        tech: ["Python", "GeoPandas", "PostGIS"],
        links: { github: "#", demo: "#" }
    }
];

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <h2 className="text-4xl font-bold text-center mb-16">Featured <span className="text-primary">Projects</span></h2>
                </Reveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Reveal key={index}>
                            <div className="glass p-6 rounded-xl hover:-translate-y-2 transition-all duration-300 hover:border-primary/50 group h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-white/5">
                                    <a href={project.links.github} className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
                                        <Github size={16} /> Code
                                    </a>
                                    <a href={project.links.demo} className="flex items-center gap-1 text-sm text-primary/80 hover:text-primary transition-colors">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
