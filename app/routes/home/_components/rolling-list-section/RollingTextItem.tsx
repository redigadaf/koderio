"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { ListItem } from "./data";

interface RollingTextItemProps {
    item: ListItem;
}

const colorClassMap: Record<ListItem["color"], string> = {
    purple: "text-purple-600",
};

export function RollingTextItem({ item }: RollingTextItemProps) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="group relative w-full cursor-pointer border-b border-neutral-200 dark:border-neutral-800 py-6 "
        >
            {/* Rolling text */}
            <div className="relative overflow-hidden h-[60px] md:h-20 px-8">
                <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
                    {/* State 1: Normal */}
                    <div className="h-[60px] md:h-20 flex items-center">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-foreground uppercase tracking-tighter">
                            {item.title}
                        </h2>
                    </div>

                    {/* State 2: Hover (Italic + Color) */}
                    <div className="h-[60px] md:h-20 flex items-center">
                        <h2
                            className={cn(
                                "text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter italic",
                                colorClassMap[item.color]
                            )}
                        >
                            {item.title}
                        </h2>
                    </div>
                </div>
            </div>

            {/* Category Label */}
            <span className="absolute top-8 right-0 px-12 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-opacity duration-300 group-hover:opacity-0 hidden md:block">
                {item.category}
            </span>

            {/* Image Reveal Effect - Hidden on mobile, visible on desktop */}
            <div
                className={cn(
                    "pointer-events-none absolute right-0 top-1/2 z-20 h-32 w-48 -translate-y-1/2 overflow-hidden rounded-lg shadow-2xl hidden md:block",
                    "transition-all duration-500 ease-out",
                    "opacity-0 scale-95 rotate-3 translate-x-4",
                    "group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:translate-x-0"
                )}
            >
                <div className="relative h-full w-full">
                    <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-purple-600/15 mix-blend-overlay" />
                </div>
            </div>

        </motion.div>
    );
}
