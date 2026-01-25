"use client";

import { motion } from "framer-motion";

export default function Solution() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent z-0" />

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-8 border border-secondary/20 shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                        THE SOLUTION
                    </div>

                    <h2 className="text-4xl md:text-7xl font-bold mb-12 leading-tight">
                        Learn From People Who <br /> Have <span className="text-gradient">Done It</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
                        {[
                            "How did you get your first real opportunity?",
                            "What skills truly matter?",
                            "How do you stand out?",
                            "What mistakes should be avoided?",
                            "How do you choose the right tech path?",
                            "How to overcome imposter syndrome?"
                        ].map((question, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, rotateX: 20 }}
                                whileInView={{ opacity: 1, rotateX: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-panel p-6 rounded-xl text-left hover:border-primary/50 transition-colors group cursor-default"
                            >
                                <span className="text-4xl text-primary/20 font-serif leading-none absolute top-4 left-4">"</span>
                                <p className="text-lg font-medium text-gray-200 relative z-10 ml-4 mt-2 group-hover:text-white transition-colors">{question}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-24 p-10 glass-panel rounded-3xl relative overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />

                        <h3 className="text-3xl font-bold mb-6 text-white text-left">Welcome to Creative Gene</h3>
                        <p className="text-gray-300 leading-relaxed mb-8 text-left text-lg">
                            Creative Gene is not just another tech event. It is an experience designed to help you understand yourself, your strengths, and your best path in tech.
                        </p>
                        <div className="grid md:grid-cols-2 gap-12 text-left">
                            <div>
                                <h4 className="font-bold text-secondary mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-secondary" />
                                    Industry Professionals
                                </h4>
                                <ul className="space-y-3 text-gray-400">
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                                        Their real journeys
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                                        The mistakes they made
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                                        What actually worked
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                    What you get
                                </h4>
                                <ul className="space-y-3 text-gray-400">
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                                        No empty motivation
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                                        No confusing theories
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                                        Just real stories
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
