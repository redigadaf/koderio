'use client';

import { motion } from 'framer-motion';
import { aboutData } from '../_data/aboutData';
import { ArrowUpRight, Linkedin, Twitter, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer, scrollViewport } from './animations';

export default function TeamGrid() {
    return (
        <section className="py-16 px-6 bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-100/40 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 translate-y-1/3" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={scrollViewport}
                    variants={fadeInUp}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/50 text-purple-600 font-bold text-sm mb-6 border border-purple-200 backdrop-blur-sm">
                            <span className="text-purple-600 font-bold tracking-wider uppercase text-sm">Our Experts</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-900">
                            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600">Minds</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                            A collective of visionaries, creators, and strategists united by a passion for digital excellence.
                        </p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative overflow-hidden px-8 py-4 rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold flex items-center gap-2 group"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out skew-x-12" />
                        <span className="relative flex items-center gap-2">
                            Join our team
                            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>
                    </motion.button>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={scrollViewport}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {aboutData.team.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="group relative"
                        >
                            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-5 bg-slate-200">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
                                    loading="lazy"
                                />

                                {/* Gradient Overlay - Always visible at bottom for text readability, stronger on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />

                                {/* Text Content - Now inside image */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300">
                                        {member.name}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-white/70 uppercase tracking-wide group-hover:text-white transition-colors">
                                            {member.role}
                                        </p>

                                        {/* Social Icons - Compact inline version */}
                                        <div className="flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                className="p-2 rounded-full bg-white/10 hover:bg-purple-500 text-white backdrop-blur-sm transition-colors"
                                            >
                                                <Linkedin size={14} />
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                className="p-2 rounded-full bg-white/10 hover:bg-sky-500 text-white backdrop-blur-sm transition-colors"
                                            >
                                                <Twitter size={14} />
                                            </motion.button>
                                        </div>
                                    </div>
                                    <div className="h-0.5 w-0 bg-gradient-to-r from-purple-500 to-pink-500 mt-4 group-hover:w-full transition-all duration-500 ease-out" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
