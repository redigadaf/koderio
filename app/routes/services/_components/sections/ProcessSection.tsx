'use client';

import { motion } from 'framer-motion';
import { ServiceData } from '../../_data/servicesData';

interface ProcessSectionProps {
    service: ServiceData;
}

export default function ProcessSection({ service }: ProcessSectionProps) {
    return (
        <section className="py-32 max-w-7xl mx-auto px-6 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-24"
            >
                <h2 className="text-5xl md:text-6xl font-black mb-6">Our Process</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">A proven approach to deliver excellence</p>
            </motion.div>

            <div className="relative mt-12 md:mt-12">
                {/* Connector Line (Desktop) */}
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-12 -translate-y-1/2 z-0 select-none pointer-events-none">
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1200 24">
                        {/* Static Solid Path */}
                        <path
                            d="M 0,12 L 1200,12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-border"
                        />
                        {/* Animated Gradient Path Overlay */}
                        <motion.path
                            d="M 0,12 L 1200,12"
                            fill="none"
                            stroke={`url(#gradient-${service.title.replace(/\s+/g, '-')})`}
                            strokeWidth="4"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        <defs>
                            <linearGradient id={`gradient-${service.title.replace(/\s+/g, '-')}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
                                <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
                                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {service.process.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5, delay: 0 }
                            }}
                            whileHover={{ y: -8, transition: { duration: 0.5, delay: 0 } }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.3, delay: 0 }}
                            className="group relative z-10"
                        >

                            <div className="group relative h-full bg-background/60 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/10 hover:border-transparent shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                {/* Gradient Border on Hover */}
                                <div className={`absolute inset-0 rounded-[2.5rem] p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.color.primary} -z-10`} />

                                {/* Inner Background for Border Effect */}
                                <div className="absolute inset-[1px] rounded-[38px] bg-background/90 -z-10" />

                                {/* Large Back Number */}
                                <div className="absolute -right-4 -top-4 opacity-0 group-hover:opacity-[0.1] transition-all duration-500 select-none scale-150 origin-top-right">
                                    <span className="text-9xl font-black bg-gradient-to-br from-foreground to-transparent bg-clip-text text-transparent">
                                        {step.step}
                                    </span>
                                </div>

                                <div className="relative z-10 flex flex-col gap-6">
                                    {/* Small Number Indicator */}
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color.primary} flex items-center justify-center text-xl font-black text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                        {step.step}
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed text-sm">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
