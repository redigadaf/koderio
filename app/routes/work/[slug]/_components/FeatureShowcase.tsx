'use client';

import { motion } from 'framer-motion';
import { CategoryTheme } from './theme';

interface FeatureShowcaseProps {
    imageUrl: string;
    theme: CategoryTheme;
}

const features = [
    {
        title: 'Intuitive Dashboard',
        desc: 'A centralized command center that provides real-time insights and quick access to all critical functions. Users can monitor key metrics, manage tasks, and navigate seamlessly across the platform.'
    },
    {
        title: 'Advanced Management Tools',
        desc: 'Powerful tools that streamline complex workflows. From automated processes to detailed analytics, every feature is designed to save time and improve decision-making.'
    },
    {
        title: 'Seamless Collaboration',
        desc: 'Built-in collaboration features that keep teams aligned and productive. Real-time updates, shared workspaces, and intelligent notifications ensure nothing falls through the cracks.'
    }
];

export default function FeatureShowcase({ imageUrl, theme }: FeatureShowcaseProps) {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-20"
            >
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">Key Features</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Powerful capabilities designed to transform how users work
                    </p>
                </div>

                {/* Features */}
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                        className={`space-y-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                    >
                        <div className="space-y-4">
                            <span className={`inline-block px-4 py-2 ${theme.accent} text-white text-xs font-bold uppercase tracking-widest rounded-full`}>
                                Feature {index + 1}
                            </span>
                            <h3 className="text-3xl md:text-5xl font-black text-foreground">
                                {feature.title}
                            </h3>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                                {feature.desc}
                            </p>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className={`relative rounded-3xl overflow-hidden border-2 ${theme.border} bg-muted/50 aspect-video shadow-2xl ${theme.glow}`}
                        >
                            <img
                                src={imageUrl}
                                alt={feature.title}
                                className="w-full h-full object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-br ${theme.primary} opacity-20 mix-blend-multiply`} />
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
