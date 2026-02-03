import ServicePageTemplate from '../_components/ServicePageTemplate';
import { servicesData } from '../_data/servicesData';

export default function MobileAppsPage() {
    return <ServicePageTemplate service={servicesData['mobile-apps']} />;
}
