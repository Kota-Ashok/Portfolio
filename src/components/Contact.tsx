import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight, Copy, Check, MessageSquare, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [copied, setCopied] = useState<string | null>(null);

    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setCopied(label);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <section id="contact" className="py-16 bg-slate-950 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[#020617]">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">

                    {/* Compact Title */}
                    <div className="mb-12">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-blue-500 font-bold tracking-[0.2em] uppercase text-[10px] mb-3 block"
                        >
                            Get in touch
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                        >
                            Let's start <span className="text-slate-500 italic font-light">something.</span>
                        </motion.h2>
                    </div>

                    {/* Compact Bento Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-3">

                        {/* Main Email Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="md:col-span-4 p-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl backdrop-blur-sm group flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300"
                        >
                            <div>
                                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <Mail size={20} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1">Email Me</h3>
                                <p className="text-slate-400 text-sm max-w-sm font-medium">For inquiries, collaborations, or a technical chat.</p>
                            </div>

                            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <span className="text-lg font-bold text-slate-200 font-mono">kotaashok543@gmail.com</span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => copyToClipboard("kotaashok543@gmail.com", "Email")}
                                        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 transition-all flex items-center gap-2 text-xs font-bold"
                                    >
                                        {copied === "Email" ? <><Check size={14} className="text-emerald-500" /> Copied</> : <><Copy size={14} /> Copy</>}
                                    </button>
                                    <a href="mailto:kotaashok543@gmail.com" className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center text-white transition-all shadow-lg shadow-blue-600/10">
                                        <ArrowUpRight size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* LinkedIn Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="md:col-span-2 p-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl backdrop-blur-sm group flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300"
                        >
                            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 mb-4 group-hover:bg-[#0077B5] group-hover:text-white transition-all">
                                <Linkedin size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-0.5">LinkedIn</h3>
                                <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-4">Professional</p>
                                <a
                                    href="https://linkedin.com/in/kota-ashok-reddy"
                                    target="_blank"
                                    className="inline-flex items-center gap-1.5 text-blue-500 text-sm font-bold hover:underline"
                                >
                                    Connect <ExternalLink size={12} />
                                </a>
                            </div>
                        </motion.div>

                        {/* WhatsApp Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="md:col-span-2 p-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl backdrop-blur-sm group flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300"
                        >
                            <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-500 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                <MessageSquare size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-0.5">WhatsApp</h3>
                                <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-4">Chat Now</p>
                                <a
                                    href="https://wa.me/918688056443"
                                    target="_blank"
                                    className="inline-flex items-center gap-1.5 text-emerald-500 text-sm font-bold hover:underline"
                                >
                                    Message <ExternalLink size={12} />
                                </a>
                            </div>
                        </motion.div>

                        {/* GitHub Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="md:col-span-4 p-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl backdrop-blur-sm group flex items-center justify-between hover:border-slate-700 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                                    <Github size={24} />
                                </div>
                                <div className="pr-2">
                                    <h3 className="text-lg font-bold text-white">GitHub</h3>
                                    <p className="text-slate-400 text-xs font-medium">Explore my latest code & experiments.</p>
                                </div>
                            </div>
                            <a
                                href="https://github.com/kota-ashok"
                                target="_blank"
                                className="px-4 py-2 bg-slate-800 border border-slate-700 text-white rounded-lg text-xs font-bold hover:bg-slate-700 transition-all flex items-center gap-2"
                            >
                                View Repos
                            </a>
                        </motion.div>

                    </div>

                    {/* Compact Footer */}
                    <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-slate-600 text-xs font-bold">© {new Date().getFullYear()} Ashok Kota</p>
                        <div className="flex items-center gap-4 text-slate-500 text-[11px] font-bold uppercase">
                            <span className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                Available for hire
                            </span>
                            <span className="hidden sm:inline opacity-20 text-slate-700">|</span>
                            <span>Hyderabad, IN</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
