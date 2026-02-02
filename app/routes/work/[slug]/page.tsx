import { PROJECTS } from '../_components/data';
import { notFound } from 'next/navigation';
import ClientProjectDetail from './ClientProjectDetail';

export function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return <ClientProjectDetail project={project} />;
}
