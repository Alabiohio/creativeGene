"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden perspective-1000">
            {/* 3D Atmospheric Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#2a0a20_0%,_#000000_100%)] z-0" />

            {/* Gene Background Image */}
            <div
                className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen z-0 blur-sm"
            />

            {/* Animated Floating Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-700 z-0" />

            {/* Grid Floor Effect for Depth */}
            <div
                className="absolute bottom-0 left-0 right-0 h-[50vh] bg-[linear-gradient(to_bottom,transparent_0%,#db277710_100%)] transform perspective-[500px] rotate-x-[60deg] opacity-50 z-0"
                style={{ backgroundImage: 'linear-gradient(#db277720 1px, transparent 1px), linear-gradient(90deg, #db277720 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="relative inline-block"
                >
                    {/* Hosted by Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-3 bg-white/5 backdrop-blur-2xl px-6 py-3 rounded-full border border-white/20 mb-12 mx-auto w-fit shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border-primary/50 transition-colors"
                    >
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary shadow-lg shadow-primary/20">
                            <Image
                                src="/Praise_Unuigboje.jpeg"
                                alt="Praise Unuigboje"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-sm md:text-base font-medium text-gray-200 tracking-wide">
                            Hosted by <span className="text-white font-black text-gradient uppercase tracking-widest">Praise Unuigboje</span>
                        </span>
                    </motion.div>

                    {/* Glowing Aura behind text */}
                    <div className="absolute -inset-10 bg-primary/30 blur-[100px] rounded-full opacity-50" />

                    <h1 className="relative text-5xl sm:text-7xl md:text-[11rem] lg:text-[13rem] font-black tracking-tight md:tracking-tighter mb-8 leading-[0.85] select-none">
                        <span className="block text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">CREATIVE</span>
                        <span className="text-gradient drop-shadow-[0_0_50px_rgba(219,39,119,0.7)]">GENE.</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg sm:text-xl md:text-4xl text-gray-200 max-w-4xl mx-auto mb-12 font-extralight tracking-[0.1em] md:tracking-[0.15em] leading-relaxed uppercase px-4"
                >
                    Unveiling the <span className="font-bold text-white border-b-2 border-primary pb-1">Creative Force</span> Within You
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <Button
                        size="lg"
                        className="text-lg md:text-xl px-10 md:px-16 py-6 md:py-10 bg-white text-black hover:bg-primary hover:text-white border-none shadow-[0_20px_50px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_20px_60px_-10px_rgba(219,39,119,0.8)] hover:-translate-y-2 transition-all duration-500 rounded-full font-black tracking-[0.2em] uppercase"
                        onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Join the Movement
                    </Button>
                </motion.div>
            </div>

            {/* Floating 3D Elements (Abstract) */}
            <motion.div
                animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-[10%] w-32 h-32 glass-panel rounded-2xl rotate-12 z-1 hidden md:block border-primary/30"
            />
            <motion.div
                animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-40 left-[10%] w-24 h-24 glass-panel rounded-full z-1 hidden md:block border-secondary/30"
            />
        </section>
    );
}
