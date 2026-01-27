"use client";

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
        <section className="py-32 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] -z-10" />

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    <div
                        data-aos="fade-up"
                        data-aos-duration="800"
                        className="lg:col-span-12 mb-20"
                    >
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 leading-[0.9] tracking-tighter">
                            Feeling <span className="text-accent underline decoration-primary/30 decoration-8 underline-offset-8">Stuck</span> <br />
                            <span className="text-gray-500">In Your Tech Journey?</span>
                        </h2>
                        <div className="max-w-3xl space-y-8 text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                            <p>
                                You like tech. You're curious. You're trying.
                                But somehow, things are not moving forward.
                            </p>
                            <p className="text-white font-medium">
                                You see other people growing in tech, getting jobs, building projects,
                                getting noticed while you feel like you're still in the same place.
                            </p>
                        </div>
                    </div>

                    <h3
                        data-aos="fade-up"
                        data-aos-duration="600"
                        className="lg:col-span-12 text-3xl md:text-4xl font-bold text-white mb-8"
                    >
                        You may be
                    </h3>
                    <div className="lg:col-span-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {strugglePoints.map((point, index) => (
                            <div key={index} className="relative group">
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration="600"
                                    data-aos-delay={index * 150}
                                    className="glass-panel p-8 rounded-3xl flex flex-col gap-6 hover:border-primary/50 hover:bg-white/5 transition-all duration-500 relative z-10 h-full"
                                >
                                    <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                                        <point.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <p className="text-xl text-gray-200 font-medium leading-tight">{point.text}</p>

                                    {/* Tech Brackets */}
                                    <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-primary/20 group-hover:border-primary/50 transition-colors" />
                                    <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-primary/20 group-hover:border-primary/50 transition-colors" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        data-aos="zoom-in"
                        data-aos-duration="800"
                        className="lg:col-span-12 mt-20 p-12 glass-panel rounded-[40px] text-center border-primary/20 bg-gradient-to-br from-primary/5 to-transparent shadow-2xl"
                    >
                        <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                            The problem is not lack of information.
                        </h3>
                        <p className="text-2xl md:text-4xl font-light text-gray-400">
                            The real problem is <span className="text-secondary font-bold">lack of direction</span>.
                        </p>
                        <div className="w-24 h-1 bg-primary mx-auto mt-12 mb-8 rounded-full" />
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto italic">
                            "You don't need more tutorials. You need guidance from people who have already walked this road."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
