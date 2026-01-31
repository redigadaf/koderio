"use client";
import React from "react";
import { motion, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-64 md:h-80 lg:h-96 w-[16rem] md:w-[24rem] lg:w-[30rem] relative flex-shrink-0"
        >
            <Link
                href={product.link}
                className="block group-hover/product:shadow-2xl group-hover/product:shadow-purple-500/50"
            >
                <Image
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-left-top absolute h-full w-full inset-0"
                    alt={product.title}
                />
            </Link>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black/50 hover:bg-purple-900/40 pointer-events-none transition-colors duration-300"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-bold">
                {product.title}
            </h2>
        </motion.div>
    );
};
