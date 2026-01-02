"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface NavbarProps {
    appName: string;
    ctaText: string;
    ctaLink?: string;
    themeColor?: string;
    variant?: "standard" | "luxury" | "tech" | "minimal";
    onCtaClick?: () => void;
}

export default function Navbar({
    appName,
    ctaText,
    ctaLink = "#",
    themeColor = "bg-blue-600",
    variant = "standard",
    onCtaClick
}: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Common Mobile Menu Layout
    const MobileMenu = ({ links, bgClass, textClass, buttonClass }: any) => (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={cn("absolute top-full left-0 right-0 p-6 flex flex-col gap-6 shadow-2xl md:hidden", bgClass)}
                >
                    {links.map((link: any, i: number) => (
                        <Link
                            key={i}
                            href={link.href}
                            className={cn("text-lg font-medium", textClass)}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    {onCtaClick ? (
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                onCtaClick();
                            }}
                            className={cn("text-center py-3 rounded-xl font-bold transition-all", buttonClass)}
                        >
                            {ctaText}
                        </button>
                    ) : (
                        <Link
                            href={ctaLink}
                            className={cn("text-center py-3 rounded-xl font-bold transition-all", buttonClass)}
                            onClick={() => setIsOpen(false)}
                        >
                            {ctaText}
                        </Link>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );

    // Luxury Variant (Real Estate - Dark, Serif, Minimal)
    if (variant === "luxury") {
        return (
            <header className="absolute top-0 left-0 right-0 z-50 py-6 px-6 text-white bg-gradient-to-b from-black/90 to-transparent">
                <div className="container-width flex items-center justify-between">
                    <Link href="/" className="text-3xl font-serif tracking-tighter hover:text-[#B8860B] transition-colors text-[#F5E6CC] drop-shadow-md z-50 relative">
                        {appName}
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-8 items-center font-sans text-xs tracking-[0.2em] font-bold">
                        <Link href="#" className="hover:text-[#B8860B] transition-colors uppercase drop-shadow-md">Collection</Link>
                        <Link href="#" className="hover:text-[#B8860B] transition-colors uppercase drop-shadow-md">Studio</Link>
                        {onCtaClick ? (
                            <button
                                onClick={onCtaClick}
                                className="bg-[#B8860B] text-black px-6 py-2 hover:bg-[#D4A017] transition-all uppercase font-bold tracking-widest"
                            >
                                {ctaText}
                            </button>
                        ) : (
                            <Link
                                href={ctaLink}
                                className="bg-[#B8860B] text-black px-6 py-2 hover:bg-[#D4A017] transition-all uppercase font-bold tracking-widest"
                            >
                                {ctaText}
                            </Link>
                        )}
                    </nav>

                    {/* Mobile Toggle */}
                    <button className="md:hidden text-[#F5E6CC] z-50 relative" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Mobile Menu */}
                    <MobileMenu
                        bgClass="bg-[#1A1A1A] border-t border-white/10"
                        textClass="text-[#E5E5E5] font-serif"
                        buttonClass="bg-[#B8860B] text-black font-sans tracking-widest uppercase"
                        links={[
                            { label: "Collection", href: "#" },
                            { label: "Studio", href: "#" }
                        ]}
                    />
                </div>
            </header>
        );
    }

    // Minimal Variant (Clinic - Clean, White/Teal)
    if (variant === "minimal") {
        return (
            <header className="absolute top-0 left-0 right-0 z-50 py-6 px-6">
                <div className="container-width flex items-center justify-between">
                    <Link href="/" className="text-2xl font-serif font-bold text-[#1B5E20] tracking-tight flex items-center gap-2 drop-shadow-sm z-50 relative">
                        <div className="w-2 h-2 rounded-full bg-[#1B5E20] animate-pulse"></div>
                        {appName}
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-8 items-center text-slate-800 text-sm font-bold tracking-wide">
                        <Link href="#" className="hover:text-[#1B5E20] transition-colors">Philosophy</Link>
                        <Link href="#" className="hover:text-[#1B5E20] transition-colors">Treatments</Link>
                        {onCtaClick ? (
                            <button
                                onClick={onCtaClick}
                                className={cn("px-6 py-2 rounded-full font-bold transition-all hover:shadow-lg text-white border border-transparent hover:-translate-y-0.5", themeColor)}
                            >
                                {ctaText}
                            </button>
                        ) : (
                            <Link
                                href={ctaLink}
                                className={cn("px-6 py-2 rounded-full font-bold transition-all hover:shadow-lg text-white border border-transparent hover:-translate-y-0.5", themeColor)}
                            >
                                {ctaText}
                            </Link>
                        )}
                    </nav>

                    {/* Mobile Toggle */}
                    <button className="md:hidden text-[#1B5E20] z-50 relative" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Mobile Menu */}
                    <MobileMenu
                        bgClass="bg-white border-t border-gray-100"
                        textClass="text-slate-800"
                        buttonClass={cn("text-white shadow-lg", themeColor)}
                        links={[
                            { label: "Philosophy", href: "#" },
                            { label: "Treatments", href: "#" }
                        ]}
                    />
                </div>
            </header>
        );
    }

    // Standard/Tech Variant (Cleaning - Blue, Clean)
    return (
        <header className="absolute top-0 left-0 right-0 z-50 py-6 px-6 bg-white/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
            <div className="container-width flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-slate-800 tracking-tighter flex items-center gap-2 z-50 relative">
                    {variant === "tech" && <span className="text-blue-500">◆</span>}
                    {appName}
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center text-slate-600 font-medium">
                    <Link href="#" className="hover:text-blue-600 transition-colors">Solutions</Link>
                    <Link href="#" className="hover:text-blue-600 transition-colors">Process</Link>
                    {onCtaClick ? (
                        <button
                            onClick={onCtaClick}
                            className={cn("px-6 py-2.5 rounded-xl font-bold transition-all hover:scale-105 shadow-lg text-white", themeColor)}
                        >
                            {ctaText}
                        </button>
                    ) : (
                        <Link
                            href={ctaLink}
                            className={cn("px-6 py-2.5 rounded-xl font-bold transition-all hover:scale-105 shadow-lg text-white", themeColor)}
                        >
                            {ctaText}
                        </Link>
                    )}
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden text-slate-800 z-50 relative" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                <MobileMenu
                    bgClass="bg-white border-t border-gray-100"
                    textClass="text-slate-600"
                    buttonClass={cn("text-white shadow-lg rounded-xl", themeColor)}
                    links={[
                        { label: "Solutions", href: "#" },
                        { label: "Process", href: "#" }
                    ]}
                />
            </div>
        </header>
    );
}
