export interface Testimonial {
    tempId: number;
    testimonial: string;
    by: string;
    imgSrc: string;
}

export interface TestimonialCardProps {
    position: number;
    testimonial: Testimonial;
    handleMove: (steps: number) => void;
    cardSize: number;
}
