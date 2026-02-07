'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import {
    BlogHero,
    CategoryFilter,
    FeaturedPost,
    BlogGrid,
    Newsletter,
    FEATURED_POST,
    BLOG_POSTS
} from './_components';

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = activeCategory === "All"
        ? BLOG_POSTS
        : BLOG_POSTS.filter(post => post.category === activeCategory);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <BlogHero />

            <FeaturedPost post={FEATURED_POST} />

            <CategoryFilter
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
            />

            <BlogGrid posts={filteredPosts} />

            <Newsletter />
        </main>
    );
}
