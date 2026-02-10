'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { ServiceData } from '../../_data/servicesData';

interface PortfolioSectionProps {
    service: ServiceData;
}

const portfolioItems = {
    'web-development': [
        {
            title: 'Modern E-commerce Platform',
            category: 'E-commerce',
            image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            description: 'A high-performance e-commerce solution with Next.js and Stripe integration.'
        },
        {
            title: 'SaaS Dashboard',
            category: 'Web Application',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            description: 'Real-time analytics dashboard built for a fintech startup.'
        },
        {
            title: 'Corporate Website',
            category: 'Corporate',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            description: 'Responsive corporate website with headless CMS integration.'
        }
    ],
    'mobile-apps': [
        {
            title: 'Fitness Tracker App',
            category: 'Health & Fitness',
            image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            description: 'Cross-platform mobile app for tracking workouts and nutrition.'
        },
        {
            title: 'Food Delivery App',
            category: 'On-Demand',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            description: 'Feature-rich food delivery application with real-time tracking.'
        },
        {
            title: 'Social Networking App',
            category: 'Social',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            description: 'Connects people with similar interests in their local area.'
        }
    ],
    'uiux-design': [
        {
            title: 'Banking App Redesign',
            category: 'Fintech',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            description: 'Complete overhaul of a banking application user interface.'
        },
        {
            title: 'Travel Booking Platform',
            category: 'Travel',
            image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            description: 'User-centric design for a seamless travel booking experience.'
        },
        {
            title: 'Smart Home Interface',
            category: 'IoT',
            image: 'https://images.unsplash.com/photo-1558002038-1091a166111c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            description: 'Intuitive control panel design for smart home devices.'
        }
    ]
};

export default function PortfolioSection({ service }: PortfolioSectionProps) {
    const items = portfolioItems[service.slug as keyof typeof portfolioItems] || [];

    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Our Recent <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.color.primary}`}>Projects</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Explore some of our successful collaborations and the results we've achieved.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        <ArrowUpRight className="w-5 h-5 text-black" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${service.color.primary}`}>
                                    {item.category}
                                </div>
                                <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-2">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
