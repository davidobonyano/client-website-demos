import { MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";

interface Listing {
    id: string;
    image: string;
    price: string;
    title: string;
    address: string;
    beds: number;
    baths: number;
    sqft: number;
}

interface ListingsProps {
    title: string;
    listings: Listing[];
}

export default function Listings({ title, listings }: ListingsProps) {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container-width">
                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">{title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {listings.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full font-bold text-slate-900 shadow-lg">
                                    {item.price}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">{item.title}</h3>
                                <div className="flex items-center text-gray-500 mb-6 text-sm">
                                    <MapPin size={16} className="mr-1" />
                                    <span className="truncate">{item.address}</span>
                                </div>

                                <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-sm font-medium text-gray-700">
                                    <div className="flex items-center gap-1">
                                        <Bed size={18} className="text-gray-400" />
                                        <span>{item.beds} Beds</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Bath size={18} className="text-gray-400" />
                                        <span>{item.baths} Baths</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Square size={18} className="text-gray-400" />
                                        <span>{item.sqft} sqft</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="inline-flex items-center gap-2 font-bold text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-slate-600 hover:border-slate-600 transition-colors">
                        View All Properties <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}
