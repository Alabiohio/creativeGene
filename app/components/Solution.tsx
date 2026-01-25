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
                            <div key={i} className="relative group">

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: (i * 0.1) + 0.6,
                                        duration: 0.8,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    className="glass-panel p-10 rounded-[40px] text-left hover:border-primary/50 transition-all duration-500 relative z-10 overflow-hidden"
                                >
                                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

                                    {/* Tech Brackets */}
                                    <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-primary/20 group-hover:border-primary/50 transition-colors" />
                                    <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-primary/20 group-hover:border-primary/50 transition-colors" />

                                    <span className="text-6xl text-primary/10 font-serif absolute top-4 left-6 group-hover:text-primary/20 transition-colors">"</span>
                                    <p className="text-xl md:text-2xl font-bold text-gray-200 relative z-10 mt-6 group-hover:text-white transition-colors leading-tight">
                                        {question}
                                    </p>

                                    <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="h-[1px] w-8 bg-primary/40" />
                                        <span className="text-[10px] font-mono text-primary/60 tracking-widest uppercase">Deciphering...</span>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-32 w-full p-8 lg:p-16 glass-panel rounded-[50px] relative overflow-hidden border-white/10 group hover:border-white/20 transition-all duration-700">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 opacity-50" />

                        {/* Decorative background glow for emphasis */}
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-colors duration-700" />

                        <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="md:w-1/2 text-left"
                            >
                                <h3 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter leading-[0.9] relative">
                                    <span className="relative z-10">WELCOME TO</span> <br />
                                    <span className="text-primary italic relative z-10">CREATIVE GENE</span>
                                    {/* Text highlight/underline effect */}
                                    <div className="absolute -bottom-2 left-0 w-1/3 h-2 bg-primary/30 -z-10 blur-sm" />
                                </h3>
                                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-12">
                                    Creative Gene is not just another tech event. It is an <span className="text-white font-medium underline decoration-primary decoration-2 underline-offset-4">immersive experience</span> designed to help you decode your potential.
                                </p>
                            </motion.div>

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
