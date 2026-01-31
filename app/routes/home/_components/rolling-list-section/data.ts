export interface ListItem {
    id: number;
    title: string;
    category: string;
    src: string;
    alt: string;
    color: "purple";
}

export const items: ListItem[] = [
    {
        id: 1,
        title: "Web Dev",
        category: "Full Stack",
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=60",
        alt: "Web Development",
        color: "purple",
    },
    {
        id: 2,
        title: "App Dev",
        category: "iOS & Android",
        src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&auto=format&fit=crop&q=60",
        alt: "Mobile App Development",
        color: "purple",
    },
    {
        id: 3,
        title: "UI/UX",
        category: "Design System",
        src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&auto=format&fit=crop&q=60",
        alt: "UI/UX Design",
        color: "purple",
    },
    {
        id: 4,
        title: "Consulting",
        category: "Tech Strategy",
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&auto=format&fit=crop&q=60",
        alt: "IT Consulting",
        color: "purple",
    },
];
