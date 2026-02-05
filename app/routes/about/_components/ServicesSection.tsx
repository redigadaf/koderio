'use client';

import { motion, Variants } from 'framer-motion';
import { aboutData } from '../_data/aboutData';
import { ServiceCard } from './ServiceCard';
import { scrollViewport } from './animations';
import { Sparkles } from 'lucide-react';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

export default function ServicesSection() {
    return (
        <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-b from-white via-purple-50/20 to-white">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-200/30 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none opacity-20" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={scrollViewport}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8"
                >
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={scrollViewport}
                            transition={{ duration: 0.4 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-600 font-bold text-xs mb-6"
                        >
                            <Sparkles size={14} className="fill-purple-600" />
                            <span className="tracking-wider uppercase">Our Expertise</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-slate-900 mb-0">
                            Crafting Digital{" "}
                            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600">
                                Masterpieces
                            </span>
                        </h2>
                    </div>
                    <motion.p
                        className="text-lg text-slate-500 max-w-sm leading-relaxed border-l-4 border-purple-400 pl-6 py-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={scrollViewport}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        We blend aesthetic beauty with technical precision to create digital experiences that define the future.
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid md:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={scrollViewport}
                >
                    {aboutData.services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
