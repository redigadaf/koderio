'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { CategoryTheme } from '../utils/theme';
import { containerVariants, fadeInLeftVariants, rotateCWVariants, rotateCCWVariants } from '../utils/animations';

interface ProjectSolutionProps {
    theme: CategoryTheme;
}

const solutions = [
    {
        title: 'Discovery & Research',
        desc: 'We began with a comprehensive audit of existing systems and workflows. Through stakeholder interviews and user research, we identified pain points and opportunities for improvement.',
        number: '01'
    },
    {
        title: 'Strategic Planning',
        desc: 'We analyzed leading platforms in the space to understand industry standards and best practices. This competitive analysis informed our approach while ensuring we delivered unique value.',
        number: '02'
    },
    {
        title: 'Design & Development',
        desc: 'Using modern design principles and cutting-edge technology, we built a platform that\'s both beautiful and functional. Every interaction was carefully crafted for optimal user experience.',
        number: '03'
    }
];

export default function ProjectSolution({ theme }: ProjectSolutionProps) {
    return (
        <section className={`relative py-20 md:py-32 bg-gradient-to-br ${theme.primary} overflow-hidden`}>
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    variants={rotateCWVariants}
                    animate="animate"
                    className="absolute top-0 right-0 w-96 h-96 border-4 border-white rounded-full"
                />
                <motion.div
                    variants={rotateCCWVariants}
                    animate="animate"
                    className="absolute bottom-0 left-0 w-96 h-96 border-4 border-white rounded-full"
                />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    className="space-y-12"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                            <Award className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">The Solution</h2>
                    </div>

                    <div className="space-y-8">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInLeftVariants}
                                className="flex gap-6 items-start"
                            >
                                <div className="text-6xl md:text-8xl font-black text-white/20 leading-none">
                                    {solution.number}
                                </div>
                                <div className="flex-1 space-y-3 pt-2">
                                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                                        {solution.title}
                                    </h3>
                                    <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                                        {solution.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
