"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import RevealImage from "@/components/RevealImage";
import TextReveal from "@/components/TextReveal";
import Carousel from "@/components/Carousel";
import { ArrowRight, Shield, Star, Clock } from "lucide-react";

export default function RealEstatePage() {
    return (
        <main className="min-h-screen bg-[#1A1A1A] text-[#E5E5E5] font-serif selection:bg-[#B8860B] selection:text-black">
            <Navbar
                appName="FORGE REALTY"
                ctaText="Private Viewing"
                themeColor="text-[#E5E5E5]"
                variant="luxury"
            />

            {/* HERO SECTION - Heavy, Dark, Metallic */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-black">
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    {/* Video or Static High-Res Image */}
                    <RevealImage
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2500"
                        alt="Luxury Property"
                        mode="burn-in"
                        className="w-full h-full object-cover opacity-80"
                    />
                </div>

                <div className="relative z-20 text-center max-w-5xl px-6">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-[#F5E6CC] mix-blend-difference">
                        TIMELESS<br />FOUNDATIONS
                    </h1>
                    <p className="text-xl md:text-2xl font-sans tracking-[0.2em] uppercase text-[#B8860B] mb-12">
                        Properties built to last generations
                    </p>

                    <div className="flex justify-center gap-6">
                        <MagneticButton className="px-10 py-5 bg-[#B8860B] text-black font-sans font-bold tracking-widest hover:bg-[#D4A017] transition-colors">
                            EXPLORE
                        </MagneticButton>
                        <MagneticButton className="px-10 py-5 border border-[#B8860B] text-[#B8860B] font-sans font-bold tracking-widest hover:bg-[#B8860B]/10 transition-colors">
                            CONTACT
                        </MagneticButton>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                    <div className="w-[1px] h-24 bg-[#B8860B]" />
                    <span className="font-sans text-xs tracking-widest text-[#B8860B]">SCROLL</span>
                </div>
            </section>

            {/* PHILOSOPHY */}
            <section className="py-32 px-6 container-width flex flex-col md:flex-row gap-16 items-center">
                <div className="md:w-1/2">
                    <h2 className="text-sm font-sans tracking-[0.3em] text-[#B8860B] mb-6">THE CRAFT</h2>
                    <TextReveal
                        text="We curate homes that carry the weight of history and the promise of the future. Every stone, every beam, every finish tells a story of permanence."
                        className="text-4xl md:text-5xl leading-tight text-[#E5E5E5] italic"
                        mode="word"
                    />
                </div>
                <div className="md:w-1/2 h-[600px] w-full">
                    <RevealImage
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                        alt="Craftsmanship"
                        mode="burn-in"
                        className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                </div>
            </section>

            {/* CAROUSEL SECTION (Replaces Scroll) */}
            <section className="py-0 bg-[#111111] border-t border-white/5 relative">
                <Carousel
                    items={[
                        { title: "THE IRON CLAD", loc: "West Bay", price: "24M QAR", img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=2000" },
                        { title: "COPPER RIDGE", loc: "Lusail", price: "18M QAR", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000" },
                        { title: "OBSIDIAN TOWER", loc: "The Pearl", price: "32M QAR", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000" },
                        { title: "SLATE VILLA", loc: "Al Waab", price: "15M QAR", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=2000" }
                    ]}
                />
            </section>

            {/* SERVICES GRID */}
            <section className="py-32 px-6 container-width">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Concierge", icon: Shield, desc: "White-glove service for the discerning few." },
                        { title: "Acquisition", icon: Star, desc: "Seamless transfer of legacy assets." },
                        { title: "Appraisal", icon: Clock, desc: "Accurate valuation of historical estates." }
                    ].map((s, i) => (
                        <div key={i} className="border border-white/10 p-12 hover:border-[#B8860B] transition-colors group bg-[#151515]">
                            <s.icon className="text-[#B8860B] mb-8 w-10 h-10 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-bold mb-4 text-[#F5E6CC]">{s.title}</h3>
                            <p className="font-sans text-gray-500 leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-[#0A0A0A] py-24 text-center border-t border-white/5">
                <h2 className="text-[12vw] font-bold text-[#1A1A1A] leading-none select-none pointer-events-none">FORGE</h2>
                <div className="mt-[-8vw] relative z-10">
                    <MagneticButton className="inline-block bg-[#B8860B] text-black px-12 py-6 font-bold font-sans tracking-widest text-xl hover:scale-105 transition-transform">
                        START YOUR LEGACY
                    </MagneticButton>
                </div>
                <a
                    href="https://david-obonyano.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-12 inline-block text-gray-600 hover:text-[#B8860B] transition-colors text-sm"
                >
                    Built by <span className="font-semibold text-[#B8860B]">David</span> — View Portfolio →
                </a>
            </footer>
        </main>
    );
}
