"use client";
import React from "react";
import { motion } from "framer-motion";

export const FeaturesHeader = () => {
    return (
        <div className="mb-16 flex flex-col items-center text-center gap-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200"
            >
                <span className="text-sm font-semibold text-purple-700">Why Choose Us</span>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 }}
                className="max-w-3xl text-4xl md:text-6xl lg:text-7xl font-black tracking-tight"
            >
                <span className="block text-gray-900">Everything you need</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600">
                    to succeed
                </span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-gray-600 max-w-2xl"
            >
                The complete marketplace for digital assets with world-class support
            </motion.p>
        </div>
    );
};
