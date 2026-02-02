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
    frameworks: string[];
    technologies: string[];
    tools: string[];
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
            frameworks: ['Next.js 14', 'React 18', 'TypeScript'],
            technologies: ['Framer Motion', 'Three.js', 'GSAP', 'Tailwind CSS'],
            tools: ['Figma', 'Adobe After Effects', 'Blender'],
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
            frameworks: ['Adobe Illustrator', 'Adobe InDesign'],
            technologies: ['Brand Guidelines System', 'Design Tokens'],
            tools: ['Figma', 'Adobe Creative Suite', 'Sketch'],
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
            frameworks: ['React', 'Node.js', 'Express', 'PostgreSQL'],
            technologies: ['Chart.js', 'D3.js', 'Redux Toolkit', 'Socket.io'],
            tools: ['VS Code', 'Docker', 'GitHub Actions', 'Postman'],
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
            frameworks: ['Next.js', 'React Three Fiber', 'TypeScript'],
            technologies: ['Three.js', 'WebGL', 'GSAP', 'Prisma'],
            tools: ['Figma', 'Blender', 'Spline', 'Photoshop'],
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
            frameworks: ['Vue.js 3', 'Python', 'FastAPI', 'MongoDB'],
            technologies: ['WebAssembly', 'TensorFlow.js', 'Plotly', 'Pinia'],
            tools: ['VS Code', 'Jupyter', 'Docker', 'Kubernetes'],
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
            frameworks: ['Shopify', 'Liquid', 'JavaScript'],
            technologies: ['Shopify API', 'Stripe', 'Klaviyo', 'CSS Grid'],
            tools: ['Figma', 'Adobe Illustrator', 'Photoshop', 'Lightroom'],
        },
    },
];

export const CATEGORIES = ['All', 'Web Design', 'Development', 'Branding'];
