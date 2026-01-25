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
        <section className="py-32 relative z-10 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10" />

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
                        WHAT MAKES <br />
                        <span className="text-gradient">CREATIVE GENE</span> DIFFERENT?
                    </h2>
                    <div className="w-24 h-1.5 bg-primary/50 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="glass-panel p-10 rounded-[40px] hover:bg-white/5 hover:border-primary/50 transition-all duration-500 group relative flex flex-col items-center text-center shadow-xl"
                        >
                            <div className="mb-8 p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent group-hover:scale-110 group-hover:from-primary/20 transition-all duration-500 border border-white/5">
                                <feature.icon className="w-10 h-10 text-secondary drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]" />
                            </div>

                            <h3 className="text-2xl font-black mb-4 text-white tracking-tight uppercase leading-tight group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed font-light">
                                {feature.description}
                            </p>

                            {/* Decorative line */}
                            <div className="mt-8 w-0 group-hover:w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
