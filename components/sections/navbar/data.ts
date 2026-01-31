import { Code, Smartphone, Palette, MessageSquare, Rocket, Sparkles } from "lucide-react";

export const navLinks = [
    { title: "Home", href: "/routes/home" },
    { title: "Work", href: "/routes/work" },
    {
        title: "Services",
        href: "/routes/services",
        isDropdown: true,
        mainServices: [
            {
                title: "Web Development",
                href: "/routes/services/web-development",
                description: "Build scalable web applications with modern technologies",
                icon: Code
            },
            {
                title: "Mobile Apps",
                href: "/routes/services/mobile-apps",
                description: "Native and cross-platform mobile solutions",
                icon: Smartphone
            },
            {
                title: "UI/UX Design",
                href: "/routes/services/uiux-design",
                description: "Beautiful, user-centered design experiences",
                icon: Palette
            },
        ],
        additionalServices: [
            {
                title: "Consulting",
                href: "/routes/services/consulting",
                description: "Strategic guidance for your digital transformation",
                icon: MessageSquare
            },
            {
                title: "MVP Development",
                href: "/routes/services/mvp",
                description: "Launch your product idea quickly and efficiently",
                icon: Rocket
            },
            {
                title: "Branding",
                href: "/routes/services/branding",
                description: "Create a memorable brand identity",
                icon: Sparkles
            },
        ]
    },
    { title: "About Us", href: "/routes/about" },
    { title: "Blog", href: "/routes/blog" },
];
