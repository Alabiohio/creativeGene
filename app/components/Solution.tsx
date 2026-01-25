"use client";

import { motion } from "framer-motion";

export default function Solution() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_#db277710_0%,_transparent_50%)] z-0" />
            <div className="absolute -right-64 top-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] z-0" />

            <div className="container relative z-10 mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                >
                    <div className="px-6 py-2 rounded-full bg-secondary/10 text-secondary font-black text-xs tracking-[0.3em] mb-12 border border-secondary/30 uppercase shadow-[0_0_20px_rgba(250,204,21,0.2)]">
                        The Solution
                    </div>

                    <h2 className="text-6xl md:text-9xl font-black mb-20 leading-[0.85] tracking-tighter">
                        LEARN FROM <br />
                        <span className="text-gradient">THE MASTERS</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
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
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-panel p-10 rounded-[40px] text-left hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
                            >
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                                <span className="text-6xl text-primary/10 font-serif absolute top-4 left-6 group-hover:text-primary/20 transition-colors">"</span>
                                <p className="text-xl md:text-2xl font-bold text-gray-200 relative z-10 mt-6 group-hover:text-white transition-colors leading-tight">{question}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-32 w-full p-1 lg:p-12 glass-panel rounded-[50px] relative overflow-hidden border-white/10 group hover:border-white/20 transition-colors">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 opacity-50" />

                        <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
                            <div className="md:w-1/2 text-left">
                                <h3 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tighter leading-none">
                                    WELCOME TO <br />
                                    <span className="text-primary italic">CREATIVE GENE</span>
                                </h3>
                                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-12">
                                    Creative Gene is not just another tech event. It is an <span className="text-white font-medium underline decoration-primary decoration-2 underline-offset-4">immersive experience</span> designed to help you decode your potential.
                                </p>
                            </div>

                            <div className="md:w-1/2 grid grid-cols-1 gap-8">
                                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                    <h4 className="text-2xl font-black text-secondary mb-6 flex items-center gap-3 uppercase tracking-wider">
                                        <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                                        Industry Insights
                                    </h4>
                                    <ul className="space-y-4">
                                        {["Their real journeys", "The mistakes they made", "What actually worked"].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-4 text-gray-300 text-lg">
                                                <div className="w-2 h-2 rounded-full bg-primary/50" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                    <h4 className="text-2xl font-black text-primary mb-6 flex items-center gap-3 uppercase tracking-wider">
                                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(219,39,119,0.5)]" />
                                        Your Takeaway
                                    </h4>
                                    <ul className="space-y-4">
                                        {["No empty motivation", "No confusing theories", "Just real stories"].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-4 text-gray-300 text-lg">
                                                <div className="w-2 h-2 rounded-full bg-secondary/50" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
