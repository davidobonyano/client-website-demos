import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceItem {
    title: string;
    description: string;
    icon: LucideIcon;
}

interface ServicesProps {
    title: string;
    subtitle?: string;
    services: ServiceItem[];
    themeColor?: string; // Text color class for icons
}

export default function Services({ title, subtitle, services, themeColor = "text-blue-600" }: ServicesProps) {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container-width">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
                    {subtitle && <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
                        >
                            <div className={cn("mb-6 p-4 rounded-xl inline-block bg-gray-50 group-hover:bg-gray-100 transition-colors", themeColor)}>
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
