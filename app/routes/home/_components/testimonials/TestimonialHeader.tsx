import React from 'react';

export const TestimonialHeader: React.FC = () => {
    return (
        <div className="absolute top-4 left-0 z-0 w-full text-center">
            <h1 className="text-4xl font-black tracking-tighter text-foreground sm:text-6xl md:text-8xl ">
                What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600 pr-2">Clients Say</span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 md:text-xl max-w-2xl mx-auto px-4">
                Trusted by teams everywhere. Read what they have to say about us.
            </p>
        </div>
    );
};
