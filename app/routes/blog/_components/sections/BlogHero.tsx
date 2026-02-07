'use client';

import { motion } from 'framer-motion';
import { Feather, TrendingUp, Zap, BookOpen } from 'lucide-react';
import { fadeInUp, staggerContainer, slideReveal } from '../utils/animations';

export default function BlogHero() {


    return (
        <section className="relative pt-24 pb-24 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
            {/* Animated Gradient Orbs */}
            <div className="absolute top-0 right-0 -z-10 opacity-20">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="w-[600px] h-[600px] bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 blur-[120px] rounded-full"
                />
            </div>
            <div className="absolute bottom-0 left-0 -z-10 opacity-15">
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="w-[500px] h-[500px] bg-gradient-to-tr from-blue-500 via-cyan-500 to-purple-500 blur-[100px] rounded-full"
                />
            </div>

            {/* Floating Icons */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-40 left-10 opacity-10"
            >
                <Feather className="w-16 h-16 text-purple-500" />
            </motion.div>
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-60 right-20 opacity-10"
            >
                <TrendingUp className="w-20 h-20 text-pink-500" />
            </motion.div>
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-40 left-1/4 opacity-10"
            >
                <Zap className="w-14 h-14 text-cyan-500" />
            </motion.div>

            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-0 -z-10 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}
            />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                className="text-center space-y-8 max-w-4xl mx-auto relative"
            >
                {/* Badge */}
                <motion.div variants={fadeInUp}>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-4 py-2 backdrop-blur-sm">
                        <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Knowledge Hub
                        </span>
                    </div>
                </motion.div>

                {/* Main Heading with Custom Flip Animation */}
                <div>
                    <motion.h1
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, margin: "-50px" }}
                        className="text-6xl md:text-8xl font-black tracking-tight leading-none flex flex-col items-center"
                    >
                        <motion.span
                            variants={slideReveal}
                            className="w-fit bg-gradient-to-r from-foreground via-purple-600 to-pink-600 bg-clip-text text-transparent"
                        >
                            Insights &
                        </motion.span>
                        <motion.span
                            variants={slideReveal}
                            className="w-fit mt-2 bg-gradient-to-r from-pink-600 via-purple-600 to-foreground bg-clip-text text-transparent"
                        >
                            Innovation
                        </motion.span>
                    </motion.h1>
                </div>

                {/* Description */}
                <motion.p
                    variants={fadeInUp}
                    className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                >
                    Explore expert articles on{' '}
                    <span className="text-purple-600 font-semibold">web development</span>,{' '}
                    <span className="text-pink-600 font-semibold">design trends</span>, and{' '}
                    <span className="text-cyan-600 font-semibold">digital innovation</span>.
                </motion.p>

                {/* Stats */}
                <motion.div
                    variants={fadeInUp}
                    className="flex flex-wrap justify-center gap-8 pt-2"
                >
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            50+
                        </div>
                        <div className="text-sm text-muted-foreground font-medium mt-1">Articles</div>
                    </div>
                    <div className="w-px bg-border" />
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                            10K+
                        </div>
                        <div className="text-sm text-muted-foreground font-medium mt-1">Readers</div>
                    </div>
                    <div className="w-px bg-border" />
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                            Weekly
                        </div>
                        <div className="text-sm text-muted-foreground font-medium mt-1">Updates</div>
                    </div>
                </motion.div>

                {/* Decorative Line */}
                <motion.div
                    variants={fadeInUp}
                    className="flex items-center justify-center gap-4 pt-4"
                >
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                    <BookOpen className="w-5 h-5 text-purple-500" />
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
                </motion.div>
            </motion.div>
        </section>
    );
}
