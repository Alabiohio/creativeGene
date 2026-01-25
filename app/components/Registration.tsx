"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

export default function Registration() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        school: "",
        level: "",
        department: "",
        careerInterest: "",
        learningTech: "no",
        source: "",
        attending: "yes"
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Registration submitted! (This is a demo)");
    };

    return (
        <section id="register" className="py-32 bg-black relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter leading-none">
                        SECURE YOUR <br />
                        <span className="text-gradient underline decoration-primary decoration-4 underline-offset-[12px]">SPOT NOW</span>
                    </h2>
                    <p className="text-gray-400 text-xl md:text-2xl font-light">
                        Free entry. Limited seats available for the visionary few.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="glass-panel p-10 md:p-20 rounded-[60px] space-y-10 border-white/5 bg-gradient-to-b from-white/5 to-transparent"
                >
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] ml-2">Full Name</label>
                            <Input
                                name="fullName"
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Praise Unuigboje"
                                className="bg-white/5 border-white/10 h-16 px-6 rounded-3xl text-lg focus:border-primary/50 transition-all font-medium"
                            />
                        </div>
                        <div className="space-y-4">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] ml-2">Email Address</label>
                            <Input
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="hello@creativegene.com"
                                className="bg-white/5 border-white/10 h-16 px-6 rounded-3xl text-lg focus:border-primary/50 transition-all font-medium"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] ml-2">Phone Number</label>
                            <Input
                                name="phone"
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+234..."
                                className="bg-white/5 border-white/10 h-16 px-6 rounded-3xl text-lg focus:border-primary/50 transition-all font-medium"
                            />
                        </div>
                        <div className="space-y-4">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] ml-2">School / Institution</label>
                            <Input
                                name="school"
                                value={formData.school}
                                onChange={handleChange}
                                placeholder="Institution Name"
                                className="bg-white/5 border-white/10 h-16 px-6 rounded-3xl text-lg focus:border-primary/50 transition-all font-medium"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] ml-2">Level / Year</label>
                            <Input
                                name="level"
                                value={formData.level}
                                onChange={handleChange}
                                placeholder="100, 200, Graduate..."
                                className="bg-white/5 border-white/10 h-16 px-6 rounded-3xl text-lg focus:border-primary/50 transition-all font-medium"
                            />
                        </div>
                        <div className="space-y-4">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] ml-2">Career Interest</label>
                            <Input
                                name="careerInterest"
                                value={formData.careerInterest}
                                onChange={handleChange}
                                placeholder="Dev, Design, Data, Product..."
                                className="bg-white/5 border-white/10 h-16 px-6 rounded-3xl text-lg focus:border-primary/50 transition-all font-medium"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] ml-2">Learning Tech?</label>
                            <select
                                name="learningTech"
                                value={formData.learningTech}
                                onChange={handleChange}
                                className="w-full h-16 px-6 rounded-3xl border border-white/10 bg-white/5 text-lg text-white focus:outline-none focus:border-primary/50 transition-all font-medium appearance-none"
                            >
                                <option value="yes" className="bg-black">Yes, currently learning</option>
                                <option value="no" className="bg-black">Not yet</option>
                            </select>
                        </div>
                        <div className="space-y-4">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] ml-2">How'd you hear about us?</label>
                            <select
                                name="source"
                                value={formData.source}
                                onChange={handleChange}
                                className="w-full h-16 px-6 rounded-3xl border border-white/10 bg-white/5 text-lg text-white focus:outline-none focus:border-primary/50 transition-all font-medium appearance-none"
                            >
                                <option value="" className="bg-black">Select source...</option>
                                <option value="instagram" className="bg-black">Instagram</option>
                                <option value="whatsapp" className="bg-black">WhatsApp</option>
                                <option value="twitter" className="bg-black">Twitter (X)</option>
                                <option value="friend" className="bg-black">From a Friend</option>
                                <option value="school" className="bg-black">At School</option>
                                <option value="other" className="bg-black">Other Channels</option>
                            </select>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full h-24 text-2xl mt-12 bg-white text-black hover:bg-primary hover:text-white rounded-[32px] font-black uppercase tracking-[0.2em] shadow-2xl transition-all duration-500 hover:-translate-y-2 border-none"
                    >
                        Secure My Spot
                    </Button>
                </motion.form>
            </div>
        </section>
    );
}
