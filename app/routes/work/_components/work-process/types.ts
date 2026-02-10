
import { type LucideIcon } from 'lucide-react';

export interface ProcessStep {
    icon: LucideIcon;
    number: string;
    title: string;
    description: string;
    color: string;
}

export interface StatItem {
    icon: LucideIcon;
    value: string;
    label: string;
}
