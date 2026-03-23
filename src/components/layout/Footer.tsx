import { Link } from "react-router-dom";
import { Store, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-white">
              <span className="text-xl font-bold">Hammel Handel & Erhverv</span>
            </Link>
            <p className="text-sm text-slate-400">
              Sammen skaber vi liv, vækst og fællesskab i Hammel. Støt lokalt,
              handl lokalt, og oplev alt hvad vores by har at byde på.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61584054072860" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Genveje
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/medlemsoversigt" className="text-sm hover:text-white transition-colors">
                  Medlemsoversigt
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-sm hover:text-white transition-colors">
                  Events & Aktiviteter
                </Link>
              </li>
              <li>
                <Link to="/inspiration" className="text-sm hover:text-white transition-colors">
                  Inspiration
                </Link>
              </li>
              <li>
                <Link to="/om-os" className="text-sm hover:text-white transition-colors">
                  Om os
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>Østergade 12<br />8450 Hammel</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>+45 12 34 56 78</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>info@hammelhandel.dk</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Nyhedsbrev
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              Få seneste nyt om events, tilbud og byens liv direkte i din indbakke.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Din e-mailadresse"
                className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                required
              />
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                Tilmeld
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Hammel Handel & Erhverv. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
}
