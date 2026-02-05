'use client';

import { motion } from 'framer-motion';
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
                            whileHover={{ y: -5 }}
                            className="group relative h-full flex flex-col justify-between"
                        >
                            {/* Card Background & Border */}
                            <div className="absolute inset-0 bg-background/90 backdrop-blur-xl rounded-2xl border border-black/5 dark:border-white/10 shadow-sm group-hover:shadow-xl transition-all duration-300" />

                            {/* Hover Gradient Border Effect */}
                            <div className={`absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br ${service.color.primary} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />

                            <div className="relative p-8 z-10">
                                {/* Header: Number & Line */}
                                <div className="flex items-center gap-4 mb-4">
                                    <span className={`font-mono text-xl font-black bg-gradient-to-r ${service.color.primary} bg-clip-text text-transparent`}>
                                        {(index + 1).toString().padStart(2, '0')}
                                    </span>
                                    <div className={`h-[2px] w-12 rounded-full bg-gradient-to-r ${service.color.primary} opacity-30 group-hover:w-full group-hover:opacity-100 transition-all duration-500`} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold leading-relaxed text-foreground group-hover:text-foreground transition-colors">
                                    {benefit}
                                </h3>
                            </div>

                            {/* Bottom Ambient Glow */}
                            <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${service.color.primary} opacity-[0.05] group-hover:opacity-10 blur-3xl rounded-tl-full transition-opacity duration-500`} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
