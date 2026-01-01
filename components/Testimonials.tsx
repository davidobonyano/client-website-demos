import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface Testimonial {
    name: string;
    role?: string;
    content: string;
    avatar?: string;
    rating?: number;
}

interface TestimonialsProps {
    title: string;
    testimonials: Testimonial[];
    accentColor?: string;
}

export default function Testimonials({ title, testimonials, accentColor = "text-yellow-500" }: TestimonialsProps) {
    return (
        <section className="py-24 bg-white">
            <div className="container-width">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">{title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative">
                            <div className="flex gap-1 mb-4">
                                {[...Array(t.rating || 5)].map((_, i) => (
                                    <Star key={i} size={20} className={cn("fill-current", accentColor)} />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6 text-lg">"{t.content}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-500">
                                    {t.avatar ? <img src={t.avatar} alt={t.name} className="w-full h-full rounded-full object-cover" /> : t.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                                    {t.role && <p className="text-sm text-gray-500">{t.role}</p>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
