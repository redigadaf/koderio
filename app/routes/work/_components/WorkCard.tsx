'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Project } from './data';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface WorkCardProps {
    project: Project;
    index: number;
}

export function WorkCard({ project, index }: WorkCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [5, -5]);
    const rotateY = useTransform(x, [-100, 100], [-5, 5]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1]
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="group relative cursor-pointer"
        >
            <Link href={`/routes/work/${project.slug}`} className="block h-full">
                <motion.div
                    className="overflow-hidden rounded-2xl bg-muted aspect-[4/3] relative mb-4 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <motion.img
                        src={project.imageUrl}
                        alt={project.title}
                        className="object-cover w-full h-full"
                        animate={{
                            scale: isHovered ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                    />

                    {/* Gradient Overlay */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Floating Action Button */}
                    <motion.div
                        className="absolute top-4 right-4"
                        initial={{ opacity: 0, scale: 0.8, y: -10 }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            scale: isHovered ? 1 : 0.8,
                            y: isHovered ? 0 : -10
                        }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    >
                        <motion.div
                            className="bg-background/90 backdrop-blur-sm p-3 rounded-full shadow-lg border border-white/10"
                            whileHover={{ scale: 1.1, rotate: 45 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ArrowUpRight className="w-5 h-5 text-foreground" />
                        </motion.div>
                    </motion.div>

                    {/* Animated Border */}
                    <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-purple-500/0"
                        animate={{
                            borderColor: isHovered ? "rgba(147, 51, 234, 0.5)" : "rgba(147, 51, 234, 0)"
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <motion.h3
                            className="text-xl font-semibold text-foreground transition-colors"
                            animate={{
                                color: isHovered ? "rgb(147, 51, 234)" : "currentColor"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {project.title}
                        </motion.h3>

                        <motion.span
                            className="text-xs uppercase tracking-wider font-medium border px-3 py-1.5 rounded-full"
                            animate={{
                                backgroundColor: isHovered ? "rgb(147, 51, 234)" : "transparent",
                                color: isHovered ? "white" : "currentColor",
                                borderColor: isHovered ? "rgb(147, 51, 234)" : "currentColor"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {project.category}
                        </motion.span>
                    </div>

                    <motion.p
                        className="text-muted-foreground line-clamp-2 text-sm"
                        animate={{
                            opacity: isHovered ? 0.8 : 1
                        }}
                    >
                        {project.description}
                    </motion.p>
                </div>
            </Link>
        </motion.div>
    );
}
