"use client";

import { motion } from 'framer-motion';
import { ProcessStep } from './types';

interface ProcessCardProps {
    process: ProcessStep;
    index: number;
    isLast: boolean;
}

export function ProcessCard({ process, index, isLast }: ProcessCardProps) {
    return (
        <motion.div
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
                {!isLast && (
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
    );
}
