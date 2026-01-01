import { cn } from "@/lib/utils";
import Link from "next/link";

interface HeroProps {
    headline: string;
    subheadline: string;
    primaryCtaText: string;
    secondaryCtaText?: string;
    backgroundImage?: string;
    themeColor?: string; // e.g., "bg-blue-600"
    overlayOpacity?: string;
    align?: "center" | "left";
    font?: "sans" | "serif";
}

export default function Hero({
    headline,
    subheadline,
    primaryCtaText,
    secondaryCtaText,
    backgroundImage,
    themeColor = "bg-slate-900",
    overlayOpacity = "bg-black/50",
    align = "center",
    font = "sans",
}: HeroProps) {
    return (
        <section className="relative h-[85vh] flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0 bg-gray-900">
                {backgroundImage && (
                    <img
                        src={backgroundImage}
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-90"
                    />
                )}
                <div className={cn("absolute inset-0", overlayOpacity)} />
            </div>

            {/* Content */}
            <div className={cn("relative z-10 container-width px-4", align === "center" ? "text-center mx-auto" : "text-left")}>
                <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
                    <h1 className={cn("text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-white shadow-sm", font === "serif" && "font-serif italic")}>
                        {headline}
                    </h1>
                    <p className={cn("text-xl md:text-2xl mb-10 text-gray-100 font-light opacity-95", font === "serif" && "font-serif")}>
                        {subheadline}
                    </p>
                    <div className={cn("flex flex-col sm:flex-row gap-4", align === "center" && "justify-center")}>
                        <button className={cn("px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl", "bg-white text-gray-900 hover:bg-gray-100")}>
                            {primaryCtaText}
                        </button>
                        {secondaryCtaText && (
                            <button className="px-8 py-4 rounded-full font-bold text-lg border-2 border-white/80 bg-white/5 backdrop-blur-sm text-white hover:bg-white/20 transition-all hover:scale-105 active:scale-95">
                                {secondaryCtaText}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
