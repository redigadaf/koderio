'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BlogPost } from '../data';

interface BlogGridProps {
    posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useEffect(() => {
        // Set first load to false after initial render
        setIsFirstLoad(false);
    }, []);

    return (
        <section className="px-4 md:px-8 max-w-7xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            layout
                            initial={isFirstLoad ? { opacity: 1, scale: 1 } : { opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: false, margin: "-50px" }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{
                                duration: 0.4,
                                delay: isFirstLoad ? 0 : index * 0.1
                            }}
                            whileHover={{ y: -8 }}
                        >
                            <Link href={`#`}>
                                <div className="group flex flex-col h-full bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                                    {/* Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="inline-block bg-background/90 backdrop-blur-md text-foreground px-3 py-1.5 rounded-full text-xs font-bold border border-border/50 shadow-lg">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-6 flex flex-col">
                                        {/* Meta */}
                                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {post.date}
                                            </span>
                                            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {post.readTime}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2 leading-tight">
                                            {post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        {/* Footer */}
                                        <div className="flex items-center justify-between pt-4 border-t border-border">
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={post.author.avatar}
                                                    alt={post.author.name}
                                                    className="w-8 h-8 rounded-full border border-border"
                                                />
                                                <span className="text-xs font-medium text-muted-foreground">
                                                    {post.author.name}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-1 text-sm font-semibold text-purple-600 group-hover:gap-2 transition-all">
                                                Read
                                                <ChevronRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
}
