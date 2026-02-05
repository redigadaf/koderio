"use client";

import Link from "next/link";

export const NavLogo = () => {
    return (
        <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-600">
                Koderio
            </Link>
        </div>
    );
};
