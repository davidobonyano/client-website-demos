"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Building, Sparkles, Stethoscope, Moon, Sun, UtensilsCrossed } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  return (
    <main className={cn(
      "min-h-screen flex items-center justify-center p-6 font-sans transition-colors duration-500",
      isDark ? "bg-[#050505] text-white selection:bg-white selection:text-black" : "bg-[#F5F5F7] text-[#1D1D1F] selection:bg-[#0071E3] selection:text-white"
    )}>
      <div className="max-w-6xl w-full">
        <header className="mb-20 flex justify-between items-start">
          <div>
            <p className={cn("text-xs font-bold tracking-[0.2em] mb-4 uppercase", isDark ? "text-gray-500" : "text-[#86868B]")}>Internal Review</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Client <span className={isDark ? "text-gray-600" : "text-[#86868B]"}>Demos</span>
            </h1>
            <p className={cn("text-xl max-w-2xl font-light leading-relaxed", isDark ? "text-gray-400" : "text-[#424245]")}>
              Interactive prototypes for Q1 2025 outreach. Select a vertical to launch the experience.
            </p>
          </div>

          <button
            onClick={() => setIsDark(!isDark)}
            className={cn(
              "p-4 rounded-full transition-all hover:scale-110",
              isDark ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/5 text-[#1D1D1F] hover:bg-black/10"
            )}
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </header>

        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-px rounded-3xl overflow-hidden shadow-sm border",
          isDark ? "bg-white/10 border-white/10" : "bg-[#E5E5E5] border-[#E5E5E5]"
        )}>
          {/* Real Estate */}
          <Link href="/real-estate" className={cn(
            "group p-12 transition-colors relative overflow-hidden",
            isDark ? "bg-[#0A0A0A] hover:bg-[#111]" : "bg-white hover:bg-[#FAFAFA]"
          )}>
            <div className={cn("absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity", isDark ? "text-white" : "text-[#1D1D1F]")}>
              <ArrowRight className="-rotate-45" />
            </div>
            <div className={cn(
              "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-colors",
              isDark ? "bg-[#1A1A1A] border-white/5 group-hover:border-[#B8860B]/50" : "bg-[#F5F5F7] border-[#E5E5E5] group-hover:border-[#B8860B]/50"
            )}>
              <Building className={cn("transition-colors", isDark ? "text-gray-400 group-hover:text-[#B8860B]" : "text-[#86868B] group-hover:text-[#B8860B]")} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Real Estate</h2>
            <p className={cn("text-sm mb-8 leading-relaxed", isDark ? "text-gray-500" : "text-[#86868B]")}>Forge-inspired. Heavy scroll physics, dark mode, burn-in reveals.</p>
            <span className={cn(
              "text-xs font-bold tracking-widest uppercase border-b border-transparent pb-1 transition-all",
              isDark ? "text-gray-400 group-hover:text-white group-hover:border-[#B8860B]" : "text-[#86868B] group-hover:text-[#1D1D1F] group-hover:border-[#B8860B]"
            )}>
              Launch Demo
            </span>
          </Link>

          {/* Cleaning */}
          <Link href="/cleaning" className={cn(
            "group p-12 transition-colors relative overflow-hidden",
            isDark ? "bg-[#0A0A0A] hover:bg-[#111]" : "bg-white hover:bg-[#FAFAFA]"
          )}>
            <div className={cn("absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity", isDark ? "text-white" : "text-[#1D1D1F]")}>
              <ArrowRight className="-rotate-45" />
            </div>
            <div className={cn(
              "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-colors",
              isDark ? "bg-[#1A1A1A] border-white/5 group-hover:border-blue-500/50" : "bg-[#F5F5F7] border-[#E5E5E5] group-hover:border-blue-500/50"
            )}>
              <Sparkles className={cn("transition-colors", isDark ? "text-gray-400 group-hover:text-blue-500" : "text-[#86868B] group-hover:text-blue-500")} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Cleaning</h2>
            <p className={cn("text-sm mb-8 leading-relaxed", isDark ? "text-gray-500" : "text-[#86868B]")}>Skincare-inspired. Clean, airy layout with interactive before/after.</p>
            <span className={cn(
              "text-xs font-bold tracking-widest uppercase border-b border-transparent pb-1 transition-all",
              isDark ? "text-gray-400 group-hover:text-white group-hover:border-blue-500" : "text-[#86868B] group-hover:text-[#1D1D1F] group-hover:border-blue-500"
            )}>
              Launch Demo
            </span>
          </Link>

          {/* Clinic */}
          <Link href="/clinic" className={cn(
            "group p-12 transition-colors relative overflow-hidden",
            isDark ? "bg-[#0A0A0A] hover:bg-[#111]" : "bg-white hover:bg-[#FAFAFA]"
          )}>
            <div className={cn("absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity", isDark ? "text-white" : "text-[#1D1D1F]")}>
              <ArrowRight className="-rotate-45" />
            </div>
            <div className={cn(
              "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-colors",
              isDark ? "bg-[#1A1A1A] border-white/5 group-hover:border-teal-500/50" : "bg-[#F5F5F7] border-[#E5E5E5] group-hover:border-teal-500/50"
            )}>
              <Stethoscope className={cn("transition-colors", isDark ? "text-gray-400 group-hover:text-teal-500" : "text-[#86868B] group-hover:text-teal-500")} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Clinic</h2>
            <p className={cn("text-sm mb-8 leading-relaxed", isDark ? "text-gray-500" : "text-[#86868B]")}>Ethereal/Aura. Blur reveals, hover blooms, minimalist white.</p>
            <span className={cn(
              "text-xs font-bold tracking-widest uppercase border-b border-transparent pb-1 transition-all",
              isDark ? "text-gray-400 group-hover:text-white group-hover:border-teal-500" : "text-[#86868B] group-hover:text-[#1D1D1F] group-hover:border-teal-500"
            )}>
              Launch Demo
            </span>
          </Link>

          {/* Restaurant */}
          <Link href="/restaurant" className={cn(
            "group p-12 transition-colors relative overflow-hidden",
            isDark ? "bg-[#0A0A0A] hover:bg-[#111]" : "bg-white hover:bg-[#FAFAFA]"
          )}>
            <div className={cn("absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity", isDark ? "text-white" : "text-[#1D1D1F]")}>
              <ArrowRight className="-rotate-45" />
            </div>
            <div className={cn(
              "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-colors",
              isDark ? "bg-[#1A1A1A] border-white/5 group-hover:border-orange-500/50" : "bg-[#F5F5F7] border-[#E5E5E5] group-hover:border-orange-500/50"
            )}>
              <UtensilsCrossed className={cn("transition-colors", isDark ? "text-gray-400 group-hover:text-orange-500" : "text-[#86868B] group-hover:text-orange-500")} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Restaurant</h2>
            <p className={cn("text-sm mb-8 leading-relaxed", isDark ? "text-gray-500" : "text-[#86868B]")}>EMBER. Cinematic fire-grilled vibe, sensory menu, dark & moody.</p>
            <span className={cn(
              "text-xs font-bold tracking-widest uppercase border-b border-transparent pb-1 transition-all",
              isDark ? "text-gray-400 group-hover:text-white group-hover:border-orange-500" : "text-[#86868B] group-hover:text-[#1D1D1F] group-hover:border-orange-500"
            )}>
              Launch Demo
            </span>
          </Link>
        </div>

        <footer className={cn("mt-20 flex justify-between text-xs font-mono", isDark ? "text-gray-600" : "text-[#86868B]")}>
          <span>v2.0.0</span>
          <span>NEXT.JS + TAILWIND + LENIS</span>
        </footer>
      </div>
    </main>
  );
}
