'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Users, Layers, TrendingUp, Rocket } from 'lucide-react';
import { CategoryTheme } from '../utils/theme';
import { containerVariants, cardVariants } from '../utils/animations';

interface ProjectChallengeProps {
    theme: CategoryTheme;
}

const challenges = [
    {
        title: 'Complex User Needs',
        desc: 'Users came from diverse backgrounds with varying levels of technical expertise. The interface needed to be intuitive for everyone while maintaining powerful functionality.',
        icon: Users
    },
    {
        title: 'Feature-Rich Platform',
        desc: 'Balancing a comprehensive feature set with clean information architecture was essential to prevent overwhelming users while delivering all necessary tools.',
        icon: Layers
    },
    {
        title: 'Market Differentiation',
        desc: 'Standing out in a crowded market required refined visual design and a targeted feature set that addressed specific pain points competitors overlooked.',
        icon: TrendingUp
    },
    {
        title: 'Scalability Requirements',
        desc: 'The solution needed to handle growth gracefully, supporting increasing users and data without compromising performance or user experience.',
        icon: Rocket
    }
];

export default function ProjectChallenge({ theme }: ProjectChallengeProps) {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                className="space-y-12"
            >
                <div className="flex items-center gap-4 mb-8">
                    <div className={`p-4 bg-gradient-to-br ${theme.accent} rounded-2xl`}>
                        <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">The Challenge</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {challenges.map((challenge, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className={`group p-8 rounded-3xl border-2 border-border bg-background hover:${theme.border} transition-all duration-300 shadow-lg hover:shadow-2xl`}
                        >
                            <div className={`inline-flex p-3 bg-gradient-to-br ${theme.accent} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                                <challenge.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:${theme.text} transition-colors">
                                {challenge.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {challenge.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
