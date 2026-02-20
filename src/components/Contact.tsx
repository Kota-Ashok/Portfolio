import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, ArrowUpRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [copied, setCopied] = useState<string | null>(null);

    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setCopied(label);
        setTimeout(() => setCopied(null), 2000);
    };

    const contactItems = [
        {
            icon: <Mail size={24} />,
            label: "Email",
            value: "kotaashok543@gmail.com",
            link: "mailto:kotaashok543@gmail.com",
            color: "from-blue-600/20"
        },
        {
            icon: <Phone size={24} />,
            label: "Phone",
            value: "+91 8688056443",
            link: "tel:+918688056443",
            color: "from-indigo-600/20"
        },
        {
            icon: <Linkedin size={24} />,
            label: "LinkedIn",
            value: "Ashok Kumar Reddy",
            link: "https://linkedin.com/in/kota-ashok-reddy",
            color: "from-blue-500/20"
        }
    ];

    return (
        <section id="contact" className="relative py-32 bg-slate-950 overflow-hidden">
            {/* Architectural Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)]" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">

                    {/* Minimalist Header */}
                    <div className="text-center mb-20 space-y-4">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500"
                        >
                            Connectivity
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black text-white tracking-tighter"
                        >
                            Get In <span className="text-slate-800 outline-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>Touch.</span>
                        </motion.h2>
                    </div>

                    {/* Elevated 3-Column Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contactItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative bg-[#0a0a0a] border border-slate-900 rounded-[2.5rem] p-10 hover:bg-[#0f172a]/20 transition-all hover:border-blue-500/30 overflow-hidden shadow-2xl"
                            >
                                {/* Active Zone Glow */}
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${item.color} to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="relative z-10 h-full flex flex-col">
                                    <div className="flex items-center justify-between mb-12">
                                        <div className="w-14 h-14 bg-slate-900/50 border border-slate-800/50 rounded-2xl flex items-center justify-center text-blue-500 group-hover:text-white group-hover:bg-blue-600 transition-all duration-500">
                                            {item.icon}
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => copyToClipboard(item.value, item.label)}
                                                className="p-2.5 bg-slate-900/40 border border-slate-800 rounded-xl text-slate-500 hover:text-white hover:border-slate-700 transition-all"
                                                title="Copy"
                                            >
                                                {copied === item.label ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                                            </button>
                                            <a
                                                href={item.link}
                                                target={item.link.startsWith('http') ? "_blank" : undefined}
                                                className="p-2.5 bg-slate-900/40 border border-slate-800 rounded-xl text-slate-500 hover:text-white hover:border-slate-700 transition-all"
                                                title="Open Link"
                                            >
                                                <ArrowUpRight size={16} />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-3">{item.label}</p>
                                        <p className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors uppercase">{item.value}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Industrial Footer Link */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-20 flex flex-col items-center gap-6"
                    >
                        <a
                            href="https://github.com/kota-ashok"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-3 px-8 py-3.5 bg-slate-900/50 border border-slate-800/50 rounded-full text-slate-500 font-bold text-[10px] uppercase tracking-widest hover:text-white hover:border-blue-500/30 transition-all overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <Github size={16} className="relative z-10" />
                            <span className="relative z-10">Open Source Profile</span>
                        </a>

                        <div className="pt-24 text-center">
                            <p className="text-slate-800 text-[10px] font-black uppercase tracking-[0.8em]">
                                © {new Date().getFullYear()} Ashok Kumar Reddy Kota
                            </p>
                            <div className="mt-4 w-12 h-0.5 bg-blue-600/20 mx-auto rounded-full" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
