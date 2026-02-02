import { WorkHeader } from './_components/WorkHeader';
import { WorkGrid } from './_components/WorkGrid';
import { WorkProcess } from './_components/WorkProcess';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Work | Koderio Portfolio',
    description: 'Explore our portfolio of successful projects, case studies, and digital experiences.',
};

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-background">
            <WorkHeader />
            <WorkGrid />
            <WorkProcess />
        </main>
    );
}
