export interface Author {
    name: string;
    avatar: string;
}

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    author: Author;
}

export const BLOG_CATEGORIES = ["All", "Development", "Design", "Business", "Tutorials"];

export const FEATURED_POST: BlogPost = {
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

export const BLOG_POSTS: BlogPost[] = [
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
