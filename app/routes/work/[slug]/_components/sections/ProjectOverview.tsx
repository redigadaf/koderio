'use client';

import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { CategoryTheme } from '../utils/theme';
import { containerVariants, cardVariants } from '../utils/animations';

interface ProjectOverviewProps {
    theme: CategoryTheme;
}

export default function ProjectOverview({ theme }: ProjectOverviewProps) {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    className="space-y-8"
                >
                    <motion.div variants={cardVariants} className="flex items-center gap-4 mb-8">
                        <div className={`p-4 bg-gradient-to-br ${theme.accent} rounded-2xl`}>
                            <Target className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">Overview</h2>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        className={`p-10 md:p-12 rounded-3xl border-2 ${theme.border} bg-gradient-to-br from-muted/50 to-background backdrop-blur-sm shadow-2xl`}
                    >
                        <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
                            Before partnering with us, the client had a <span className={`font-bold ${theme.text}`}>vision</span> but lacked the technical execution to bring it to life.
                            The existing solution was fragmented, relying heavily on manual processes, spreadsheets, and disconnected tools.
                            Our mission was to transform this into a <span className={`font-bold ${theme.text}`}>unified, modern platform</span> that delivers real value.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
