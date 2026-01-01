"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RevealImage from "@/components/RevealImage";

interface CarouselItem {
    title: string;
    loc: string;
    price: string;
    img: string;
}

interface CarouselProps {
    items: CarouselItem[];
}

export default function Carousel({ items }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    }, [items.length]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    // Reset timer on manual interaction
    const resetTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(nextSlide, 5000);
    };

    useEffect(() => {
        timerRef.current = setInterval(nextSlide, 5000);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [nextSlide]);

    const handleManualNext = () => {
        nextSlide();
        resetTimer();
    };

    const handleManualPrev = () => {
        prevSlide();
        resetTimer();
    };

    return (
        <div className="relative w-full h-[700px] overflow-hidden group border border-white/5 bg-[#111]">
            {/* Main Slide Display */}
            <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        {/* Background Image with Dark Gradient for text readability */}
                        <img
                            src={items[currentIndex].img}
                            alt={items[currentIndex].title}
                            className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                    </motion.div>
                </AnimatePresence>

                {/* Text Content - Absolute Positioned */}
                <div className="absolute bottom-0 left-0 w-full p-12 z-20">
                    <div className="container-width flex flex-col md:flex-row justify-between items-end border-b border-[#B8860B]/30 pb-12">
                        <motion.div
                            key={`text-${currentIndex}`}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <p className="text-[#B8860B] font-sans tracking-[0.3em] text-sm mb-4 uppercase flex items-center gap-4">
                                <span className="inline-block w-8 h-[1px] bg-[#B8860B]"></span>
                                {items[currentIndex].loc}
                            </p>
                            <h3 className="text-5xl md:text-7xl font-bold text-[#F5E6CC] mb-2">{items[currentIndex].title}</h3>
                        </motion.div>

                        <motion.div
                            key={`price-${currentIndex}`}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <p className="text-3xl md:text-4xl text-white font-light font-sans">{items[currentIndex].price}</p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-12 right-12 z-30 flex gap-4">
                {/* Counter */}
                <div className="absolute -top-16 right-0 text-[#B8860B] font-sans font-bold tracking-widest text-lg">
                    0{currentIndex + 1} / 0{items.length}
                </div>

                <button
                    onClick={handleManualPrev}
                    className="w-16 h-16 border border-white/20 flex items-center justify-center text-white hover:bg-[#B8860B] hover:border-[#B8860B] hover:text-black transition-all duration-300"
                >
                    <ArrowLeft size={24} />
                </button>
                <button
                    onClick={handleManualNext}
                    className="w-16 h-16 border border-white/20 flex items-center justify-center text-white hover:bg-[#B8860B] hover:border-[#B8860B] hover:text-black transition-all duration-300"
                >
                    <ArrowRight size={24} />
                </button>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full">
                <motion.div
                    className="h-full bg-[#B8860B]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </div>
    );
}
