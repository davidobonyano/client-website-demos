"use client";

import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Real Estate = Heavy (Forge vibe)
    const isHeavy = pathname === "/real-estate";

    // Dampening: 1.5 for light/airy (Clinic/Cleaning), 0.8 for heavy (Real Estate), 1.0 default
    const dampening = isHeavy ? 0.8 : 1.5;

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: dampening, smoothWheel: true }}>
            {children}
        </ReactLenis>
    );
}
