import ServicePageTemplate from '../_components/ServicePageTemplate';
import { servicesData } from '../_data/servicesData';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Mobile Apps | Koderio',
    description: 'Explore our portfolio of successful projects, case studies, and digital experiences.',
};

export default function MobileAppsPage() {
    return <ServicePageTemplate service={servicesData['mobile-apps']} />;
}
