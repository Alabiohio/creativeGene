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
        <section className="py-24 relative z-10">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-center mb-16"
                >
                    Meet the <span className="text-gradient">Speakers</span>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {speakers.map((speaker, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative glass-panel p-6 rounded-3xl"
                        >
                            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl mb-6 border border-white/10 shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-3xl font-bold mb-1 text-white drop-shadow-md">{speaker.name}</h3>
                                    <p className="text-secondary font-medium uppercase tracking-wider text-sm">{speaker.role}</p>
                                </div>
                            </div>
                            {/*<p className="text-gray-300 text-base leading-relaxed pl-2 border-l-2 border-primary">
                                {speaker.bio}
                            </p>*/}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
