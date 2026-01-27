"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const speakers = [
    {
        name: "Praise Unuigboje",
        role: "Host",
        image: "/Praise_Unuigboje.jpeg",
        excerpt: "A seasoned Brand Strategist and Creative Technologist who has successfully scaled over 100 brands globally.",
        bio: `Unuigboje Oisedebame, professionally known as Praisetech, is a final-year (600 Level) Pharmacy student at the University of Benin (UNIBEN) and a distinguished representative of the 600 Level constituency at the Supreme PANS Congress, UNIBEN.

With over five years of professional experience in the technology and media space, Praisetech is a seasoned Brand Strategist and Creative Technologist who has successfully built, positioned, and scaled over 100 brands across Nigeria and the global market. His expertise spans branding, visual communication, digital strategy, and business development.

He is professionally trained and certified through multiple institutions, including a three-year apprenticeship at Artworld, Auchi, a Business Management certification from Jobberman, and a Graphic Design certification from the Church of God Mission Global, among others.

Praisetech brings extensive industry-based leadership experience, having served in key media and technical roles across notable organizations such as Christian Fellowship International (CFI), ADMAP (Anti-Drug Misuse and Abuse Program), IPSF (International Pharmaceutical Students’ Federation), AFM – CGMI, and as Community Tech Supervisor at the Institute for Scholarly Publishing in Higher Education (ISPHE).

He is the Founder of Creative Fest, a forward-thinking community initiative dedicated to redefining the future of technology and creative innovation in Africa. Through his passion for education and mentorship, he has trained and mentored over 300 aspiring creatives via his platform, Praisetech Graphics Academy (PGA), which has produced industry-ready professionals making measurable impact in the digital ecosystem.

Beyond technology and medicine, Praisetech is deeply committed to positive social impact, leadership, and human capacity development, using knowledge, creativity, and innovation as tools for transformation.`
    },
    {
        name: "Osakpolor Ogiemudia",
        role: "Guest Speaker",
        image: "/osakpolor_Ogiemudia.jpeg",
        excerpt: "48th President of PANS UNIBEN - A catalyst for growth, innovator, and builder inspiring positive change in public health and industrial pharmacy.",
        bio: "Ogiemudia Osakpolor, serves as the 48th President of the Pharmaceutical Association of Nigerian Students (PANS) at the University of Benin, Edo State. He is a catalyst for growth, an innovator, and a builder, consistently motivated to inspire personal and environmental positive growth. His core interests include the public health sector and industrial pharmacy space, with a strong desire to remain politically active in various spheres. He's a member of Impact Africa Initiative, Junior Chamber International, and Students Finance Club."
    },
    {
        name: "Favour Inerhumwunwa",
        role: "Guest Speaker",
        image: "/Favour_Inerhumwunwa.jpeg",
        excerpt: "Passionate videographer and editor with 3+ years of experience crafting compelling visual stories for brands and global institutions.",
        bio: "Favour Inerhumwunwa is a passionate videographer and video editor with over three years of hands-on experience in storytelling through video. He works on documentaries, social media videos, and long-form content, helping individuals and brands bring their ideas to life. He has worked with clients such as The BRACED Commission, Castle Crew TV, the Neonatal Intensive Care Unit at UBTH, CGMi Historic Miracle Centre, and Christian Fellowship International. His work focuses on creating clear, engaging, and meaningful visuals that connect with audiences."
    }
];

export default function Speakers() {
    const [selectedSpeaker, setSelectedSpeaker] = useState<typeof speakers[0] | null>(null);

    // Prevent scroll when modal is open
    useEffect(() => {
        if (selectedSpeaker) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedSpeaker]);

    return (
        <section className="py-32 relative z-10 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10" />

            <div className="container mx-auto px-4">
                <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="text-center mb-24"
                >
                    <h2 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter">
                        THE <span className="text-gradient underline decoration-primary decoration-4 underline-offset-8">VOICES</span>
                    </h2>
                    <p className="text-gray-400 text-xl md:text-2xl font-light max-w-2xl mx-auto">
                        Learn from the pioneers who are redefining the tech landscape with creativity and passion.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {speakers.map((speaker, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay={index * 200}
                            className="group relative cursor-pointer"
                            onClick={() => setSelectedSpeaker(speaker)}
                        >
                            <div className="relative h-full flex flex-col overflow-hidden rounded-[40px] border border-white/10 shadow-2xl transition-all duration-700 group-hover:border-primary/50 group-hover:shadow-primary/20 bg-white/5">
                                {/* Image Section */}
                                <div className="relative h-[300px] md:h-[350px] w-full overflow-hidden shrink-0">
                                    {/* Visual Overlays */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-60 transition-opacity duration-700" />
                                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    <Image
                                        src={speaker.image}
                                        alt={speaker.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />

                                    <div className="absolute bottom-0 left-0 w-full p-2 px-4 md:p-10 z-20">
                                        <h3 className="text-4xl md:text-5xl font-black mb-2 text-white drop-shadow-2xl leading-tight transition-transform duration-500">
                                            {speaker.name.split(' ')[0]} <br />
                                            <span className="text-primary">{speaker.name.split(' ')[1]}</span>
                                        </h3>
                                        <div className="h-1 w-0 group-hover:w-24 bg-primary transition-all duration-500" />
                                    </div>
                                </div>

                                {/* Info Section */}
                                <div className="flex-1 p-8 md:p-10 flex flex-col justify-between space-y-8 bg-black/20">
                                    {speaker.excerpt && (
                                        <div className="border-l-2 border-primary/40 pl-6 py-2">
                                            <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed italic-none">
                                                {speaker.excerpt}
                                            </p>
                                        </div>
                                    )}
                                    <div className="flex items-center justify-between mt-auto">
                                        <p className="text-gray-400 font-black uppercase tracking-[0.2em] text-[10px]">
                                            {speaker.role}
                                        </p>
                                        <span className="text-white/30 text-xl font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            More →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bio Modal */}
            <AnimatePresence>
                {selectedSpeaker && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedSpeaker(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-neutral-900 border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-[40px] shadow-3xl flex flex-col md:flex-row"
                        >
                            <button
                                onClick={() => setSelectedSpeaker(null)}
                                className="absolute top-6 right-6 z-50 p-3 bg-black/50 hover:bg-primary text-white rounded-full transition-colors backdrop-blur-md"
                            >
                                <X size={24} />
                            </button>

                            {/* Speaker Image (Modal) */}
                            <div className="w-full md:w-2/5 relative h-64 md:h-auto">
                                <Image
                                    src={selectedSpeaker.image}
                                    alt={selectedSpeaker.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-neutral-900 via-transparent to-transparent" />
                            </div>

                            {/* Speaker Info (Modal) */}
                            <div className="flex-1 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                                <div className="mb-8">
                                    <p className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-2">
                                        {selectedSpeaker.role}
                                    </p>
                                    <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">
                                        {selectedSpeaker.name}
                                    </h3>
                                </div>
                                {selectedSpeaker.bio && (
                                    <div className="space-y-6">
                                        {selectedSpeaker.bio.split('\n\n').map((paragraph, i) => (
                                            <p key={i} className="text-gray-300 text-lg leading-relaxed font-light">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
