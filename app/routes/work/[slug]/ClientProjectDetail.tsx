'use client';

import { Project } from '../_components/data';
import {
    getCategoryTheme,
    ProjectHero,
    ProjectInfoGrid,
    ProjectOverview,
    TechnicalSpecs,
    ProjectChallenge,
    ProjectSolution,
    FeatureShowcase,
    ProjectImpact,
    ProjectCTA
} from './_components';

interface ClientProjectDetailProps {
    project: Project;
}

export default function ClientProjectDetail({ project }: ClientProjectDetailProps) {
    const theme = getCategoryTheme(project.category);

    return (
        <main className="min-h-screen bg-background pt-20">
            <ProjectHero project={project} theme={theme} />
            <ProjectInfoGrid year={project.year} theme={theme} />
            <ProjectOverview theme={theme} />
            <TechnicalSpecs techSpecs={project.techSpecs} theme={theme} />
            <ProjectChallenge theme={theme} />
            <ProjectSolution theme={theme} />
            <FeatureShowcase imageUrl={project.imageUrl} theme={theme} />
            <ProjectImpact theme={theme} />
            <ProjectCTA theme={theme} />
        </main>
    );
}
