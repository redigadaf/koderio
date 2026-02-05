'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Palette, Code, Rocket, Users, TrendingUp } from 'lucide-react';

const processes = [
    {
        icon: Lightbulb,
        number: '01',
        title: 'Discovery & Strategy',
        description: 'We dive deep into understanding your business goals, target audience, and market landscape to craft a winning strategy.',
        color: 'from-purple-500 to-indigo-500'
    },
    {
        icon: Palette,
        number: '02',
        title: 'Design & Prototype',
        description: 'Our designers create stunning, user-centric interfaces that bring your vision to life with pixel-perfect precision.',
        color: 'from-indigo-500 to-purple-500'
    },
    {
        icon: Code,
        number: '03',
        title: 'Development',
        description: 'Expert developers transform designs into robust, scalable applications using cutting-edge technologies.',
        color: 'from-purple-500 to-pink-500'
    },
    {
        icon: Rocket,
        number: '04',
        title: 'Launch & Optimize',
        description: 'We ensure a smooth launch and continuously optimize performance based on real-world data and user feedback.',
        color: 'from-pink-500 to-purple-500'
    }
];

const stats = [
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Code, value: '100+', label: 'Projects Delivered' },
    { icon: TrendingUp, value: '98%', label: 'Success Rate' }
];

export function WorkProcess() {
    return (
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-background via-purple-50/30 to-background overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full" />

            <div className="relative z-10 container px-4 md:px-6 lg:px-8 mx-auto max-w-[1400px]">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="h-[1px] w-8 bg-purple-600" />
                        <span className="text-purple-600 font-medium tracking-widest text-xs uppercase">
                            Our Process
                        </span>
                        <div className="h-[1px] w-8 bg-purple-600" />
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                        How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600">Work</span>
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                        A proven methodology that delivers exceptional results every time
                    </p>
                </motion.div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
                    {processes.map((process, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                                ease: [0.25, 0.4, 0.25, 1]
                            }}
                            whileHover={{ y: -12, scale: 1.02 }}
                            className="group relative"
                        >
                            {/* Card */}
                            <motion.div
                                className="relative p-8 rounded-3xl bg-background border-2 border-border transition-all duration-300 shadow-lg h-full"
                                whileHover={{
                                    borderColor: "rgba(147, 51, 234, 0.5)",
                                    boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.25)"
                                }}
                            >
                                {/* Number Badge */}
                                <motion.div
                                    className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg"
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {process.number}
                                </motion.div>

                                {/* Icon */}
                                <motion.div
                                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${process.color} mb-6 relative`}
                                    whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <process.icon className="w-6 h-6 text-white relative z-10" />

                                    {/* Pulse effect */}
                                    <motion.div
                                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${process.color}`}
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.5, 0, 0.5]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </motion.div>

                                {/* Content */}
                                <motion.h3
                                    className="text-xl font-bold text-foreground mb-3 transition-colors"
                                    whileHover={{ color: "rgb(147, 51, 234)" }}
                                >
                                    {process.title}
                                </motion.h3>
                                <motion.p
                                    className="text-muted-foreground text-sm leading-relaxed"
                                    initial={{ opacity: 0.7 }}
                                    whileHover={{ opacity: 1 }}
                                >
                                    {process.description}
                                </motion.p>

                                {/* Connecting Line (except last item) */}
                                {index < processes.length - 1 && (
                                    <motion.div
                                        className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-purple-500/50 to-transparent overflow-hidden"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                                        style={{ transformOrigin: "left" }}
                                    >
                                        {/* Animated dot */}
                                        <motion.div
                                            className="absolute top-0 left-0 w-1 h-full bg-purple-500"
                                            animate={{
                                                x: [0, 32, 0]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: index * 0.5
                                            }}
                                        />
                                    </motion.div>
                                )}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                    className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 overflow-hidden"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)',
                            backgroundSize: '48px 48px'
                        }}></div>
                    </div>

                    {/* Animated floating elements */}
                    <motion.div
                        className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
                        animate={{
                            y: [0, -20, 0],
                            x: [0, 10, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
                        animate={{
                            y: [0, 20, 0],
                            x: [0, -10, 0],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    type: "spring",
                                    bounce: 0.4
                                }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="text-center"
                            >
                                <motion.div
                                    className="inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-sm mb-4"
                                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <stat.icon className="w-6 h-6 text-white" />
                                </motion.div>

                                <motion.div
                                    className="text-4xl md:text-5xl font-black text-white mb-2"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    {stat.value}
                                </motion.div>

                                <motion.div
                                    className="text-white/90 font-medium text-sm md:text-base uppercase tracking-wider"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {stat.label}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <motion.p
                        className="text-muted-foreground mb-6 text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Ready to start your project?
                    </motion.p>

                    <motion.button
                        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        {/* Animated background */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Shine effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{
                                x: ["-200%", "200%"]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />

                        <span className="relative z-10">Let's Work Together</span>
                        <motion.div
                            animate={{
                                x: [0, 5, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative z-10"
                        >
                            <Rocket className="w-5 h-5" />
                        </motion.div>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
