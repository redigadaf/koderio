'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { ServiceData } from '../../_data/servicesData';
import { containerVariants, itemVariants } from '../animations/variants';

interface BenefitsSectionProps {
    service: ServiceData;
}

export default function BenefitsSection({ service }: BenefitsSectionProps) {
    return (
        <section className={`py-32 bg-gradient-to-br ${service.color.gradient} relative overflow-hidden`}>
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 2px, transparent 0)',
                backgroundSize: '48px 48px'
            }}></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-6">Why Choose Us</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Benefits that drive real results</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {service.benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, x: 5 }}
                            className="flex items-start gap-4 p-6 rounded-2xl bg-background/80 backdrop-blur-sm border-2 border-border/50 shadow-lg hover:shadow-xl transition-all group"
                        >
                            <motion.div
                                className={`flex-shrink-0 w-8 h-8 rounded-full ${service.color.accent} flex items-center justify-center mt-1`}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Check className="w-5 h-5 text-white" />
                            </motion.div>
                            <p className="text-foreground font-semibold text-lg group-hover:text-purple-600 transition-colors">{benefit}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
