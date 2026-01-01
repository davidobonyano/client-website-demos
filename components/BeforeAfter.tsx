"use client";

import { useState, useRef, useEffect } from "react";
import { MoveHorizontal, ArrowRight, ArrowLeft } from "lucide-react";

interface BeforeAfterProps {
    beforeImage: string;
    afterImage: string;
}

export default function BeforeAfter({ beforeImage, afterImage }: BeforeAfterProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current) return;
        handleMove(e.clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        // Prevent scrolling while dragging slider
        // e.preventDefault(); 
        handleMove(e.touches[0].clientX);
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[600px] rounded-2xl overflow-hidden cursor-col-resize select-none border-4 border-white shadow-2xl group touch-none bg-gray-300"
            onMouseDown={() => { isDragging.current = true; }}
            onMouseUp={() => { isDragging.current = false; }}
            onMouseLeave={() => { isDragging.current = false; }}
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
            onTouchStart={() => { isDragging.current = true; }}
            onTouchEnd={() => { isDragging.current = false; }}
        >
            {/* Background (After Image) - Clean */}
            <div className="absolute inset-0">
                <img
                    src={afterImage}
                    alt="After Clean"
                    className="w-full h-full object-cover"
                    draggable={false}
                />
                <div className="absolute top-6 right-6 bg-blue-600/90 backdrop-blur text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-widest shadow-lg z-10">
                    AFTER
                </div>
            </div>

            {/* Foreground (Before Image) - Messy - Clipped */}
            <div
                className="absolute inset-0 w-full h-full overflow-hidden will-change-[clip-path]"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={beforeImage}
                    alt="Before Messy"
                    className="w-full h-full object-cover"
                    draggable={false}
                />
                <div className="absolute top-6 left-6 bg-gray-900/90 backdrop-blur text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-widest shadow-lg z-10">
                    BEFORE
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl text-blue-600 scale-100 group-active:scale-110 transition-transform">
                    <MoveHorizontal size={24} />
                </div>
            </div>

            {/* Hint overlay usually helps */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 bg-black/30 px-4 py-2 rounded-full text-xs font-medium backdrop-blur-sm pointer-events-none md:hidden">
                Drag to compare
            </div>
        </div>
    );
}
