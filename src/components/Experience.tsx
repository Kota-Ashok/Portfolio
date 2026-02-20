import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
    {
        company: 'CosmoOps Private Limited',
        position: 'Software Engineer',
        period: 'Dec 2023 – Present',
        location: 'Pondicherry | Remote',
        type: 'Full-Time',
        description: 'Developing scalable backend services and multi-tenant SaaS architectures for production systems.',
        achievements: [
            'Enforce secure authentication and authorization using OAuth 2.0, OpenID Connect, Keycloak, JWT, and RBAC.',
            'Design multi-tenant SaaS architectures ensuring strict tenant-level data isolation.',
            'Optimize PostgreSQL, MySQL, and Redis for high-concurrency workloads.',
            'Incorporate AI-driven automation using AWS Bedrock for intelligent system workflows.'
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-slate-900/30">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="mb-12 border-b border-slate-800 pb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Work Experience</h2>
                    <p className="text-slate-400">My professional journey and key responsibilities.</p>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-8 border-l-2 border-slate-800"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-950" />

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                                    <p className="text-blue-500 font-semibold">{exp.company}</p>
                                </div>
                                <div className="text-slate-400 text-sm font-medium flex flex-col md:items-end gap-1">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={14} />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-slate-300 mb-6 leading-relaxed">
                                {exp.description}
                            </p>

                            <div className="grid grid-cols-1 gap-3">
                                {exp.achievements.map((item, i) => (
                                    <div key={i} className="flex gap-3 items-start">
                                        <CheckCircle2 size={16} className="text-slate-500 mt-1 shrink-0" />
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
