'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { ServiceData } from '../../_data/servicesData';
import { containerVariants, itemVariants } from '../animations/variants';

interface FeaturesSectionProps {
    service: ServiceData;
}

export default function FeaturesSection({ service }: FeaturesSectionProps) {
    return (
        <section className="py-32 max-w-7xl mx-auto px-6 relative">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6"
                >
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-semibold text-purple-600">Key Features</span>
                </motion.div>
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
                {service.features.map((feature, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="group relative p-8 rounded-3xl border-2 border-border bg-gradient-to-br from-background to-muted/30 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                    >
                        {/* Hover Gradient */}
                        <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${service.color.primary} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                        />

                        {/* Animated Corner Accent */}
                        <motion.div
                            className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color.primary} opacity-10 rounded-bl-full`}
                            initial={{ scale: 0, rotate: 0 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: index * 0.1 }}
                        />

                        <div className="relative z-10">
                            <motion.div
                                className="text-6xl mb-6 inline-block"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {feature.icon}
                            </motion.div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                        </div>

                        {/* Animated Border */}
                        <motion.div
                            className={`absolute inset-0 rounded-3xl border-2 ${service.color.accent} opacity-0 group-hover:opacity-20`}
                            initial={false}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
