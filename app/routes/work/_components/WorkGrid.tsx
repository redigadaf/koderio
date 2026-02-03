'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { PROJECTS, CATEGORIES } from './data';
import { WorkCard } from './WorkCard';


export function WorkGrid() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const filteredProjects = PROJECTS.filter(project => {
        const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="container px-4 md:px-6 lg:px-8 mx-auto pb-20 pt-5 max-w-[1400px]">
            {/* Filter Bar */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-12 relative z-30"
            >
                {/* Search Input */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative w-full md:max-w-md lg:max-w-lg group"
                >
                    <div className="relative">
                        <motion.input
                            type="text"
                            placeholder="Find your inspiration..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-6 py-3.5 rounded-full border border-purple-500/20 bg-purple-500/5 shadow-sm focus:outline-none focus:border-purple-500/40 transition-all placeholder:text-muted-foreground/50 text-foreground"
                            whileFocus={{ scale: 1.02, borderColor: "rgba(147, 51, 234, 0.5)" }}
                            transition={{ duration: 0.2 }}
                        />
                        <motion.div
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-purple-500/10 rounded-full text-purple-600 pointer-events-none z-10 transition-colors"
                            animate={{
                                scale: searchQuery ? [1, 1.2, 1] : 1
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <Search className="w-4 h-4" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Category Dropdown with Pills */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center gap-2 md:gap-4 w-full md:w-auto"
                >
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground hidden lg:block">Category</span>
                    <div
                        className="relative"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <motion.button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="group flex items-center gap-3 px-4 md:px-6 py-3 md:py-3.5 rounded-full border border-purple-500/20 bg-purple-500/5 shadow-sm hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/5 transition-all w-full md:w-auto md:min-w-[200px] justify-between relative overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="text-sm font-medium group-hover:text-purple-600 transition-colors z-10">{activeCategory}</span>
                            <motion.svg
                                className="w-4 h-4 text-muted-foreground group-hover:text-purple-600 transition-all duration-300 z-10"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </motion.svg>

                            {/* Hover Highlight */}
                            <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/5 transition-colors duration-300" />
                        </motion.button>

                        <AnimatePresence>
                            {isDropdownOpen && (
                                <>
                                    <div
                                        className="fixed inset-0 z-10 md:hidden"
                                        onClick={() => setIsDropdownOpen(false)}
                                    />
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(10px)" }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-0 md:right-0 md:left-auto top-full mt-3 w-full md:w-auto md:min-w-[400px] lg:min-w-[500px] p-4 md:p-6 rounded-3xl border border-purple-500/20 bg-background/95 backdrop-blur-2xl shadow-2xl shadow-purple-500/20 z-50 overflow-hidden"
                                    >
                                        <div className="px-2 py-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">System Category</div>

                                        {/* Pills inside dropdown */}
                                        <div className="flex flex-wrap gap-2">
                                            {CATEGORIES.map((category, idx) => (
                                                <motion.button
                                                    key={category}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: idx * 0.05 }}
                                                    onClick={() => {
                                                        setActiveCategory(category);
                                                        setIsDropdownOpen(false);
                                                    }}
                                                    className={`
                                                        group relative px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200
                                                        ${activeCategory === category
                                                            ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                                                            : 'bg-muted/50 text-muted-foreground hover:bg-purple-500/10 hover:text-purple-600 border border-border hover:border-purple-500/30'
                                                        }
                                                    `}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <span className="relative z-10">{category}</span>

                                                    {/* Active indicator */}
                                                    {activeCategory === category && (
                                                        <motion.div
                                                            layoutId="activeCategoryPill"
                                                            className="absolute inset-0 bg-purple-600 rounded-full"
                                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                        />
                                                    )}
                                                </motion.button>
                                            ))}
                                        </div>
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </motion.div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <WorkCard project={project} index={index} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-muted-foreground">No projects found in this category.</p>
                </div>
            )}
        </section>
    );
}
