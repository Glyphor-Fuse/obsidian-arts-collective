import { useState, useEffect } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ObsidianHero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-obsidian flex flex-col justify-center items-center text-center px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Macro shot of tattoo ink in water"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-transparent to-obsidian" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_hsl(var(--obsidian))_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-8 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 border border-white/20 bg-black/40 px-4 py-1.5 backdrop-blur-sm text-xs md:text-sm font-mono tracking-widest text-white/80 uppercase">
          <Sparkles className="w-3 h-3 text-violet" />
          <span>Booking Summer 2024</span>
        </div>

        <h1 className="font-display text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.9]">
          OBSIDIAN<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-transparent">
            COLLECTIVE
          </span>
        </h1>

        <p className="max-w-xl mx-auto font-mono text-sm md:text-base text-gray-400 leading-relaxed tracking-wide">
          THE INTERSECTION OF ANCIENT RITUAL AND SURGICAL PRECISION. 
          A MULTI-DISCIPLINARY STUDIO FOR PERMANENT ART.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8">
          <Button 
            size="lg" 
            className="bg-crimson hover:bg-crimson/90 text-white font-mono uppercase tracking-widest text-xs h-12 px-8 rounded-none border-0"
          >
            Book Consultation
          </Button>
          <Button 
            variant="outline"
            size="lg" 
            className="border-white/20 bg-transparent hover:bg-white/5 hover:text-white hover:border-violet text-white font-mono uppercase tracking-widest text-xs h-12 px-8 rounded-none transition-colors duration-300"
          >
            Explore Artists
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
        <ArrowDown className="w-6 h-6 text-white/50 animate-bounce" />
      </div>
    </section>
  );
};

export default ObsidianHero;
