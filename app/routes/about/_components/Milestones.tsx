'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { aboutData } from '../_data/aboutData';
import { fadeInUp } from './animations';

export default function Milestones() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end 80%"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="py-24 px-6 relative overflow-hidden bg-background">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    variants={fadeInUp}
                    className="text-4xl md:text-5xl font-bold mb-24 text-center leading-tight"
                >
                    Our Journey <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-3xl md:text-4xl">Through the years</span>
                </motion.h2>

                <div className="relative">
                    {/* Central Line Base */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-muted -translate-x-1/2 hidden md:block" />

                    {/* Animated Line Overlay */}
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-600 via-pink-500 to-purple-600 -translate-x-1/2 hidden md:block z-0 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                    />

                    <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-muted block md:hidden" />
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-4 top-0 bottom-0 w-[2px] bg-primary block md:hidden z-0"
                    />

                    <div className="space-y-24">
                        {aboutData.milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.4, margin: "-50px" }}
                                variants={fadeInUp}
                                className={`flex flex-col md:flex-row gap-12 relative items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Dot Marker with Pulse */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-[7px] md:-translate-x-1/2 z-10 flex items-center justify-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: false }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="w-4 h-4 rounded-full bg-background border-4 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)] z-20 relative"
                                    >
                                        {/* Center White Dot */}
                                        <div className="absolute inset-0 m-auto w-1 h-1 bg-white rounded-full" />
                                    </motion.div>
                                    <div className="absolute w-8 h-8 rounded-full bg-purple-500/30 animate-ping" />
                                </div>

                                <div className="flex-1 w-full pl-12 md:pl-0 group">
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        className={`relative p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 hover:from-purple-500 hover:to-pink-500 transition-all duration-500 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'
                                            }`}>
                                        <div className="relative bg-background/80 dark:bg-slate-950/80 backdrop-blur-xl p-8 rounded-2xl overflow-hidden h-full border border-white/10 group-hover:border-transparent transition-all">
                                            {/* Watermark Year */}
                                            <div className="absolute -right-4 -top-6 text-9xl font-black text-foreground/5 opacity-5 group-hover:opacity-10 group-hover:text-purple-500 transition-all duration-500 z-0">
                                                {milestone.year}
                                            </div>

                                            {/* Content */}
                                            <div className="relative z-10">
                                                <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-white bg-purple-500 rounded-full shadow-[0_5px_15px_rgba(168,85,247,0.4)] group-hover:bg-pink-500 transition-colors duration-500">
                                                    {milestone.year}
                                                </div>
                                                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">
                                                    {milestone.title}
                                                </h3>
                                                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                                                    {milestone.description}
                                                </p>
                                            </div>

                                            {/* Highlight Gradient Effect on Hover */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:via-purple-500/5 transition-all duration-700 pointer-events-none" />
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="flex-1 hidden md:block" /> {/* Spacer */}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
