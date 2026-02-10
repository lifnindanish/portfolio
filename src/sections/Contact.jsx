import { Reveal } from "../components/Reveal";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setStatus("success");
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
            <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-primary/5 to-transparent pointer-events-none -z-10"></div>

            <div className="max-w-4xl w-full">
                <Reveal>
                    <h2 className="text-4xl font-bold text-center mb-4">Get In <span className="text-primary">Touch</span></h2>
                    <p className="text-gray-400 text-center mb-16 max-w-lg mx-auto">
                        Interested in working together or have a question? Feel free to reach out.
                    </p>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <Reveal>
                            <h3 className="text-2xl font-bold mb-6">Connect with me</h3>
                            <div className="flex gap-4">
                                <a href="https://github.com/lifnindanish" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:text-primary hover:-translate-y-1 transition-all">
                                    <Github size={24} />
                                </a>
                                <a href="https://linkedin.com/in/lifnindanish" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:text-primary hover:-translate-y-1 transition-all">
                                    <Linkedin size={24} />
                                </a>
                                <a href="mailto:lifnin@example.com" className="p-3 glass rounded-full hover:text-primary hover:-translate-y-1 transition-all">
                                    <Mail size={24} />
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    {/* Form */}
                    <Reveal>
                        <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    required
                                    rows="4"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
                                    placeholder="How can I help you?"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || status === 'success'}
                                className="w-full bg-primary/10 border border-primary text-primary py-3 rounded-lg hover:bg-primary hover:text-black transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : status === 'success' ? 'Message Sent!' : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
