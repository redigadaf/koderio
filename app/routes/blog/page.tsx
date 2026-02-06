// app/routes/blog/page.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Mock Data
const BLOG_CATEGORIES = ["All", "Development", "Design", "Business", "Tutorials"];

const FEATURED_POST = {
    id: 1,
    title: "The Future of Web Development: What to Expect in 2026",
    excerpt: "Explore the emerging trends, tools, and technologies that are reshaping the digital landscape. From AI-driven coding to the next generation of frameworks, stay ahead of the curve.",
    category: "Development",
    date: "Feb 6, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80",
    author: {
        name: "Alex Morgan",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
};

const BLOG_POSTS = [
    {
        id: 2,
        title: "Mastering UI/UX: Creating Emotional Connections",
        excerpt: "Design is more than just aesthetics. Learn how to craft user experiences that evoke emotion and drive engagement.",
        category: "Design",
        date: "Feb 4, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        author: {
            name: "Sarah Chen",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
    },
    {
        id: 3,
        title: "Scaling Your Startup: From MVP to Unicorn",
        excerpt: "Practical strategies for growing your business, managing technical debt, and building a scalable architecture.",
        category: "Business",
        date: "Feb 2, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        author: {
            name: "James Wilson",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
    },
    {
        id: 4,
        title: "The Ultimate Guide to Next.js 15",
        excerpt: "A deep dive into the latest features of Next.js, including Server Actions, Partial Prerendering, and more.",
        category: "Tutorials",
        date: "Jan 28, 2026",
        readTime: "12 min read",
        image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80",
        author: {
            name: "Alex Morgan",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
    },
    {
        id: 5,
        title: "Why Minimalist Design Works",
        excerpt: "Understanding the psychology behind minimalism and why less is often more in digital product design.",
        category: "Design",
        date: "Jan 25, 2026",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        author: {
            name: "Sarah Chen",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
    },
    {
        id: 6,
        title: "Building Resilient APIs",
        excerpt: "Best practices for designing and implementing APIs that can handle high loads and unexpected failures.",
        category: "Development",
        date: "Jan 20, 2026",
        readTime: "9 min read",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        author: {
            name: "David Kim",
            avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
    }
];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = activeCategory === "All"
        ? BLOG_POSTS
        : BLOG_POSTS.filter(post => post.category === activeCategory);

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 opacity-20 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-[500px] h-[500px] bg-primary blur-[120px] rounded-full" />
                </div>

                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
                            Insights & <span className="text-primary">Thoughts</span>
                        </h1>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg md:text-xl text-muted-foreground"
                    >
                        Expert articles on web development, design trends, and digital innovation.
                        Stay updated with the latest from Koderio.
                    </motion.p>

                    {/* Search & Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-3 pt-6"
                    >
                        {BLOG_CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-transparent hover:border-primary/20"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto mb-20">
                <div className="flex items-center gap-2 mb-8">
                    <div className="h-px bg-border flex-1" />
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest px-2">Featured</span>
                    <div className="h-px bg-border flex-1" />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group relative grid md:grid-cols-12 gap-8 bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                >
                    <div className="md:col-span-8 overflow-hidden">
                        <div className="relative h-[400px] md:h-full w-full overflow-hidden">
                            <img
                                src={FEATURED_POST.image}
                                alt={FEATURED_POST.title}
                                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent md:hidden" />
                        </div>
                    </div>
                    <div className="md:col-span-4 p-8 flex flex-col justify-center relative">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-primary">
                                <span className="bg-primary/10 px-3 py-1 rounded-full">{FEATURED_POST.category}</span>
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {FEATURED_POST.readTime}</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                                {FEATURED_POST.title}
                            </h2>
                            <p className="text-muted-foreground line-clamp-3">
                                {FEATURED_POST.excerpt}
                            </p>

                            <div className="pt-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <img src={FEATURED_POST.author.avatar} alt={FEATURED_POST.author.name} className="w-10 h-10 rounded-full border border-border" />
                                    <div className="text-sm">
                                        <div className="font-medium">{FEATURED_POST.author.name}</div>
                                        <div className="text-muted-foreground text-xs">{FEATURED_POST.date}</div>
                                    </div>
                                </div>
                                <button className="p-3 rounded-full bg-secondary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Blog Post Grid */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto mb-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-background/80 backdrop-blur-md text-foreground px-3 py-1 rounded-full text-xs font-semibold border border-border/50 shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="flex-1 p-6 flex flex-col">
                                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-border">
                                    <div className="flex items-center gap-2">
                                        <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full border border-border" />
                                        <span className="text-xs font-medium text-muted-foreground">{post.author.name}</span>
                                    </div>
                                    <Link href={`/routes/blog/${post.id}`} className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
                                        Read <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto mb-20">
                <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />

                    <div className="relative max-w-2xl mx-auto space-y-6">
                        <Tag className="w-12 h-12 text-primary mx-auto opacity-80" />
                        <h2 className="text-3xl md:text-4xl font-bold">Subscribe to our newsletter</h2>
                        <p className="text-muted-foreground">
                            Get the latest updates, tutorials, and insights delivered straight to your inbox. No spam, we promise.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-background border border-border rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            />
                            <button className="bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
