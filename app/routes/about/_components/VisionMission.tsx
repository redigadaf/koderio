'use client';

import { motion } from 'framer-motion';
import { Compass, Target, Sparkles, ArrowRight } from 'lucide-react';
import { aboutData } from '../_data/aboutData';
import { fadeInUp, slideInLeft, slideInRight, auroraBackground, scrollViewport } from './animations';

export default function VisionMission() {
    return (
        <section className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={scrollViewport}
                    className="relative rounded-[3rem] overflow-hidden bg-[#130725] text-white p-8 md:p-16 shadow-2xl group/main"
                >
                    {/* Animated Aurora Background - Faster & More Vivid */}
                    <motion.div
                        variants={auroraBackground}
                        animate="animate"
                        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.4),rgba(236,72,153,0.4),transparent_60%)] blur-[80px]"
                    />

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Side: Main Text */}
                        <div>
                            <motion.div
                                variants={slideInLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={scrollViewport}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: -2 }}
                                    transition={{ duration: 0.2 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-purple-500/30 text-purple-200 font-bold text-sm mb-8 backdrop-blur-md cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                                >
                                    <Sparkles size={14} className="fill-purple-200 animate-pulse" />
                                    <span>Core Values</span>
                                </motion.div>

                                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight drop-shadow-lg">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-600">
                                        {aboutData.visionMission.title}
                                    </span>
                                </h2>
                                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-xl font-medium">
                                    {aboutData.visionMission.description}
                                </p>
                            </motion.div>
                        </div>

                        {/* Right Side: Interactive Cards - MAXED OUT ANIMATIONS */}
                        <div className="space-y-6 perspective-1000">
                            {/* Vision Card */}
                            <motion.div
                                variants={slideInRight}
                                initial="hidden"
                                whileInView="visible"
                                viewport={scrollViewport}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: -5,
                                    x: -10,
                                    boxShadow: "0 20px 40px -10px rgba(126, 34, 206, 0.4)",
                                    backgroundColor: "rgba(147, 51, 234, 0.1)",
                                    border: "1px solid rgba(168, 85, 247, 0.5)",
                                    transition: { duration: 0.2, ease: "easeOut" }
                                }}
                                className="group p-8 rounded-[2.5rem] bg-[#2a1b3d]/40 border border-white/10 relative overflow-hidden cursor-pointer backdrop-blur-md"
                            >
                                {/* Explosive Glow */}
                                <div className="absolute -right-20 -top-20 w-60 h-60 bg-purple-500/30 rounded-full blur-3xl group-hover:scale-150 group-hover:bg-purple-500/50 transition-transform duration-300 ease-out" />

                                <div className="relative flex items-center gap-6">
                                    <div className="w-20 h-20 rounded-3xl bg-[#2a1b3d] border border-white/10 flex items-center justify-center flex-shrink-0 shadow-xl group-hover:bg-purple-600 group-hover:rotate-6 transition-all duration-500 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/0 to-purple-400/0 group-hover:from-purple-400/20 group-hover:to-transparent transition-all duration-500" />
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        >
                                            <Compass size={36} className="text-purple-400 group-hover:text-white transition-colors duration-200" />
                                        </motion.div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors duration-200">Our Vision</h3>
                                            <ArrowRight className="text-purple-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 font-bold" />
                                        </div>
                                        <p className="text-white/60 leading-relaxed text-sm md:text-base group-hover:text-white/90 group-hover:translate-x-1 transition-all duration-200">
                                            {aboutData.visionMission.vision}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Mission Card */}
                            <motion.div
                                variants={slideInRight}
                                initial="hidden"
                                whileInView="visible"
                                viewport={scrollViewport}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: -5,
                                    x: -10,
                                    boxShadow: "0 20px 40px -10px rgba(236, 72, 153, 0.4)",
                                    backgroundColor: "rgba(236, 72, 153, 0.1)",
                                    border: "1px solid rgba(236, 72, 153, 0.5)",
                                    transition: { duration: 0.2, ease: "easeOut" }
                                }}
                                className="group p-8 rounded-[2.5rem] bg-[#2a1b3d]/40 border border-white/10 relative overflow-hidden cursor-pointer backdrop-blur-md"
                            >
                                {/* Explosive Glow */}
                                <div className="absolute -right-20 -top-20 w-60 h-60 bg-pink-500/30 rounded-full blur-3xl group-hover:scale-150 group-hover:bg-pink-500/50 transition-transform duration-300 ease-out" />

                                <div className="relative flex items-center gap-6">
                                    <div className="w-20 h-20 rounded-3xl bg-[#2a1b3d] border border-white/10 flex items-center justify-center flex-shrink-0 shadow-xl group-hover:bg-pink-600 group-hover:-rotate-6 transition-all duration-500 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-400/0 to-pink-400/0 group-hover:from-pink-400/20 group-hover:to-transparent transition-all duration-500" />
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <Target size={36} className="text-pink-400 group-hover:text-white transition-colors duration-200" />
                                        </motion.div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-2xl font-bold text-white group-hover:text-pink-200 transition-colors duration-200">Our Mission</h3>
                                            <ArrowRight className="text-pink-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 font-bold" />
                                        </div>
                                        <p className="text-white/60 leading-relaxed text-sm md:text-base group-hover:text-white/90 group-hover:translate-x-1 transition-all duration-200">
                                            {aboutData.visionMission.mission}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
