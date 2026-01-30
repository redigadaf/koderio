"use client";

import { BookCallButton } from "./BookCallButton";
import { type SuccessMessageProps } from "./types";

export function SuccessMessage({ showSuccess, isButtonHovered, setIsButtonHovered, onBookCall }: SuccessMessageProps) {
    return (
        <div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
                opacity: showSuccess ? 1 : 0,
                transform: showSuccess ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
                pointerEvents: showSuccess ? "auto" : "none",
            }}
        >
            {/* Elegant heading */}
            <div className="flex flex-col items-center gap-2">
                <span
                    className="text-xs font-bold tracking-[0.3em] uppercase text-purple-600/70 transition-all duration-500"
                    style={{
                        transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                        opacity: showSuccess ? 1 : 0,
                        transitionDelay: "100ms",
                    }}
                >
                    Perfect
                </span>
                <h3
                    className="text-3xl font-black tracking-tight text-foreground transition-all duration-500 sm:text-4xl md:text-5xl"
                    style={{
                        transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                        opacity: showSuccess ? 1 : 0,
                        transitionDelay: "200ms",
                    }}
                >
                    Let's talk
                </h3>
            </div>

            {/* Book a call button */}
            <BookCallButton
                isButtonHovered={isButtonHovered}
                setIsButtonHovered={setIsButtonHovered}
                showSuccess={showSuccess}
                onBookCall={onBookCall}
            />

            {/* Subtle subtext */}
            <span
                className="text-xs font-semibold tracking-[0.2em] uppercase text-purple-600/50 transition-all duration-500"
                style={{
                    transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                    opacity: showSuccess ? 1 : 0,
                    transitionDelay: "450ms",
                }}
            >
                15 min intro call
            </span>
        </div>
    );
}
