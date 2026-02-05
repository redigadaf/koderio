'use client';

import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1] as const
        }
    }
};

const floatingAnimation = {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
    transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const
    }
};

export function WorkHeader() {
    return (
        <section className="relative w-full pt-24 md:pt-28 lg:pt-32 pb-6 md:pb-8 lg:pb-12 px-4 md:px-8 lg:px-12 bg-background overflow-hidden border-b border-border/40">
            {/* Animated Aurora Background */}
            <motion.div
                animate={floatingAnimation}
                className="absolute top-0 right-0 w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] bg-purple-500/10 blur-[120px] rounded-full mix-blend-multiply pointer-events-none transform translate-x-1/3 -translate-y-1/3"
            />
            <motion.div
                animate={{
                    ...floatingAnimation,
                    transition: { ...floatingAnimation.transition, delay: 1 }
                }}
                className="absolute bottom-0 left-0 w-[300px] md:w-[500px] lg:w-[700px] h-[300px] md:h-[500px] lg:h-[700px] bg-indigo-500/10 blur-[100px] rounded-full mix-blend-multiply pointer-events-none transform -translate-x-1/3 translate-y-1/3"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"
            />

            <div className="relative z-10 max-w-[1400px] mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 md:gap-8 lg:gap-12 pb-6 md:pb-8"
                >
                    <div className="flex-1 w-full">
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-2 mb-4 md:mb-6"
                        >
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: 32 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="h-[1px] bg-purple-600"
                            />
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="text-purple-600 font-medium tracking-widest text-[10px] md:text-xs uppercase"
                            >
                                Selected Work
                            </motion.span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tight leading-[1.1]"
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="inline-block"
                            >
                                Crafting{' '}
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.4 }}
                                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600"
                            >
                                Digital
                            </motion.span>
                            <br />
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="inline-block"
                            >
                                Excellence.
                            </motion.span>
                        </motion.h1>
                    </div>

                    <motion.div
                        variants={itemVariants}
                        className="w-full lg:max-w-md xl:max-w-lg text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed lg:text-right"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            We create defining digital experiences for forward-thinking brands.
                            Each project is a masterpiece of strategy, design, and technology.
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
