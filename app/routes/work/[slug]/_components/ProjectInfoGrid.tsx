'use client';

import { motion } from 'framer-motion';
import { Calendar, Layers, Rocket } from 'lucide-react';
import { CategoryTheme } from './theme';

interface ProjectInfoGridProps {
    year: string;
    theme: CategoryTheme;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1] as const
        }
    }
};

const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.4
        }
    })
};

export default function ProjectInfoGrid({ year, theme }: ProjectInfoGridProps) {
    const deliverables = ['Product Design', 'Web Development', 'Brand Identity'];
    const services = ['Research', 'UI/UX Design', 'Development'];

    return (
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
            >
                {/* Deliverables */}
                <motion.div
                    variants={cardVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`p-8 rounded-3xl border-2 ${theme.border} bg-gradient-to-br from-background to-muted/30 shadow-xl ${theme.glow} transition-all relative overflow-hidden group`}
                >
                    {/* Hover gradient */}
                    <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${theme.primary} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    <div className={`flex items-center gap-3 mb-6 ${theme.text} relative z-10`}>
                        <motion.div
                            className={`p-3 ${theme.accent} rounded-xl relative`}
                            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Layers className="w-6 h-6 text-white" />

                            {/* Pulse effect */}
                            <motion.div
                                className={`absolute inset-0 ${theme.accent} rounded-xl`}
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.5, 0, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>
                        <h3 className="text-sm font-black uppercase tracking-widest">Deliverables</h3>
                    </div>

                    <ul className="space-y-3 text-foreground font-medium relative z-10">
                        {deliverables.map((item, i) => (
                            <motion.li
                                key={i}
                                custom={i}
                                variants={listItemVariants}
                                className="flex items-center gap-2"
                            >
                                <motion.span
                                    className={`w-2 h-2 ${theme.accent} rounded-full`}
                                    animate={{
                                        scale: [1, 1.5, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.3
                                    }}
                                />
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    variants={cardVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`p-8 rounded-3xl border-2 ${theme.border} bg-gradient-to-br from-background to-muted/30 shadow-xl ${theme.glow} transition-all relative overflow-hidden group`}
                >
                    {/* Hover gradient */}
                    <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${theme.primary} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    <div className={`flex items-center gap-3 mb-6 ${theme.text} relative z-10`}>
                        <motion.div
                            className={`p-3 ${theme.accent} rounded-xl relative`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Calendar className="w-6 h-6 text-white" />

                            {/* Pulse effect */}
                            <motion.div
                                className={`absolute inset-0 ${theme.accent} rounded-xl`}
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.5, 0, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                            />
                        </motion.div>
                        <h3 className="text-sm font-black uppercase tracking-widest">Timeline</h3>
                    </div>

                    <motion.p
                        className="text-5xl font-black text-foreground bg-gradient-to-br ${theme.primary} bg-clip-text relative z-10"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
                    >
                        {year}
                    </motion.p>
                    <motion.p
                        className="text-sm text-muted-foreground mt-2 relative z-10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        Project Completion
                    </motion.p>
                </motion.div>

                {/* What We Do */}
                <motion.div
                    variants={cardVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`p-8 rounded-3xl border-2 ${theme.border} bg-gradient-to-br from-background to-muted/30 shadow-xl ${theme.glow} transition-all relative overflow-hidden group`}
                >
                    {/* Hover gradient */}
                    <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${theme.primary} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    <div className={`flex items-center gap-3 mb-6 ${theme.text} relative z-10`}>
                        <motion.div
                            className={`p-3 ${theme.accent} rounded-xl relative`}
                            whileHover={{
                                rotate: [0, -15, 15, -15, 0],
                                scale: 1.1,
                                y: [-5, 0, -5, 0, -5]
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            <Rocket className="w-6 h-6 text-white" />

                            {/* Pulse effect */}
                            <motion.div
                                className={`absolute inset-0 ${theme.accent} rounded-xl`}
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.5, 0, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                            />
                        </motion.div>
                        <h3 className="text-sm font-black uppercase tracking-widest">What We Do</h3>
                    </div>

                    <ul className="space-y-3 text-foreground font-medium relative z-10">
                        {services.map((item, i) => (
                            <motion.li
                                key={i}
                                custom={i}
                                variants={listItemVariants}
                                className="flex items-center gap-2"
                            >
                                <motion.span
                                    className={`w-2 h-2 ${theme.accent} rounded-full`}
                                    animate={{
                                        scale: [1, 1.5, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.3
                                    }}
                                />
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>
        </section>
    );
}
