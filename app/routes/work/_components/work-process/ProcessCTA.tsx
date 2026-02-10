"use client";

import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { useState } from 'react';
import { ContactFormModal } from '@/components/ContactFormModal';

export function ProcessCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
        >
            <motion.p
                className="text-muted-foreground mb-6 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                Ready to start your project?
            </motion.p>

            <motion.button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                {/* Animated background */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                />

                {/* Shine effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                        x: ["-200%", "200%"]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                <span className="relative z-10">Let's Work Together</span>
                <motion.div
                    animate={{
                        x: [0, 5, 0]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="relative z-10"
                >
                    <Rocket className="w-5 h-5" />
                </motion.div>
            </motion.button>

            <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </motion.div>
    );
}
