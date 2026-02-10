"use client";

import { motion } from 'framer-motion';

export function ProcessHeader() {
    return (
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
    );
}
