import React from 'react';

export const TestimonialHeader: React.FC = () => {
    return (
        <div className="absolute top-4 left-0 z-0 w-full text-center">
            <h2 className="text-4xl font-black md:text-6xl">
                What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600">Clients Say</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 md:text-xl max-w-2xl mx-auto px-4">
                Trusted by teams everywhere. Read what they have to say about us.
            </p>
        </div>
    );
};
