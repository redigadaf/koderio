'use client';

import { useScroll, useTransform } from 'framer-motion';
import { Code, Smartphone, Palette } from 'lucide-react';
import { ServiceData } from '../_data/servicesData';
import { useRef } from 'react';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import BenefitsSection from './sections/BenefitsSection';
import ProcessSection from './sections/ProcessSection';
import TechnologiesSection from './sections/TechnologiesSection';
import CTASection from './sections/CTASection';

interface ServicePageTemplateProps {
    service: ServiceData;
}

const iconMap = {
    Code: Code,
    Smartphone: Smartphone,
    Palette: Palette
};

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
    const Icon = iconMap[service.iconName];
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

    return (
        <main className="min-h-screen bg-background overflow-x-hidden pt-20">
            <HeroSection
                service={service}
                Icon={Icon}
                heroY={heroY}
                heroOpacity={heroOpacity}
                heroScale={heroScale}
                heroRef={heroRef}
            />
            <FeaturesSection service={service} />
            <BenefitsSection service={service} />
            <ProcessSection service={service} />
            <TechnologiesSection service={service} />
            <CTASection service={service} />
        </main>
    );
}
