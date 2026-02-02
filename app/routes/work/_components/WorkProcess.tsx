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
                        How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Work</span>
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
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="relative p-8 rounded-3xl bg-background border-2 border-border hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 h-full">
                                {/* Number Badge */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                    {process.number}
                                </div>

                                {/* Icon */}
                                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${process.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <process.icon className="w-6 h-6 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-purple-600 transition-colors">
                                    {process.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {process.description}
                                </p>

                                {/* Connecting Line (except last item) */}
                                {index < processes.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-purple-500/50 to-transparent" />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 overflow-hidden"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)',
                            backgroundSize: '48px 48px'
                        }}></div>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-white/90 font-medium text-sm md:text-base uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-muted-foreground mb-6 text-lg">
                        Ready to start your project?
                    </p>
                    <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                        Let's Work Together
                        <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
