"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export const RollingListHeader = () => {
    return (
        <div className="mb-12 px-10 max-w-3xl">
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

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6"
            >
                <span className="block text-gray-900">What we</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600">
                    provide
                </span>
            </motion.h2>

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
