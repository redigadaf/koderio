'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import { BLOG_CATEGORIES } from '../data';

interface CategoryFilterProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
    return (
        <section className="px-4 md:px-8 max-w-7xl mx-auto mb-12">
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                className="flex flex-wrap justify-center gap-3"
            >
                {BLOG_CATEGORIES.map((category) => {
                    const isActive = activeCategory === category;

                    return (
                        <motion.button
                            key={category}
                            onClick={() => onCategoryChange(category)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden ${isActive
                                ? "text-white shadow-lg shadow-purple-500/30"
                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border hover:border-purple-500/30"
                                }`}
                        >
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                                    />
                                )}
                            </AnimatePresence>
                            <span className="relative z-10">{category}</span>
                        </motion.button>
                    );
                })}
            </motion.div>
        </section>
    );
}
