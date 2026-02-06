'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { CategoryTheme } from './theme';
import { useRef } from 'react';

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
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <section ref={ref} className="relative w-full h-[550px] overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0"
            >
                <motion.img
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.primary} opacity-80 mix-blend-multiply`} />
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent"
                    style={{ opacity }}
                />
            </motion.div>

            {/* Animated Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                        x: [0, 50, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br ${theme.primary} rounded-full blur-3xl`}
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.5, 0.2],
                        x: [0, -50, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr ${theme.primary} rounded-full blur-3xl`}
                />
            </div>

            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                    initial={{
                        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                        y: Math.random() * 550,
                    }}
                    animate={{
                        y: [null, -100, 550],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "linear"
                    }}
                />
            ))}

            {/* Content */}
            <motion.div
                className="relative h-full flex flex-col justify-between p-6 md:p-12"
                style={{ opacity }}
            >
                {/* Top section with Back to Work button */}
                <div className="max-w-6xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Link
                            href="/routes/work"
                            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-all group backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full hover:bg-white/20"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-semibold">Back to Work</span>
                        </Link>
                    </motion.div>
                </div>

                {/* Bottom section with main content */}
                <div className="max-w-6xl mx-auto w-full pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
                        className="space-y-6"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.4,
                                type: "spring",
                                bounce: 0.5
                            }}
                            whileHover={{ scale: 1.05 }}
                            className={`inline-block px-4 py-2 bg-gradient-to-br ${theme.accent} text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg ${theme.glow}`}
                        >
                            {project.category}
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-none"
                            style={{
                                textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                                fontFamily: 'system-ui, -apple-system, sans-serif'
                            }}
                        >
                            {project.title.split(' ').map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.6 + index * 0.1,
                                        ease: [0.25, 0.4, 0.25, 1]
                                    }}
                                    className="inline-block mr-4"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="text-xl md:text-2xl text-white/95 max-w-3xl leading-relaxed font-light"
                            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
                        >
                            {project.description}
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
