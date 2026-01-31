"use client";
import React from "react";
import { motion } from "framer-motion";
import { FeaturesHeader } from "./FeaturesHeader";
import { FeaturesGrid } from "./FeaturesGrid";

export const BouncyCardsFeatures = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-7xl px-4 py-32 text-foreground bg-gradient-to-b from-white via-purple-50/30 to-white"
        >
            <FeaturesHeader />
            <FeaturesGrid />
        </motion.section>
    );
};
