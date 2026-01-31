import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";

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
            <Button
                variant="outline"
                onClick={onPrevious}
                className="h-14 w-14 border-2 border-purple-200 bg-white p-0 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 rounded-none focus-visible:ring-purple-600"
                aria-label="Previous testimonial"
            >
                <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
                variant="outline"
                onClick={onNext}
                className="h-14 w-14 border-2 border-purple-200 bg-white p-0 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 rounded-none focus-visible:ring-purple-600"
                aria-label="Next testimonial"
            >
                <ChevronRight className="h-8 w-8" />
            </Button>
        </div>
    );
};
