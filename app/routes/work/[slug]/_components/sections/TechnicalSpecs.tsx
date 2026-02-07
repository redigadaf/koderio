'use client';

import { motion } from 'framer-motion';
import {
    Code, Palette, Layers, Wrench,
    FileBadge, Box, Database, Droplet, Mail, Server, Code2
} from 'lucide-react';
import {
    SiNextdotjs, SiReact, SiTypescript, SiFramer, SiThreedotjs, SiGreensock, SiTailwindcss,
    SiFigma, SiAdobeaftereffects, SiBlender, SiAdobeillustrator, SiAdobeindesign,
    SiAdobecreativecloud, SiSketch, SiNodedotjs, SiExpress, SiPostgresql,
    SiChartdotjs, SiD3Dotjs, SiRedux, SiSocketdotio,
    SiDocker, SiGithubactions, SiPostman, SiWebgl, SiPrisma, SiAdobephotoshop,
    SiVuedotjs, SiPython, SiFastapi, SiMongodb, SiWebassembly, SiTensorflow,
    SiPlotly, SiJupyter, SiKubernetes, SiShopify, SiJavascript, SiStripe,
    SiCss3, SiAdobelightroomclassic
} from "react-icons/si";
import { CategoryTheme } from '../utils/theme';
import { ProjectTechSpecs } from '../../../_components/data';
import { containerVariants, cardVariants } from '../utils/animations';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
    // Lucide Icons
    FileBadge, Palette, Box, Database, Droplet, Mail, Server, Code2, Code, Layers, Wrench,

    // Simple Icons
    SiNextdotjs, SiReact, SiTypescript, SiFramer, SiThreedotjs, SiGreensock, SiTailwindcss,
    SiFigma, SiAdobeaftereffects, SiBlender, SiAdobeillustrator, SiAdobeindesign,
    SiAdobecreativecloud, SiSketch, SiNodedotjs, SiExpress, SiPostgresql,
    SiChartdotjs, SiD3Dotjs, SiRedux, SiSocketdotio,
    SiDocker, SiGithubactions, SiPostman, SiWebgl, SiPrisma, SiAdobephotoshop,
    SiVuedotjs, SiPython, SiFastapi, SiMongodb, SiWebassembly, SiTensorflow,
    SiPlotly, SiJupyter, SiKubernetes, SiShopify, SiJavascript, SiStripe,
    SiCss3, SiAdobelightroomclassic
};

interface TechnicalSpecsProps {
    techSpecs: ProjectTechSpecs;
    theme: CategoryTheme;
}

export default function TechnicalSpecs({ techSpecs, theme }: TechnicalSpecsProps) {
    const getIcon = (key: string) => {
        return ICON_MAP[key] || Code;
    };

    return (
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                className="space-y-12"
            >
                <motion.div variants={cardVariants} className="flex items-center gap-4 mb-8">
                    <div className={`p-4 bg-gradient-to-br ${theme.accent} rounded-2xl`}>
                        <Code className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">Technical Specifications</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Color Palette */}
                    <motion.div
                        variants={cardVariants}
                        className={`p-8 rounded-3xl border-2 ${theme.border} bg-background shadow-xl ${theme.glow}`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`p-3 bg-gradient-to-br ${theme.accent} rounded-xl`}>
                                <Palette className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Color Palette</h3>
                        </div>

                        <div className="space-y-4">
                            {Object.entries(techSpecs.colors).map(([name, color]) => (
                                <div key={name} className="flex items-center gap-4">
                                    <div
                                        className="w-16 h-16 rounded-xl shadow-lg border-2 border-border"
                                        style={{ backgroundColor: color }}
                                    />
                                    <div>
                                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                                            {name}
                                        </p>
                                        <p className="text-lg font-mono font-bold text-foreground">{color}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Typography */}
                    <motion.div
                        variants={cardVariants}
                        className={`p-8 rounded-3xl border-2 ${theme.border} bg-background shadow-xl ${theme.glow}`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`p-3 bg-gradient-to-br ${theme.accent} rounded-xl`}>
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Typography</h3>
                        </div>

                        <div className="space-y-6">
                            <div className={`p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-background border-2 ${theme.border}`}>
                                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Heading Font</p>
                                <p className="text-3xl font-bold text-foreground mb-1">{techSpecs.typography.headingFont}</p>
                                <p className="text-sm text-muted-foreground italic">The quick brown fox jumps</p>
                            </div>

                            <div className={`p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-background border-2 ${theme.border}`}>
                                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Body Font</p>
                                <p className="text-2xl font-semibold text-foreground mb-1">{techSpecs.typography.bodyFont}</p>
                                <p className="text-sm text-muted-foreground">The quick brown fox jumps over the lazy dog</p>
                            </div>

                            <div className="pt-4 border-t-2 border-border">
                                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Font Pairing Style</p>
                                <p className={`text-lg font-bold ${theme.text}`}>{techSpecs.typography.fontPairings}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Frameworks & Technologies */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    {/* Frameworks */}
                    <motion.div
                        variants={cardVariants}
                        className={`p-8 rounded-3xl border-2 ${theme.border} bg-gradient-to-br from-background to-muted/30 shadow-xl ${theme.glow}`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`p-3 bg-gradient-to-br ${theme.accent} rounded-xl`}>
                                <Code className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-black text-foreground uppercase tracking-wide">Frameworks</h3>
                        </div>
                        <ul className="space-y-4">
                            {techSpecs.frameworks.map((framework, index) => {
                                const Icon = getIcon(framework.iconKey);
                                return (
                                    <li key={index} className="flex items-center gap-3 group">
                                        <div className={`p-2 bg-muted rounded-lg border border-border group-hover:border-primary/50 transition-colors duration-300`}>
                                            <Icon
                                                className={`w-5 h-5 transition-colors duration-300`}
                                                style={{ color: framework.color }}
                                            />
                                        </div>
                                        <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">{framework.name}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div
                        variants={cardVariants}
                        className={`p-8 rounded-3xl border-2 ${theme.border} bg-gradient-to-br from-background to-muted/30 shadow-xl ${theme.glow}`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`p-3 bg-gradient-to-br ${theme.accent} rounded-xl`}>
                                <Layers className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-black text-foreground uppercase tracking-wide">Technologies</h3>
                        </div>
                        <ul className="space-y-3">
                            {techSpecs.technologies.map((tech, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <span className={`w-2 h-2 bg-gradient-to-br ${theme.accent} rounded-full`}></span>
                                    <span className="text-foreground font-medium">{tech}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Tools */}
                    <motion.div
                        variants={cardVariants}
                        className={`p-8 rounded-3xl border-2 ${theme.border} bg-gradient-to-br from-background to-muted/30 shadow-xl ${theme.glow}`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`p-3 bg-gradient-to-br ${theme.accent} rounded-xl`}>
                                <Wrench className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-black text-foreground uppercase tracking-wide">Tools</h3>
                        </div>
                        <ul className="space-y-4">
                            {techSpecs.tools.map((tool, index) => {
                                const Icon = getIcon(tool.iconKey);
                                return (
                                    <li key={index} className="flex items-center gap-3 group">
                                        <div className={`p-2 bg-muted rounded-lg border border-border group-hover:border-primary/50 transition-colors duration-300`}>
                                            <Icon
                                                className={`w-5 h-5 transition-colors duration-300`}
                                                style={{ color: tool.color }}
                                            />
                                        </div>
                                        <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">{tool.name}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
