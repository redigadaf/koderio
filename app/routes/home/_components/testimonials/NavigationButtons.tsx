import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationButtonsProps {
    onPrevious: () => void;
    onNext: () => void;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
    onPrevious,
    onNext
}) => {
    return (
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
            <button
                onClick={onPrevious}
                className={cn(
                    "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
                    "bg-white border-2 border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2"
                )}
                aria-label="Previous testimonial"
            >
                <ChevronLeft />
            </button>
            <button
                onClick={onNext}
                className={cn(
                    "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
                    "bg-white border-2 border-purple-200 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2"
                )}
                aria-label="Next testimonial"
            >
                <ChevronRight />
            </button>
        </div>
    );
};
