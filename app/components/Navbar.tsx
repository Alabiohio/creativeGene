"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image
                        src="/cg-Icon.png"
                        alt="Creative Gene Logo"
                        width={220}
                        height={60}
                        className="rounded-lg w-[140px] sm:w-[180px] md:w-[220px] transition-all duration-300"
                    />
                </div>

                <div className="hidden md:flex items-center gap-6 lg:gap-8">
                    <div className="hidden lg:flex -space-x-3 overflow-hidden">
                        {[
                            "/Praise_Unuigboje.jpeg",
                            "/osakpolor_Ogiemudia.jpeg",
                            "/Favour_Inerhumwunwa.jpeg"
                        ].map((src, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5, scale: 1.1, zIndex: 10 }}
                                className="relative w-10 h-10 rounded-full border-2 border-primary overflow-hidden bg-black cursor-pointer shadow-lg"
                                title="Meet our speakers"
                            >
                                <Image
                                    src={src}
                                    alt="Speaker"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        ))}
                    </div>
                    <motion.button
                        whileHover="hover"
                        initial="initial"
                        className="relative bg-white text-black overflow-hidden rounded-full px-8 h-10 font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-white/5 group border border-transparent"
                        onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <motion.div
                            variants={{
                                initial: { y: "100%" },
                                hover: { y: 0 }
                            }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            className="absolute inset-0 bg-primary"
                        />
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                            Secure Spot
                        </span>
                    </motion.button>
                </div>

                <div className="md:hidden flex items-center pr-2">
                    <button
                        onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full pl-3 pr-1 py-1 hover:bg-white/10 transition-all active:scale-95 shadow-lg group"
                    >
                        <span className="text-[10px] font-black uppercase tracking-tighter text-white group-hover:text-primary transition-colors">Join</span>
                        <div className="relative w-7 h-7 rounded-full overflow-hidden border border-primary transition-transform group-hover:scale-110">
                            <Image src="/Praise_Unuigboje.jpeg" alt="Host" fill className="object-cover" />
                        </div>
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
