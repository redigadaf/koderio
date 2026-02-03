"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "./data";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const pathname = usePathname();

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-background/50 backdrop-blur-sm border-t border-primary/10 overflow-hidden"
                >
                    <div className="px-4 pt-4 pb-6 space-y-2 max-h-[85vh] overflow-y-auto">
                        {navLinks.map((link) => (
                            link.isDropdown ? (
                                <div key={link.title} className="space-y-2">
                                    <button
                                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                        className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-lg font-medium transition-colors ${pathname?.startsWith('/routes/services')
                                            ? 'text-purple-600 dark:text-purple-400 font-bold'
                                            : 'text-foreground hover:text-primary'
                                            }`}
                                    >
                                        {link.title}
                                        <ChevronDown
                                            className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {mobileServicesOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pl-2 space-y-3 pb-2">
                                                    {/* Main Services */}
                                                    {link.mainServices && (
                                                        <>
                                                            <div className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest px-3 py-1 mt-2">
                                                                Main Services
                                                            </div>
                                                            {link.mainServices.map((item, index) => {
                                                                const Icon = item.icon;
                                                                return (
                                                                    <motion.div
                                                                        key={item.title}
                                                                        initial={{ opacity: 0, x: -10 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        transition={{ delay: index * 0.05 }}
                                                                    >
                                                                        <Link
                                                                            href={item.href}
                                                                            className={`flex items-center gap-4 p-3 rounded-xl border active:scale-95 transition-all duration-100 ${pathname === item.href
                                                                                ? 'bg-purple-50 dark:bg-purple-900/30 border-purple-300 dark:border-purple-700'
                                                                                : 'bg-background/50 border-border/50'
                                                                                }`}
                                                                            onClick={onClose}
                                                                        >
                                                                            {/* Simple Icon Container */}
                                                                            <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${pathname === item.href
                                                                                ? 'bg-purple-600 dark:bg-purple-500'
                                                                                : 'bg-purple-100 dark:bg-purple-900/50'
                                                                                }`}>
                                                                                <Icon className={`w-5 h-5 ${pathname === item.href
                                                                                    ? 'text-white'
                                                                                    : 'text-purple-600 dark:text-purple-400'
                                                                                    }`} />
                                                                            </div>

                                                                            {/* Text Content */}
                                                                            <div className="flex-1">
                                                                                <span className={`block font-semibold text-sm ${pathname === item.href
                                                                                    ? 'text-purple-700 dark:text-purple-300'
                                                                                    : 'text-foreground'
                                                                                    }`}>
                                                                                    {item.title}
                                                                                </span>
                                                                                <span className="block text-xs text-muted-foreground line-clamp-1 mt-0.5">
                                                                                    {item.description}
                                                                                </span>
                                                                            </div>

                                                                            <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
                                                                        </Link>
                                                                    </motion.div>
                                                                );
                                                            })}
                                                        </>
                                                    )}
                                                    {/* Additional Services */}
                                                    {link.additionalServices && (
                                                        <div className="pt-2">
                                                            <div className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest px-3 py-1">
                                                                More
                                                            </div>
                                                            {link.additionalServices.map((item, index) => {
                                                                const Icon = item.icon;
                                                                return (
                                                                    <motion.div
                                                                        key={item.title}
                                                                        initial={{ opacity: 0, x: -10 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        transition={{ delay: 0.15 + (index * 0.05) }}
                                                                        className="mt-2"
                                                                    >
                                                                        <div
                                                                            className="flex items-center gap-4 p-3 rounded-xl border bg-background/50 border-border/50"
                                                                        >
                                                                            <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-purple-50 dark:bg-slate-800">
                                                                                <Icon className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                                                                            </div>
                                                                            <div className="flex-1">
                                                                                <span className="block font-semibold text-sm text-foreground">
                                                                                    {item.title}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </motion.div>
                                                                );
                                                            })}
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    className={`block px-3 py-3 rounded-xl text-lg font-medium transition-colors border ${pathname === link.href
                                        ? 'text-purple-600 dark:text-purple-400 font-bold bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800'
                                        : 'text-foreground hover:bg-purple-50 dark:hover:bg-purple-900/20 active:bg-purple-100 border-transparent'
                                        }`}
                                    onClick={onClose}
                                >
                                    {link.title}
                                </Link>
                            )
                        ))}
                        <div className="pt-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button className="relative w-full h-12 text-base font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg border-none overflow-hidden group">
                                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out skew-x-12" />
                                    <span className="relative flex items-center justify-center gap-2">
                                        Get Started
                                        <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
