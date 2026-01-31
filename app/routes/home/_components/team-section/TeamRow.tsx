"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { type TeamRowProps } from "./types";

export function TeamRow({
    data,
    index,
    isActive,
    setActiveId,
    isMobile,
    isAnyActive,
}: TeamRowProps) {
    const isDimmed = isAnyActive && !isActive;

    return (
        <motion.div
            layout
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: isDimmed ? 0.3 : 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            animate={{
                opacity: isDimmed ? 0.3 : 1,
                backgroundColor: isActive ? '#9333ea' : 'transparent',
                color: isActive ? '#ffffff' : 'var(--foreground)',
            }}
            onMouseEnter={() => !isMobile && setActiveId(data.id)}
            onMouseLeave={() => !isMobile && setActiveId(null)}
            onClick={() => isMobile && setActiveId(isActive ? null : data.id)}
            className={`group relative border-b border-gray-200 transition-colors duration-300 ${isMobile ? 'cursor-pointer' : 'cursor-default'}`}
        >
            <div className="relative z-10 grid grid-cols-12 items-center py-6 pl-14 pr-4 md:px-8">
                {/* Index: 001, 002... */}
                <div className="col-span-2 hidden md:block">
                    <span className={`font-mono text-sm tracking-widest ${isActive ? 'text-white/70' : 'text-slate-500'}`}>
                        {String(index + 1).padStart(3, '0')}
                    </span>
                </div>

                {/* Name */}
                <div className="col-span-12 md:col-span-5 flex items-center gap-4 pl-2 md:pl-0">
                    {/* Mobile Index */}
                    <span className={`md:hidden font-mono text-xs ${isActive ? 'text-white/70' : 'text-slate-500'}`}>
                        {String(index + 1).padStart(3, '0')}
                    </span>

                    <h2 className="text-xl md:text-3xl font-bold tracking-tight">
                        {data.name}
                    </h2>

                    {/* Arrow icon that appears when active */}
                    {isActive && !isMobile && (
                        <motion.div
                            layoutId="activeArrow"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="hidden md:block"
                        >
                            <ArrowUpRight size={20} className="text-emerald-400" />
                        </motion.div>
                    )}
                </div>

                {/* Role */}
                <div className="col-span-12 md:col-span-5 mt-2 md:mt-0 flex items-center justify-between md:justify-start pl-16 md:pl-12">
                    <span className={`text-sm md:text-lg font-medium ${isActive ? 'text-white/90' : 'text-slate-600'}`}>
                        {data.role}
                    </span>

                    {/* Mobile Toggle Icon */}
                    <div className={`block md:hidden ${isActive ? 'text-white' : 'text-neutral-500'}`}>
                        {isActive ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                </div>
            </div>

            {/* Desktop Floating Image (Centered in Row) */}
            {!isMobile && (
                <AnimatePresence>
                    {isActive && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6, rotate: -10, y: -20 }}
                            animate={{ opacity: 1, scale: 1, rotate: 6, y: 0 }}
                            exit={{ opacity: 0, scale: 0.6, rotate: -10 }}
                            transition={{ type: "spring", stiffness: 350, damping: 25 }}
                            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 h-32 w-28"
                        >
                            <div className="relative h-full w-full overflow-hidden rounded-xl border-4 border-white bg-background shadow-2xl shadow-purple-500/30">
                                <Image
                                    src={data.image}
                                    alt={data.name}
                                    fill
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}

            {/* MOBILE ONLY: Inline Accordion Image */}
            <AnimatePresence>
                {isMobile && isActive && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="py-4 px-4">
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src={data.image}
                                    alt={data.name}
                                    className="h-full w-full object-cover"
                                    fill
                                    sizes="(max-width: 768px) 90vw, 300px"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
