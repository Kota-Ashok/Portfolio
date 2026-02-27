import { motion } from 'framer-motion';
import { FileText, ArrowRight, Cpu, Database, Binary, Code2, Globe } from 'lucide-react';

const Hero = () => {
    const RESUME_LINK = "https://drive.google.com/file/d/19elpQSKA2sGt7Mbkd69uuEfPNuAvcO6W/view?usp=sharing";

    return (
        <section className="relative min-h-screen flex items-center bg-[#020617] pt-20 overflow-hidden">
            {/* Immersive Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.08)_0%,transparent_50%)]" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(37,99,235,0.05)_0%,transparent_50%)]" />

                {/* Animated Grid lines */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                        backgroundSize: '100px 100px'
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="lg:w-[65%] text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
                        >
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em]">Full-Stack Software Engineer</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-[1.1] tracking-tighter"
                        >
                            <span className="hover:translate-x-2 transition-transform duration-300 inline-block">Ashok Kumar</span>{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-600">Reddy Kota.</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-x-8 gap-y-4 mb-10 border-l-2 border-slate-800 pl-8"
                        >
                            <div className="flex items-center gap-2 text-slate-400">
                                <Code2 size={18} className="text-blue-500" />
                                <span className="text-sm font-bold uppercase tracking-wider">Python / FastAPI / Django</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-400">
                                <Database size={18} className="text-blue-500" />
                                <span className="text-sm font-bold uppercase tracking-wider">Distributed Systems</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-400">
                                <Cpu size={18} className="text-blue-500" />
                                <span className="text-sm font-bold uppercase tracking-wider">LLM & AI Workflows</span>
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed font-medium"
                        >
                            Specializing in <span className="text-white border-b border-blue-500/50">scalable SaaS</span> and AI-integrated backend systems, leveraging Llama 3 and AWS Bedrock to build intelligent, production-grade microservices.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap items-center gap-5"
                        >
                            <a
                                href="#projects"
                                className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-3 active:scale-95 shadow-lg shadow-white/5"
                            >
                                View Projects
                                <ArrowRight size={20} />
                            </a>
                            <a
                                href={RESUME_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-slate-900 border border-slate-800 text-white rounded-full font-bold hover:border-slate-700 transition-all flex items-center gap-3 active:scale-95"
                            >
                                <FileText size={20} />
                                Resume
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Visual Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="lg:w-[35%] relative"
                    >
                        <div className="relative group">
                            {/* Animated Rings around photo */}
                            <div className="absolute inset-0 -m-4 border border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                            <div className="absolute inset-0 -m-8 border border-slate-800 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                            <div className="relative z-10 w-full aspect-square rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl">
                                <img
                                    src="./photo.png"
                                    alt="Ashok Kumar Reddy Kota"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay group-hover:bg-transparent transition-colors" />
                            </div>

                            {/* Floating Tech Badges */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-blue-500 shadow-xl animate-bounce">
                                <Binary size={24} />
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-blue-500 shadow-xl animate-bounce delay-700">
                                <Globe size={24} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-blue-600 to-transparent relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
