"use client";
import React from "react";
import { motion } from "framer-motion";

export const BounceCard = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <motion.div
            whileHover={{ scale: 0.95, rotate: "-1deg" }}
            className={`group relative min-h-[220px] cursor-pointer overflow-hidden rounded-2xl p-6 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export const CardTitle = ({ children }: { children: React.ReactNode }) => {
    return (
        <h3 className="mx-auto text-center text-2xl font-semibold dark:text-white">{children}</h3>
    );
};
