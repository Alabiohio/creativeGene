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
        <section id="register" className="py-24 bg-muted/20 relative">
            <div className="container mx-auto px-4 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Register for <span className="text-gradient">Creative Gene</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Free entry. Fill in the form below to secure a spot.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="glass p-8 md:p-12 rounded-2xl space-y-6"
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Full Name</label>
                            <Input
                                name="fullName"
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Email Address</label>
                            <Input
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Phone Number</label>
                            <Input
                                name="phone"
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+234..."
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">School / Institution</label>
                            <Input
                                name="school"
                                value={formData.school}
                                onChange={handleChange}
                                placeholder="University of..."
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Level / Year of Study</label>
                            <Input
                                name="level"
                                value={formData.level}
                                onChange={handleChange}
                                placeholder="100, 200..."
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Department / Course of Study</label>
                            <Input
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                placeholder="Computer Science..."
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Current Career Interest</label>
                        <Input
                            name="careerInterest"
                            value={formData.careerInterest}
                            onChange={handleChange}
                            placeholder="Software Dev, Design, Data, Unsure..."
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Are You Currently Learning Any Tech Skill?</label>
                            <select
                                name="learningTech"
                                value={formData.learningTech}
                                onChange={handleChange}
                                className="w-full h-10 rounded-md border border-input bg-white/5 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                <option value="yes" className="bg-black">Yes</option>
                                <option value="no" className="bg-black">No</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">How Did You Hear About Us?</label>
                            <select
                                name="source"
                                value={formData.source}
                                onChange={handleChange}
                                className="w-full h-10 rounded-md border border-input bg-white/5 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                <option value="" className="bg-black">Select...</option>
                                <option value="instagram" className="bg-black">Instagram</option>
                                <option value="whatsapp" className="bg-black">WhatsApp</option>
                                <option value="twitter" className="bg-black">Twitter</option>
                                <option value="friend" className="bg-black">Friend</option>
                                <option value="school" className="bg-black">School</option>
                                <option value="other" className="bg-black">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Will You Be Attending the Event?</label>
                        <div className="flex gap-6 pt-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="attending"
                                    value="yes"
                                    checked={formData.attending === "yes"}
                                    onChange={handleChange}
                                    className="accent-primary w-4 h-4"
                                />
                                <span className="text-sm">Yes, definitely</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="attending"
                                    value="not_sure"
                                    checked={formData.attending === "not_sure"}
                                    onChange={handleChange}
                                    className="accent-primary w-4 h-4"
                                />
                                <span className="text-sm">Not sure yet</span>
                            </label>
                        </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full text-lg mt-8 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                        Secure My Spot
                    </Button>
                </motion.form>
            </div>
        </section>
    );
}
