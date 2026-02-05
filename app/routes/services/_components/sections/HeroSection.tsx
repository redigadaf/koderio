'use client';

import { motion, MotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { ServiceData } from '../../_data/servicesData';

interface HeroSectionProps {
    service: ServiceData;
    Icon: LucideIcon;
    heroY: MotionValue<string>;
    heroOpacity: MotionValue<number>;
    heroScale: MotionValue<number>;
    heroRef: React.RefObject<HTMLElement | null>;
}

export default function HeroSection({ service, Icon, heroY, heroOpacity, heroScale, heroRef }: HeroSectionProps) {
    const [particles, setParticles] = useState<Array<{
        id: number;
        x: number;
        initialY: number;
        targetY: number;
        duration: number;
        delay: number;
    }>>([]);

    useEffect(() => {
        setParticles([...Array(15)].map((_, i) => ({
            id: i,
            x: Math.random() * window.innerWidth,
            initialY: Math.random() * 800,
            targetY: window.innerHeight,
            duration: 4 + Math.random() * 3,
            delay: Math.random() * 3
        })));
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20">
            {/* Animated Background Gradient */}
            <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color.gradient}`}
                style={{ y: heroY }}
            >
                {/* Animated Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}></div>

                {/* Floating Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, 100, 0],
                        y: [0, -50, 0]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br ${service.color.primary} rounded-full blur-3xl`}
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.15, 0.35, 0.15],
                        x: [0, -80, 0],
                        y: [0, 60, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr ${service.color.primary} rounded-full blur-3xl`}
                />

                {/* Floating Particles */}
                {/* Floating Particles */}
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-2 h-2 bg-white/20 rounded-full"
                        initial={{
                            x: particle.x,
                            y: particle.initialY,
                        }}
                        animate={{
                            y: [null, -150, particle.targetY],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                            ease: "linear"
                        }}
                    />
                ))}
            </motion.div>

            <motion.div
                className="max-w-6xl mx-auto px-6 relative z-10 text-center"
                style={{ opacity: heroOpacity, scale: heroScale }}
            >
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        duration: 0.8,
                        type: "spring",
                        bounce: 0.5,
                        delay: 0.2
                    }}
                    className="relative inline-block mb-8"
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className={`absolute inset-0 ${service.color.accent} rounded-3xl blur-2xl`}
                    />
                    <div className={`relative p-6 rounded-2xl ${service.color.accent} shadow-2xl`}>
                        <Icon className="w-12 h-12 text-white" />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl md:text-6xl font-black mb-4 leading-tight"
                >
                    {service.title.split(' ').map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.5 + index * 0.1,
                                ease: [0.25, 0.4, 0.25, 1] as const
                            }}
                            className="inline-block mr-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto font-medium"
                >
                    {service.subtitle}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-8"
                >
                    {service.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <Link href="/routes/work">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`group relative inline-flex items-center gap-2 px-8 py-4 ${service.color.accent} text-white font-bold text-base rounded-full shadow-2xl overflow-hidden`}
                        >
                            <motion.div
                                className="absolute inset-0 bg-white/20"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.5 }}
                            />
                            <span className="relative z-10">View Our Work</span>
                            <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
