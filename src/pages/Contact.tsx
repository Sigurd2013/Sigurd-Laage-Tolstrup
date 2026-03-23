import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <SEO 
        title="Kontakt" 
        description="Kontakt Hammel Handel & Erhverv. Har du spørgsmål om medlemskab eller events? Vi sidder klar til at hjælpe." 
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-4">
            Kontakt Os
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Har du spørgsmål om medlemskab, events eller noget helt tredje? 
            Vi sidder klar til at hjælpe dig.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Her finder du os</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Adresse</h3>
                  <p className="text-slate-600">Østergade 12<br />8450 Hammel</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Telefon</h3>
                  <p className="text-slate-600">+45 12 34 56 78</p>
                  <p className="text-sm text-slate-500 mt-1">Hverdage kl. 10.00 - 15.00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">E-mail</h3>
                  <p className="text-slate-600">info@hammelhandel.dk</p>
                  <p className="text-sm text-slate-500 mt-1">Vi svarer typisk inden for 24 timer.</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-slate-200 rounded-2xl overflow-hidden relative border border-slate-300">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&h=400&q=80" 
                alt="Kort over Hammel" 
                className="w-full h-full object-cover opacity-50 grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white px-4 py-2 rounded-lg shadow-md font-medium text-slate-700 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  Kort indlæses...
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Replacement - Google Form Button */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-8">
              <Send className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Send os en besked</h2>
            <p className="text-slate-600 mb-10 max-w-md">
              Vi bruger en kontaktformular til at håndtere alle henvendelser, så vi kan give dig det bedst mulige svar.
            </p>
            
            <Button asChild size="lg" className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-900 text-xl h-16 px-12 rounded-2xl shadow-lg shadow-emerald-900/20 transition-all hover:scale-105 active:scale-95">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdB7uQ8ugURZNXwSb-nIT9dqRn6e6uiW8wSctsqx3lasZmD2A/viewform?usp=header" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                Kontakt os her
                <Send className="w-6 h-6" />
              </a>
            </Button>
            
            <p className="mt-8 text-sm text-slate-400">
              Linket åbner i et nyt vindue (Google Forms)
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
