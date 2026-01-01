"use client";

import Navbar from "@/components/Navbar";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import RevealImage from "@/components/RevealImage";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Users, ArrowRight, UtensilsCrossed } from "lucide-react";
import { cn } from "@/lib/utils";

export default function RestaurantPage() {
    const [hoveredDish, setHoveredDish] = useState<string | null>(null);

    const menuItems = [
        {
            category: "STARTERS",
            items: [
                { name: "Smoked Bone Marrow", price: "24", desc: "Sourdough toast, parsley salad, capers", img: "https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { name: "Charred Octopus", price: "32", desc: "Romesco sauce, burnt lemon, olive oil", img: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=600" }
            ]
        },
        {
            category: "MAINS",
            items: [
                { name: "Dry-Aged Ribeye", price: "85", desc: "45-day aged, truffle butter, rosemary", img: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600" },
                { name: "Pan-Seared Scallops", price: "48", desc: "Cauliflower purée, brown butter, sage", img: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=600" }
            ]
        }
    ];

    // Default background when no dish is hovered
    const defaultBg = "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1600";

    return (
        <main className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] font-serif selection:bg-[#E53935] selection:text-white">
            <Navbar
                appName="EMBER"
                ctaText="Reserve Table"
                themeColor="text-orange-500"
                variant="luxury"
            />

            {/* HERO - Restaurant Interior Image */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt="EMBER Restaurant Interior"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/60" />
                </div>

                <div className="relative z-10 text-center max-w-4xl px-4">
                    <TextReveal
                        text="FIRE. FLAVOR. PASSION."
                        className="text-xs font-sans tracking-[0.5em] text-orange-500 mb-6 font-bold"
                        mode="word"
                    />
                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-8 text-white">
                        EMBER
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light italic mb-12 max-w-2xl mx-auto">
                        "Cooking with fire is a relationship between control and chaos."
                    </p>
                    <MagneticButton className="px-10 py-4 border border-orange-500/50 text-orange-500 hover:bg-orange-600 hover:text-white hover:border-transparent transition-all font-sans tracking-widest text-sm font-bold uppercase">
                        Book Your Experience
                    </MagneticButton>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 animate-bounce text-orange-500/50">
                    <ArrowRight className="rotate-90" />
                </div>
            </section>

            {/* SENSORY MENU - With Food Images */}
            <section className="py-32 relative overflow-hidden bg-[#0A0A0A]">
                <div className="container-width px-6 w-full">
                    <div className="text-center mb-20">
                        <h2 className="text-orange-500 text-xs font-sans tracking-[0.3em] mb-4">THE MENU</h2>
                        <h3 className="text-5xl font-bold">Curated by Fire</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {menuItems.map((category, idx) => (
                            <div key={idx} className="space-y-6">
                                <h4 className="text-xl font-serif text-orange-500 mb-6 border-b border-orange-500/30 pb-4">{category.category}</h4>
                                {category.items.map((item, i) => (
                                    <div
                                        key={i}
                                        className="group flex gap-6 p-4 rounded-2xl hover:bg-white/5 transition-all cursor-pointer"
                                    >
                                        {/* Food Image */}
                                        <div className="w-28 h-28 rounded-xl overflow-hidden flex-shrink-0 bg-gray-800">
                                            <img
                                                src={item.img}
                                                alt={item.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        {/* Details */}
                                        <div className="flex-grow flex flex-col justify-center">
                                            <div className="flex justify-between items-start">
                                                <h5 className="text-2xl font-medium group-hover:text-orange-500 transition-colors">{item.name}</h5>
                                                <span className="text-xl font-light text-orange-500">${item.price}</span>
                                            </div>
                                            <p className="text-gray-500 font-sans text-sm mt-2">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* View Full Menu Button */}
                    <div className="text-center mt-16 py-8">
                        <button className="px-12 py-5 border-2 border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all font-sans tracking-widest text-sm font-bold uppercase rounded-full">
                            View Full Menu
                        </button>
                    </div>
                </div>
            </section>

            {/* RESERVATION - High End Form */}
            <section className="py-32 bg-[#111] relative border-t border-white/5">
                <div className="container-width px-6 max-w-4xl mx-auto text-center">
                    <UtensilsCrossed className="w-12 h-12 text-orange-600 mx-auto mb-8 opacity-80" />
                    <h2 className="text-5xl md:text-6xl font-bold mb-12">Secure Your Table</h2>

                    <div className="bg-[#1A1A1A] p-10 md:p-16 rounded-3xl border border-white/5 shadow-2xl">
                        <form className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            <div className="relative group">
                                <Users className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500 group-focus-within:text-orange-500 transition-colors" size={20} />
                                <select className="w-full bg-[#0A0A0A] border border-white/10 text-white pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-orange-500 appearance-none font-sans">
                                    <option>2 Guests</option>
                                    <option>4 Guests</option>
                                    <option>6 Guests</option>
                                    <option>Large Party</option>
                                </select>
                            </div>
                            <div className="relative group">
                                <Calendar className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500 group-focus-within:text-orange-500 transition-colors" size={20} />
                                <input type="date" className="w-full bg-[#0A0A0A] border border-white/10 text-white pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-orange-500 font-sans" />
                            </div>
                            <div className="relative group">
                                <Clock className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500 group-focus-within:text-orange-500 transition-colors" size={20} />
                                <select className="w-full bg-[#0A0A0A] border border-white/10 text-white pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-orange-500 appearance-none font-sans">
                                    <option>7:00 PM</option>
                                    <option>7:30 PM</option>
                                    <option>8:00 PM</option>
                                    <option>8:30 PM</option>
                                </select>
                            </div>
                        </form>
                        <MagneticButton className="w-full py-6 bg-gradient-to-r from-orange-700 to-red-700 text-white font-bold font-sans tracking-widest text-lg rounded-xl hover:scale-[1.01] transition-transform shadow-lg shadow-orange-900/20">
                            CONFIRM RESERVATION
                        </MagneticButton>
                    </div>
                </div>
            </section>

            <Footer appName="EMBER" description="Wood-Fired Dining." />
        </main>
    );
}
