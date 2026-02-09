import { MapPin, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookingGateway = () => {
  return (
    <section className="bg-white text-obsidian py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        <div className="space-y-12">
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
              INITIATE<br />PROTOCOL
            </h2>
            <p className="font-mono text-sm md:text-base text-gray-600 max-w-md leading-relaxed">
              We operate by appointment only. Our artists select projects based on creative alignment. Please provide detailed references.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-sm">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-crimson shrink-0" />
                <div>
                  <p className="font-bold uppercase tracking-wider mb-1">Location</p>
                  <p className="text-gray-600">892 Industrial Pkwy,<br/>Sector 4, NY 10013</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-crimson shrink-0" />
                <div>
                  <p className="font-bold uppercase tracking-wider mb-1">Hours</p>
                  <p className="text-gray-600">Tue — Sat: 12pm — 8pm<br/>Sun — Mon: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-obsidian p-8 md:p-12 relative overflow-hidden">
            {/* Decorative border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-crimson via-violet to-crimson"></div>

            <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="font-mono text-xs text-gray-400 uppercase tracking-widest">Full Name</label>
                        <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-mono focus:outline-none focus:border-violet transition-colors" placeholder="Ex: Alex Doe" />
                    </div>
                    <div className="space-y-2">
                        <label className="font-mono text-xs text-gray-400 uppercase tracking-widest">Email</label>
                        <input type="email" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-mono focus:outline-none focus:border-violet transition-colors" placeholder="alex@example.com" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="font-mono text-xs text-gray-400 uppercase tracking-widest">Preferred Artist</label>
                    <select className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-mono focus:outline-none focus:border-violet transition-colors appearance-none">
                        <option>No Preference</option>
                        <option>Kaelen (Blackwork)</option>
                        <option>Sara (Fine-Line)</option>
                        <option>Vex (Traditional)</option>
                        <option>Dante (Realism)</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="font-mono text-xs text-gray-400 uppercase tracking-widest">Concept Description</label>
                    <textarea className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-mono h-32 focus:outline-none focus:border-violet transition-colors resize-none" placeholder="Describe placement, size, and subject matter..." />
                </div>

                <Button className="w-full bg-white text-obsidian hover:bg-gray-200 font-mono uppercase tracking-widest h-14 rounded-none text-sm font-bold mt-4">
                    Submit Request
                </Button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default BookingGateway;
