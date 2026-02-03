'use client';

import { motion } from 'framer-motion';
import { ServiceData } from '../../_data/servicesData';
import { containerVariants, itemVariants } from '../animations/variants';

interface TechnologiesSectionProps {
    service: ServiceData;
}

export default function TechnologiesSection({ service }: TechnologiesSectionProps) {
    if (!service.technologies || service.technologies.length === 0) {
        return null;
    }

    return (
        <section className={`py-32 bg-gradient-to-br ${service.color.gradient} relative overflow-hidden`}>
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%, currentColor), linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%, currentColor)',
                backgroundSize: '60px 60px',
                backgroundPosition: '0 0, 30px 30px'
            }}></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-6">Tech Stack</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Cutting-edge technologies we work with</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    {service.technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.15, y: -5, rotate: 2 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group"
                        >
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-r ${service.color.primary} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}
                            />
                            <div className="relative px-8 py-4 rounded-full bg-background border-2 border-border font-bold text-foreground shadow-lg hover:shadow-2xl transition-all cursor-pointer">
                                {tech}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
