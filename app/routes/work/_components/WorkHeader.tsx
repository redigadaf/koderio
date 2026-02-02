'use client';

import { motion } from 'framer-motion';

export function WorkHeader() {
    return (
        <section className="relative w-full pt-24 md:pt-28 lg:pt-32 pb-6 md:pb-8 lg:pb-12 px-4 md:px-8 lg:px-12 bg-background overflow-hidden border-b border-border/40">
            {/* Organic Aurora Background - Light Version */}
            <div className="absolute top-0 right-0 w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] bg-purple-500/10 blur-[120px] rounded-full mix-blend-multiply pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] lg:w-[700px] h-[300px] md:h-[500px] lg:h-[700px] bg-indigo-500/10 blur-[100px] rounded-full mix-blend-multiply pointer-events-none transform -translate-x-1/3 translate-y-1/3" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay" />

            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 md:gap-8 lg:gap-12 pb-6 md:pb-8">
                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-2 mb-4 md:mb-6"
                        >
                            <div className="h-[1px] w-6 md:w-8 bg-purple-600" />
                            <span className="text-purple-600 font-medium tracking-widest text-[10px] md:text-xs uppercase">
                                Selected Work
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tight leading-[1.1]"
                        >
                            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Digital</span> <br />
                            Excellence.
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:max-w-md xl:max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed lg:text-right"
                    >
                        We create defining digital experiences for forward-thinking brands.
                        Each project is a masterpiece of strategy, design, and technology.
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
