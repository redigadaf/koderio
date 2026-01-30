export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
}

export interface TeamRowProps {
    data: TeamMember;
    index: number;
    isActive: boolean;
    setActiveId: (id: string | null) => void;
    isMobile: boolean;
    isAnyActive: boolean;
}
