"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    mode?: "word" | "blur" | "char";
}

export default function TextReveal({ text, className, delay = 0, mode = "word" }: TextRevealProps) {
    if (mode === "blur") {
        return (
            <motion.p
                initial={{ filter: "blur(20px)", opacity: 0 }}
                whileInView={{ filter: "blur(0px)", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay, ease: "easeOut" }}
                className={className}
            >
                {text}
            </motion.p>
        );
    }

    const words = text.split(" ");

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: delay },
        },
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
        },
        hidden: {
            opacity: 0,
            y: 20,
        },
    };

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "inherit" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={className}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    style={{ marginRight: "0.25em" }}
                    key={index}
                    transition={{ type: "spring", damping: 12, stiffness: 100 }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}

