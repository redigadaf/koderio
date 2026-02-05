'use client';

import { motion } from 'framer-motion';
import {
    Sparkles,
    Layers,
    LayoutTemplate,
    Zap,
    Search,
    Smartphone,
    Gauge,
    WifiOff,
    Bell,
    Users,
    Frame,
    Palette,
    CheckCircle,
    LucideIcon
} from 'lucide-react';
import { ServiceData } from '../../_data/servicesData';
import { containerVariants, itemVariants } from '../animations/variants';

interface FeaturesSectionProps {
    service: ServiceData;
}

const iconMap: Record<string, LucideIcon> = {
    'Layers': Layers,
    'LayoutTemplate': LayoutTemplate,
    'Zap': Zap,
    'Search': Search,
    'Smartphone': Smartphone,
    'Gauge': Gauge,
    'WifiOff': WifiOff,
    'Bell': Bell,
    'Users': Users,
    'Frame': Frame,
    'Palette': Palette,
    'CheckCircle': CheckCircle
};

export default function FeaturesSection({ service }: FeaturesSectionProps) {
    return (
        <section className="py-32 max-w-7xl mx-auto px-6 relative">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-full blur-3xl" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
            >
                <h2 className="text-5xl md:text-6xl font-black mb-6">What We Offer</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Comprehensive solutions tailored to your needs</p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {service.features.map((feature, index) => {
                    const IconComponent = iconMap[feature.icon] || Sparkles;
                    return (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="group relative h-full p-8 rounded-3xl bg-background/50 hover:bg-background/80 backdrop-blur-sm border border-border/50 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                        >
                            {/* Gradient Border on Hover */}
                            <div className={`absolute inset-0 rounded-3xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.color.primary} -z-10`} />

                            {/* Inner Background for Border Effect */}
                            <div className="absolute inset-[1px] rounded-[22px] bg-background/90 -z-10" />

                            {/* Background Icon Watermark */}
                            <motion.div
                                className="absolute -bottom-8 -right-8 w-48 h-48 opacity-0 group-hover:opacity-[0.1] select-none pointer-events-none transition-opacity duration-500"
                                initial={{ rotate: 0 }}
                                whileInView={{ rotate: 15 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6 }}
                            >
                                <IconComponent className={`w-full h-full ${service.color.accent.replace('bg-', 'text-')}`} strokeWidth={0.5} />
                            </motion.div>

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Icon Container */}
                                <div className={`mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color.primary} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                    <IconComponent className="w-7 h-7 text-white" strokeWidth={1.5} />
                                </div>

                                <h3 className="text-2xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-foreground/70 group-hover:bg-clip-text transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed text-base">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}
