"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export const RollingListHeader = () => {
    return (
        <div className="mb-12 px-10 w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
                className="mb-6"
            >
                <Badge variant="secondary" className="px-4 py-2 bg-purple-100 border border-purple-200 text-purple-700 hover:bg-purple-100 rounded-full text-sm font-semibold">
                    Our Services
                </Badge>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 }}
                className="text-4xl font-black tracking-tighter text-foreground sm:text-6xl md:text-8xl mb-6"
            >
                What we <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600 pr-2">provide</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 text-lg md:text-xl leading-relaxed"
            >
                Comprehensive digital solutions tailored to elevate your business.
            </motion.p>
        </div>
    );
};
