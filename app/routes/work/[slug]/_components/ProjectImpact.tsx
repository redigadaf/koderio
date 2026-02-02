'use client';

import { motion } from 'framer-motion';
import { CategoryTheme } from './theme';

interface ProjectImpactProps {
    theme: CategoryTheme;
}

const stats = [
    { value: '50%', label: 'Faster Workflows' },
    { value: '10x', label: 'User Engagement' },
    { value: '95%', label: 'Satisfaction Rate' }
];

export default function ProjectImpact({ theme }: ProjectImpactProps) {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${theme.primary} opacity-5`} />

            <div className="max-w-6xl mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center space-y-12"
                >
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">The Impact</h2>
                        <blockquote className="text-2xl md:text-3xl text-foreground italic max-w-4xl mx-auto leading-relaxed font-light">
                            "This project represents a <span className={`font-bold ${theme.text} not-italic`}>milestone</span> in how we approach digital transformation.
                            It's not just about code; it's about creating <span className={`font-bold ${theme.text} not-italic`}>meaningful impact</span> and delivering
                            real value to users."
                        </blockquote>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.05 }}
                                className={`p-10 rounded-3xl border-2 ${theme.border} bg-background shadow-xl ${theme.glow} transition-all`}
                            >
                                <div className={`text-6xl md:text-7xl font-black bg-gradient-to-br ${theme.primary} bg-clip-text text-transparent mb-4`}>
                                    {stat.value}
                                </div>
                                <p className="text-lg font-semibold text-muted-foreground uppercase tracking-wide">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
