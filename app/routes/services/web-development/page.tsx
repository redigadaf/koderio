import ServicePageTemplate from '../_components/ServicePageTemplate';
import { servicesData } from '../_data/servicesData';

export default function WebDevelopmentPage() {
    return <ServicePageTemplate service={servicesData['web-development']} />;
}
