export interface ServiceData {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    iconName: 'Code' | 'Smartphone' | 'Palette';
    color: {
        primary: string;
        accent: string;
        gradient: string;
    };
    features: {
        title: string;
        description: string;
        icon: string;
    }[];
    benefits: string[];
    process: {
        step: number;
        title: string;
        description: string;
    }[];
    technologies?: string[];
}

export const servicesData: Record<string, ServiceData> = {
    'web-development': {
        slug: 'web-development',
        title: 'Web Development',
        subtitle: 'Build scalable web applications with modern technologies',
        description: 'Transform your ideas into powerful, scalable web applications. We specialize in creating custom web solutions that drive business growth and deliver exceptional user experiences.',
        iconName: 'Code',
        color: {
            primary: 'from-blue-600 to-cyan-600',
            accent: 'bg-blue-600',
            gradient: 'from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950'
        },
        features: [
            {
                title: 'Full-Stack Development',
                description: 'End-to-end web solutions using modern frameworks like Next.js, React, and Node.js',
                icon: '🚀'
            },
            {
                title: 'Responsive Design',
                description: 'Mobile-first approach ensuring perfect experience across all devices',
                icon: '📱'
            },
            {
                title: 'Performance Optimization',
                description: 'Lightning-fast load times and smooth interactions for better user engagement',
                icon: '⚡'
            },
            {
                title: 'SEO Friendly',
                description: 'Built with SEO best practices to improve your search engine rankings',
                icon: '🔍'
            }
        ],
        benefits: [
            'Scalable architecture for future growth',
            'Clean, maintainable code',
            'Cross-browser compatibility',
            'Security best practices',
            'API integration & development',
            'Database design & optimization'
        ],
        process: [
            {
                step: 1,
                title: 'Discovery & Planning',
                description: 'We analyze your requirements and create a detailed project roadmap'
            },
            {
                step: 2,
                title: 'Design & Prototyping',
                description: 'Creating wireframes and interactive prototypes for your approval'
            },
            {
                step: 3,
                title: 'Development',
                description: 'Building your application with clean code and best practices'
            },
            {
                step: 4,
                title: 'Testing & Launch',
                description: 'Rigorous testing followed by smooth deployment to production'
            }
        ],
        technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Tailwind CSS']
    },
    'mobile-apps': {
        slug: 'mobile-apps',
        title: 'Mobile Apps',
        subtitle: 'Native and cross-platform mobile solutions',
        description: 'Create stunning mobile applications that engage users and drive business results. We build native and cross-platform apps that deliver seamless experiences on iOS and Android.',
        iconName: 'Smartphone',
        color: {
            primary: 'from-purple-600 to-pink-600',
            accent: 'bg-purple-600',
            gradient: 'from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950'
        },
        features: [
            {
                title: 'Cross-Platform Development',
                description: 'Build once, deploy everywhere with React Native and Flutter',
                icon: '📲'
            },
            {
                title: 'Native Performance',
                description: 'Smooth, responsive apps that feel native on every platform',
                icon: '⚡'
            },
            {
                title: 'Offline Capability',
                description: 'Apps that work seamlessly even without internet connection',
                icon: '🔄'
            },
            {
                title: 'Push Notifications',
                description: 'Keep users engaged with timely, personalized notifications',
                icon: '🔔'
            }
        ],
        benefits: [
            'Faster time to market',
            'Cost-effective development',
            'Consistent user experience',
            'Easy maintenance & updates',
            'App store optimization',
            'Analytics & monitoring'
        ],
        process: [
            {
                step: 1,
                title: 'Strategy & Planning',
                description: 'Define app goals, target audience, and key features'
            },
            {
                step: 2,
                title: 'UI/UX Design',
                description: 'Create intuitive, beautiful interfaces that users love'
            },
            {
                step: 3,
                title: 'Development & Testing',
                description: 'Build and test your app across multiple devices'
            },
            {
                step: 4,
                title: 'Deployment & Support',
                description: 'Launch on app stores and provide ongoing support'
            }
        ],
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux']
    },
    'uiux-design': {
        slug: 'uiux-design',
        title: 'UI/UX Design',
        subtitle: 'Beautiful, user-centered design experiences',
        description: 'Design experiences that users love. We create intuitive, visually stunning interfaces that not only look great but also solve real user problems and drive conversions.',
        iconName: 'Palette',
        color: {
            primary: 'from-orange-600 to-red-600',
            accent: 'bg-orange-600',
            gradient: 'from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950'
        },
        features: [
            {
                title: 'User Research',
                description: 'Deep understanding of your users through research and analysis',
                icon: '🔍'
            },
            {
                title: 'Wireframing & Prototyping',
                description: 'Interactive prototypes to validate ideas before development',
                icon: '📐'
            },
            {
                title: 'Visual Design',
                description: 'Beautiful interfaces that align with your brand identity',
                icon: '🎨'
            },
            {
                title: 'Usability Testing',
                description: 'Validate designs with real users to ensure optimal experience',
                icon: '✅'
            }
        ],
        benefits: [
            'Increased user satisfaction',
            'Higher conversion rates',
            'Reduced development costs',
            'Stronger brand identity',
            'Accessibility compliance',
            'Design system creation'
        ],
        process: [
            {
                step: 1,
                title: 'Research & Discovery',
                description: 'Understanding users, competitors, and market trends'
            },
            {
                step: 2,
                title: 'Information Architecture',
                description: 'Organizing content and features for optimal user flow'
            },
            {
                step: 3,
                title: 'Design & Iteration',
                description: 'Creating and refining designs based on feedback'
            },
            {
                step: 4,
                title: 'Handoff & Support',
                description: 'Delivering design assets and supporting development'
            }
        ],
        technologies: ['Figma', 'Adobe XD', 'Sketch', 'Framer', 'Principle', 'InVision']
    }
};
