'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';
import { ServiceData } from '../../_data/servicesData';

interface CTASectionProps {
    service: ServiceData;
}

export default function CTASection({ service }: CTASectionProps) {
    return (
        <section className="py-32 max-w-7xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className={`relative p-16 md:p-24 rounded-[3rem] bg-gradient-to-br ${service.color.primary} text-white text-center overflow-hidden shadow-2xl`}
            >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)',
                            backgroundSize: '48px 48px'
                        }}
                        animate={{
                            backgroundPosition: ['0px 0px', '48px 48px']
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                </div>

                {/* Floating Elements */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-20 h-20 border-2 border-white/20 rounded-full"
                        animate={{
                            y: [0, -30, 0],
                            x: [0, 20, 0],
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            delay: i * 0.5
                        }}
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 2) * 40}%`
                        }}
                    />
                ))}

                <div className="relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-black mb-8"
                    >
                        Ready to Start?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto font-medium"
                    >
                        Let's transform your vision into reality. Get in touch and let's create something extraordinary together.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-10 py-5 bg-white text-foreground font-bold text-lg rounded-full shadow-2xl overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.5 }}
                            />
                            <span className="relative z-10 flex items-center gap-2">
                                Start a Project
                                <Sparkles className="w-5 h-5" />
                            </span>
                        </motion.button>
                        <Link href="/routes/work">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg rounded-full hover:bg-white/20 transition-all shadow-xl"
                            >
                                View Portfolio
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
