
import { Lightbulb, Palette, Code, Rocket, Users, TrendingUp } from 'lucide-react';
import { ProcessStep, StatItem } from './types';

export const processes: ProcessStep[] = [
    {
        icon: Lightbulb,
        number: '01',
        title: 'Discovery & Strategy',
        description: 'We dive deep into understanding your business goals, target audience, and market landscape to craft a winning strategy.',
        color: 'from-purple-500 to-indigo-500'
    },
    {
        icon: Palette,
        number: '02',
        title: 'Design & Prototype',
        description: 'Our designers create stunning, user-centric interfaces that bring your vision to life with pixel-perfect precision.',
        color: 'from-indigo-500 to-purple-500'
    },
    {
        icon: Code,
        number: '03',
        title: 'Development',
        description: 'Expert developers transform designs into robust, scalable applications using cutting-edge technologies.',
        color: 'from-purple-500 to-pink-500'
    },
    {
        icon: Rocket,
        number: '04',
        title: 'Launch & Optimize',
        description: 'We ensure a smooth launch and continuously optimize performance based on real-world data and user feedback.',
        color: 'from-pink-500 to-purple-500'
    }
];

export const stats: StatItem[] = [
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Code, value: '100+', label: 'Projects Delivered' },
    { icon: TrendingUp, value: '98%', label: 'Success Rate' }
];
