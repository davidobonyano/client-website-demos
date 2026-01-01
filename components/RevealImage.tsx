"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealImageProps {
    src: string;
    alt: string;
    className?: string;
    mode?: "burn-in" | "de-blur"; // burn-in for Real Estate, de-blur for others
}

export default function RevealImage({ src, alt, className, mode = "de-blur" }: RevealImageProps) {
    const variants = {
        hidden: mode === "burn-in"
            ? { opacity: 0, brightness: 0, scale: 0.95 }
            : { opacity: 0, filter: "blur(20px)", scale: 1.05 },
        visible: mode === "burn-in"
            ? { opacity: 1, brightness: 1, scale: 1, transition: { duration: 1.5, ease: "circOut" } }
            : { opacity: 1, filter: "blur(0px)", scale: 1, transition: { duration: 1.2, ease: "easeOut" } }
    };

    return (
        <div className={cn("overflow-hidden", className)}>
            <motion.img
                src={src}
                alt={alt}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={variants}
                className="w-full h-full object-cover"
            />
        </div>
    );
}
