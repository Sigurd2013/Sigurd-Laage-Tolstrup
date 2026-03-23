import { useNavigate, useLocation } from "react-router-dom";
import { LogIn, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { motion } from "motion/react";

export function Login() {
  const { login, user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Redirect if already logged in
  if (user && !isLoggingIn) {
    const from = (location.state as any)?.from?.pathname || "/";
    navigate(from, { replace: true });
  }

  const handleLogin = async () => {
    setIsLoggingIn(true);
    setError(null);
    try {
      await login();
      // Navigation is handled by the redirect logic above
    } catch (err: any) {
      setError("Der skete en fejl ved login. Prøv igen.");
      setIsLoggingIn(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="h-12 w-12 text-emerald-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center py-16 px-4">
      <SEO title="Log ind" description="Log ind for at administrere arrangementer." />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 text-center"
      >
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <LogIn className="w-8 h-8" />
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-4">Velkommen tilbage</h1>
        <p className="text-slate-600 mb-10">
          Log ind med din Google-konto for at oprette og administrere arrangementer.
        </p>

        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm flex items-center gap-2">
            <AlertCircle className="h-4 w-4 shrink-0" />
            {error}
          </div>
        )}

        <Button 
          onClick={handleLogin} 
          disabled={isLoggingIn}
          className="w-full h-14 text-lg bg-emerald-800 hover:bg-emerald-900 rounded-xl flex items-center justify-center gap-3"
        >
          {isLoggingIn ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Log ind med Google
            </>
          )}
        </Button>

        <p className="mt-8 text-xs text-slate-400">
          Ved at logge ind accepterer du vores vilkår for brug og privatlivspolitik.
        </p>
      </motion.div>
    </div>
  );
}
