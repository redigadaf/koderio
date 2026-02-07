
export interface TechItem {
    name: string;
    iconKey: string;
    color?: string;
}

export interface ProjectTechSpecs {
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
    };
    typography: {
        headingFont: string;
        bodyFont: string;
        fontPairings: string;
    };
    frameworks: TechItem[];
    technologies: string[];
    tools: TechItem[];
}

export interface Project {
    id: string;
    title: string;
    slug: string;
    category: string;
    year: string;
    description: string;
    imageUrl: string;
    link: string;
    techSpecs: ProjectTechSpecs;
}

export const PROJECTS: Project[] = [
    {
        id: '1',
        title: 'Neon Horizon',
        slug: 'neon-horizon',
        category: 'Web Design',
        year: '2024',
        description: 'A futuristic landing page for a VR gaming platform.',
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
        link: '#',
        techSpecs: {
            colors: {
                primary: '#8B5CF6',
                secondary: '#6366F1',
                accent: '#EC4899',
                background: '#0F172A',
            },
            typography: {
                headingFont: 'Space Grotesk',
                bodyFont: 'Inter',
                fontPairings: 'Modern Sans-Serif Combination',
            },
            frameworks: [
                { name: 'Next.js 14', iconKey: 'SiNextdotjs', color: '#000000' }, // White for dark bg
                { name: 'React 18', iconKey: 'SiReact', color: '#61DAFB' },
                { name: 'TypeScript', iconKey: 'SiTypescript', color: '#3178C6' }
            ],
            technologies: ['Framer Motion', 'Three.js', 'GSAP', 'Tailwind CSS'],
            tools: [
                { name: 'Figma', iconKey: 'SiFigma', color: '#F24E1E' },
                { name: 'Adobe After Effects', iconKey: 'SiAdobeaftereffects', color: '#9999FF' },
                { name: 'Blender', iconKey: 'SiBlender', color: '#F5792A' }
            ],
        },
    },
    {
        id: '2',
        title: 'EcoSphere',
        slug: 'ecosphere',
        category: 'Branding',
        year: '2024',
        description: 'Visual identity for a sustainable energy startup.',
        imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop',
        link: '#',
        techSpecs: {
            colors: {
                primary: '#10B981',
                secondary: '#059669',
                accent: '#F59E0B',
                background: '#ECFDF5',
            },
            typography: {
                headingFont: 'Poppins',
                bodyFont: 'Open Sans',
                fontPairings: 'Clean & Professional',
            },
            frameworks: [
                { name: 'Adobe Illustrator', iconKey: 'SiAdobeillustrator', color: '#FF9A00' },
                { name: 'Adobe InDesign', iconKey: 'SiAdobeindesign', color: '#FF3366' }
            ],
            technologies: ['Brand Guidelines System', 'Design Tokens'],
            tools: [
                { name: 'Figma', iconKey: 'SiFigma', color: '#F24E1E' },
                { name: 'Adobe Creative Suite', iconKey: 'SiAdobecreativecloud', color: '#DA1F26' },
                { name: 'Sketch', iconKey: 'SiSketch', color: '#F7B500' }
            ],
        },
    },
    {
        id: '3',
        title: 'FinFlow App',
        slug: 'finflow-app',
        category: 'Development',
        year: '2023',
        description: 'A comprehensive financial dashboard with real-time analytics.',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
        link: '#',
        techSpecs: {
            colors: {
                primary: '#3B82F6',
                secondary: '#1D4ED8',
                accent: '#06B6D4',
                background: '#F8FAFC',
            },
            typography: {
                headingFont: 'Manrope',
                bodyFont: 'Inter',
                fontPairings: 'Professional Dashboard Style',
            },
            frameworks: [
                { name: 'React', iconKey: 'SiReact', color: '#61DAFB' },
                { name: 'Node.js', iconKey: 'SiNodedotjs', color: '#339933' },
                { name: 'Express', iconKey: 'SiExpress', color: '#000000' },
                { name: 'PostgreSQL', iconKey: 'SiPostgresql', color: '#4169E1' }
            ],
            technologies: ['Chart.js', 'D3.js', 'Redux Toolkit', 'Socket.io'],
            tools: [
                { name: 'VS Code', iconKey: 'Code2', color: '#007ACC' },
                { name: 'Docker', iconKey: 'SiDocker', color: '#2496ED' },
                { name: 'GitHub Actions', iconKey: 'SiGithubactions', color: '#2088FF' },
                { name: 'Postman', iconKey: 'SiPostman', color: '#FF6C37' }
            ],
        },
    },
    {
        id: '4',
        title: 'Lumina Art',
        slug: 'lumina-art',
        category: 'Web Design',
        year: '2023',
        description: 'Digital art gallery with immersive 3D experiences.',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop',
        link: '#',
        techSpecs: {
            colors: {
                primary: '#A855F7',
                secondary: '#7C3AED',
                accent: '#F472B6',
                background: '#1E1B4B',
            },
            typography: {
                headingFont: 'Playfair Display',
                bodyFont: 'Lato',
                fontPairings: 'Elegant Serif & Sans',
            },
            frameworks: [
                { name: 'Next.js', iconKey: 'SiNextdotjs', color: '#FFFFFF' }, // White for dark bg
                { name: 'React Three Fiber', iconKey: 'SiReact', color: '#61DAFB' },
                { name: 'TypeScript', iconKey: 'SiTypescript', color: '#3178C6' }
            ],
            technologies: ['Three.js', 'WebGL', 'GSAP', 'Prisma'],
            tools: [
                { name: 'Figma', iconKey: 'SiFigma', color: '#F24E1E' },
                { name: 'Blender', iconKey: 'SiBlender', color: '#F5792A' },
                { name: 'Spline', iconKey: 'Box', color: '#EB2875' },
                { name: 'Photoshop', iconKey: 'SiAdobephotoshop', color: '#31A8FF' }
            ],
        },
    },
    {
        id: '5',
        title: 'Quantum Leap',
        slug: 'quantum-leap',
        category: 'Development',
        year: '2022',
        description: 'Next-gen SaaS platform for quantum computing simulations.',
        imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop',
        link: '#',
        techSpecs: {
            colors: {
                primary: '#0EA5E9',
                secondary: '#0284C7',
                accent: '#22D3EE',
                background: '#020617',
            },
            typography: {
                headingFont: 'IBM Plex Sans',
                bodyFont: 'IBM Plex Mono',
                fontPairings: 'Tech-Focused Monospace',
            },
            frameworks: [
                { name: 'Vue.js 3', iconKey: 'SiVuedotjs', color: '#4FC08D' },
                { name: 'Python', iconKey: 'SiPython', color: '#3776AB' },
                { name: 'FastAPI', iconKey: 'SiFastapi', color: '#009688' },
                { name: 'MongoDB', iconKey: 'SiMongodb', color: '#47A248' }
            ],
            technologies: ['WebAssembly', 'TensorFlow.js', 'Plotly', 'Pinia'],
            tools: [
                { name: 'VS Code', iconKey: 'Code2', color: '#007ACC' },
                { name: 'Jupyter', iconKey: 'SiJupyter', color: '#F37626' },
                { name: 'Docker', iconKey: 'SiDocker', color: '#2496ED' },
                { name: 'Kubernetes', iconKey: 'SiKubernetes', color: '#326CE5' }
            ],
        },
    },
    {
        id: '6',
        title: 'Velvet Fashion',
        slug: 'velvet-fashion',
        category: 'Branding',
        year: '2022',
        description: 'Luxury fashion brand identity and eCommerce design.',
        imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop',
        link: '#',
        techSpecs: {
            colors: {
                primary: '#DC2626',
                secondary: '#991B1B',
                accent: '#FBBF24',
                background: '#FEF2F2',
            },
            typography: {
                headingFont: 'Bodoni Moda',
                bodyFont: 'Montserrat',
                fontPairings: 'Luxury Serif & Modern Sans',
            },
            frameworks: [
                { name: 'Shopify', iconKey: 'SiShopify', color: '#95BF47' },
                { name: 'Liquid', iconKey: 'Droplet', color: '#2563EB' },
                { name: 'JavaScript', iconKey: 'SiJavascript', color: '#F7DF1E' }
            ],
            technologies: [
                'Shopify API', 'Stripe', 'Klaviyo', 'CSS Grid'
            ],
            tools: [
                { name: 'Figma', iconKey: 'SiFigma', color: '#F24E1E' },
                { name: 'Adobe Illustrator', iconKey: 'SiAdobeillustrator', color: '#FF9A00' },
                { name: 'Photoshop', iconKey: 'SiAdobephotoshop', color: '#31A8FF' },
                { name: 'Lightroom', iconKey: 'SiAdobelightroomclassic', color: '#31A8FF' }
            ],
        },
    },
];

export const CATEGORIES = ['All', 'Web Design', 'Development', 'Branding'];
