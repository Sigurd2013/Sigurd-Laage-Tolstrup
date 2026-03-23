import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn, LogOut, User } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

const navLinks = [
  { name: "Forside", path: "/" },
  { name: "Medlemsoversigt", path: "/medlemsoversigt" },
  { name: "Events", path: "/events" },
  { name: "Inspiration", path: "/inspiration" },
  { name: "Kontakt", path: "/kontakt" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-slate-900">
                Hammel Handel & Erhverv
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-emerald-800",
                  location.pathname === link.path
                    ? "text-emerald-800"
                    : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild variant="secondary" className="font-semibold">
              <Link to="/bliv-medlem">Bliv medlem</Link>
            </Button>

            {user ? (
              <div className="flex items-center gap-3 ml-2 pl-4 border-l border-slate-200">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName || ""} className="h-8 w-8 rounded-full border border-slate-200" />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <User className="h-4 w-4" />
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => logout()} 
                  className="text-slate-400 hover:text-red-600 transition-colors"
                  title="Log ud"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <Button asChild variant="ghost" size="sm" className="text-slate-600 hover:text-emerald-800 ml-2">
                <Link to="/login" className="flex items-center gap-2">
                  <LogIn className="h-4 w-4" />
                  <span>Log ind</span>
                </Link>
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-emerald-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-2 text-base font-medium",
                  location.pathname === link.path
                    ? "bg-emerald-50 text-emerald-800"
                    : "text-slate-600 hover:bg-slate-50 hover:text-emerald-800"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <Button asChild variant="secondary" className="w-full font-semibold">
                <Link to="/bliv-medlem" onClick={() => setIsOpen(false)}>
                  Bliv medlem
                </Link>
              </Button>
            </div>
            
            <div className="mt-4 px-3 border-t pt-4">
              {user ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt={user.displayName || ""} className="h-10 w-10 rounded-full border border-slate-200" />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <User className="h-5 w-5" />
                      </div>
                    )}
                    <span className="text-sm font-medium text-slate-900">{user.displayName || user.email}</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => { logout(); setIsOpen(false); }} className="text-red-600 hover:text-red-700 hover:bg-red-50">
                    <LogOut className="h-4 w-4 mr-2" /> Log ud
                  </Button>
                </div>
              ) : (
                <Button asChild variant="ghost" className="w-full justify-start text-slate-600" onClick={() => setIsOpen(false)}>
                  <Link to="/login">
                    <LogIn className="h-4 w-4 mr-2" /> Log ind
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
