"use client";

import { motion } from 'framer-motion';
import { StatItem } from './types';

interface StatsSectionProps {
    stats: StatItem[];
}

export function StatsSection({ stats }: StatsSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)',
                    backgroundSize: '48px 48px'
                }}></div>
            </div>

            {/* Animated floating elements */}
            <motion.div
                className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
                animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
                animate={{
                    y: [0, 20, 0],
                    x: [0, -10, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.15,
                            type: "spring",
                            bounce: 0.4
                        }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="text-center"
                    >
                        <motion.div
                            className="inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-sm mb-4"
                            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                        >
                            <stat.icon className="w-6 h-6 text-white" />
                        </motion.div>

                        <motion.div
                            className="text-4xl md:text-5xl font-black text-white mb-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            {stat.value}
                        </motion.div>

                        <motion.div
                            className="text-white/90 font-medium text-sm md:text-base uppercase tracking-wider"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            {stat.label}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
