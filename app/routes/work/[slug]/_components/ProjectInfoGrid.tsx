'use client';

import { motion } from 'framer-motion';
import { Calendar, Layers, Rocket } from 'lucide-react';
import { CategoryTheme } from './theme';

interface ProjectInfoGridProps {
    year: string;
    theme: CategoryTheme;
}

export default function ProjectInfoGrid({ year, theme }: ProjectInfoGridProps) {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
            >
                {/* Deliverables */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className={`p-8 rounded-3xl border-2 ${theme.border} bg-gradient-to-br from-background to-muted/30 shadow-xl ${theme.glow} transition-all`}
                >
                    <div className={`flex items-center gap-3 mb-6 ${theme.text}`}>
                        <div className={`p-3 ${theme.accent} rounded-xl`}>
                            <Layers className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-sm font-black uppercase tracking-widest">Deliverables</h3>
                    </div>
                    <ul className="space-y-3 text-foreground font-medium">
                        <li className="flex items-center gap-2">
                            <span className={`w-2 h-2 ${theme.accent} rounded-full`}></span>
                            Product Design
                        </li>
                        <li className="flex items-center gap-2">
                            <span className={`w-2 h-2 ${theme.accent} rounded-full`}></span>
                            Web Development
                        </li>
                        <li className="flex items-center gap-2">
                            <span className={`w-2 h-2 ${theme.accent} rounded-full`}></span>
                            Brand Identity
                        </li>
                    </ul>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className={`p-8 rounded-3xl border-2 ${theme.border} bg-gradient-to-br from-background to-muted/30 shadow-xl ${theme.glow} transition-all`}
                >
                    <div className={`flex items-center gap-3 mb-6 ${theme.text}`}>
                        <div className={`p-3 ${theme.accent} rounded-xl`}>
                            <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-sm font-black uppercase tracking-widest">Timeline</h3>
                    </div>
                    <p className="text-5xl font-black text-foreground bg-gradient-to-br ${theme.primary} bg-clip-text">{year}</p>
                    <p className="text-sm text-muted-foreground mt-2">Project Completion</p>
                </motion.div>

                {/* What We Do */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className={`p-8 rounded-3xl border-2 ${theme.border} bg-gradient-to-br from-background to-muted/30 shadow-xl ${theme.glow} transition-all`}
                >
                    <div className={`flex items-center gap-3 mb-6 ${theme.text}`}>
                        <div className={`p-3 ${theme.accent} rounded-xl`}>
                            <Rocket className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-sm font-black uppercase tracking-widest">What We Do</h3>
                    </div>
                    <ul className="space-y-3 text-foreground font-medium">
                        <li className="flex items-center gap-2">
                            <span className={`w-2 h-2 ${theme.accent} rounded-full`}></span>
                            Research
                        </li>
                        <li className="flex items-center gap-2">
                            <span className={`w-2 h-2 ${theme.accent} rounded-full`}></span>
                            UI/UX Design
                        </li>
                        <li className="flex items-center gap-2">
                            <span className={`w-2 h-2 ${theme.accent} rounded-full`}></span>
                            Development
                        </li>
                    </ul>
                </motion.div>
            </motion.div>
        </section>
    );
}
