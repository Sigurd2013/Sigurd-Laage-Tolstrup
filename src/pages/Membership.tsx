import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { motion } from "motion/react";

export function Membership() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <SEO 
        title="Hvorfor skal du være medlem?" 
        description="Læs om fordelene ved at være medlem af Hammel Handel & Erhverv og hvordan vi sammen styrker vores by." 
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-slate-200"
        >
          <h1 className="text-3xl font-bold text-slate-900 mb-8 sm:text-4xl">
            Hvorfor skal du være medlem?
          </h1>
          
          <div className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-6">
            <p>
              Når du bliver en del af Hammel Handel & Erhverv, træder du ind i et fællesskab, hvor lokale virksomheder står sammen om at styrke Hammel som handelsby. Du bliver en aktiv medspiller i at forme det handelsliv, du selv er en del af – og som dine kunder oplever hver dag.
            </p>

            <p>
              Et medlemskab handler ikke kun om konkrete fordele, men om at tage medansvar for byens udvikling. Når vi samarbejder, bliver vores fælles stemme stærkere. Vi skaber synlighed for hinanden, tiltrækker kunder til byen og sikrer, at Hammel forbliver attraktiv – både for dem, der bor her, og for dem, vi gerne vil tiltrække.
            </p>

            <p>
              Du bliver en del af noget større. Når du bliver medlem, støtter du ikke kun byens udvikling – du styrker også din egen virksomheds position. Med et medlemskab får du:
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>Øget synlighed på hjemmeside, sociale medier og via fællesannoncering</li>
              <li>Fortrinsret til stande og deltagelse i events</li>
              <li>Adgang til netværk og møder med byens andre erhvervsdrivende</li>
              <li>Gratis lån af borde, stole og hytte til egne eller fælles arrangementer</li>
            </ul>

            <p>
              Du bliver en del af et fællesskab, der handler – både i overført og konkret forstand. Sammen skaber vi en attraktiv og driftig bymidte, hvor butikker og virksomheder trives.
            </p>
            
            <p>
              geret.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-slate-500 text-sm italic">
              Vil du vide mere eller tilmelde dig?
            </p>
            <Button asChild size="lg" className="bg-emerald-800 hover:bg-emerald-900 w-full sm:w-auto">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdB7uQ8ugURZNXwSb-nIT9dqRn6e6uiW8wSctsqx3lasZmD2A/viewform?usp=header" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Kontakt os for medlemskab
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
