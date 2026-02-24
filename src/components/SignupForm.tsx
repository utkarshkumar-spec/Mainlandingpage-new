import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Globe,
    Palette,
    User,
    Upload,
    X,
    CheckCircle2,
    Building2,
    Link as LinkIcon,
    Wand2,
    Loader2,
    Briefcase,
    Users,
    Sun,
    Moon,
    Eye,
    LayoutDashboard,
    PlayCircle,
    BookOpen,
    Settings,
    Bell
} from "lucide-react";

import { Input } from "@/components/ui/input"; // Adjust path as needed
import { Button } from "@/components/ui/button"; // Adjust path as needed
import { showToast } from "@/utils/toast"; // Adjust path as needed
import { BackgroundBeams } from "@/components/ui/background-beams"; // Adjust path as needed

interface SignupFormProps {
    formData: any;
    setFormData: any;
    onSubmit: () => void;
    loading?: boolean;
}

export function SignupForm({ formData, setFormData, onSubmit, loading = false }: SignupFormProps) {
    return (
        <div className="relative min-h-screen w-full bg-[#fafafa] py-12 px-4 sm:px-6 overflow-hidden selection:bg-indigo-100 selection:text-indigo-900">
            {/* Premium Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <BackgroundBeams className="opacity-30" />
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-200/30 blur-[120px] rounded-full mix-blend-multiply" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
                {/* Top Header */}
                <div className="flex flex-col items-center mb-10">
                    <motion.img
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-12 h-auto mb-6"
                        src="https://res.cloudinary.com/dyktjldc4/image/upload/v1763739734/LOGO_NEWRAL_2_yy9ky2.png"
                        alt="Newral Logo"
                    />
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-center"
                    >
                        Configure your Workspace
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 mt-3 text-base sm:text-lg font-medium"
                    >
                        Set up your brand identity and admin profile in seconds.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                    className="w-full bg-white rounded-[32px] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden"
                >
                    <FormSection
                        onSubmit={onSubmit}
                        formData={formData}
                        setFormData={setFormData}
                        loading={loading}
                    />
                </motion.div>
            </div>
        </div>
    );
}

export function FormSection({ formData, setFormData, onSubmit, loading = false }: any) {
    const [logoPreview, setLogoPreview] = useState<string | null>(formData.logoUrl || null);
    const [uploading, setUploading] = useState(false);

    // Modal States
    const [isAiModalOpen, setIsAiModalOpen] = useState(false);
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
    
    // AI Loading & Params
    const [aiLoading, setAiLoading] = useState(false);
    const [aiParams, setAiParams] = useState({
        industry: "Programming Education",
        targetAudience: "Developers",
        themeStyle: "Modern",
        mood: "Professional",
        baseColor: "#4f46e5",
        darkMode: false,
    });

    // Default colors if not provided
    const defaultColors = { primary: "#4f46e5", background: "#f8fafc", text: "#0f172a", ...formData.colors };
    const currentPrimary = formData.colors?.primary || defaultColors.primary;
    const currentBg = formData.colors?.background || defaultColors.background;
    const currentText = formData.colors?.text || defaultColors.text;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleColorChange = (colorType: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev: any) => ({
            ...prev,
            colors: { ...prev.colors, [colorType]: e.target.value },
        }));
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        try {
            setUploading(true);
            const cloudName = "dyktjldc4";
            const uploadPreset = "lmsmain";
            const formDataCloud = new window.FormData();
            formDataCloud.append("file", file);
            formDataCloud.append("upload_preset", uploadPreset);

            const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
                method: "POST",
                body: formDataCloud,
            });
            const data = await res.json();
            if (data.secure_url) {
                setLogoPreview(data.secure_url);
                setFormData((prev: any) => ({ ...prev, logoUrl: data.secure_url }));
                showToast.success("Brand logo synced successfully!");
            }
        } catch (err) {
            showToast.error("Failed to upload logo");
        } finally {
            setUploading(false);
        }
    };

    // AI Theme Generation API Call
    const generateTheme = async () => {
        if (!formData.organisationName) {
            showToast.error("Please enter an Organisation Name first!");
            return;
        }

        setAiLoading(true);
        try {
            const res = await fetch("/api/generate-theme", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    brandName: formData.organisationName,
                    industry: aiParams.industry,
                    targetAudience: aiParams.targetAudience,
                    themeStyle: aiParams.themeStyle,
                    mood: aiParams.mood,
                    baseColor: aiParams.baseColor,
                    darkMode: aiParams.darkMode,
                }),
            });

            const data = await res.json();

            if (data.primary) {
                setFormData((prev: any) => ({
                    ...prev,
                    colors: {
                        primary: data.primary,
                        secondary: data.secondary,
                        accent: data.accent,
                        background: data.background,
                        text: data.text,
                    },
                }));

                showToast.success("AI generated a unique theme for you!");
                setIsAiModalOpen(false);
            } else {
                throw new Error("Invalid response");
            }
        } catch (error) {
            console.error(error);
            showToast.error("Couldn't generate theme. Try again later.");
        } finally {
            setAiLoading(false);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-[650px] bg-white relative">

            {/* ========================================== */} 
            {/* FULL SCREEN PREVIEW MODAL                  */}
            {/* ========================================== */}
            <AnimatePresence>
                {isPreviewModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-slate-900/60 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 30 }}
                            className="bg-white rounded-[32px] w-full max-w-6xl h-full max-h-[90vh] shadow-[0_0_80px_-15px_rgba(0,0,0,0.5)] overflow-hidden border border-slate-200 flex flex-col"
                        >
                            {/* Modal Header */}
                            <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-100 z-10">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                                        <LayoutDashboard className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900">Live Dashboard Preview</h3>
                                        <p className="text-xs font-medium text-slate-500">This is how your academy will look to users.</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsPreviewModalOpen(false)}
                                    className="p-2.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors border border-transparent hover:border-slate-200"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* The Mock LMS Dashboard Frame */}
                            <div className="flex-1 flex overflow-hidden transition-colors duration-700" style={{ backgroundColor: currentBg, color: currentText }}>
                                
                                {/* Mock Sidebar */}
                                <div className="hidden md:flex w-64 flex-col border-r border-black/5 p-6 backdrop-blur-sm bg-white/40">
                                    <div className="mb-10 flex justify-center items-center">
                                        {logoPreview ? (
                                            <img src={logoPreview} className="max-h-14 scale-200 object-contain" alt="Logo" />
                                        ) : (
                                            <div className="text-lg font-extrabold tracking-tight">
                                                {formData.organisationName || "Academy Name"}
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-2 flex-1">
                                        {[
                                            { name: "Dashboard", icon: LayoutDashboard, active: true },
                                            { name: "My Courses", icon: BookOpen, active: false },
                                            { name: "Community", icon: Users, active: false },
                                            { name: "Settings", icon: Settings, active: false }
                                        ].map((item, i) => (
                                            <div 
                                                key={i} 
                                                className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-colors cursor-pointer"
                                                style={item.active ? { backgroundColor: currentPrimary, color: '#fff' } : { opacity: 0.7 }}
                                            >
                                                <item.icon className="w-4 h-4" />
                                                {item.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Mock Main Area */}
                                <div className="flex-1 flex flex-col overflow-y-auto">
                                    {/* Mock Topnav */}
                                    <div className="h-20 border-b border-black/5 flex items-center justify-between px-8 bg-white/20 backdrop-blur-md">
                                        <div className="relative w-64">
                                            <input 
                                                type="text" 
                                                placeholder="Search courses..." 
                                                className="w-full bg-white/50 border border-black/5 rounded-full py-2 px-4 text-sm outline-none placeholder:text-current placeholder:opacity-40" 
                                            />
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Bell className="w-5 h-5 opacity-60 cursor-pointer" />
                                            <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-white font-bold" style={{ backgroundColor: currentPrimary }}>
                                                {formData.firstName?.[0] || "A"}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mock Content */}
                                    <div className="p-8 space-y-8 max-w-5xl">
                                        {/* Hero Banner */}
                                        <div className="relative rounded-3xl overflow-hidden shadow-sm">
                                            {/* Safely use primary color as background with opacity using an absolute layer */}
                                            <div className="absolute inset-0 opacity-15" style={{ backgroundColor: currentPrimary }}></div>
                                            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                                                <div className="space-y-4">
                                                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: currentPrimary }}>
                                                        Welcome back, {formData.firstName || "Admin"}!
                                                    </h1>
                                                    <p className="text-lg opacity-80 font-medium max-w-lg">
                                                        Your academy setup is looking fantastic. Ready to upload your first course?
                                                    </p>
                                                </div>
                                                <Button className="h-12 px-8 rounded-xl font-bold shadow-lg shadow-black/5" style={{ backgroundColor: currentPrimary, color: '#fff' }}>
                                                    Create Course
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Grid */}
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-bold flex items-center gap-2">
                                                <PlayCircle className="w-5 h-5 opacity-50" /> Featured Content
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {[1, 2, 3].map((i) => (
                                                    <div key={i} className="rounded-2xl border border-black/5 p-4 shadow-sm bg-white/60 backdrop-blur-md hover:-translate-y-1 transition-transform cursor-pointer">
                                                        <div className="h-36 rounded-xl mb-4 relative overflow-hidden">
                                                            <div className="absolute inset-0 opacity-20" style={{ backgroundColor: currentPrimary }}></div>
                                                            <div className="absolute inset-0 flex items-center justify-center">
                                                                <PlayCircle className="w-12 h-12 opacity-40" style={{ color: currentPrimary }} />
                                                            </div>
                                                        </div>
                                                        <h4 className="font-extrabold text-lg mb-1">Advanced Module {i}</h4>
                                                        <p className="text-sm opacity-60 font-medium mb-4">Learn the core concepts to master your skills.</p>
                                                        <div className="flex justify-between items-center border-t border-black/5 pt-4">
                                                            <span className="text-xs font-bold opacity-60">12 Lessons</span>
                                                            <div className="px-4 py-1.5 rounded-full text-xs font-bold shadow-sm" style={{ backgroundColor: currentPrimary, color: '#fff' }}>
                                                                Watch Now
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ========================================== */} 
            {/* AI THEME GENERATOR MODAL                   */}
            {/* ========================================== */}
            <AnimatePresence>
                {isAiModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="bg-white rounded-3xl w-full max-w-lg shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden border border-slate-100 flex flex-col"
                        >
                            {/* Modal Header */}
                            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg text-white shadow-sm">
                                        <Wand2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900">AI Theme Studio</h3>
                                        <p className="text-xs font-medium text-slate-500">Tune the AI to match your brand vibe.</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => !aiLoading && setIsAiModalOpen(false)}
                                    className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-6 space-y-6 overflow-y-auto max-h-[70vh]">

                                {/* Industry & Audience */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Industry</label>
                                        <div className="relative">
                                            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <Input
                                                value={aiParams.industry}
                                                onChange={(e) => setAiParams(prev => ({ ...prev, industry: e.target.value }))}
                                                className="pl-9 bg-slate-50 rounded-xl"
                                                placeholder="e.g. Programming"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Target Audience</label>
                                        <div className="relative">
                                            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <Input
                                                value={aiParams.targetAudience}
                                                onChange={(e) => setAiParams(prev => ({ ...prev, targetAudience: e.target.value }))}
                                                className="pl-9 bg-slate-50 rounded-xl"
                                                placeholder="e.g. Developers"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Style & Mood Pills */}
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Theme Style</label>
                                        <div className="flex flex-wrap gap-2">
                                            {["Modern", "Minimalist", "Playful", "Corporate", "Elegant"].map(style => (
                                                <button
                                                    key={style}
                                                    onClick={() => setAiParams(prev => ({ ...prev, themeStyle: style }))}
                                                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${aiParams.themeStyle === style ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'}`}
                                                >
                                                    {style}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Brand Mood</label>
                                        <div className="flex flex-wrap gap-2">
                                            {["Professional", "Energetic", "Calm", "Trustworthy", "Creative"].map(mood => (
                                                <button
                                                    key={mood}
                                                    onClick={() => setAiParams(prev => ({ ...prev, mood: mood }))}
                                                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${aiParams.mood === mood ? 'bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-200' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'}`}
                                                >
                                                    {mood}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Base Color & Dark Mode */}
                                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Base Color</label>
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="color"
                                                value={aiParams.baseColor}
                                                onChange={(e) => setAiParams(prev => ({ ...prev, baseColor: e.target.value }))}
                                                className="w-8 h-8 rounded-xl cursor-pointer border-0 bg-transparent"
                                            />
                                            <input
                                                type="text"
                                                value={aiParams.baseColor}
                                                onChange={(e) => setAiParams(prev => ({ ...prev, baseColor: e.target.value }))}
                                                className="flex-1 bg-transparent px-3 text-sm font-mono font-bold text-slate-600 uppercase outline-none placeholder:text-slate-300"
                                                placeholder="#4F46E5"
                                                maxLength={7}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Mode Preference</label>
                                        <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200 w-fit">
                                            <button
                                                onClick={() => setAiParams(prev => ({ ...prev, darkMode: false }))}
                                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${!aiParams.darkMode ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-700'}`}
                                            >
                                                <Sun className="w-3.5 h-3.5" /> Light
                                            </button>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="p-6 border-t border-slate-100 bg-slate-50/50">
                                <Button
                                    onClick={generateTheme}
                                    disabled={aiLoading}
                                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-base font-bold rounded-xl shadow-[0_8px_20px_-6px_rgba(37,99,235,0.5)] transition-all flex items-center justify-center gap-2 group relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                    {aiLoading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Brewing Magic...
                                        </>
                                    ) : (
                                        <>
                                            <Wand2 className="w-5 h-5" />
                                            Generate Theme
                                        </>
                                    )}
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ========================================== */}
            {/* LEFT SIDE: MAIN FORM INPUTS                */}
            {/* ========================================== */}
            <div className="flex-[1.4] p-8 md:p-12 border-r border-slate-100">
                <form className="space-y-12">

                    {/* Section 1: Core Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                                <Globe className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">Workspace Identity</h3>
                                <p className="text-sm font-medium text-slate-500">The core details of your academy.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-2">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Organisation Name</label>
                                <div className="relative group">
                                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                    <Input
                                        type="text"
                                        name="organisationName"
                                        value={formData.organisationName}
                                        onChange={handleInputChange}
                                        className="h-12 pl-11 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-base shadow-sm"
                                        placeholder="e.g. CodeMaster LMS"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Subdomain</label>
                                <div className="relative group flex items-center">
                                    <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors z-10" />
                                    <Input
                                        type="text"
                                        name="subdomain"
                                        value={formData.subdomain}
                                        onChange={handleInputChange}
                                        className="h-12 pl-11 pr-28 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-base shadow-sm"
                                        placeholder="my-school"
                                    />
                                    <div className="absolute right-1 top-1 bottom-1 flex items-center px-3 bg-slate-100/50 border-l border-slate-200 rounded-r-lg">
                                        <span className="text-sm font-semibold text-slate-500">.newral.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Branding */}
                    <div className="space-y-6 pt-6 border-t border-slate-100">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-pink-50 rounded-lg text-pink-600">
                                    <Palette className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">Branding & Styles</h3>
                                    <p className="text-sm font-medium text-slate-500">Make it yours. Upload logo & pick colors.</p>
                                </div>
                            </div>

                            {/* Open AI Modal Button */}
                            <Button
                                type="button"
                                onClick={() => setIsAiModalOpen(true)}
                                className="h-10 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-indigo-200 rounded-xl font-bold transition-all flex items-center gap-2 group"
                            >
                                <Wand2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                <span className="hidden sm:inline">AI Generate Theme</span>
                                <span className="sm:hidden">AI Theme</span>
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pl-2">
                            {/* Logo Upload */}
                            <div className="relative">
                                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Brand Logo</label>
                                <div className={`h-[140px] rounded-2xl border-2 border-dashed flex flex-col items-center justify-center transition-all group overflow-hidden ${logoPreview ? 'border-indigo-200 bg-indigo-50/30' : 'border-slate-200 hover:border-indigo-400 bg-slate-50 hover:bg-slate-50/80 cursor-pointer'}`}>
                                    {uploading ? (
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
                                            <span className="text-sm font-bold text-indigo-600 animate-pulse">Uploading...</span>
                                        </div>
                                    ) : logoPreview ? (
                                        <div className="relative w-full h-full flex items-center justify-center p-4">
                                            <img src={logoPreview} className="max-h-full max-w-full object-contain drop-shadow-sm" alt="Preview" />
                                            <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                                <button
                                                    onClick={(e) => { e.preventDefault(); setLogoPreview(null); }}
                                                    className="bg-white shadow-xl rounded-full p-2.5 text-slate-600 hover:text-red-500 hover:scale-110 transition-all border border-slate-100"
                                                >
                                                    <X className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <label className="cursor-pointer flex flex-col items-center w-full h-full justify-center">
                                            <div className="w-12 h-12 mb-3 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <Upload className="w-5 h-5 text-indigo-500" />
                                            </div>
                                            <span className="text-sm font-bold text-slate-700">Click to upload logo</span>
                                            <span className="text-xs font-medium text-slate-400 mt-1">PNG, JPG, SVG up to 5MB</span>
                                            <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} />
                                        </label>
                                    )}
                                </div>
                            </div>

                            {/* Color Pickers with Hex/Text input */}
                            <div className="space-y-4">
                                {Object.keys(defaultColors).map((colorKey) => (
                                    <div key={colorKey} className="space-y-1.5">
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
                                            {colorKey} Color
                                        </label>
                                        <div className="relative flex items-center h-12 bg-white border border-slate-200 rounded-xl overflow-hidden focus-within:ring-4 focus-within:ring-indigo-500/10 focus-within:border-indigo-500 transition-all shadow-sm group">

                                            {/* Native Color Input hidden behind styled div */}
                                            <div className="relative h-full w-14 border-r border-slate-200 p-1.5 cursor-pointer">
                                                <div
                                                    className="w-full h-full rounded-lg shadow-inner border border-black/5"
                                                    style={{ backgroundColor: formData.colors?.[colorKey] || defaultColors[colorKey as keyof typeof defaultColors] }}
                                                />
                                                <input
                                                    type="color"
                                                    value={formData.colors?.[colorKey] || defaultColors[colorKey as keyof typeof defaultColors]}
                                                    onChange={handleColorChange(colorKey)}
                                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                />
                                            </div>

                                            {/* Hex Code Text Input */}
                                            <input
                                                type="text"
                                                value={formData.colors?.[colorKey] || defaultColors[colorKey as keyof typeof defaultColors]}
                                                onChange={handleColorChange(colorKey)}
                                                className="flex-1 bg-transparent px-4 text-sm font-bold font-mono text-slate-700 outline-none uppercase placeholder:text-slate-300"
                                                placeholder="#FFFFFF"
                                                maxLength={7}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Admin Info */}
                    <div className="space-y-6 pt-6 border-t border-slate-100">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                                <User className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">Admin Account</h3>
                                <p className="text-sm font-medium text-slate-500">Personalize your owner profile.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-2">
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                <Input
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    placeholder="First Name"
                                    className="h-12 pl-11 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-base shadow-sm"
                                />
                            </div>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                <Input
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    placeholder="Last Name"
                                    className="h-12 pl-11 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-base shadow-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 space-y-3">
                        {/* Mobile Only: Show Full Preview Button */}
                        <div className="lg:hidden">
                            <Button
                                type="button"
                                onClick={() => setIsPreviewModalOpen(true)}
                                variant="outline"
                                className="w-full h-12 rounded-xl font-bold text-slate-600 border-slate-200 flex items-center justify-center gap-2 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                            >
                                <Eye className="w-4 h-4" /> Full Dashboard Preview
                            </Button>
                        </div>
                        
                        {/* Finish Setup Button */}
                        <Button
                            onClick={(e) => { e.preventDefault(); onSubmit(); }}
                            disabled={loading || uploading}
                            className="w-full h-14 text-white text-[17px] font-bold rounded-2xl shadow-xl transition-all active:scale-[0.98] group relative overflow-hidden"
                            style={{ backgroundColor: currentPrimary }}
                        >
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                            {loading ? (
                                <span className="flex items-center gap-2 relative z-10">
                                    <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Creating Workspace...
                                </span>
                            ) : (
                                <span className="relative z-10">Finish Setup & Launch</span>
                            )}
                        </Button>
                    </div>
                </form>
            </div>

            {/* ========================================== */}
            {/* RIGHT SIDE: LIVE PREVIEW                   */}
            {/* ========================================== */}
            <div className="hidden lg:flex flex-1 bg-slate-50/50 p-8 flex-col items-center justify-center relative overflow-hidden">
                {/* Decorative background circle tied to primary color */}
                <motion.div
                    className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 transition-colors duration-700"
                    style={{ backgroundColor: currentPrimary }}
                />

                <div className="relative z-10 w-full max-w-[340px] space-y-6">
                    <div className="text-center space-y-1">
                        <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Live Brand Preview</p>
                        <p className="text-sm font-medium text-slate-500">See your platform come to life</p>
                    </div>

                    {/* The "Mini LMS" Preview Card */}
                    <motion.div
                        layout
                        className="w-full aspect-[4/5] rounded-[32px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/50 overflow-hidden flex flex-col transition-colors duration-500 relative"
                        style={{ backgroundColor: currentBg }}
                    >
                        {/* Mock Header */}
                        <div className="px-5 py-4 flex justify-between items-center bg-white/60 backdrop-blur-md border-b border-black/5">
                            {logoPreview ? (
                                <img src={logoPreview} className="h-6 object-contain" alt="Preview Logo" />
                            ) : (
                                <div className="h-6 w-24 rounded bg-black/10 animate-pulse" />
                            )}
                            <div
                                className="w-8 h-8 rounded-full border-2 border-white shadow-sm transition-colors duration-500 flex items-center justify-center text-[10px] text-white font-bold"
                                style={{ backgroundColor: currentPrimary }}
                            >
                                {formData.firstName?.[0] || "A"}
                            </div>
                        </div>

                        {/* Mock Content */}
                        <div className="p-6 flex-1 flex flex-col gap-4">
                            {/* Headline */}
                            <div className="space-y-2">
                                <div
                                    className="h-4 w-3/4 rounded-full transition-colors duration-500"
                                    style={{ backgroundColor: currentText }}
                                />
                                <div
                                    className="h-3 w-1/2 rounded-full opacity-50 transition-colors duration-500"
                                    style={{ backgroundColor: currentText }}
                                />
                            </div>

                            {/* Hero Banner */}
                            <div
                                className="h-28 w-full rounded-2xl opacity-15 mt-2 transition-colors duration-500"
                                style={{ backgroundColor: currentPrimary }}
                            />

                            {/* Cards grid */}
                            <div className="grid grid-cols-2 gap-3 pt-2">
                                {[1, 2].map((i) => (
                                    <div key={i} className="h-24 rounded-2xl bg-white shadow-sm border border-black/5 p-3 flex flex-col justify-end">
                                        <div className="h-2 w-full rounded-full bg-slate-100 mb-2" />
                                        <div className="h-2 w-2/3 rounded-full bg-slate-100" />
                                    </div>
                                ))}
                            </div>

                            {/* Primary Button */}
                            <div className="mt-auto pt-4">
                                <div
                                    className="w-full h-12 rounded-xl flex items-center justify-center text-xs font-bold text-white shadow-md transition-colors duration-500 hover:opacity-90 cursor-pointer"
                                    style={{ backgroundColor: currentPrimary }}
                                >
                                    Start Learning
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Preview Full Dashboard Button */}
                    <div className="flex flex-col items-center gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center justify-center gap-2 text-emerald-600 bg-emerald-50 py-2 px-4 rounded-full border border-emerald-100 shadow-sm"
                        >
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="text-[11px] font-bold uppercase tracking-widest">Looking Perfect!</span>
                        </motion.div>

                        {/* Click to open full preview modal */}
                        <Button 
                            onClick={() => setIsPreviewModalOpen(true)}
                            variant="outline" 
                            className="w-full bg-white/80 backdrop-blur-md rounded-xl shadow-sm border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-200 transition-all font-bold gap-2"
                        >
                            <Eye className="w-4 h-4" /> Preview Full Dashboard
                        </Button>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
            `}} />
        </div>
    );
}