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
                    className="group flex flex-col p-5 rounded-2xl bg-white border border-slate-200 hover:border-purple-500/50 h-full relative overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.2)] transition-all duration-300 ease-out"
                >
                    {/* Shine Effect */}
                    <div
                        className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent z-20 pointer-events-none"
                    />

                    {/* Simplified subtle gradient background on hover */}
                    <div
                        className={`absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Top gradient line - thicker and brighter on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

                    {/* Decoration Circle - Pulsing */}
                    <div className="absolute -right-8 -top-8 w-24 h-24 bg-purple-100/60 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none group-hover:scale-125" />

                    {/* Icon Header */}
                    <div className="mb-3 relative z-10">
                        <div
                            className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-purple-600 group-hover:border-purple-500 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-purple-500/40"
                        >
                            <Icon className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors duration-300" />
                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="flex-1 flex flex-col mb-2 relative z-10">
                        <h3 className="text-lg font-black text-slate-800 mb-2 leading-tight group-hover:text-purple-700 transition-colors duration-300">
                            {service.title}
                        </h3>

                        <p className="text-slate-500 leading-relaxed text-xs line-clamp-3 mb-3 text-justify group-hover:text-slate-600 transition-colors duration-300">
                            {service.description}
                        </p>

                        {/* Stats Section - Compact */}
                        <div className="mt-auto pt-3 border-t border-slate-100/80 group-hover:border-purple-200/50 transition-colors duration-300">
                            <div className="flex items-baseline gap-2 mb-0.5">
                                <span className="text-xl font-black text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 transition-all duration-300">
                                    {service.statValue}
                                </span>
                            </div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-purple-500 transition-colors duration-300">
                                {service.statLabel}
                            </span>
                        </div>
                    </div>

                    {/* Footer Action */}
                    <div className="flex items-center justify-between relative z-10 pt-2">
                        <span className="text-[10px] font-black tracking-widest text-slate-300 group-hover:text-purple-400/60 transition-colors uppercase">
                            0{index + 1}
                        </span>
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 group-hover:text-purple-600 transition-colors cursor-pointer group/btn">
                            <span className="relative overflow-hidden">
                                <span className="inline-block transition-transform duration-300 group-hover/btn:-translate-y-full">Explore</span>
                                <span className="absolute top-0 left-0 inline-block transition-transform duration-300 translate-y-full group-hover/btn:translate-y-0 text-purple-600">Explore</span>
                            </span>
                            <ArrowUpRight size={12} className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
