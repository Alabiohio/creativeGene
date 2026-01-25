"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mic, Network } from "lucide-react";

export default function Expectations() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-50" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 opacity-50" />

            <div className="container relative z-10 mx-auto px-4">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-9xl font-black mb-8 tracking-tighter"
                    >
                        WHAT TO <span className="text-gradient italic">EXPECT</span>
                    </motion.h2>
                    <div className="w-48 h-1 bg-white/10 mx-auto rounded-full" />
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Panel Sessions */}
                    <div className="relative group h-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(12px)" }}
                            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="glass-panel p-12 rounded-[50px] flex flex-col hover:border-primary/50 transition-all duration-500 relative z-10 h-full overflow-hidden"
                        >
                            <div className="flex flex-col items-start gap-6 mb-8">
                                <div className="p-5 bg-purple-500/10 rounded-3xl group-hover:bg-purple-500/20 transition-colors">
                                    <Mic className="w-10 h-10 text-purple-400" />
                                </div>
                                <h3 className="text-4xl font-black tracking-tight text-white uppercase">Panel <br />Sessions</h3>
                            </div>
                            <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
                                Listen to professionals from different tech areas share their journeys. They will talk about how they started, what changed their careers, and how they grew.
                            </p>
                            <div className="mt-auto grid grid-cols-2 gap-4">
                                {[
                                    "Software Development",
                                    "Data & Analytics",
                                    "Product Management",
                                    "UI/UX Design",
                                    "Cybersecurity",
                                    "Cloud Engineering",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm text-gray-300 font-medium bg-white/5 py-3 px-4 rounded-2xl border border-white/5 group-hover:bg-white/10 transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Live Q&A */}
                    <div className="relative group scale-105 z-20 h-full">
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 1.05, filter: "blur(12px)" }}
                            whileInView={{ opacity: 1, y: 0, scale: 1.05, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="glass-panel p-12 rounded-[50px] flex flex-col border-primary/30 bg-gradient-to-br from-primary/10 via-transparent to-transparent hover:border-primary/60 transition-all duration-500 relative z-10 h-full group shadow-2xl shadow-primary/20 overflow-hidden"
                        >
                            <div className="flex flex-col items-start gap-6 mb-8">
                                <div className="p-5 bg-accent/10 rounded-3xl group-hover:bg-accent/20 transition-colors">
                                    <MessageCircle className="w-10 h-10 text-accent" />
                                </div>
                                <h3 className="text-4xl font-black tracking-tight text-white uppercase">Live Q&A <br />Sessions</h3>
                            </div>
                            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
                                Ask questions about choosing a career, skills that matter, portfolio building, and more. Honest answers. Real guidance.
                            </p>
                            <div className="space-y-4 mt-auto">
                                {[
                                    "Choosing a tech career",
                                    "Skills that really matter",
                                    "Overcoming self-doubt",
                                    "Networking the right way",
                                ].map((item, i) => (
                                    <div key={i} className="px-6 py-4 bg-primary/20 rounded-3xl border border-primary/30 text-white font-bold flex items-center justify-between group-hover:bg-primary/30 transition-colors">
                                        {item}
                                        <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Networking */}
                    <div className="relative group h-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(12px)" }}
                            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="glass-panel p-12 rounded-[50px] flex flex-col hover:border-blue-500/50 transition-all duration-500 relative z-10 h-full overflow-hidden"
                        >
                            <div className="flex flex-col items-start gap-6 mb-8">
                                <div className="p-5 bg-blue-500/10 rounded-3xl group-hover:bg-blue-500/20 transition-colors">
                                    <Network className="w-10 h-10 text-blue-400" />
                                </div>
                                <h3 className="text-4xl font-black tracking-tight text-white uppercase">Deep <br />Networking</h3>
                            </div>
                            <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
                                Meet other students and tech lovers like you. The right connection can change everything.
                            </p>
                            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-[40px] border border-white/5 mt-auto">
                                <h4 className="font-black text-white mb-6 uppercase tracking-widest text-sm">Target Audience</h4>
                                <ul className="space-y-4 text-gray-300">
                                    {[
                                        "Ambitions students",
                                        "Career switchers",
                                        "Stuck professionals",
                                        "Tech explorers"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="mt-32 text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-2xl md:text-4xl font-light text-gray-400"
                    >
                        If <span className="text-white font-black underline decoration-primary decoration-4 underline-offset-8">growth</span> matters to you, this event is mandatory.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
