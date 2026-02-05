'use client';

import { motion } from 'framer-motion';
import { aboutData } from '../_data/aboutData';
import { fadeInUp, staggerContainer, scrollViewport } from './animations';

export default function AboutHero() {
    // Word animation setup
    const titleWords = "We build digital experiences that matter.".split(" ");

    return (
        <section className="pt-32 pb-20 px-6 relative overflow-hidden min-h-[90vh] flex flex-col justify-center">
            {/* Grid Pattern Background - Purple Tinted Animated */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8c7ce00a_1px,transparent_1px),linear-gradient(to_bottom,#8c7ce00a_1px,transparent_1px)] bg-[size:40px_40px]">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-purple-500/10 opacity-50 blur-[100px]"
                />
            </div>

            {/* Floating Decorative Elements - Faster Animation */}
            <motion.div
                animate={{ y: [0, -40, 0], rotate: [0, 10, 0], x: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-40 right-[10%] w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-3xl border border-white/20 hidden lg:block shadow-lg"
            />
            <motion.div
                animate={{ y: [0, 50, 0], rotate: [0, -15, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-40 left-[5%] w-32 h-32 rounded-full bg-gradient-to-tr from-orange-400/20 to-pink-400/20 backdrop-blur-3xl border border-white/20 hidden lg:block shadow-lg"
            />

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={scrollViewport}
                    className="grid lg:grid-cols-2 gap-16 items-center mb-24"
                >
                    {/* Left Content */}
                    <div>
                        <motion.div
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20 cursor-default"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            About Koderio
                        </motion.div>

                        <div className="mb-8 overflow-hidden">
                            <motion.h1
                                className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight flex flex-wrap gap-x-4"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={scrollViewport}
                            >
                                {titleWords.map((word, i) => (
                                    <motion.span
                                        key={i}
                                        variants={{
                                            hidden: { y: 100, opacity: 0, rotate: 10 },
                                            visible: {
                                                y: 0,
                                                opacity: 1,
                                                rotate: 0,
                                                transition: { type: "spring", stiffness: 100, damping: 20 }
                                            }
                                        }}
                                        className={word === "digital" || word === "experiences" ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600" : ""}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.h1>
                        </div>

                        <motion.p
                            variants={fadeInUp}
                            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
                        >
                            {aboutData.hero.description}
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex gap-4">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -10, zIndex: 10, scale: 1.1 }}
                                        className="w-12 h-12 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-bold overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200 relative z-0 shadow-lg cursor-pointer"
                                    >
                                        <div className={`w-full h-full bg-cover bg-center opacity-80`} style={{ backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 15})` }} ></div>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="flex flex-col justify-center">
                                <motion.span
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="font-bold text-lg text-primary"
                                >
                                    100+
                                </motion.span>
                                <span className="text-xs text-muted-foreground uppercase tracking-wider">Happy Clients</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Video - DECOUPLED ANIMATION */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.02, rotate: 0 }}
                                initial={{ rotate: -2 }}
                                transition={{ duration: 0.5 }}
                                className="w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-muted relative shadow-2xl border-8 border-white/50 dark:border-purple-900/10 group"
                            >
                                <div className="absolute bottom-8 left-8 z-20 text-white">
                                    <p className="text-sm uppercase tracking-widest opacity-80 mb-2">Our Office</p>
                                    <p className="text-2xl font-bold">Jakarta, ID</p>
                                </div>
                                <video
                                    key="office-video"
                                    ref={(el) => {
                                        if (el) el.playbackRate = 2.5;
                                    }}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                                >
                                    <source src="https://videos.pexels.com/video-files/853789/853789-hd_1920_1080_25fps.mp4" type="video/mp4" />
                                </video>
                            </motion.div>
                        </motion.div>

                        {/* Blob behind video - Animated */}
                        <motion.div
                            animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.9, 1.1, 0.9] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -inset-10 bg-gradient-to-tr from-primary/40 to-purple-500/40 blur-[60px] -z-10 rounded-full"
                        />
                    </motion.div>
                </motion.div>

                {/* Stats Row - Premium Redesign */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={scrollViewport}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {aboutData.hero.stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ y: -10 }}
                            className="relative p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-purple-100 dark:border-white/10 shadow-xl overflow-hidden group"
                        >
                            {/* Decorative Background Blob */}
                            <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl opacity-20 transition-all duration-500 group-hover:scale-150 group-hover:opacity-30 ${index === 0 ? 'bg-purple-500' : index === 1 ? 'bg-pink-500' : 'bg-blue-500'
                                }`} />

                            <div className="relative z-10 flex flex-col items-start">
                                <span className={`text-5xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r ${index === 0 ? 'from-purple-600 to-indigo-600' :
                                    index === 1 ? 'from-pink-600 to-rose-600' :
                                        'from-blue-600 to-cyan-600'
                                    }`}>
                                    {stat.value}
                                </span>
                                <div className="h-1 w-12 bg-gray-200 dark:bg-white/20 rounded-full mb-4 group-hover:w-full transition-all duration-500" />
                                <div className="text-lg font-bold text-foreground mb-1">{stat.label}</div>
                                {stat.sublabel && (
                                    <div className="text-sm text-muted-foreground opacity-80">{stat.sublabel}</div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
