"use client";

import Navbar from "@/components/Navbar";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import RevealImage from "@/components/RevealImage";
import Footer from "@/components/Footer";
import BookingSection from "@/components/BookingSection";
import { ArrowRight } from "lucide-react";

export default function ClinicPage() {
    return (
        <main className="min-h-screen bg-white text-[#4A4A4A] font-sans selection:bg-[#E8F5E9] selection:text-[#1B5E20]">
            <Navbar
                appName="AURA"
                ctaText="Consultation"
                themeColor="bg-[#E8F5E9] text-[#1B5E20]"
                variant="minimal"
                onCtaClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            />

            {/* HERO - Video Background */}
            <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-100"
                    >
                        {/* Using a reliable high-quality water ripple/abstract nature video */}
                        <source src="https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4" type="video/mp4" />
                    </video>
                    {/* Stronger overlay for better text contrast */}
                    <div className="absolute inset-0 bg-white/70" />
                </div>

                <div className="relative z-10 text-center max-w-4xl px-4">
                    <h1 className="text-7xl md:text-[10rem] font-serif text-[#1B5E20] mb-8 tracking-tighter">
                        Aura.
                    </h1>
                    <TextReveal
                        text="Beauty that reveals your inner luminosity."
                        className="text-2xl md:text-3xl font-light text-slate-800 mb-12 tracking-wide font-serif italic"
                        mode="blur"
                        delay={0.5}
                    />
                    <MagneticButton
                        onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-10 py-4 bg-white rounded-full text-[#1B5E20] font-medium hover:bg-[#F1F8E9] transition-colors inline-block shadow-xl border border-gray-100"
                    >
                        Begin Journey
                    </MagneticButton>
                </div>
            </section>

            {/* PHILOSOPHY */}
            <section className="py-32 container-width px-6 flex flex-col md:flex-row gap-20 items-center">
                <div className="md:w-1/2">
                    <RevealImage
                        src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt="Aura Clinic"
                        mode="de-blur"
                        className="rounded-[2rem] shadow-2xl"
                    />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-serif text-[#1B5E20] mb-8">The Science of Light</h2>
                    <p className="text-lg text-gray-500 leading-loose mb-8 font-light">
                        We believe that true care feels weightless. Our clinic combines advanced
                        medical dermatology with a sanctuary-like atmosphere. Every treatment
                        is designed to enhance, not alter.
                    </p>
                </div>
            </section>

            {/* SPECIALISTS - FIXED IMAGES */}
            <section className="py-32 container-width px-6 bg-[#FAFAFA]">
                <h2 className="text-center font-serif text-4xl text-[#1B5E20] mb-20 italic">The Specialists</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { name: "Dr. Elena Vos", role: "Dermatology", img: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800" },
                        { name: "Dr. James Chen", role: "Plastic Surgery", img: "https://images.pexels.com/photos/2182979/pexels-photo-2182979.jpeg?auto=compress&cs=tinysrgb&w=800" },
                        { name: "Dr. Sarah Al", role: "Esthetician", img: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800" },
                        { name: "Dr. David Koi", role: "Wellness", img: "https://images.pexels.com/photos/5327579/pexels-photo-5327579.jpeg?auto=compress&cs=tinysrgb&w=800" }
                    ].map((doc, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 bg-gray-200 relative shadow-md">
                                <img
                                    src={doc.img}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    alt={doc.name}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900">{doc.name}</h3>
                            <p className="text-sm text-[#1B5E20] tracking-wide uppercase mt-1">{doc.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            <BookingSection
                title="Book Consultation"
                themeColor="bg-[#1B5E20]"
            />

            <Footer appName="AURA" description="Crafted in Light." />
        </main>
    );
}
