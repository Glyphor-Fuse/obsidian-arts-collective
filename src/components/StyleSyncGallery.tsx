import { useState } from "react";
import { Filter, Star } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type Style = "ALL" | "BLACKWORK" | "FINE-LINE" | "TRADITIONAL" | "REALISM";

const WORKS = [
  { id: 1, style: "BLACKWORK", image: "/images/portfolio-1.png", artist: "Kaelen" },
  { id: 2, style: "FINE-LINE", image: "/images/portfolio-2.png", artist: "Sara" },
  { id: 3, style: "TRADITIONAL", image: "/images/portfolio-3.png", artist: "Vex" },
  { id: 4, style: "BLACKWORK", image: "/images/portfolio-4.png", artist: "Kaelen" },
  { id: 5, style: "REALISM", image: "/images/portfolio-5.png", artist: "Dante" },
  { id: 6, style: "FINE-LINE", image: "/images/portfolio-6.png", artist: "Sara" },
];

const StyleSyncGallery = () => {
  const [activeStyle, setActiveStyle] = useState<Style>("ALL");

  const filteredWorks = activeStyle === "ALL" 
    ? WORKS 
    : WORKS.filter((work) => work.style === activeStyle);

  const styles: Style[] = ["ALL", "BLACKWORK", "FINE-LINE", "TRADITIONAL", "REALISM"];

  return (
    <section className="py-24 px-4 bg-obsidian border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h2 className="font-display text-4xl md:text-6xl text-white mb-4">
              CURATED <span className="text-crimson">WORKS</span>
            </h2>
            <p className="font-mono text-gray-400 max-w-md text-sm">
              Filter our collective portfolio by discipline. 
              The gallery reconfigures to match your aesthetic preference.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {styles.map((style) => (
              <button
                key={style}
                onClick={() => setActiveStyle(style)}
                className={`
                  px-4 py-2 text-xs font-mono uppercase tracking-wider border transition-all duration-300
                  ${activeStyle === style 
                    ? "bg-white text-obsidian border-white" 
                    : "bg-transparent text-gray-500 border-white/10 hover:border-violet hover:text-white"}
                `}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {filteredWorks.map((work) => (
            <div 
              key={work.id} 
              className="group relative aspect-[3/4] overflow-hidden bg-neutral-900 cursor-pointer"
            >
              <img
                src={work.image}
                alt={`Tattoo in ${work.style} style by ${work.artist}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-mono text-crimson text-xs tracking-widest uppercase mb-2 block">
                    {work.style}
                  </span>
                  <div className="flex justify-between items-end">
                    <h3 className="font-display text-2xl text-white">{work.artist}</h3>
                    <Star className="text-violet w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StyleSyncGallery;
