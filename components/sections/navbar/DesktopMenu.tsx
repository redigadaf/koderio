"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "./data";

export const DesktopMenu = () => {
    const [servicesOpen, setServicesOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                    link.isDropdown ? (
                        <div
                            key={link.title}
                            className="relative group"
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                                <button
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 focus:outline-none relative after:content-[''] after:absolute after:bottom-2 after:left-3 after:h-[2px] after:bg-purple-600 dark:after:bg-purple-400 after:transition-all after:duration-300 ${pathname?.startsWith('/routes/services')
                                        ? 'text-purple-600 dark:text-purple-400 font-bold after:w-[calc(100%-24px)]'
                                        : 'text-foreground hover:text-primary hover:font-semibold after:w-0 hover:after:w-[calc(100%-24px)]'
                                        }`}
                                >
                                    {link.title}
                                    <ChevronDown size={16} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                                </button>
                            </motion.div>

                            <AnimatePresence>
                                {servicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-background border border-border shadow-2xl rounded-xl overflow-hidden z-50"
                                    >
                                        <div className="grid grid-cols-2 gap-6 p-6">
                                            {/* Main Services Column */}
                                            <div>
                                                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                                                    Main Services
                                                </h3>
                                                <div className="space-y-2">
                                                    {link.mainServices?.map((item) => {
                                                        const Icon = item.icon;
                                                        const isActive = pathname === item.href;
                                                        return (
                                                            <Link
                                                                key={item.title}
                                                                href={item.href}
                                                                className={`group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 border relative overflow-hidden ${isActive
                                                                    ? 'bg-purple-50 dark:bg-purple-900/30 border-purple-200 dark:border-purple-700 shadow-lg'
                                                                    : 'bg-transparent border-transparent hover:bg-white dark:hover:bg-slate-900/50 hover:shadow-xl hover:-translate-y-1 hover:border-purple-100 dark:hover:border-purple-900/50'
                                                                    }`}
                                                            >
                                                                {/* Decorative background gradient opacity */}
                                                                <div className={`absolute inset-0 bg-gradient-to-br from-purple-50/50 to-indigo-50/50 dark:from-purple-950/20 dark:to-indigo-950/20 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                                                    }`} />

                                                                {/* Icon Container */}
                                                                <div className={`relative flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive
                                                                    ? 'bg-purple-600 dark:bg-purple-500 shadow-lg scale-110 -rotate-3'
                                                                    : 'bg-purple-100 dark:bg-purple-900/30 group-hover:bg-purple-600 dark:group-hover:bg-purple-500 group-hover:shadow-lg group-hover:scale-110 group-hover:-rotate-3'
                                                                    }`}>
                                                                    <Icon className={`w-6 h-6 transition-colors duration-300 ${isActive
                                                                        ? 'text-white'
                                                                        : 'text-purple-600 dark:text-purple-400 group-hover:text-white'
                                                                        }`} />
                                                                </div>

                                                                {/* Content */}
                                                                <div className="relative flex-1 min-w-0">
                                                                    <div className="flex items-center justify-between mb-1">
                                                                        <h4 className={`text-base font-bold transition-colors ${isActive
                                                                            ? 'text-purple-700 dark:text-purple-300'
                                                                            : 'text-foreground group-hover:text-purple-700 dark:group-hover:text-purple-300'
                                                                            }`}>
                                                                            {item.title}
                                                                        </h4>
                                                                        <ChevronRight className={`w-4 h-4 text-purple-500 transition-all duration-300 ${isActive
                                                                            ? 'opacity-100 translate-x-0'
                                                                            : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                                                                            }`} />
                                                                    </div>
                                                                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors line-clamp-2 leading-relaxed">
                                                                        {item.description}
                                                                    </p>
                                                                </div>
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            {/* Additional Services Column */}
                                            <div className="border-l border-border pl-6">
                                                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                                                    Additional Services
                                                </h3>
                                                <div className="space-y-1.5">
                                                    {link.additionalServices?.map((item) => {
                                                        const Icon = item.icon;
                                                        return (
                                                            <div
                                                                key={item.title}
                                                                className="group flex items-center gap-3 p-2.5 rounded-lg transition-all duration-300 relative overflow-hidden"
                                                            >
                                                                {/* Icon Container */}
                                                                <div className="relative flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 bg-purple-100 dark:bg-purple-900/30">
                                                                    <Icon className="w-5 h-5 transition-colors duration-300 text-purple-600 dark:text-purple-400" />
                                                                </div>

                                                                {/* Content */}
                                                                <div className="relative flex-1 min-w-0">
                                                                    <h4 className="text-sm font-semibold transition-colors text-foreground">
                                                                        {item.title}
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 pt-4 border-t border-border">
                                                    Complete your project with expert services tailored to your needs.
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <motion.div key={link.title} whileHover={{ scale: 1.05 }} className="inline-block">
                            <Link
                                href={link.href}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-2 after:left-3 after:h-[2px] after:bg-purple-600 dark:after:bg-purple-400 after:transition-all after:duration-300 ${pathname?.startsWith(link.href)
                                    ? 'text-purple-600 dark:text-purple-400 font-bold after:w-[calc(100%-24px)]'
                                    : 'text-foreground hover:text-primary hover:font-semibold after:w-0 hover:after:w-[calc(100%-24px)]'
                                    }`}
                            >
                                {link.title}
                            </Link>
                        </motion.div>
                    )
                ))}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="relative overflow-hidden rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-none px-6 group">
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out skew-x-12" />
                        <span className="relative flex items-center gap-2">
                            Get Started
                            <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
};
