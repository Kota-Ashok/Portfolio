import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const RESUME_LINK = "https://drive.google.com/file/d/19elpQSKA2sGt7Mbkd69uuEfPNuAvcO6W/view?usp=sharing";

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900 border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-xl font-bold text-white tracking-tight">
                    AKR<span className="text-blue-500">.K</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold text-slate-400 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center space-x-6 ml-6 pl-6 border-l border-slate-800">
                        <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer" className="bg-blue-600 px-5 py-2 rounded-lg text-sm font-bold text-white hover:bg-blue-500 transition-all">
                            Resume
                        </a>
                        <a href="https://github.com/kota-ashok" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/kota-ashok-reddy/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-400 hover:text-white">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden bg-slate-900 border-b border-slate-800"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-base font-semibold text-slate-400 hover:text-white"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex flex-col gap-4 pt-4 border-t border-slate-800">
                                <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer" className="bg-blue-600 py-3 rounded-lg text-white font-bold text-center">
                                    Download Resume
                                </a>
                                <div className="flex justify-center space-x-8">
                                    <a href="https://github.com/kota-ashok" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white">
                                        <Github size={24} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/kota-ashok-reddy/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white">
                                        <Linkedin size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
