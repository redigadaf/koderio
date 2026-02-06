import AboutHero from './_components/AboutHero';
import VisionMission from './_components/VisionMission';
import ServicesSection from './_components/ServicesSection';
import { RecognitionSection } from './_components/RecognitionSection';
import Milestones from './_components/Milestones';
import TeamGrid from './_components/TeamGrid';
import SocialImpact from './_components/SocialImpact';
import CultureGallery from './_components/CultureGallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Koderio',
    description: 'Learn about Koderio, our mission, vision, and the team behind our innovative solutions.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <AboutHero />
            <VisionMission />
            <ServicesSection />
            <RecognitionSection />
            <Milestones />
            <TeamGrid />
            <SocialImpact />
            <CultureGallery />
        </main>
    );
}
