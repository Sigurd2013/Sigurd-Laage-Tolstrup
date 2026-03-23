import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Utensils, Scissors, CalendarDays, Users, TrendingUp, HeartHandshake, Facebook } from "lucide-react";
import { motion } from "motion/react";
import { SEO } from "@/components/SEO";

export function Home() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Forside" 
        description="Sammen skaber vi liv i Hammel. Støt lokalt, handl lokalt, og oplev alt hvad vores by har at byde på. Bliv medlem af Hammel Handel & Erhverv." 
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-24 sm:py-32 lg:pb-40">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1920&q=80"
            alt="Hammel Hestemarked og Byfest"
            className="h-full w-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-sm"
            >
              Sammen skaber vi liv i <span className="text-emerald-400">Hammel</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200 drop-shadow-sm"
            >
              Støt lokalt, handl lokalt, og oplev alt hvad vores by har at byde på. 
              Hammel Handel & Erhverv arbejder for et stærkt fællesskab og en levende bymidte.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild size="lg" className="w-full sm:w-auto text-base bg-emerald-600 hover:bg-emerald-700 text-white border-none">
                <Link to="/bliv-medlem">Bliv medlem i dag</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base group bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white">
                <Link to="/medlemsoversigt">
                  Se medlemsoversigt
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base bg-[#1877F2] hover:bg-[#166fe5] text-white border-none">
                <a href="https://www.facebook.com/profile.php?id=61584054072860" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Facebook className="h-5 w-5 fill-current" />
                  Følg os på Facebook
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof / Logos */}
      <section className="border-y border-slate-200 bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500 mb-8">
            Støttet af over 100 lokale virksomheder
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale transition-all hover:grayscale-0">
            {/* Placeholders for logos */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center justify-center w-32 h-12 bg-slate-100 rounded-md">
                <span className="text-slate-400 font-bold">LOGO {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Hammel Offers */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Oplev Hammel
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Alt hvad du behøver, lige rundt om hjørnet.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Shopping", icon: ShoppingBag, desc: "Tøj, sko, brugskunst og specialiteter.", color: "bg-blue-100 text-blue-700" },
              { title: "Spisesteder", icon: Utensils, desc: "Caféer, restauranter og take-away.", color: "bg-orange-100 text-orange-700" },
              { title: "Service & Velvære", icon: Scissors, desc: "Frisører, klinikker og håndværkere.", color: "bg-emerald-100 text-emerald-700" },
              { title: "Oplevelser", icon: CalendarDays, desc: "Kultur, sport og lokale events.", color: "bg-purple-100 text-purple-700" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.color} mb-6`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 mb-6">{item.desc}</p>
                <Link to="/medlemsoversigt" className="text-emerald-700 font-medium hover:text-emerald-800 inline-flex items-center">
                  Udforsk <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Mød de lokale
              </h2>
              <p className="mt-2 text-lg text-slate-600">
                Lær byens passionerede erhvervsdrivende at kende.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/medlemsoversigt">Se alle medlemmer</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { name: "BELFAM", type: "Detailhandel" },
              { name: "Café Inside", type: "Spisested" },
              { name: "Sport24", type: "Detailhandel" },
            ].map((biz, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md p-8">
                <div className="text-xs font-medium text-emerald-700 mb-2 uppercase tracking-wider">{biz.type}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{biz.name}</h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                  En lokal favorit med et bredt udvalg og fantastisk service. Vi glæder os til at byde dig velkommen.
                </p>
                <Button asChild variant="ghost" className="w-full justify-between px-0 hover:bg-transparent hover:text-emerald-800">
                  <Link to={`/medlemsoversigt`}>
                    Se i medlemsoversigt <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join (For Businesses) */}
      <section className="bg-emerald-900 py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Stå stærkere sammen
              </h2>
              <p className="text-lg text-emerald-100 mb-8">
                Som medlem af Hammel Handel & Erhverv bliver du en del af et stærkt netværk, 
                der arbejder målrettet for at skabe vækst og synlighed for byens erhvervsliv.
              </p>
              
              <ul className="space-y-6 mb-10">
                {[
                  { icon: Users, title: "Stærkt Netværk", desc: "Sparring og samarbejde med andre lokale erhvervsdrivende." },
                  { icon: TrendingUp, title: "Øget Synlighed", desc: "Fælles markedsføring og profilering af din virksomhed." },
                  { icon: HeartHandshake, title: "Lokal Indflydelse", desc: "Vær med til at præge byens udvikling og aktiviteter." },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-800">
                      <item.icon className="h-5 w-5 text-emerald-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="text-emerald-200 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Button asChild size="lg" className="bg-amber-500 text-white hover:bg-amber-600">
                <Link to="/bliv-medlem">Se alle medlemsfordele</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=800&h=800&q=80" 
                  alt="Netværksmøde" 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl max-w-xs hidden sm:block">
                <div className="flex gap-1 text-amber-500 mb-2">
                  {[1, 2, 3, 4, 5].map(i => <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                </div>
                <p className="text-sm text-slate-700 italic">
                  "At være medlem har givet os uvurderlig sparring og nye kunder gennem de fælles events."
                </p>
                <p className="text-xs font-bold text-slate-900 mt-2">— Lokal Butiksejer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-amber-500 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
            Klar til at gøre en forskel for Hammel?
          </h2>
          <p className="text-lg text-amber-900 mb-8 max-w-2xl mx-auto">
            Uanset om du er borger, der vil støtte lokalt, eller virksomhed, der vil vokse, 
            så starter det her.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
              <Link to="/bliv-medlem">Bliv medlem nu</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdB7uQ8ugURZNXwSb-nIT9dqRn6e6uiW8wSctsqx3lasZmD2A/viewform?usp=header" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Kontakt os her
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
