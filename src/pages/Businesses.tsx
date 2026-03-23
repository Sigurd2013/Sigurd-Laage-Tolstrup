import { useState } from "react";
import { Search, MapPin, Phone, Globe, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { businesses } from "@/data/businesses";

const categories = ["Alle", "Detailhandel", "Spisested", "Service", "Sundhed", "Håndværk", "Bolig & Ejendom", "Fritid & Kultur", "Bil & Transport", "Økonomi & Jura"];

export function Businesses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filteredBusinesses = businesses.filter((biz) => {
    const matchesSearch = biz.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "Alle" || biz.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <SEO 
        title="Medlemsoversigt" 
        description="Find lokale butikker, spisesteder og servicevirksomheder i Hammel. Støt byens liv ved at handle lokalt." 
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Medlemsoversigt
          </h1>
          <p className="text-lg text-slate-600">
            Find lokale butikker, spisesteder og servicevirksomheder. Støt byens liv ved at handle lokalt.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Søg efter butik eller virksomhed..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            <Filter className="h-5 w-5 text-slate-400 mr-2 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? "bg-emerald-800 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBusinesses.map((biz) => (
            <a 
              key={biz.id} 
              href={biz.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{biz.name}</h3>
                  <span className="bg-emerald-50 px-2 py-1 rounded text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
                    {biz.category}
                  </span>
                </div>
                
                <div className="space-y-2 mb-6 flex-1">
                  <div className="flex items-start gap-2 text-sm text-slate-600">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>{biz.address}, 8450 Hammel</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Phone className="h-4 w-4 shrink-0" />
                    <span>+45 {biz.phone}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-sm font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform">
                  Besøg hjemmeside <Globe className="ml-2 h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {filteredBusinesses.length === 0 && (
          <div className="text-center py-24">
            <p className="text-lg text-slate-500">Ingen virksomheder fundet med de valgte kriterier.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => { setSearchTerm(""); setActiveCategory("Alle"); }}
            >
              Nulstil søgning
            </Button>
          </div>
        )}

      </div>
    </div>
  );
}
