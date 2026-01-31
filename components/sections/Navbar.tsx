"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Smartphone, Palette, MessageSquare, Rocket, Pen, Sparkles, ChevronRight } from "lucide-react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { title: "Home", href: "/routes/home" },
        { title: "Work", href: "/routes/work" },
        {
            title: "Services",
            href: "/routes/services",
            isDropdown: true,
            mainServices: [
                {
                    title: "Web Development",
                    href: "/routes/services/web-development",
                    description: "Build scalable web applications with modern technologies",
                    icon: Code
                },
                {
                    title: "Mobile Apps",
                    href: "/routes/services/mobile-apps",
                    description: "Native and cross-platform mobile solutions",
                    icon: Smartphone
                },
                {
                    title: "UI/UX Design",
                    href: "/routes/services/uiux-design",
                    description: "Beautiful, user-centered design experiences",
                    icon: Palette
                },
            ],
            additionalServices: [
                {
                    title: "Consulting",
                    href: "/routes/services/consulting",
                    description: "Strategic guidance for your digital transformation",
                    icon: MessageSquare
                },
                {
                    title: "MVP Development",
                    href: "/routes/services/mvp",
                    description: "Launch your product idea quickly and efficiently",
                    icon: Rocket
                },
                {
                    title: "Branding",
                    href: "/routes/services/branding",
                    description: "Create a memorable brand identity",
                    icon: Sparkles
                },
            ]
        },
        { title: "About Us", href: "/routes/about" },
        { title: "Blog", href: "/routes/blog" },
    ];

    return (
        <nav
            className={`fixed z-50 transition-all duration-300 left-1/2 -translate-x-1/2 ${isScrolled || isOpen
                ? "top-4 w-[95%] max-w-7xl bg-background/95 backdrop-blur-md border border-primary/20 rounded-2xl shadow-xl"
                : "top-0 w-full bg-transparent border-transparent shadow-none"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                            Koderio
                        </Link>
                    </div>

                    {/* Desktop Menu */}
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
                                            <button className="text-foreground hover:text-primary hover:font-semibold px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 focus:outline-none relative after:content-[''] after:absolute after:bottom-2 after:left-3 after:w-0 after:h-[2px] after:bg-purple-600 dark:after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-[calc(100%-24px)]">
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
                                                                    return (
                                                                        <Link
                                                                            key={item.title}
                                                                            href={item.href}
                                                                            className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white dark:hover:bg-slate-900/50 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-purple-100 dark:hover:border-purple-900/50 relative overflow-hidden bg-transparent"
                                                                        >
                                                                            {/* Decorative background gradient opacity */}
                                                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-indigo-50/50 dark:from-purple-950/20 dark:to-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                                                            {/* Icon Container */}
                                                                            <div className="relative flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center group-hover:bg-purple-600 dark:group-hover:bg-purple-500 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:-rotate-3">
                                                                                <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:text-white transition-colors duration-300" />
                                                                            </div>

                                                                            {/* Content */}
                                                                            <div className="relative flex-1 min-w-0">
                                                                                <div className="flex items-center justify-between mb-1">
                                                                                    <h4 className="text-base font-bold text-foreground group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                                                                                        {item.title}
                                                                                    </h4>
                                                                                    <ChevronRight className="w-4 h-4 text-purple-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
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
                                                            <div className="space-y-2">
                                                                {link.additionalServices?.map((item) => {
                                                                    const Icon = item.icon;
                                                                    return (
                                                                        <Link
                                                                            key={item.title}
                                                                            href={item.href}
                                                                            className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white dark:hover:bg-slate-900/50 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-purple-100 dark:hover:border-purple-900/50 relative overflow-hidden bg-transparent"
                                                                        >
                                                                            {/* Decorative background gradient */}
                                                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-indigo-50/50 dark:from-purple-950/20 dark:to-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                                                            {/* Icon Container */}
                                                                            <div className="relative flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center group-hover:bg-purple-600 dark:group-hover:bg-purple-500 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:-rotate-3">
                                                                                <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:text-white transition-colors duration-300" />
                                                                            </div>

                                                                            {/* Content */}
                                                                            <div className="relative flex-1 min-w-0">
                                                                                <div className="flex items-center justify-between mb-1">
                                                                                    <h4 className="text-base font-bold text-foreground group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                                                                                        {item.title}
                                                                                    </h4>
                                                                                    <ChevronRight className="w-4 h-4 text-purple-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                                                                </div>
                                                                                <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors line-clamp-2 leading-relaxed">
                                                                                    {item.description}
                                                                                </p>
                                                                            </div>
                                                                        </Link>
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
                                            className="text-foreground hover:text-primary hover:font-semibold px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-2 after:left-3 after:w-0 after:h-[2px] after:bg-purple-600 dark:after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-[calc(100%-24px)]"
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

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-purple-600 hover:text-primary focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
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
                                            className="flex items-center justify-between w-full text-foreground hover:text-primary px-3 py-2 rounded-md text-lg font-medium transition-colors"
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
                                                                                className="flex items-center gap-4 p-3 rounded-xl bg-background/50 border border-border/50 active:scale-95 transition-transform duration-100"
                                                                                onClick={() => setIsOpen(false)}
                                                                            >
                                                                                {/* Simple Icon Container */}
                                                                                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                                                                                    <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                                                                </div>

                                                                                {/* Text Content */}
                                                                                <div className="flex-1">
                                                                                    <span className="block text-foreground font-semibold text-sm">
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
                                                                            <Link
                                                                                href={item.href}
                                                                                className="flex items-center gap-4 p-3 rounded-xl bg-background/50 border border-border/50 active:scale-95 transition-transform duration-100"
                                                                                onClick={() => setIsOpen(false)}
                                                                            >
                                                                                <div className="flex-shrink-0 w-10 h-10 bg-purple-50 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                                                                                    <Icon className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                                                                                </div>
                                                                                <div className="flex-1">
                                                                                    <span className="block text-foreground font-semibold text-sm">
                                                                                        {item.title}
                                                                                    </span>
                                                                                </div>
                                                                                <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
                                                                            </Link>
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
                                        className="block px-3 py-3 rounded-xl text-lg font-medium text-foreground hover:bg-purple-50 dark:hover:bg-purple-900/20 active:bg-purple-100 transition-colors border border-transparent"
                                        onClick={() => setIsOpen(false)}
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
        </nav>
    );
};
