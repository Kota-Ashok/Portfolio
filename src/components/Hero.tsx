import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, FileText, ArrowRight, Terminal, Cpu, Database } from 'lucide-react';

const Hero = () => {
    const RESUME_LINK = "https://drive.google.com/file/d/1o88h2D4U6GI3NhABcGqeOQ2-VfIsp-e5/view?usp=sharing";

    return (
        <section className="relative min-h-screen flex items-center bg-slate-950 pt-20 overflow-hidden">
            {/* Subtle Grid Pattern Background */}
            <div className="absolute inset-0 z-0 opacity-5"
                style={{ backgroundImage: 'radial-gradient(#3b82f6 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left Content */}
                    <div className="lg:w-3/5 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-xl text-xs font-bold text-blue-500 mb-8 border border-slate-800 shadow-xl"
                        >
                            <Terminal size={14} />
                            <span className="uppercase tracking-[0.2em]">Full-Stack Software Engineer</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-6xl font-black mb-8 text-white leading-[1.15] tracking-tighter"
                        >
                            Developing seamless <br />
                            <span className="text-blue-600">Frontend & Backend</span>.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.6 }}
                            className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl lg:mx-0 mx-auto font-medium"
                        >
                            Hi, I'm <span className="text-white font-bold">Ashok Kumar Reddy Kota</span>.
                            I architect scalable cloud-native systems and AI-powered engines for the modern web.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25, duration: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-12"
                        >
                            <a
                                href="#projects"
                                className="w-full sm:w-auto px-10 py-4 bg-blue-600 rounded-xl font-bold text-white hover:bg-blue-500 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 active:scale-95"
                            >
                                View Projects
                                <ArrowRight size={20} />
                            </a>
                            <a
                                href={RESUME_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-10 py-4 bg-slate-900 rounded-xl font-bold text-white hover:bg-slate-800 transition-all flex items-center justify-center gap-3 border border-slate-800 shadow-lg active:scale-95"
                            >
                                <FileText size={20} />
                                Download CV
                            </a>
                        </motion.div>

                        {/* Tech Specs */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center lg:justify-start items-center gap-5"
                        >
                            <div className="flex items-center gap-2.5 px-4 py-2 bg-slate-900/50 rounded-xl border border-slate-800/50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                                <Database size={14} className="text-blue-500/70" />
                                <span>Back-End</span>
                            </div>
                            <div className="flex items-center gap-2.5 px-4 py-2 bg-slate-900/50 rounded-xl border border-slate-800/50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                                <Cpu size={14} className="text-blue-500/70" />
                                <span>AI Systems</span>
                            </div>
                            <div className="flex items-center gap-2.5 px-4 py-2 bg-slate-900/50 rounded-xl border border-slate-800/50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                                <Sparkles size={14} className="text-blue-500/70" />
                                <span>Cloud Native</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Photo Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="lg:w-2/5 relative"
                    >
                        <div className="relative z-10 bg-slate-900 p-3 rounded-[3.5rem] shadow-2xl border border-slate-800 group overflow-hidden">
                            <img
                                src="/photo.png"
                                alt="Ashok Kumar Reddy Kota"
                                className="w-full h-auto rounded-[2.8rem] object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                        </div>

                        {/* Decorative Background Glows */}
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-600/10 rounded-full blur-[80px] -z-10 animate-pulse" />
                        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-600/10 rounded-full blur-[80px] -z-10 animate-pulse delay-700" />
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20 group"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-700">Explore Work</span>
                    <ChevronDown size={28} className="text-slate-700 group-hover:text-blue-500 transition-all animate-bounce" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
