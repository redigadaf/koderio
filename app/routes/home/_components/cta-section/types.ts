export interface CTAButtonProps {
    isButtonHovered: boolean;
    setIsButtonHovered: (value: boolean) => void;
    showSuccess: boolean;
    onBookCall: () => void;
}

export interface MainCTAProps {
    isHovered: boolean;
    isClicked: boolean;
    setIsHovered: (value: boolean) => void;
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface SuccessMessageProps {
    showSuccess: boolean;
    isButtonHovered: boolean;
    setIsButtonHovered: (value: boolean) => void;
    onBookCall: () => void;
}
