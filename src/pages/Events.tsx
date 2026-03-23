import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { collection, query, orderBy, onSnapshot, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface Event {
  id: string;
  title: string;
  description: string;
  date: Timestamp;
  location?: string;
  imageUrl?: string;
  category?: string;
  time?: string;
}

enum OperationType {
  GET = 'get',
  LIST = 'list',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
}

export function Events() {
  const { user } = useAuth();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const eventsRef = collection(db, "events");
    const q = query(eventsRef, orderBy("date", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const eventsData: Event[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Event[];
      
      setEvents(eventsData);
      setLoading(false);
      setError(null);
    }, (err) => {
      console.error("Firestore Error:", err);
      const errInfo: FirestoreErrorInfo = {
        error: err.message,
        operationType: OperationType.LIST,
        path: "events"
      };
      setError("Kunne ikke hente events. Prøv igen senere.");
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const formatDate = (timestamp: Timestamp) => {
    const date = timestamp.toDate();
    return new Intl.DateTimeFormat('da-DK', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  const formatTime = (timestamp: Timestamp) => {
    const date = timestamp.toDate();
    return new Intl.DateTimeFormat('da-DK', {
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <Loader2 className="h-12 w-12 text-emerald-600 animate-spin mb-4" />
        <p className="text-slate-600 font-medium">Henter events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 text-center max-w-md">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-900 mb-2">Hov, der skete en fejl</h2>
          <p className="text-slate-600 mb-6">{error}</p>
          <Button onClick={() => window.location.reload()} className="bg-emerald-600 hover:bg-emerald-700">
            Prøv igen
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-16">
      <SEO 
        title="Events & Aktiviteter" 
        description="Hold dig opdateret på byens arrangementer, tilbudsdage og netværksmøder i Hammel." 
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-6">
            Det sker i Hammel
          </h1>
          <p className="text-lg text-slate-600">
            Hold dig opdateret på byens arrangementer, tilbudsdage og netværksmøder. 
            Der er altid noget at opleve i Hammel.
          </p>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
            <Calendar className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Ingen kommende events</h3>
            <p className="text-slate-500">Der er i øjeblikket ingen planlagte events. Kom tilbage snart!</p>
          </div>
        ) : (
          <>
            {/* Featured Event (Newest) */}
            <div className="mb-16 rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative min-h-[300px]">
                <img 
                  src={events[0].imageUrl || "https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&w=800&q=80"} 
                  alt={events[0].title}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Seneste nyt
                </div>
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-emerald-700 font-semibold mb-4">
                  <Calendar className="h-5 w-5" />
                  <span>{formatDate(events[0].date)}</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{events[0].title}</h2>
                <p className="text-slate-600 mb-8 text-lg">{events[0].description}</p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-slate-700">
                    <Clock className="h-5 w-5 text-slate-400" />
                    <span>{formatTime(events[0].date)}</span>
                  </div>
                  {events[0].location && (
                    <div className="flex items-center gap-3 text-slate-700">
                      <MapPin className="h-5 w-5 text-slate-400" />
                      <span>{events[0].location}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex gap-4">
                  <Button size="lg">Læs mere</Button>
                </div>
              </div>
            </div>

            {/* Event List */}
            {events.length > 1 && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-4">Flere arrangementer</h3>
                
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {events.slice(1).map((event) => (
                    <div key={event.id} className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={event.imageUrl || "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800&q=80"} 
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        {event.category && (
                          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-slate-700">
                            {event.category}
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6 flex flex-col flex-1">
                        <div className="text-sm font-semibold text-emerald-700 mb-2">{formatDate(event.date)}</div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">{event.title}</h4>
                        <p className="text-slate-600 text-sm mb-6 line-clamp-2 flex-1">{event.description}</p>
                        
                        <div className="space-y-2 mb-6 text-sm text-slate-500">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 shrink-0" />
                            <span>{formatTime(event.date)}</span>
                          </div>
                          {event.location && (
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 shrink-0" />
                              <span>{event.location}</span>
                            </div>
                          )}
                        </div>
                        
                        <Button variant="ghost" className="w-full justify-between px-0 hover:bg-transparent hover:text-emerald-800 mt-auto">
                          Læs mere <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* CTA - Only show if user is logged in */}
        {user && (
          <div className="mt-20 bg-emerald-50 rounded-2xl p-8 sm:p-12 text-center border border-emerald-100">
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Har du et arrangement?</h3>
            <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
              Er du medlem af Hammel Handel & Erhverv, kan du få dine arrangementer vist i vores kalender.
            </p>
            <Button asChild className="bg-emerald-800 hover:bg-emerald-900">
              <Link to="/events/opret">Indsend arrangement</Link>
            </Button>
          </div>
        )}

      </div>
    </div>
  );
}
