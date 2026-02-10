'use client';

import { ProcessHeader } from './ProcessHeader';
import { ProcessCard } from './ProcessCard';
import { StatsSection } from './StatsSection';
import { ProcessCTA } from './ProcessCTA';
import { processes, stats } from './data';

export function MainProcess() {
    return (
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-background via-purple-50/30 to-background overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full" />

            <div className="relative z-10 container px-4 md:px-6 lg:px-8 mx-auto max-w-[1400px]">
                <ProcessHeader />

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
                    {processes.map((process, index) => (
                        <ProcessCard
                            key={index}
                            process={process}
                            index={index}
                            isLast={index === processes.length - 1}
                        />
                    ))}
                </div>

                <StatsSection stats={stats} />
                <ProcessCTA />
            </div>
        </section>
    );
}
