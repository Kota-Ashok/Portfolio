import { motion } from 'framer-motion';
import {
    Database, Cloud, Lock, Layers, Globe, Search, ShieldCheck, Cpu
} from 'lucide-react';

const skillCategories = [
    {
        title: 'Backend & APIs',
        icon: <Database className="text-blue-500" />,
        skills: ['Python', 'FastAPI', 'Django', 'Flask', 'Async Programming', 'Background Tasks']
    },
    {
        title: 'Auth & Security',
        icon: <Lock className="text-blue-500" />,
        skills: ['OAuth 2.0', 'OIDC', 'Keycloak', 'AWS Cognito', 'JWT', 'RBAC', 'Token Rotation', 'AES-256']
    },
    {
        title: 'System Design',
        icon: <Layers className="text-blue-500" />,
        skills: ['Microservices', 'Multi-Tenant SaaS', 'Distributed Systems', 'API Versioning']
    },
    {
        title: 'Cloud & AI',
        icon: <Cloud className="text-blue-500" />,
        skills: ['AWS (EC2/S3/RDS)', 'Hugging Face', 'Llama 3 70B', 'AWS Bedrock', 'RAG', 'Prompt Engineering']
    },
    {
        title: 'Frontend',
        icon: <Globe className="text-blue-500" />,
        skills: ['React.js', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Real-Time UI']
    },
    {
        title: 'Databases',
        icon: <Search className="text-blue-500" />,
        skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Audit Logs', 'Query Optimization']
    },
    {
        title: 'Testing & DevOps',
        icon: <ShieldCheck className="text-blue-500" />,
        skills: ['Pytest', 'Docker', 'Git', 'CI/CD', 'Postman', 'Logging & Monitoring']
    },
    {
        title: 'Specialized',
        icon: <Cpu className="text-blue-500" />,
        skills: ['Ledger Engines', 'Atomic Transactions', 'WebSockets', 'Idempotent APIs']
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-slate-950">
            <div className="container mx-auto px-6">
                <div className="mb-12 border-b border-slate-800 pb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Technical Skills</h2>
                    <p className="text-slate-400">My technical arsenal and core competencies.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-6 bg-slate-900 border border-slate-800 rounded-2xl"
                        >
                            <div className="mb-4 flex items-center gap-3">
                                {category.icon}
                                <h3 className="text-lg font-bold text-white">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-xs font-semibold text-slate-400"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
