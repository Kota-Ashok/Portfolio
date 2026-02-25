import { motion } from 'framer-motion';
import { GraduationCap, Award, Target } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900/30">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-3/5"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6 underline decoration-blue-500 decoration-4 underline-offset-8">
                            About Me
                        </h2>

                        <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-10">
                            <p>
                                I am a <span className="text-white font-semibold">Full-Stack Software Engineer</span> specializing in scalable SaaS and AI-integrated backend systems.
                            </p>
                            <p>
                                My expertise centers on <span className="text-white font-semibold">distributed architectures</span>, ledger-based financial engines, and real-time event-driven applications. I have a proven ability to integrate LLM-driven workflows using Hugging Face (Qwen3) and AWS Bedrock.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex items-center gap-4">
                                <GraduationCap size={24} className="text-blue-500" />
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Education</p>
                                    <p className="font-bold text-slate-200">B.Tech</p>
                                    <p className="text-xs text-slate-500">RGMCET | 2019 - 2023</p>
                                </div>
                            </div>
                            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex items-center gap-4">
                                <Target size={24} className="text-blue-500" />
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Focus</p>
                                    <p className="font-bold text-slate-200">AI & Distributed Systems</p>
                                    <p className="text-xs text-slate-500">Scalable SaaS Architectures</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-2/5"
                    >
                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
                            <div className="flex items-center gap-3 mb-8">
                                <Award className="text-blue-500" size={24} />
                                <h3 className="text-xl font-bold text-white">Certifications</h3>
                            </div>

                            <div className="space-y-4">
                                {[
                                    "AWS Academy Cloud Foundations",
                                    "Python Programming (Cisco)",
                                    "Docker Essentials (IBM)",
                                    "Full-Stack Web Development with Django ",
                                    "React Complete Guide ",
                                    "Cloud DevOps (Udemy)"
                                ].map((cert, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm text-slate-400">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                        <span>{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
