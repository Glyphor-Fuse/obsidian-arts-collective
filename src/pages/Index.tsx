import ObsidianHero from "@/components/ObsidianHero";
import StyleSyncGallery from "@/components/StyleSyncGallery";
import ResidentArtists from "@/components/ResidentArtists";
import BookingGateway from "@/components/BookingGateway";
import { Menu } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen bg-obsidian text-white selection:bg-crimson selection:text-white">
      {/* Navigation - Minimal and Floating */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
        <div className="font-display font-bold text-xl tracking-tighter">OAC.</div>
        <button className="p-2 hover:text-crimson transition-colors">
          <Menu className="w-8 h-8" />
        </button>
      </nav>

      <ObsidianHero />
      <StyleSyncGallery />
      <ResidentArtists />
      <BookingGateway />
      
      {/* Footer */}
      <footer className="bg-black text-gray-600 py-12 text-center font-mono text-xs uppercase tracking-widest border-t border-white/10">
        <p>&copy; 2024 Obsidian Arts Collective. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Email</a>
          <a href="#" className="hover:text-white transition-colors">Legal</a>
        </div>
      </footer>
    </main>
  );
};

export default Index;
