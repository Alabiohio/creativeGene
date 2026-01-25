"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Registration() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: "" });
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: "" });

        try {
            const { error } = await supabase
                .from('registrations')
                .insert([
                    {
                        full_name: formData.fullName,
                        email: formData.email,
                        phone: formData.phone,
                        school: formData.school,
                        level: formData.level,
                        department: formData.department,
                        career_interest: formData.careerInterest,
                        learning_tech: formData.learningTech,
                        source: formData.source,
                        attending: formData.attending
                    }
                ]);

            if (error) throw error;

            setStatus({ type: 'success', message: "Registration successful! See you there." });
            setFormData({
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
        } catch (error: any) {
            console.error("Submission error:", error);
            setStatus({ type: 'error', message: error.message || "Something went wrong. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
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

                <div className="relative group">

                    <motion.form
                        initial={{ opacity: 0, y: 50, filter: "blur(15px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 1 }}
                        onSubmit={handleSubmit}
                        className="glass-panel p-10 md:p-20 rounded-[60px] space-y-10 border-white/5 bg-gradient-to-b from-white/5 to-transparent relative z-10"
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
                                    required
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
                                <select
                                    name="level"
                                    required
                                    value={formData.level}
                                    onChange={handleChange}
                                    className="w-full h-16 px-6 rounded-3xl border border-white/10 bg-white/5 text-lg text-white focus:outline-none focus:border-primary/50 transition-all font-medium appearance-none"
                                >
                                    <option value="" className="bg-black">Select Level...</option>
                                    <option value="100" className="bg-black">100 level</option>
                                    <option value="200" className="bg-black">200 level</option>
                                    <option value="300" className="bg-black">300 level</option>
                                    <option value="400" className="bg-black">400 level</option>
                                    <option value="500" className="bg-black">500 level</option>
                                    <option value="600" className="bg-black">600 level</option>
                                    <option value="graduate" className="bg-black">Graduate</option>
                                </select>
                            </div>
                            <div className="space-y-4">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] ml-2">Department / Course of Study</label>
                                <Input
                                    name="department"
                                    required
                                    value={formData.department}
                                    onChange={handleChange}
                                    placeholder="Computer Science, Engineering..."
                                    className="bg-white/5 border-white/10 h-16 px-6 rounded-3xl text-lg focus:border-primary/50 transition-all font-medium"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] ml-2">Career Interest</label>
                                <Input
                                    name="careerInterest"
                                    required
                                    value={formData.careerInterest}
                                    onChange={handleChange}
                                    placeholder="Dev, Design, Data, Product..."
                                    className="bg-white/5 border-white/10 h-16 px-6 rounded-3xl text-lg focus:border-primary/50 transition-all font-medium"
                                />
                            </div>
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
                        </div>

                        <div className="grid md:grid-cols-1 gap-10">
                            <div className="space-y-4">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] ml-2">How'd you hear about us?</label>
                                <select
                                    name="source"
                                    required
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

                        <div className="space-y-6 pt-8 border-t border-white/10">
                            <label className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] ml-2 block mb-4">Will You Be Attending the Event?</label>
                            <div className="flex flex-col md:flex-row gap-6">
                                <label className="flex-1 cursor-pointer group">
                                    <input
                                        type="radio"
                                        name="attending"
                                        value="yes"
                                        checked={formData.attending === "yes"}
                                        onChange={handleChange}
                                        className="hidden"
                                    />
                                    <div className={`p-6 rounded-[32px] border-2 transition-all duration-300 flex items-center gap-4 ${formData.attending === "yes" ? "border-primary bg-primary/10" : "border-white/10 bg-white/5 hover:border-white/20"}`}>
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${formData.attending === "yes" ? "border-primary" : "border-gray-500"}`}>
                                            {formData.attending === "yes" && <div className="w-3 h-3 rounded-full bg-primary" />}
                                        </div>
                                        <span className={`text-lg font-bold transition-all ${formData.attending === "yes" ? "text-white" : "text-gray-400"}`}>Yes, definitely</span>
                                    </div>
                                </label>
                                <label className="flex-1 cursor-pointer group">
                                    <input
                                        type="radio"
                                        name="attending"
                                        value="not-sure"
                                        checked={formData.attending === "not-sure"}
                                        onChange={handleChange}
                                        className="hidden"
                                    />
                                    <div className={`p-6 rounded-[32px] border-2 transition-all duration-300 flex items-center gap-4 ${formData.attending === "not-sure" ? "border-primary bg-primary/10" : "border-white/10 bg-white/5 hover:border-white/20"}`}>
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${formData.attending === "not-sure" ? "border-primary" : "border-gray-500"}`}>
                                            {formData.attending === "not-sure" && <div className="w-3 h-3 rounded-full bg-primary" />}
                                        </div>
                                        <span className={`text-lg font-bold transition-all ${formData.attending === "not-sure" ? "text-white" : "text-gray-400"}`}>Not sure yet</span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            className={`w-full h-24 text-2xl mt-12 rounded-[32px] font-black uppercase tracking-[0.2em] shadow-2xl transition-all duration-500 border-none ${isSubmitting ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-white text-black hover:bg-primary hover:text-white hover:-translate-y-2'}`}
                        >
                            {isSubmitting ? "Submitting..." : "Secure My Spot"}
                        </Button>

                        {status.type && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                className={`p-8 rounded-[40px] text-center border-2 backdrop-blur-xl mt-8 ${status.type === 'success'
                                    ? 'bg-primary/20 border-primary/50 text-white shadow-[0_0_50px_-12px_rgba(var(--primary),0.5)]'
                                    : 'bg-red-500/20 border-red-500/50 text-red-200'
                                    }`}
                            >
                                <div className="flex flex-col items-center gap-4">
                                    {status.type === 'success' ? (
                                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-2">
                                            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    ) : (
                                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-2">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-black uppercase tracking-wider">
                                        {status.type === 'success' ? 'Vision Secured!' : 'Mission Failed!'}
                                    </h3>
                                    <p className="text-lg opacity-80 font-medium">
                                        {status.message}
                                    </p>
                                    {status.type === 'success' && (
                                        <button
                                            onClick={() => setStatus({ type: null, message: "" })}
                                            className="mt-4 px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full text-sm font-bold transition-all"
                                        >
                                            Dismiss
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
