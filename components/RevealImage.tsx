"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealImageProps {
    src: string;
    alt: string;
    className?: string;
    mode?: "burn-in" | "de-blur";
}

export default function RevealImage({ src, alt, className, mode = "de-blur" }: RevealImageProps) {
    const isBurnIn = mode === "burn-in";

    return (
        <div className={cn("overflow-hidden", className)}>
            <motion.img
                src={src}
                alt={alt}
                initial={{
                    opacity: 0,
                    scale: isBurnIn ? 0.95 : 1.05,
                    filter: isBurnIn ? "none" : "blur(20px)"
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)"
                }}
                transition={{
                    duration: isBurnIn ? 1.5 : 1.2,
                    ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-10%" }}
                className="w-full h-full object-cover"
            />
        </div>
    );
}

