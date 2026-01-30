"use client"

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SocialLinks } from "@/components/ui/social-links";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
    const socials = [
        {
            name: "X",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg",
            icon: <FaXTwitter className="h-6 w-6" />,
        },
        {
            name: "GitHub",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            icon: <FaGithub className="h-6 w-6" />,
        },
        {
            name: "Instagram",
            image: "https://cdn.simpleicons.org/instagram/E4405F",
            icon: <FaInstagram className="h-6 w-6" />,
        },
        {
            name: "LinkedIn",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
            icon: <FaLinkedin className="h-6 w-6" />,
        },
    ];

    return (
        <footer className="bg-background border-t border-primary/20 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                            Koderio
                        </Link>
                        <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">
                            We build beautiful products with the latest technologies and frameworks.
                        </p>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                            Product
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                                    <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-purple-600 hover:font-semibold dark:hover:text-purple-400 text-sm transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-600 dark:after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full text-sm transition-colors">
                                        Features
                                    </Link>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                                    <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-purple-600 hover:font-semibold dark:hover:text-purple-400 text-sm transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-600 dark:after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full text-sm transition-colors">
                                        Integrations
                                    </Link>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                                    <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-purple-600 hover:font-semibold dark:hover:text-purple-400 text-sm transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-600 dark:after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full text-sm transition-colors">
                                        Pricing
                                    </Link>
                                </motion.div>
                            </li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                                    <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-purple-600 hover:font-semibold dark:hover:text-purple-400 text-sm transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-600 dark:after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full text-sm transition-colors">
                                        About
                                    </Link>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                                    <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-purple-600 hover:font-semibold dark:hover:text-purple-400 text-sm transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-600 dark:after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full text-sm transition-colors">
                                        Blog
                                    </Link>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                                    <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-purple-600 hover:font-semibold dark:hover:text-purple-400 text-sm transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-600 dark:after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full text-sm transition-colors">
                                        Careers
                                    </Link>
                                </motion.div>
                            </li>
                        </ul>
                    </div>

                    {/* Socials/Newsletter (Simplified) */}
                    <div className="pt-2">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-8">
                            Connect
                        </h3>
                        <SocialLinks socials={socials} className="justify-start gap-4" />
                    </div>
                </div>

                <div className="border-t border-primary/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center bg-primary/5 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 py-6 rounded-b-lg">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        © {new Date().getFullYear()} Koderio. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                            <Link href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 hover:font-semibold dark:hover:text-purple-400 text-sm transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-600 dark:after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full">
                                Privacy Policy
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                            <Link href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 hover:font-semibold dark:hover:text-purple-400 text-sm transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-600 dark:after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full">
                                Terms of Service
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
