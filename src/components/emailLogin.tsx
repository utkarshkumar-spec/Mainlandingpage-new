import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Sparkles,
    CheckCircle2,
    ShieldCheck,
    Mail,
    Lock,
    ArrowRight,
    Layers,
    Palette,
    BrainCircuit,
    Smartphone,
    Eye,     // Added
    EyeOff   // Added
} from "lucide-react";

import { Input } from "@/components/ui/input"; // Adjust path as needed
import { Button } from "@/components/ui/button"; // Adjust path as needed
import { showToast } from "@/utils/toast"; // Adjust path as needed
import { BackgroundBeams } from "@/components/ui/background-beams"; // Adjust path as needed

interface LoginProps {
    formData: any;
    setFormData: any;
    onSubmit: any;
}

export function EmailLogin({ formData, setFormData, onSubmit }: LoginProps) {
    const [loading, setLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false); // Added state

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
       
        const { email, password } = formData;
        if (!email || !password) {
            showToast.error("Email & password are required");
            return;
        }
        // Validate password: must contain uppercase, lowercase, and number
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
        if (!passwordRegex.test(password)) {
            showToast.error("Password must contain uppercase, lowercase, and number");
            return;
        }
        setLoading(true);
        try {
            await onSubmit(formData.email, formData.password!);
        } catch (error) {
            // Handled by parent
        } finally {
            setLoading(false);
        }
    };

    // Staggered animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        show: {
            opacity: 1,
            x: 0,
            transition: { type: "spring" as const, stiffness: 120 }
        }
    };

    const features = [
        {
            icon: Layers,
            text: "Multi-tenant Architecture",
            subtext: "Scale seamlessly with secure, isolated environments."
        },
        {
            icon: Palette,
            text: "Fully White-Label",
            subtext: "Custom domains, branding, color palettes & no watermarks anywhere."
        },
        {
            icon: ShieldCheck,
            text: "DRM Protection",
            subtext: "Protect videos with enterprise-grade DRM, transcoding & CDN coverage."
        },
        {
            icon: BrainCircuit,
            text: "Real-time AI Analytics",
            subtext: "Actionable data and insights to help you grow more, faster."
        },
        {
            icon: Smartphone,
            text: "Instant App & Website",
            subtext: "Get your own fully-functional LMS app or website within minutes."
        }
    ];

    return (
        <div className="relative min-h-screen w-full flex bg-white overflow-hidden selection:bg-indigo-100 selection:text-indigo-900">

            {/* ========================================== */}
            {/* LEFT SIDE: Premium Light Theme Features */}
            {/* ========================================== */}
            <div className="hidden lg:flex flex-1 pointer-events-none flex-col justify-between p-12 lg:p-16 relative z-10 bg-slate-50/50 border-r border-slate-100 overflow-hidden">
                {/* Abstract Light Background Effects */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <BackgroundBeams className="opacity-20" />
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: `
        linear-gradient(135deg, 
          rgba(248,250,252,1) 0%, 
          rgba(219,234,254,0.7) 30%, 
          rgba(165,180,252,0.5) 60%, 
          rgba(129,140,248,0.6) 100%
        ),
        radial-gradient(circle at 20% 30%, rgba(255,255,255,0.6) 0%, transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(199,210,254,0.4) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(224,231,255,0.3) 0%, transparent 60%)
      `,
                        }}
                    />
                </div>

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10"
                >
                    <img
                        className="h-9 w-auto"
                        src="https://res.cloudinary.com/dyktjldc4/image/upload/v1763739734/LOGO_NEWRAL_2_yy9ky2.png"
                        alt="Newral"
                    />
                </motion.div>

                {/* Main Copy & Features List */}
                <div className="relative z-10 max-w-xl mt-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, type: "spring" }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-indigo-600 text-xs font-bold tracking-wide mb-8"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                        <span className="uppercase tracking-wider">Next-Gen Learning OS</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-10"
                    >
                        Build your academy <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 animate-gradient-x">
                            in minutes.
                        </span>
                    </motion.h2>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="space-y-6"
                    >
                        {features.map((item, i) => (
                            <motion.div key={i} variants={itemVariants} className="flex items-start gap-4 group cursor-default">
                                <div className="mt-1 p-2.5 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] group-hover:bg-indigo-50 group-hover:border-indigo-100 group-hover:shadow-indigo-100 transition-all duration-300">
                                    <item.icon className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <div>
                                    <h4 className="text-slate-900 font-bold text-[15px]">{item.text}</h4>
                                    <p className="text-slate-500 text-sm mt-1 leading-relaxed max-w-[400px]">{item.subtext}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Footer Security Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="relative z-10 flex items-center gap-2 mt-12"
                >
                    <div className="flex items-center gap-2 text-slate-500 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        <span className="text-[11px] font-black uppercase tracking-widest">Enterprise-Grade Security</span>
                    </div>
                </motion.div>
            </div>

            {/* ========================================== */}
            {/* RIGHT SIDE: Clean, Modern Form */}
            {/* ========================================== */}
            <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12 relative z-10 bg-white">

                {/* Mobile Logo */}
                <div className="absolute top-8 left-8 lg:hidden">
                    <img
                        className="h-8 w-auto"
                        src="https://res.cloudinary.com/dyktjldc4/image/upload/v1763739734/LOGO_NEWRAL_2_yy9ky2.png"
                        alt="Logo"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-[400px]"
                >
                    <div className="space-y-2 mb-10">
                        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Setup Workspace</h1>
                        <p className="text-slate-500 font-medium">Step 1: Secure your admin credentials</p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2.5">
                            <label className="text-sm font-bold text-slate-700 ml-1">Work Email</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="name@company.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    disabled={loading}
                                    className="h-14 pl-12 bg-slate-50/50 border border-slate-200 hover:border-slate-300 rounded-2xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-base shadow-sm"
                                />
                            </div>
                        </div>

                        {/* Updated Password Field */}
                        <div className="space-y-2.5">
                            <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                <Input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Min. 8 characters"
                                    value={formData.password || ""}
                                    onChange={handleInputChange}
                                    required
                                    disabled={loading}
                                    // Added pr-12 here so text doesn't overlap the eye icon
                                    className="h-14 pl-12 pr-12 bg-slate-50/50 border border-slate-200 hover:border-slate-300 rounded-2xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-base shadow-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full h-14 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white text-[17px] font-bold rounded-2xl shadow-[0_8px_20px_-6px_rgba(79,70,229,0.4)] hover:shadow-[0_12px_25px_-8px_rgba(79,70,229,0.5)] transition-all active:scale-[0.98] flex items-center justify-center gap-2 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                            {loading ? (
                                <span className="flex items-center gap-2 relative z-10">
                                    <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Creating...
                                </span>
                            ) : (
                                <span className="flex items-center gap-2 relative z-10">
                                    Get Started
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            )}
                        </button>
                    </div>

                    {/* ========================================== */}
                    {/* Modern "Powered By Newral" Badge           */}
                    {/* ========================================== */}
                    <div className="pt-16 pb-4">
                        <div className="flex flex-col items-center justify-center gap-3">
                            {/* Lines with text */}
                            <div className="flex items-center gap-4 w-full justify-center">
                                <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-200" />
                                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                                    Powered By
                                </span>
                                <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-200" />
                            </div>

                            {/* Logo that lights up on hover */}
                            <a
                                href="https://newral.com" // Update link if needed
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center justify-center p-2 rounded-xl hover:bg-slate-50 transition-colors"
                            >
                                <img
                                    className="h-6 w-auto opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 ease-out group-hover:scale-105"
                                    src="https://res.cloudinary.com/dyktjldc4/image/upload/v1763720689/LOGO_NEWRAL_3_duijc8.png"
                                    alt="Newral Logo"
                                />
                            </a>
                        </div>
                    </div>

                </motion.div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
                .animate-gradient-x {
                    background-size: 200% auto;
                    animation: textShine 5s linear infinite;
                }
                @keyframes textShine {
                    to { background-position: 200% center; }
                }
            `}} />
        </div>
    );
}