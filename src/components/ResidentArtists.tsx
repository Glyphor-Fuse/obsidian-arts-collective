import { Star } from "lucide-react";

const ResidentArtists = () => {
  const artists = [
    {
      name: "KAELEN VOID",
      specialty: "ABSTRACT BLACKWORK",
      bio: "Focuses on heavy contrast and negative space. Kaelen's work deconstructs organic forms into industrial silhouettes.",
      image: "/images/artist-1.png",
      tags: ["Blackwork", "Geometric", "Heavy"]
    },
    {
      name: "SARA MERCURY",
      specialty: "MICRO REALISM",
      bio: "Specializing in single-needle execution. Sara brings gallery-level detail to skin with a focus on classical sculpture and botany.",
      image: "/images/artist-2.png",
      tags: ["Fine-Line", "Single Needle", "Classical"]
    }
  ];

  return (
    <section className="bg-obsidian py-24 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Header */}
        <div className="border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
           <h2 className="font-display text-4xl md:text-6xl text-white">
             RESIDENT <span className="text-gray-700">ARTISTS</span>
           </h2>
           <p className="font-mono text-gray-500 text-sm max-w-xs text-right">
             EACH RESIDENT MAINTAINS AN INDEPENDENT BOOKING SCHEDULE AND STYLISTIC DISCIPLINE.
           </p>
        </div>

        {/* Artist Rows */}
        <div className="space-y-16">
          {artists.map((artist, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              
              {/* Image */}
              <div className="w-full md:w-1/2 aspect-[3/4] relative group overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 border border-white/10 pointer-events-none" />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                   <div className="h-px flex-1 bg-white/20"></div>
                   <span className="font-mono text-crimson text-xs tracking-widest uppercase">{artist.specialty}</span>
                </div>
                
                <h3 className="font-display text-5xl md:text-7xl text-white leading-[0.85]">
                  {artist.name.split(" ").map((n, i) => (
                    <span key={i} className="block">{n}</span>
                  ))}
                </h3>
                
                <p className="font-mono text-gray-400 leading-relaxed text-sm md:text-base max-w-md">
                  {artist.bio}
                </p>

                <div className="flex gap-3 pt-4">
                  {artist.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 border border-white/20 text-white/60 text-[10px] font-mono uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResidentArtists;
