"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"
                }`}
        >
            <div className="w-full px-2 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image
                        src="/cg-icon.png"
                        alt="Creative Gene Logo"
                        width={220}
                        height={60}
                        className="rounded-lg"
                    />
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <div className="flex -space-x-3 overflow-hidden">
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

                    <nav className="flex items-center gap-6 text-sm font-medium text-gray-300">
                        <a href="#" className="hover:text-white transition-colors">Home</a>
                        <a href="#register" className="hover:text-white transition-colors">Register</a>
                    </nav>

                    <Button
                        size="sm"
                        variant="default"
                        className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
                        onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Secure Spot
                    </Button>
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
