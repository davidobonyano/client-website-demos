"use client";

import Navbar from "@/components/Navbar";
import BeforeAfter from "@/components/BeforeAfter";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import RevealImage from "@/components/RevealImage";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";

export default function CleaningPage() {
    const [currentProject, setCurrentProject] = useState(0);

    const projects = [
        { name: "Living Room", before: "/dirty-room.png", after: "/clean-room.jpg" },
        { name: "Kitchen", before: "/dirty-kitchen.png", after: "/clean-kitchen.jpg" },
        { name: "Bedroom", before: "/dirty-bedroom.png", after: "/clean-bedroom.jpg" }
    ];

    const nextProject = () => setCurrentProject((prev) => (prev + 1) % projects.length);
    const prevProject = () => setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);

    return (
        <main className="min-h-screen bg-[#FAFAFA] text-[#333] font-sans selection:bg-[#E0F2F1] selection:text-[#00695C]">
            <Navbar
                appName="SparkleClean"
                ctaText="Book Now"
                themeColor="bg-[#E0F2F1] text-[#004D40]"
                variant="minimal"
                onCtaClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            />

            {/* HERO - Skincare/Airy Vibe */}
            <section className="relative h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden px-6">
                {/* Soft Blooms Background */}
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-40 animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-teal-100 rounded-full blur-[120px] opacity-40 animate-pulse delay-1000" />

                <div className="relative z-10 max-w-4xl">
                    <span className="inline-block px-4 py-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm text-xs font-semibold tracking-widest text-[#00695C] mb-8 shadow-sm">
                        PREMIUM HOME CARE
                    </span>
                    <TextReveal
                        text="Pure. Intelligent. Clean."
                        className="text-6xl md:text-8xl font-light tracking-tight mb-8 text-slate-800"
                        mode="blur"
                    />
                    <p className="text-xl text-gray-500 max-w-xl mx-auto mb-12 font-light">
                        We don't just clean. We restore balance to your environment using
                        advanced eco-friendly algorithms.
                    </p>

                    <MagneticButton
                        onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-10 py-5 bg-[#004D40] text-white rounded-full font-semibold shadow-2xl hover:bg-[#00695C] transition-colors flex items-center gap-2 mx-auto"
                    >
                        Schedule Service <ArrowUpRight size={20} />
                    </MagneticButton>
                </div>
            </section>

            {/* VISUAL PROOF - Before/After - REPAIRED IMAGES */}
            <section className="py-24 container-width px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center mb-8 max-w-5xl mx-auto text-center md:text-left justify-between">
                    <div>
                        <h2 className="text-5xl font-light mb-4 text-slate-900">See the clarity.</h2>
                        <p className="text-gray-500 leading-relaxed text-lg max-w-2xl">
                            Drag the slider to witness the restoration.
                        </p>
                    </div>

                    {/* Project Switcher Controls */}
                    <div className="flex items-center gap-6 bg-white p-2 rounded-full shadow-sm border border-gray-100">
                        <button onClick={prevProject} className="p-3 hover:bg-gray-50 rounded-full transition-colors text-slate-600">
                            <ArrowUpRight className="rotate-[225deg]" />
                        </button>
                        <span className="font-medium text-slate-800 min-w-[120px] text-center">{projects[currentProject].name}</span>
                        <button onClick={nextProject} className="p-3 hover:bg-gray-50 rounded-full transition-colors text-slate-600">
                            <ArrowUpRight className="rotate-45" />
                        </button>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto h-[600px]">
                    <BeforeAfter
                        key={currentProject} // Force re-render on change
                        beforeImage={projects[currentProject].before}
                        afterImage={projects[currentProject].after}
                    />
                </div>
            </section>

            {/* SERVICES - Floating Layout */}
            <section className="py-32 bg-white relative">
                <div className="container-width px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-light text-slate-900 mb-4">Curated Packages</h2>
                        <p className="text-gray-400">Choose the level of care your home needs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "The Refresh", price: "$120", features: ["Dust & Polish", "Floor Sanitization", "Kitchen Detailing"] },
                            { title: "The Restore", price: "$240", features: ["Deep Carpet Care", "Upholstery Steam", "Window Clarity"] },
                            { title: "The Reset", price: "$450", features: ["Post-Move Reset", "Full Sanitization", "Air Purification"] }
                        ].map((plan, i) => (
                            <div key={i} className="bg-[#FAFAFA] p-10 rounded-3xl hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 group cursor-pointer border border-transparent hover:border-gray-100 flex flex-col">
                                <h3 className="text-2xl font-normal mb-2 text-slate-800">{plan.title}</h3>
                                <p className="text-4xl font-light text-[#004D40] mb-8">{plan.price}</p>
                                <ul className="space-y-4 mb-10 flex-grow">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-3 text-gray-500">
                                            <div className="w-5 h-5 rounded-full bg-[#E0F2F1] flex items-center justify-center text-[#00695C]">
                                                <Check size={12} />
                                            </div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <MagneticButton
                                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full py-4 rounded-xl border border-gray-200 font-semibold text-gray-600 group-hover:bg-[#004D40] group-hover:text-white group-hover:border-transparent transition-all"
                                >
                                    Select Plan
                                </MagneticButton>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <BookingSection
                title="Book Service"
                themeColor="bg-[#004D40]"
            />

            <Footer appName="SparkleClean" description="Intelligent Home Care." />
        </main>
    );
}
