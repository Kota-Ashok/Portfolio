import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Shield, Cpu, MessageSquare } from 'lucide-react';

const projects = [
    {
        title: 'AcuFinAi',
        subtitle: 'AI Digital Wallet & Ledger Engine',
        description: 'Built a double-entry, multi-currency ledger engine with atomic, idempotent transactions and AI-powered financial intelligence pipelines.',
        tech: ['FastAPI', 'React', 'Redux Toolkit', 'Celery', 'Redis', 'PostgreSQL', 'AWS Bedrock', 'Keycloak'],
        image: './acufinai.png',
        icon: <Zap size={20} />,
        link: '#'
    },
    {
        title: 'Collabryta',
        subtitle: 'Cloud-Native AI Collaboration',
        description: 'Architected a multi-tenant platform with real-time messaging and Qwen3-driven task prioritization and meeting summarization.',
        tech: ['FastAPI', 'React.js', 'WebSockets', 'Redis', 'Hugging Face', 'Qwen3', 'AWS Cognito'],
        image: './co.png',
        icon: <MessageSquare size={20} />,
        link: '#'
    },
    {
        title: 'Schedora',
        subtitle: 'High-Concurrency Booking',
        description: 'High-concurrency doctor–patient scheduling system using Redis distributed locking and secure digitally signed PDF prescriptions.',
        tech: ['Django REST', 'React.js', 'MySQL', 'Redis', 'Docker', 'AWS'],
        image: './healt.png',
        icon: <Shield size={20} />,
        link: '#'
    },
    {
        title: 'OutfitCart',
        subtitle: 'E-Commerce Branding Platform',
        description: 'Full-scale clothing brand portal with integrated checkout, inventory management, and 40% optimized database query performance.',
        tech: ['Django REST', 'React.js', 'MySQL', 'AWS'],
        image: './clo.png',
        icon: <Cpu size={20} />,
        link: '#'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-16 bg-slate-950">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="mb-12 border-b border-slate-800 pb-6">
                    <h2 className="text-4xl font-bold text-white mb-3">Featured Projects</h2>
                    <p className="text-slate-400 text-lg">A selection of technical systems I've architected and built.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group flex flex-col h-full"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden border-b border-slate-800">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-500">
                                            {project.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                                            <p className="text-xs font-bold text-blue-500/80 uppercase tracking-widest">{project.subtitle}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <a href="#" className="text-slate-500 hover:text-white transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href="#" className="text-slate-500 hover:text-white transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-slate-400 mb-8 leading-relaxed font-medium">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-6 mt-auto border-t border-slate-800/50">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 bg-slate-800 text-slate-500 rounded-lg text-[11px] font-bold uppercase tracking-wider">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
