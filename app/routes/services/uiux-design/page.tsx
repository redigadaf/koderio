import ServicePageTemplate from '../_components/ServicePageTemplate';
import { servicesData } from '../_data/servicesData';

export default function UIUXDesignPage() {
    return <ServicePageTemplate service={servicesData['uiux-design']} />;
}
