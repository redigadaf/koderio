'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { fadeInScale } from '../utils/animations';
import { BlogPost } from '../data';

interface FeaturedPostProps {
    post: BlogPost;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
    return (
        <section className="px-4 md:px-8 max-w-7xl mx-auto mb-20">
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-8">
                <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                    Featured Article
                </span>
                <div className="h-px bg-gradient-to-r from-border to-transparent flex-1" />
            </div>

            <motion.div
                variants={fadeInScale}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
            >
                <Link href={`#`}>
                    <div className="group relative grid md:grid-cols-2 gap-0 bg-gradient-to-br from-card to-card/50 border-2 border-border rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
                        {/* Image Section */}
                        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />

                            {/* Floating Badge */}
                            <div className="absolute top-6 left-6">
                                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                                    {post.category}
                                </span>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 md:p-12 flex flex-col justify-center relative">
                            <div className="space-y-6">
                                {/* Meta Info */}
                                <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground">
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5" />
                                        {post.readTime}
                                    </span>
                                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                                    <span>{post.date}</span>
                                </div>

                                {/* Title */}
                                <h2 className="text-3xl md:text-4xl font-black leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                                    {post.title}
                                </h2>

                                {/* Excerpt */}
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {post.excerpt}
                                </p>

                                {/* Author & CTA */}
                                <div className="pt-6 flex items-center justify-between border-t border-border">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={post.author.avatar}
                                            alt={post.author.name}
                                            className="w-12 h-12 rounded-full border-2 border-border ring-2 ring-purple-500/20"
                                        />
                                        <div>
                                            <div className="font-semibold text-sm">{post.author.name}</div>
                                            <div className="text-xs text-muted-foreground">Author</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-sm font-bold text-purple-600 group-hover:gap-3 transition-all">
                                        Read Article
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>
        </section>
    );
}
