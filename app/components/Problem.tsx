"use client";

import { motion } from "framer-motion";
import { UserX, Compass, AlertCircle, TrendingUp } from "lucide-react";

const strugglePoints = [
    {
        icon: UserX,
        text: "A student who doesn't know which tech path to choose"
    },
    {
        icon: Compass,
        text: "Someone already learning tech but unsure of the next step"
    },
    {
        icon: AlertCircle,
        text: "Self-taught and confused about how to get real opportunities"
    },
    {
        icon: TrendingUp,
        text: "Already working in tech but feeling stuck at the same level"
    }
];

export default function Problem() {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Feeling <span className="text-accent">Stuck</span> in Your Tech Journey?
                        </h2>
                        <div className="space-y-4 text-lg text-gray-400">
                            <p>
                                You like tech. You're curious. You're trying.
                                But somehow, things are not moving forward.
                            </p>
                            <p>
                                You see other people growing in tech, getting jobs, building projects,
                                getting noticed while you feel like you're still in the same place.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid gap-4"
                    >
                        {strugglePoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-panel p-6 rounded-xl flex items-center gap-4 hover:border-primary/50 hover:bg-white/5 transition-all duration-300"
                            >
                                <div className="bg-primary/20 p-3 rounded-full shrink-0">
                                    <point.icon className="w-6 h-6 text-primary" />
                                </div>
                                <p className="text-gray-200 font-medium">{point.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center max-w-2xl mx-auto"
                >
                    <h3 className="text-2xl font-semibold text-white mb-4">
                        The problem is not lack of information.
                        The real problem is <span className="text-secondary">lack of direction</span>.
                    </h3>
                    <p className="text-gray-400">
                        You don't need more tutorials. You need guidance from people who have already walked this road.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
