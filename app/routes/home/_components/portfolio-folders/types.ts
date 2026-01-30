export interface Project {
    id: string;
    image: string;
    title: string;
}

export interface ProjectCardProps {
    image: string;
    title: string;
    delay: number;
    isVisible: boolean;
    index: number;
    totalCount: number;
    onClick: () => void;
    isSelected: boolean;
}

export interface ImageLightboxProps {
    projects: Project[];
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    sourceRect: DOMRect | null;
    onCloseComplete?: () => void;
    onNavigate: (index: number) => void;
}

export interface AnimatedFolderProps {
    title: string;
    projects: Project[];
    className?: string;
    gradient?: string;
}

export interface PortfolioFolder {
    title: string;
    gradient: string;
    projects: Project[];
}
