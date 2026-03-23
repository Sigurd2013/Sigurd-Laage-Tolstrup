import { ArrowRight, Map, Coffee, ShoppingBag, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

const guides = [
  {
    id: 1,
    title: "En perfekt lørdag i Hammel",
    desc: "Start med friskbagt brød, shop i de hyggelige specialbutikker, og slut af med en lækker frokost på torvet.",
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&h=400&q=80",
    icon: Coffee,
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: 2,
    title: "De bedste shoppingsteder",
    desc: "Fra mode og sko til brugskunst og delikatesser. Her er guiden til byens bedste butikker.",
    img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=400&h=400&q=80",
    icon: ShoppingBag,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 3,
    title: "Natur og kultur omkring byen",
    desc: "Kombinér din shoppetur med en gåtur i Frijsenborgskovene eller et besøg i Kulturhuset Inside.",
    img: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=400&h=400&q=80",
    icon: Map,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 4,
    title: "Lokale favoritter: Spisesteder",
    desc: "Hvor får man byens bedste burger? Den hyggeligste kaffe? Vi har samlet de lokales anbefalinger.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&h=400&q=80",
    icon: Camera,
    color: "bg-purple-100 text-purple-700",
  },
];

export function Inspiration() {
  return (
    <div className="bg-white min-h-screen py-16">
      <SEO 
        title="Inspiration" 
        description="Få inspiration til din næste tur til Hammel. Læs guides om shopping, spisesteder og naturoplevelser." 
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-6">
            Oplev Hammel
          </h1>
          <p className="text-lg text-slate-600">
            Få inspiration til din næste tur til byen. Vi har samlet guides, tips og 
            fortællinger om alt det bedste, Hammel har at byde på.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16 rounded-3xl overflow-hidden bg-slate-900 text-white shadow-xl relative">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=1200&h=600&q=80" 
              alt="Hammel Bymidte"
              className="w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          </div>
          
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col justify-end min-h-[500px]">
            <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 w-fit">
              Månedens Guide
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">
              Bag facaden: Mød byens passionerede butiksejere
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl">
              Vi har taget en snak med tre lokale ildsjæle om deres passion for deres fag, 
              og hvorfor de har valgt at drive forretning netop her i Hammel.
            </p>
            <Link to="#" className="inline-flex items-center gap-2 text-amber-400 font-bold hover:text-amber-300 transition-colors text-lg">
              Læs hele artiklen <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide) => (
            <Link key={guide.id} to="#" className="group flex flex-col sm:flex-row gap-6 bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-md transition-all hover:border-emerald-200">
              <div className="w-full sm:w-1/3 aspect-square sm:aspect-auto rounded-xl overflow-hidden shrink-0 relative">
                <img 
                  src={guide.img} 
                  alt={guide.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute top-3 left-3 w-10 h-10 rounded-full flex items-center justify-center ${guide.color} shadow-sm`}>
                  <guide.icon className="w-5 h-5" />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {guide.desc}
                </p>
                <div className="mt-auto text-emerald-700 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Læs guide <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
