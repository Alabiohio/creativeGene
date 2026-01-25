"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../lib/supabase";
import {
    Trash2,
    RefreshCcw,
    Search,
    Download,
    ShieldCheck,
    User,
    Mail,
    Phone,
    GraduationCap,
    Target,
    Calendar,
    ArrowLeft,
    TrendingUp,
    Users,
    Activity
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import Link from "next/link";

export default function AdminPage() {
    const [registrations, setRegistrations] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
            setIsAuthenticated(true);
            fetchRegistrations();
        } else {
            setLoading(false);
        }
    };

    const fetchRegistrations = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('registrations')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error("Error fetching registrations:", error);
        } else {
            setRegistrations(data || []);
        }
        setLoading(false);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this registration? This action is permanent.")) return;

        const { error } = await supabase
            .from('registrations')
            .delete()
            .eq('id', id);

        if (error) {
            alert("Error deleting registration: " + error.message);
        } else {
            setRegistrations(registrations.filter(r => r.id !== id));
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            setIsAuthenticated(true);
            fetchRegistrations();
        }
    };

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        setIsAuthenticated(false);
        setRegistrations([]);
    };

    const filteredRegistrations = registrations.filter(reg =>
        reg.full_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        reg.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        reg.school?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        reg.department?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const downloadCSV = () => {
        const headers = ["Full Name", "Email", "Phone", "School", "Level", "Department", "Career Interest", "Attending", "Source", "Registered At"];
        const rows = registrations.map(reg => [
            reg.full_name,
            reg.email,
            reg.phone,
            `"${reg.school}"`,
            reg.level,
            `"${reg.department}"`,
            `"${reg.career_interest}"`,
            reg.attending,
            reg.source,
            new Date(reg.created_at).toLocaleString()
        ]);

        const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `creative_gene_registrations_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const stats = {
        total: registrations.length,
        attending: registrations.filter(r => r.attending === 'yes').length,
        newToday: registrations.filter(r => new Date(r.created_at).toDateString() === new Date().toDateString()).length,
        interestedInTech: registrations.filter(r => r.learning_tech === 'yes').length
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-[#050205] flex items-center justify-center p-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-panel p-10 md:p-16 rounded-[40px] max-w-md w-full text-center relative z-10"
                >
                    <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-primary/30 shadow-[0_0_30px_-5px_var(--primary)]">
                        <ShieldCheck className="w-10 h-10 text-primary" />
                    </div>
                    <h1 className="text-3xl font-black mb-2 uppercase tracking-tighter">Command Center</h1>
                    <p className="text-gray-400 mb-10 text-sm font-medium uppercase tracking-widest opacity-60">System Level Authentication Required</p>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-4">
                            <Input
                                type="email"
                                placeholder="ADMIN EMAIL"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError("");
                                }}
                                className="bg-white/5 border-white/10 h-16 px-6 rounded-2xl text-sm font-bold tracking-widest focus:border-primary/50 transition-all"
                            />
                            <Input
                                type="password"
                                placeholder="ACCESS KEY"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError("");
                                }}
                                className="bg-white/5 border-white/10 h-16 px-6 rounded-2xl text-lg text-center font-black tracking-[0.3em] focus:border-primary/50 transition-all placeholder:tracking-normal placeholder:font-bold"
                            />
                            {error && (
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    className="text-primary text-[10px] font-black uppercase tracking-widest pt-2"
                                >
                                    {error}
                                </motion.p>
                            )}
                        </div>
                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full h-16 text-sm rounded-2xl font-black uppercase tracking-[0.2em] bg-white text-black hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50"
                        >
                            {loading ? "Authenticating..." : "Decrypt Data"}
                        </Button>
                        <Link href="/" className="inline-block text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-all pt-4">
                            Return to Interface
                        </Link>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#050205] text-white p-6 md:p-12 relative overflow-hidden">
            {/* Background Grain/Noise */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="max-w-7xl mx-auto space-y-10 relative z-10">
                {/* Header Navigation */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-all group w-fit">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all">
                            <ArrowLeft className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-black uppercase tracking-widest">Dashboard</span>
                    </Link>
                    <div className="flex flex-wrap gap-3">
                        <Button
                            variant="glass"
                            onClick={fetchRegistrations}
                            className={`h-11 md:h-12 px-4 md:px-6 rounded-xl gap-2 font-black uppercase text-[9px] md:text-[10px] tracking-widest flex-1 md:flex-none ${loading ? 'opacity-50' : ''}`}
                        >
                            <RefreshCcw className={`w-3 h-3 md:w-3.5 md:h-3.5 ${loading ? 'animate-spin text-primary' : ''}`} />
                            Sync Pulse
                        </Button>
                        <Button
                            onClick={downloadCSV}
                            className="h-11 md:h-12 px-4 md:px-6 rounded-xl gap-2 font-black uppercase text-[9px] md:text-[10px] tracking-widest bg-white text-black hover:bg-secondary transition-all flex-1 md:flex-none"
                        >
                            <Download className="w-3 h-3 md:w-3.5 md:h-3.5" />
                            Export Data
                        </Button>
                        <Button
                            variant="outline"
                            onClick={handleSignOut}
                            className="h-11 md:h-12 px-4 md:px-6 rounded-xl border-white/10 text-gray-400 hover:text-white hover:bg-red-500/10 hover:border-red-500/30 transition-all font-black uppercase text-[9px] md:text-[10px] tracking-widest flex-1 md:flex-none"
                        >
                            Terminate
                        </Button>
                    </div>
                </div>

                {/* Main Heading */}
                <div>
                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
                        Operational <br />
                        <span className="text-gradient">Intelligence</span>
                    </h1>
                    <p className="text-gray-500 text-lg md:text-xl font-medium uppercase tracking-widest opacity-80">
                        Real-time Registration Feed
                    </p>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { label: 'Total Registrations', value: stats.total, icon: Users, color: 'text-primary' },
                        { label: 'Confirmed Attendance', value: stats.attending, icon: Activity, color: 'text-green-500' },
                        { label: 'New Today', value: stats.newToday, icon: TrendingUp, color: 'text-secondary' },
                        { label: 'Tech Enthusiasts', value: stats.interestedInTech, icon: Target, color: 'text-primary/60' }
                    ].map((stat, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            key={stat.label}
                            className="glass-panel p-6 rounded-3xl border-white/5 flex flex-col justify-between h-40 group hover:border-white/10 transition-all"
                        >
                            <div className="flex justify-between items-start">
                                <div className={`p-2 rounded-xl bg-white/5 border border-white/10 ${stat.color}`}>
                                    <stat.icon className="w-4 h-4" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-all">Live</span>
                            </div>
                            <div>
                                <div className="text-4xl font-black tracking-tighter">{stat.value}</div>
                                <div className="text-[10px] font-black uppercase tracking-widest opacity-50 mt-1">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Search & Filter */}
                <div className="relative group">
                    <div className="absolute inset-y-0 left-8 flex items-center pointer-events-none text-gray-500 group-focus-within:text-primary transition-colors">
                        <Search className="w-6 h-6" />
                    </div>
                    <Input
                        placeholder="FILTER DATA FRAGMENTS BY NAME, EMAIL, OR INSTITUTION..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-white/5 border-white/5 h-24 pl-20 pr-8 rounded-[40px] text-lg focus:border-primary/50 transition-all font-black uppercase tracking-widest placeholder:opacity-30 placeholder:font-bold focus:bg-white/10"
                    />
                </div>

                {/* Data List */}
                <div className="space-y-4 pb-20">
                    <AnimatePresence mode="popLayout">
                        {loading && registrations.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="py-20 text-center"
                            >
                                <div className="inline-flex items-center gap-4">
                                    <div className="w-3 h-3 bg-primary rounded-full animate-ping" />
                                    <span className="font-black uppercase tracking-[0.4em] text-primary text-xl">Calibrating Stream...</span>
                                </div>
                            </motion.div>
                        ) : filteredRegistrations.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="glass-panel p-20 rounded-[40px] text-center border-dashed border-white/10"
                            >
                                <p className="text-gray-500 text-xl font-black uppercase tracking-[0.2em]">Zero Data Signatures Detected</p>
                            </motion.div>
                        ) : (
                            filteredRegistrations.map((reg, idx) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    key={reg.id}
                                    className="glass-panel p-8 md:p-10 rounded-[40px] group hover:border-primary/40 transition-all duration-500 overflow-hidden relative"
                                >
                                    {/* Accent Blur */}
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-700" />

                                    <div className="flex flex-col lg:flex-row gap-10 items-start justify-between relative z-10">
                                        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 flex-1 w-full">
                                            {/* Visionary Identity */}
                                            <div className="space-y-5">
                                                <div className="flex items-center gap-2 text-primary">
                                                    <User className="w-3.5 h-3.5" />
                                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Visionary Identity</span>
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors">{reg.full_name}</div>
                                                    <div className="flex flex-col gap-2 mt-4">
                                                        <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
                                                            <Mail className="w-3.5 h-3.5" />
                                                            <span className="text-xs font-bold font-mono">{reg.email}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-gray-400">
                                                            <Phone className="w-3.5 h-3.5" />
                                                            <span className="text-xs font-bold font-mono">{reg.phone}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Institutional Node */}
                                            <div className="space-y-5">
                                                <div className="flex items-center gap-2 text-secondary">
                                                    <GraduationCap className="w-3.5 h-3.5" />
                                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Institutional Node</span>
                                                </div>
                                                <div className="space-y-4">
                                                    <div className="text-lg font-black tracking-tight leading-snug">{reg.school || "Autonomous Observer"}</div>
                                                    <div className="flex flex-wrap gap-2">
                                                        <span className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-black uppercase border border-white/10 tracking-widest">{reg.level} LEVEL</span>
                                                        <span className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-black uppercase border border-white/10 tracking-widest truncate max-w-[180px]">{reg.department}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Strategic Focus */}
                                            <div className="space-y-5">
                                                <div className="flex items-center gap-2 text-primary/60">
                                                    <Target className="w-3.5 h-3.5" />
                                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Strategic Focus</span>
                                                </div>
                                                <div className="space-y-4">
                                                    <div className="text-lg font-black tracking-tight">{reg.career_interest || "Undefined Path"}</div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Tech Evolution:</div>
                                                        <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${reg.learning_tech === 'yes' ? 'bg-green-500/20 text-green-400' : 'bg-primary/20 text-primary'}`}>
                                                            {reg.learning_tech === 'yes' ? 'Active' : 'Pending'}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Logistics & Timestamp */}
                                            <div className="space-y-5">
                                                <div className="flex items-center gap-2 text-gray-400">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Deployment Meta</span>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Attendance</span>
                                                        <span className={`text-[10px] font-black uppercase ${reg.attending === 'yes' ? 'text-green-400' : 'text-primary'}`}>{reg.attending.replace('-', ' ')}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Source</span>
                                                        <span className="text-[10px] font-black uppercase text-secondary/70">{reg.source}</span>
                                                    </div>
                                                    <div className="text-[9px] text-gray-600 font-bold uppercase tracking-[0.2em] mt-4">
                                                        SECURED {new Date(reg.created_at).toLocaleDateString()} @ {new Date(reg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Precision Actions */}
                                        <div className="w-full lg:w-auto flex lg:flex-col justify-end gap-4 self-stretch border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-10">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => handleDelete(reg.id)}
                                                className="h-20 w-20 lg:h-16 lg:w-16 rounded-[24px] bg-red-500/5 border-red-500/30 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-xl shadow-red-500/10 border-2"
                                            >
                                                <Trash2 className="w-7 h-7" />
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Custom CSS for the page */}
            <style jsx global>{`
                .text-gradient {
                    background: linear-gradient(135deg, #ffffff 0%, var(--primary) 40%, var(--secondary) 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
            `}</style>
        </div>
    );
}
