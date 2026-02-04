'use client';

import { motion } from 'framer-motion';
import { aboutData } from '../_data/aboutData';
import { Quote, Sparkles, Users, Trophy, Coffee, TrendingUp, Smile, Heart, Target, Lightbulb } from 'lucide-react';

const icons = [Sparkles, Users, Trophy, Coffee, TrendingUp, Smile, Heart, Target, Lightbulb];

export default function CultureGallery() {
    return (
        <section className="py-32 px-6 overflow-hidden bg-background relative">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-normal" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-normal" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-6">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Culture</span></h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        It's not just about code. It's about the values that drive us every day.
                    </p>
                </motion.div>

                {/* Grid Layout for Symmetry */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {aboutData.culture.map((item, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="h-full"
                            >
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="h-full"
                                >
                                    <div className="h-full p-[1px] rounded-[2rem] bg-gradient-to-br from-white/20 to-white/5 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 ease-out">
                                        <div className="bg-white/80 dark:bg-[#0f0518]/90 backdrop-blur-xl p-8 rounded-[2rem] h-full flex flex-col relative overflow-hidden group-hover:bg-white/95 dark:group-hover:bg-black/95 transition-colors duration-300 ease-out shadow-xl group">

                                            {/* Massive Watermark Icon */}
                                            <div className="absolute -right-8 -bottom-8 text-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                                                <Icon size={200} strokeWidth={1} />
                                            </div>

                                            {/* Quote Icon */}
                                            <div className="mb-6 text-purple-200 group-hover:text-purple-500 transition-colors duration-300 ease-out flex justify-between items-start">
                                                <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 ease-out">
                                                    <Icon size={32} />
                                                </div>
                                                <Quote size={24} className="rotate-180 fill-current opacity-50" />
                                            </div>

                                            {/* Content */}
                                            <div className="relative z-10 flex-grow">
                                                <p className="text-lg md:text-xl font-medium leading-relaxed text-foreground/80 group-hover:text-foreground transition-colors duration-300 ease-out">
                                                    {item.text}
                                                </p>
                                            </div>

                                            {/* Bottom Line */}
                                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
