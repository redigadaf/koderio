"use client";

import { ArrowUpRight } from "lucide-react";
import { type MainCTAProps } from "./types";

export function MainCTA({ isHovered, isClicked, setIsHovered, onClick }: MainCTAProps) {
    return (
        <div
            className="group relative cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
            style={{
                pointerEvents: isClicked ? "none" : "auto",
            }}
        >
            <div className="flex flex-col items-center gap-6">
                <h2
                    className="relative text-center text-5xl font-black tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                        opacity: isClicked ? 0 : 1,
                        transform: isClicked ? "translateY(-40px) scale(0.95)" : "translateY(0) scale(1)",
                    }}
                >
                    <span className="block overflow-hidden">
                        <span
                            className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                            style={{
                                transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                            }}
                        >
                            Let's work
                        </span>
                    </span>
                    <span className="block overflow-hidden">
                        <span
                            className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75"
                            style={{
                                transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                            }}
                        >
                            <span className="text-purple-600">together</span>
                        </span>
                    </span>
                </h2>

                <div className="relative mt-4 flex size-16 items-center justify-center sm:size-20">
                    {/* Brutalist border effect */}
                    <div
                        className="pointer-events-none absolute inset-0 border-2 transition-all ease-out"
                        style={{
                            borderColor: isClicked ? "#9333ea" : isHovered ? "#9333ea" : "#e5e7eb",
                            backgroundColor: isClicked ? "transparent" : isHovered ? "#9333ea" : "transparent",
                            transform: isClicked ? "scale(3)" : isHovered ? "scale(1.1)" : "scale(1)",
                            opacity: isClicked ? 0 : 1,
                            transitionDuration: isClicked ? "700ms" : "500ms",
                            boxShadow: isHovered && !isClicked ? "4px 4px 0px #9333ea" : "none",
                        }}
                    />
                    <ArrowUpRight
                        className="size-6 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] sm:size-7"
                        strokeWidth={2.5}
                        style={{
                            transform: isClicked
                                ? "translate(100px, -100px) scale(0.5)"
                                : isHovered
                                    ? "translate(2px, -2px)"
                                    : "translate(0, 0)",
                            opacity: isClicked ? 0 : 1,
                            color: isHovered && !isClicked ? "#ffffff" : "#9333ea",
                            transitionDuration: isClicked ? "600ms" : "500ms",
                        }}
                    />
                </div>
            </div>

            {/* Left decorative line */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 sm:-left-16">
                <div
                    className="h-0.5 w-8 bg-purple-600/30 transition-all duration-500 sm:w-12"
                    style={{
                        transform: isClicked ? "scaleX(0) translateX(-20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                        opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
                        backgroundColor: isHovered ? "#9333ea" : "#9333ea50",
                    }}
                />
            </div>

            {/* Right decorative line */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 sm:-right-16">
                <div
                    className="h-0.5 w-8 bg-purple-600/30 transition-all duration-500 sm:w-12"
                    style={{
                        transform: isClicked ? "scaleX(0) translateX(20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                        opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
                        backgroundColor: isHovered ? "#9333ea" : "#9333ea50",
                    }}
                />
            </div>
        </div>
    );
}
