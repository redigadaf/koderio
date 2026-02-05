'use client';

import { motion } from 'framer-motion';
import { aboutData } from '../_data/aboutData';
import { Heart, Globe, Users, ArrowRight, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer, scrollViewport } from './animations';

const icons = [Heart, Users, Globe];

export default function SocialImpact() {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-slate-50/50">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-200/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={scrollViewport}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/50 text-purple-600 font-bold text-sm mb-6 border border-purple-200 backdrop-blur-sm">
                        <span className="tracking-wide uppercase">Giving Back</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-900">
                        Social <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600">Impact</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        We believe in using our success to create positive change in the world around us.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={scrollViewport}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {aboutData.socialImpact.map((item, index) => {
                        const Icon = icons[index % icons.length] || Heart;

                        return (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                                className="group relative p-8 rounded-[2rem] bg-[#130725] border border-white/10 shadow-xl overflow-hidden"
                            >
                                {/* Large Icon on Hover */}
                                <div className="absolute -bottom-10 -right-10 text-purple-500 opacity-0 group-hover:opacity-10 transition-all duration-700 scale-50 group-hover:scale-100 rotate-12 group-hover:rotate-0 pointer-events-none">
                                    <Icon size={240} strokeWidth={1} />
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div>
                                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-300 mb-6 group-hover:bg-purple-600 group-hover:text-white group-hover:border-transparent group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-lg">
                                            <Icon size={26} />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-200 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/60 leading-relaxed mb-8 group-hover:text-white/80 transition-colors">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 font-bold text-sm text-purple-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        <span className="relative">
                                            Read Story
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-300 transition-all duration-300 group-hover:w-full delay-100" />
                                        </span>
                                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
