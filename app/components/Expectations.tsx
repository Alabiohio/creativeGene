"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mic, Network } from "lucide-react";

export default function Expectations() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

            <div className="container relative z-10 mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        What to Expect at <span className="text-gradient">Creative Gene</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Panel Sessions */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-2xl"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-purple-500/20 rounded-lg">
                                <Mic className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold">Panel Sessions</h3>
                        </div>
                        <p className="text-gray-300 mb-6">
                            Listen to professionals from different tech areas share their journeys. They will talk about how they started, what changed their careers, and how they grew.
                        </p>
                        <ul className="space-y-2">
                            {[
                                "Software Development",
                                "Data and Analytics",
                                "Product Management",
                                "UI/UX Design",
                                "Cybersecurity",
                                "Cloud Engineering",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Live Q&A */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass p-8 rounded-2xl border-primary/30"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-accent/20 rounded-lg">
                                <MessageCircle className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-2xl font-bold">Live Q&A Sessions</h3>
                        </div>
                        <p className="text-gray-300 mb-6">
                            Ask questions about choosing a career, skills that matter, portfolio building, and more. Honest answers. Real guidance.
                        </p>
                        <div className="space-y-3">
                            {[
                                "Choosing a tech career",
                                "Skills that really matter",
                                "Overcoming self-doubt",
                                "Networking the right way",
                                "Getting opportunities"
                            ].map((item, i) => (
                                <div key={i} className="px-3 py-2 bg-white/5 rounded text-sm text-gray-300">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Networking */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="glass p-8 rounded-2xl"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-blue-500/20 rounded-lg">
                                <Network className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold">Networking</h3>
                        </div>
                        <p className="text-gray-300 mb-6">
                            Meet other students and tech lovers like you. The right connection can change everything.
                        </p>
                        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-white/5">
                            <h4 className="font-semibold text-white mb-4">Who Should Attend?</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li className="flex gap-2">✔ Tech lovers who want direction</li>
                                <li className="flex gap-2">✔ Students preparing for life after school</li>
                                <li className="flex gap-2">✔ People switching careers into tech</li>
                                <li className="flex gap-2">✔ Professionals who feel stuck</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-xl font-semibold text-white">
                        If <span className="text-accent underline decoration-wavy">growth</span> matters to you, this event is for you.
                    </p>
                </div>
            </div>
        </section>
    );
}
