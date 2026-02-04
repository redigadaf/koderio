export interface Stat {
    value: string;
    label: string;
    sublabel?: string;
}

export interface WebService {
    title: string;
    description: string;
    statValue: string;
    statLabel: string;
    icon: string;
}

export interface Milestone {
    year: string;
    title: string;
    description: string;
}

export interface ImpactItem {
    title: string;
    description: string;
    link?: string;
}

export interface TeamMember {
    name: string;
    role: string;
    image?: string;
}

export interface CultureItem {
    text: string;
    emoji: string;
    image?: string;
}

export const aboutData = {
    hero: {
        title: "Hi, we are Koderio,",
        subtitle: "nice to meet you!",
        description: "We assist forward-thinking businesses in developing their vision through digital products and experiences.",
        story: "Founded in 2018, Koderio is a digital design agency that assists forward-thinking businesses in developing their vision through digital products and experiences. Our headquarters is based in Purwokerto – Central Java.",
        mission: "Situated in a small city does not prevent us from having a great and noble mission to become a global-level design agency. We strive to empower local creative talents to grow and make a better world to live in together.",
        stats: [
            { value: "10+", label: "yrs", sublabel: "Our decade expertise secures funding" },
            { value: "96+", label: "Successful projects completed", sublabel: "with 5.0 Review in Clutch" },
            { value: "$100M", label: "total client funded", sublabel: "" }
        ]
    },
    visionMission: {
        title: "What Drives Us",
        description: "Every decision we make from pixels to process, is shaped by a clear vision and a mission rooted in solving real problems through design.",
        vision: "Assist forward-thinking business develop their vision by building best digital product experience.",
        mission: "To become Southeast Asia’s most trusted SaaS design partner while uplifting local creative talent."
    },
    services: [
        {
            title: "Product Strategy & Audit",
            description: "Find conversion leaks before you invest more dev hours",
            statValue: "30%",
            statLabel: "Average funnel fit",
            icon: "BarChart"
        },
        {
            title: "End-to-End UI/UX Design",
            description: "Ship lovable features fast, without pixel debt",
            statValue: "0",
            statLabel: "redesign in last 12 mo.",
            icon: "Smartphone"
        },
        {
            title: "Design Systems",
            description: "Scale design consistency 10×, slash dev handoff friction",
            statValue: "40%",
            statLabel: "faster sprint velocity",
            icon: "Code"
        }
    ],
    awards: [
        { title: 'Awwwards Site of the Day', org: 'Awwwards', year: '2024' },
        { title: 'CSS Design Awards', org: 'CSSDA', year: '2023' },
        { title: 'FWA of the Day', org: 'The FWA', year: '2023' },
        { title: 'Clutch Top Developer', org: 'Clutch', year: '2022' }
    ],
    milestones: [
        {
            year: "2015",
            title: "Started gathering the Team",
            description: "Bagus begins assembling the first collaborators who will form the core of Koderio."
        },
        {
            year: "2020",
            title: "Growth Surge",
            description: "The global pivot to digital (COVID era) drives a sharp rise in project volume and revenue."
        },
        {
            year: "2024",
            title: "First Town Hall",
            description: "Company-wide session to celebrate wins, refine the vision, and map the next stage of growth."
        },
        {
            year: "2025",
            title: "New Office Established",
            description: "Secured a dedicated studio space that brings production, R&D, and training under one roof."
        }
    ],
    socialImpact: [
        {
            title: "Giving Through Lazismu",
            description: "We feel deeply grateful to be able to channel our zakat, infaq, and sadaqah through Lazismu... spreading benefit and blessings along the way."
        },
        {
            title: "Design chit-chat",
            description: "In a spirit of open learning, we hosted a live webinar to discuss all things UI/UX. Knowledge grows when shared."
        },
        {
            title: "Guest Talk at University",
            description: "We shared our thoughts on core UI/UX principles. Collaboration between designers and developers truly can create a better digital future."
        }
    ],
    team: [
        {
            name: "Steven",
            role: "Chief Executive Officer",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
        },
        {
            name: "Rizki Kurniawan",
            role: "Chief Happiness Officer",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80"
        },
        {
            name: "Rinaldi",
            role: "Finance & HR",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80"
        },
        {
            name: "Bryan",
            role: "Customer Experience",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
        },
        {
            name: "Raihan",
            role: "Head of R&D",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80"
        },
        {
            name: "Panji",
            role: "Project Manager",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80"
        },
        {
            name: "Rizky Dyan",
            role: "Project Manager",
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80"
        },
        {
            name: "Mufti",
            role: "Project Manager",
            image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&q=80"
        }
    ],
    culture: [
        { emoji: "🧭", text: "Ensure that everyone is aligned moving in the same direction." },
        { emoji: "🧠", text: "Putting our heads together to come up with the best solution." },
        { emoji: "🏄‍♂️", text: "Balance focus with fun, get things done and enjoy the ride!" },
        { emoji: "🗺️", text: "Teaming up from anywhere, no matter where we are." },
        { emoji: "🔥", text: "Speaking up helps build confidence and grow." },
        { emoji: "❤️", text: "Sharing stuff outside of work helps us bond and get closer as a team." },
        { emoji: "💪", text: "Getting to know each other better and strengthening our bond as a team." },
        { emoji: "✨", text: "Spread smiles and share the good vibes!" }
    ]
};
