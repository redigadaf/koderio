'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight, Code, Smartphone, BarChart, Zap } from 'lucide-react';
import { fadeInUp } from './animations';

const iconMap: any = {
    Code: Code,
    Smartphone: Smartphone,
    BarChart: BarChart,
    Zap: Zap
};

interface ServiceCardProps {
    service: any;
    index: number;
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = iconMap[service.icon] || Code;

    return (
        <motion.div
            variants={fadeInUp}
            className="h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                whileHover={{
                    y: -10,
                    transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="h-full"
            >
                <div
                    className="group flex flex-col p-5 rounded-2xl bg-card border border-border hover:border-primary/50 h-full relative overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_oklch(var(--primary)/0.2)] transition-all duration-300 ease-out"
                >
                    {/* Shine Effect */}
                    <div
                        className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent z-20 pointer-events-none"
                    />

                    {/* Simplified subtle gradient background on hover */}
                    <div
                        className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-card to-card opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Top gradient line - thicker and brighter on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-purple-400 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

                    {/* Decoration Circle - Pulsing */}
                    <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none group-hover:scale-125" />

                    {/* Icon Header */}
                    <div className="mb-3 relative z-10">
                        <div
                            className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-primary/40"
                        >
                            <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="flex-1 flex flex-col mb-2 relative z-10">
                        <h3 className="text-lg font-black text-foreground mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                            {service.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed text-xs line-clamp-3 mb-3 text-justify group-hover:text-foreground/80 transition-colors duration-300">
                            {service.description}
                        </p>

                        {/* Stats Section - Compact */}
                        <div className="mt-auto pt-3 border-t border-border group-hover:border-primary/20 transition-colors duration-300">
                            <div className="flex items-baseline gap-2 mb-0.5">
                                <span className="text-xl font-black text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-400 transition-all duration-300">
                                    {service.statValue}
                                </span>
                            </div>
                            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider group-hover:text-primary transition-colors duration-300">
                                {service.statLabel}
                            </span>
                        </div>
                    </div>

                    {/* Footer Action */}
                    <div className="flex items-center justify-between relative z-10 pt-2">
                        <span className="text-[10px] font-black tracking-widest text-muted-foreground/60 group-hover:text-primary/60 transition-colors uppercase">
                            0{index + 1}
                        </span>
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground group-hover:text-primary transition-colors cursor-pointer group/btn">
                            <span className="relative overflow-hidden">
                                <span className="inline-block transition-transform duration-300 group-hover/btn:-translate-y-full">Explore</span>
                                <span className="absolute top-0 left-0 inline-block transition-transform duration-300 translate-y-full group-hover/btn:translate-y-0 text-primary">Explore</span>
                            </span>
                            <ArrowUpRight size={12} className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
