"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const speakers = [
    {
        name: "Praise Unuigboje",
        role: "Host",
        image: "/Praise_Unuigboje.jpeg",
        bio: "A passionate tech advocate and host of Creative Gene, sharing insights on career growth and modern software engineering."
    },
    {
        name: "Osakpolor Ogiemudia",
        role: "Guest Speaker",
        image: "/osakpolor_Ogiemudia.jpeg",
        bio: "Visionary developer and lead organizer, dedicated to building technical foundations that allow creativity to flourish."
    },
    {
        name: "Favour Inerhumwunwa",
        role: "Guest Speaker",
        image: "/Favour_Inerhumwunwa.jpeg",
        bio: "Experienced in storytelling through video. Worked with The BRACED Commission and Castle Crew TV to create engaging visuals."
    }
];

export default function Speakers() {
    return (
        <section className="py-32 relative z-10 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-9xl font-black mb-6 tracking-tighter"
                    >
                        THE <span className="text-gradient underline decoration-primary decoration-4 underline-offset-8">VOICES</span>
                    </motion.h2>
                    <p className="text-gray-400 text-xl md:text-2xl font-light max-w-2xl mx-auto">
                        Learn from the pioneers who are redefining the tech landscape with creativity and passion.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {speakers.map((speaker, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="group relative"
                        >
                            <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden rounded-[40px] border border-white/10 shadow-2xl transition-all duration-700 group-hover:border-primary/50 group-hover:shadow-primary/20">
                                {/* Visual Overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />

                                <div className="absolute bottom-0 left-0 w-full p-10 z-20">
                                    <h3 className="text-4xl md:text-5xl font-black mb-2 text-white drop-shadow-2xl leading-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {speaker.name.split(' ')[0]} <br />
                                        <span className="text-primary">{speaker.name.split(' ')[1]}</span>
                                    </h3>
                                    <div className="h-1 w-0 group-hover:w-24 bg-primary transition-all duration-500 mb-4" />
                                    <p className="text-gray-300 font-black uppercase tracking-[0.2em] text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {speaker.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
