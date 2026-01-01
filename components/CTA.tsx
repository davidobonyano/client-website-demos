import { cn } from "@/lib/utils";

interface CTAProps {
    headline: string;
    subheadline?: string;
    buttonText: string;
    onClick?: () => void;
    bgColor?: string; // e.g., "bg-blue-600"
}

export default function CTA({ headline, subheadline, buttonText, bgColor = "bg-blue-600" }: CTAProps) {
    return (
        <section className={cn("py-24 text-white text-center", bgColor)}>
            <div className="container-width">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{headline}</h2>
                {subheadline && <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">{subheadline}</p>}
                <button className="px-10 py-5 bg-white text-gray-900 text-lg font-bold rounded-full shadow-xl hover:scale-105 transition-transform duration-300">
                    {buttonText}
                </button>
            </div>
        </section>
    );
}
