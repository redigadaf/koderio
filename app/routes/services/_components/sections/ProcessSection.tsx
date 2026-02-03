'use client';

import { motion } from 'framer-motion';
import { ServiceData } from '../../_data/servicesData';

interface ProcessSectionProps {
    service: ServiceData;
}

export default function ProcessSection({ service }: ProcessSectionProps) {
    return (
        <section className="py-32 max-w-7xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
            >
                <h2 className="text-5xl md:text-6xl font-black mb-6">Our Process</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">A proven approach to deliver excellence</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {/* Connecting Line for Desktop */}
                <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-border to-transparent" />

                {service.process.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        whileHover={{ y: -12, scale: 1.03 }}
                        className="relative group"
                    >
                        <div className="relative p-8 rounded-3xl border-2 border-border bg-background shadow-lg hover:shadow-2xl transition-all h-full">
                            {/* Step Number with Animation */}
                            <motion.div
                                className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.color.accent} text-white font-black text-2xl mb-6 shadow-lg`}
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <motion.div
                                    className={`absolute inset-0 ${service.color.accent} rounded-2xl blur-xl opacity-50`}
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 0.8, 0.5]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: index * 0.2
                                    }}
                                />
                                <span className="relative z-10">{step.step}</span>
                            </motion.div>

                            <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                            {/* Hover Effect Line */}
                            <motion.div
                                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color.primary} rounded-b-3xl`}
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
