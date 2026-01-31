"use client";

import Link from "next/link";

export const NavLogo = () => {
    return (
        <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                Koderio
            </Link>
        </div>
    );
};
