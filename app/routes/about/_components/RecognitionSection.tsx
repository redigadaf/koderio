'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Trophy, ExternalLink, Star, Award } from 'lucide-react';
import { fadeInUp, staggerContainer, slideInRight } from './animations';

import { aboutData } from '../_data/aboutData';

export const RecognitionSection = () => {
    return (
        <section className="py-20 px-6 relative overflow-hidden bg-white">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-100/40 rounded-full blur-[100px] pointer-events-none translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative rounded-[3rem] bg-[#0F0518] border border-white/10 p-8 md:p-12 lg:p-16 overflow-hidden shadow-2xl text-white isolation-auto"
                >
                    {/* Noise Texture & Gradients */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-overlay pointer-events-none" />
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />

                    <div className="relative z-10 grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                        {/* Left Content */}
                        <div className="lg:col-span-2 flex flex-col h-full justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="h-[1px] w-8 bg-gradient-to-r from-purple-500 to-transparent" />
                                    <span className="text-purple-400 font-mono tracking-widest uppercase text-xs">Hall of Fame</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[0.9]">
                                    Global<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Recognition</span>
                                </h2>
                                <p className="text-lg text-white/50 mb-10 max-w-sm leading-relaxed font-light">
                                    Our work has been featured and awarded by the most prestigious design communities on the web.
                                </p>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-fit px-8 py-4 rounded-full bg-white text-black font-bold flex items-center gap-3 group hover:bg-purple-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
                            >
                                <Trophy size={18} className="text-purple-600" />
                                <span>View All Awards</span>
                                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </motion.button>
                        </div>

                        {/* Right Content - Modern List */}
                        <motion.div
                            className="lg:col-span-3 grid gap-3"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {aboutData.awards.map((award: any, i: number) => (
                                <motion.div
                                    key={i}
                                    variants={slideInRight}
                                    whileHover={{
                                        x: 10,
                                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                        transition: { duration: 0.2, ease: "easeOut" }
                                    }}
                                    className="group relative flex items-center justify-between p-5 md:p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm transition-colors cursor-default overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="flex items-center gap-5 relative z-10">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-white/80 group-hover:text-amber-300 group-hover:border-amber-500/30 transition-all duration-300 shadow-inner group-hover:shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                                            <Award size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">{award.title}</h3>
                                            <div className="flex items-center gap-2 text-sm text-white/40 group-hover:text-white/60">
                                                <span>{award.org}</span>
                                                <span className="w-1 h-1 rounded-full bg-white/20" />
                                                <span className="font-mono text-purple-400">{award.year}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative z-10 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-300 rotate-45 group-hover:rotate-0">
                                        <ExternalLink size={18} />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
