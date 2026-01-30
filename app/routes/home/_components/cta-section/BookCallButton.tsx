"use client";

import { ArrowUpRight, Calendar } from "lucide-react";
import { type CTAButtonProps } from "./types";

export function BookCallButton({ isButtonHovered, setIsButtonHovered, showSuccess, onBookCall }: CTAButtonProps) {
    return (
        <button
            onClick={onBookCall}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            className="group relative flex items-center gap-4 transition-all duration-500 cursor-pointer"
            style={{
                transform: showSuccess
                    ? isButtonHovered
                        ? "translateY(0) scale(1.02)"
                        : "translateY(0) scale(1)"
                    : "translateY(15px) scale(1)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "150ms",
            }}
        >
            {/* Left line */}
            <div
                className="h-0.5 w-8 bg-purple-600/30 transition-all duration-500 sm:w-12"
                style={{
                    transform: isButtonHovered ? "scaleX(0)" : "scaleX(1)",
                    opacity: isButtonHovered ? 0 : 0.5,
                }}
            />

            {/* Button content - Brutalist style */}
            <div
                className="relative flex items-center gap-3 overflow-hidden border-2 px-6 py-3 transition-all duration-500 sm:px-8 sm:py-4"
                style={{
                    borderColor: isButtonHovered ? "#9333ea" : "#e5e7eb",
                    backgroundColor: isButtonHovered ? "#9333ea" : "transparent",
                    boxShadow: isButtonHovered ? "4px 4px 0px #9333ea" : "none",
                    transform: isButtonHovered ? "translate(-2px, -2px)" : "translate(0, 0)",
                }}
            >
                <Calendar
                    className="size-4 transition-all duration-500 sm:size-5"
                    strokeWidth={2}
                    style={{
                        color: isButtonHovered ? "#ffffff" : "#9333ea",
                    }}
                />
                <span
                    className="text-sm font-bold tracking-wide transition-all duration-500 sm:text-base"
                    style={{
                        color: isButtonHovered ? "#ffffff" : "#1f2937",
                    }}
                >
                    Book a call
                </span>
                <ArrowUpRight
                    className="size-4 transition-all duration-500 sm:size-5"
                    strokeWidth={2}
                    style={{
                        color: isButtonHovered ? "#ffffff" : "#9333ea",
                        transform: isButtonHovered ? "translate(3px, -3px) scale(1.1)" : "translate(0, 0) scale(1)",
                    }}
                />
            </div>

            {/* Right line */}
            <div
                className="h-0.5 w-8 bg-purple-600/30 transition-all duration-500 sm:w-12"
                style={{
                    transform: isButtonHovered ? "scaleX(0)" : "scaleX(1)",
                    opacity: isButtonHovered ? 0 : 0.5,
                }}
            />
        </button>
    );
}
