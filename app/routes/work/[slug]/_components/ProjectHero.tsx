'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { CategoryTheme } from './theme';

interface ProjectHeroProps {
    project: {
        imageUrl: string;
        title: string;
        category: string;
        description: string;
    };
    theme: CategoryTheme;
}

export default function ProjectHero({ project, theme }: ProjectHeroProps) {
    return (
        <section className="relative w-full h-[550px] overflow-hidden">
            {/* Background Image with Overlay */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0"
            >
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.primary} opacity-80 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </motion.div>

            {/* Animated Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br ${theme.primary} rounded-full blur-3xl`}
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr ${theme.primary} rounded-full blur-3xl`}
                />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-6 md:p-12">
                {/* Top section with Back to Work button */}
                <div className="max-w-6xl mx-auto w-full">
                    <Link
                        href="/routes/work"
                        className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-all group backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-semibold">Back to Work</span>
                    </Link>
                </div>

                {/* Bottom section with main content */}
                <div className="max-w-6xl mx-auto w-full pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className={`inline-block px-4 py-2 ${theme.accent} text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg ${theme.glow}`}
                        >
                            {project.category}
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-none"
                            style={{
                                textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                                fontFamily: 'system-ui, -apple-system, sans-serif'
                            }}
                        >
                            {project.title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl md:text-2xl text-white/95 max-w-3xl leading-relaxed font-light"
                            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
                        >
                            {project.description}
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
