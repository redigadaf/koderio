"use client";

import { motion } from "framer-motion";

export function TeamHeader() {
    return (
        <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
            <div>
                <h1 className="text-4xl font-black tracking-tighter text-foreground sm:text-6xl md:text-8xl">
                    Meet Our <span className="text-purple-600">Devs</span>
                </h1>
            </div>
            <div className="h-px flex-1 bg-border mx-8 hidden md:block" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Core Team &apos;24
            </p>
        </motion.header>
    );
}
