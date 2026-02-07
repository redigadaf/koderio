'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { CategoryTheme } from '../utils/theme';
import { fadeInUpVariants } from '../utils/animations';

interface ProjectCTAProps {
    theme: CategoryTheme;
}

export default function ProjectCTA({ theme }: ProjectCTAProps) {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <motion.div
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                className={`relative p-12 md:p-16 rounded-3xl bg-gradient-to-br ${theme.primary} overflow-hidden shadow-2xl`}
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)',
                        backgroundSize: '48px 48px'
                    }}></div>
                </div>

                <div className="relative text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                        Interested in working together?
                    </h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
                        Let's create something amazing. Explore more of our work and see what we can build together.
                    </p>
                    <Link
                        href="/routes/work"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white text-foreground hover:bg-white/90 font-bold rounded-full transition-all shadow-xl hover:shadow-2xl hover:scale-105 text-lg"
                    >
                        View More Projects
                        <ArrowLeft className="w-5 h-5 rotate-180" />
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
