'use client';

import { motion } from 'framer-motion';
import { Project } from './data';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface WorkCardProps {
    project: Project;
    index: number;
}

export function WorkCard({ project, index }: WorkCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative cursor-pointer"
        >
            <Link href={`/routes/work/${project.slug}`} className="block h-full">
                <div className="overflow-hidden rounded-2xl bg-muted aspect-[4/3] relative mb-4">
                    <motion.img
                        src={project.imageUrl}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                    {/* Floating Action Button feeling */}
                    <div className="absolute top-4 right-4 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                        <div className="bg-background/90 backdrop-blur-sm p-3 rounded-full shadow-lg border border-white/10">
                            <ArrowUpRight className="w-5 h-5 text-foreground" />
                        </div>
                    </div>
                </div>

                <div className="space-y-1">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-purple-500 transition-colors">
                            {project.title}
                        </h3>
                        <span className="text-xs uppercase tracking-wider font-medium text-muted-foreground border border-border px-2 py-1 rounded-full">
                            {project.category}
                        </span>
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm">
                        {project.description}
                    </p>
                </div>
            </Link>
        </motion.div>
    );
}
