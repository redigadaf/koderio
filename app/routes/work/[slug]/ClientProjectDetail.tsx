'use client';

import { Project } from '../_components/data';
import { getCategoryTheme } from './_components/theme';
import ProjectHero from './_components/ProjectHero';
import ProjectInfoGrid from './_components/ProjectInfoGrid';
import ProjectOverview from './_components/ProjectOverview';
import TechnicalSpecs from './_components/TechnicalSpecs';
import ProjectChallenge from './_components/ProjectChallenge';
import ProjectSolution from './_components/ProjectSolution';
import FeatureShowcase from './_components/FeatureShowcase';
import ProjectImpact from './_components/ProjectImpact';
import ProjectCTA from './_components/ProjectCTA';

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
