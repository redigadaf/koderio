"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { title: "Home", href: "/" },
        { title: "Work", href: "#" },
        {
            title: "Services",
            href: "#",
            isDropdown: true,
            items: [
                { title: "Web Development", href: "#" },
                { title: "Mobile Apps", href: "#" },
                { title: "UI/UX Design", href: "#" },
                { title: "Consulting", href: "#" },
            ]
        },
        { title: "About Us", href: "#" },
        { title: "Blog", href: "#" },
    ];

    return (
        <nav className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
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
                                        <button className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 focus:outline-none">
                                            {link.title}
                                            <ChevronDown size={16} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        <AnimatePresence>
                                            {servicesOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute left-0 mt-0 w-48 bg-background border border-border shadow-lg rounded-md overflow-hidden z-50"
                                                >
                                                    <div className="py-1">
                                                        {link.items?.map((item) => (
                                                            <Link
                                                                key={item.title}
                                                                href={item.href}
                                                                className="block px-4 py-2 text-sm text-foreground hover:bg-purple-50 hover:text-primary transition-colors"
                                                            >
                                                                {item.title}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={link.title}
                                        href={link.href}
                                        className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                    >
                                        {link.title}
                                    </Link>
                                )
                            ))}
                            <Button className="rounded-full shadow-md hover:shadow-primary/30 bg-purple-600 hover:bg-purple-700 text-white border-none">
                                Get Started
                            </Button>
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
                        className="md:hidden bg-background border-b border-primary/20"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                link.isDropdown ? (
                                    <div key={link.title}>
                                        <div className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium font-bold">
                                            {link.title}
                                        </div>
                                        <div className="pl-4 space-y-1">
                                            {link.items?.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    href={item.href}
                                                    className="text-foreground/80 hover:text-primary block px-3 py-2 rounded-md text-sm font-medium"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {item.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        key={link.title}
                                        href={link.href}
                                        className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.title}
                                    </Link>
                                )
                            ))}
                            <Button className="w-full text-left mt-4 bg-purple-600 hover:bg-purple-700 text-white border-none">
                                Get Started
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
