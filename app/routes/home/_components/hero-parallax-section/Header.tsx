"use client";
import React from "react";
import { motion } from "framer-motion";

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-10 md:py-20 px-4 w-full left-0 top-0">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9]">
                    <span className="block text-gray-900 dark:text-white">We Power SaaS</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600">
                        with Design
                    </span>
                </h1>
                <p className="max-w-2xl text-lg md:text-2xl mt-8 text-gray-600 leading-relaxed font-medium">
                    World-class development. One flat monthly fee.
                    <span className="block mt-2 ">Zero long-term lock-ins.</span>
                </p>
            </motion.div>
        </div>
    );
};
