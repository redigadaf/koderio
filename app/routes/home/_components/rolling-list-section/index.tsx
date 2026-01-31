"use client";
import { motion } from "framer-motion";
import { RollingTextItem } from "./RollingTextItem";
import { RollingListHeader } from "./RollingListHeader";
import { items } from "./data";

function RollingTextList() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto flex w-full max-w-7xl flex-col items-start justify-center px-6 sm:px-8 lg:px-12 py-32"
        >
            <RollingListHeader />
            <motion.div
                className="w-full flex flex-col px-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-50px" }}
                variants={{
                    visible: { transition: { staggerChildren: 0.15 } }
                }}
            >
                {items.map((item) => (
                    <RollingTextItem key={item.id} item={item} />
                ))}
            </motion.div>
        </motion.div>
    );
}

export { RollingTextList };
