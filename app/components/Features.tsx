"use client";

import { motion } from "framer-motion";
import { Users, HelpCircle, UserPlus, ArrowRight } from "lucide-react";

const features = [
    {
        icon: Users,
        title: "Real People, Real Stories",
        description: "The speakers started from scratch. They faced confusion, fear, and doubt too. They will share honest experiences, not just success stories."
    },
    {
        icon: HelpCircle,
        title: "Your Questions Matter",
        description: "This is not a one-way talk. There will be time to ask questions and get clear answers based on your own situation."
    },
    {
        icon: UserPlus,
        title: "Everyone Is Welcome",
        description: "Beginners, students, junior professionals, career switchers, and experienced people — everyone has something to gain."
    },
    {
        icon: ArrowRight,
        title: "Clear Next Steps",
        description: "You won't leave confused. You'll leave knowing what to do next and how to move forward."
    }
];

export default function Features() {
    return (
        <section className="py-24 relative z-10">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-center mb-16 drop-shadow-lg"
                >
                    What Makes <span className="text-gradient">Creative Gene</span> Different?
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-8 rounded-2xl hover:-translate-y-2 hover:shadow-[0_20px_40px_-5px_rgba(219,39,119,0.3)] transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10 bg-black/40 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform border border-white/10 shadow-inner">
                                <feature.icon className="w-8 h-8 text-secondary drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                            </div>

                            <h3 className="relative z-10 text-xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="relative z-10 text-gray-300 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
