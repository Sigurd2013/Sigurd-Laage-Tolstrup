import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, FileText, Type, Loader2, CheckCircle2, ArrowLeft, AlertCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { useAuth } from "@/contexts/AuthContext";
import { collection, addDoc, serverTimestamp, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { motion } from "motion/react";

export function CreateEvent() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    location: "",
  });

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="h-12 w-12 text-emerald-600 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-200 text-center max-w-md">
          <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Adgang nægtet</h2>
          <p className="text-slate-600 mb-8">Du skal være logget ind for at kunne oprette et arrangement.</p>
          <Button onClick={() => navigate("/login", { state: { from: { pathname: "/events/opret" } } })} className="bg-emerald-800 hover:bg-emerald-900">
            Log ind nu
          </Button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (!formData.title || !formData.date || !formData.description) {
        throw new Error("Udfyld venligst alle påkrævede felter.");
      }

      const eventDate = new Date(formData.date);
      if (isNaN(eventDate.getTime())) {
        throw new Error("Ugyldig dato valgt.");
      }

      await addDoc(collection(db, "events"), {
        title: formData.title,
        description: formData.description,
        date: Timestamp.fromDate(eventDate),
        location: formData.location || "Ikke oplyst",
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setTimeout(() => navigate("/events"), 2000);
    } catch (err: any) {
      console.error("Fejl ved oprettelse af event:", err);
      setError(err.message || "Der skete en fejl. Prøv igen.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 rounded-3xl shadow-sm border border-emerald-100 text-center max-w-md"
        >
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Event oprettet!</h2>
          <p className="text-slate-600 mb-8">Dit arrangement er nu gemt i databasen og vil blive vist i kalenderen.</p>
          <p className="text-sm text-slate-400">Viderestiller dig nu...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <SEO 
        title="Opret arrangement" 
        description="Indsend dit arrangement til Hammel Handel & Erhvervs kalender." 
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/events")} 
          className="mb-8 text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Tilbage til oversigt
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200"
        >
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-slate-900 mb-3">Opret arrangement</h1>
            <p className="text-slate-600">Udfyld formularen herunder for at tilføje et nyt event til kalenderen.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Type className="h-4 w-4 text-slate-400" /> Titel <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                placeholder="F.eks. Late Night Shopping"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-slate-400" /> Dato og tidspunkt <span className="text-red-500">*</span>
              </label>
              <input
                type="datetime-local"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-400" /> Lokation
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                placeholder="F.eks. Hammel Bymidte"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <FileText className="h-4 w-4 text-slate-400" /> Beskrivelse <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
                placeholder="Fortæl om arrangementet..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <Button 
              type="submit" 
              disabled={loading} 
              className="w-full h-14 text-lg bg-emerald-800 hover:bg-emerald-900 rounded-xl"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Opretter...
                </>
              ) : (
                "Opret arrangement"
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
