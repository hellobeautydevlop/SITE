import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, Search, Phone, MapPin } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  const handleGoServices = () => {
    setLocation("/#services");
  };

  const handleGoGallery = () => {
    setLocation("/gallery");
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-white to-rose-50 px-4 py-12">
      {/* Header Navigation */}
      <div className="w-full max-w-4xl mb-12">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">Hello Beauty Lounge</h1>
          <Button
            onClick={handleGoHome}
            variant="ghost"
            className="text-slate-600 hover:text-slate-900"
          >
            Back to Home
          </Button>
        </div>
      </div>

      {/* Main 404 Card */}
      <Card className="w-full max-w-2xl shadow-2xl border-0 bg-white/95 backdrop-blur-sm overflow-hidden">
        {/* Decorative top border */}
        <div className="h-1 bg-gradient-to-r from-amber-400 via-rose-400 to-amber-400" />
        
        <CardContent className="pt-12 pb-12 text-center">
          {/* 404 Icon with Animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-rose-100 rounded-full animate-pulse blur-xl" />
              <div className="relative bg-gradient-to-br from-rose-50 to-amber-50 rounded-full p-6 shadow-lg">
                <AlertCircle className="h-20 w-20 text-rose-500" />
              </div>
            </div>
          </div>

          {/* 404 Text */}
          <h1 className="text-6xl font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent mb-3">
            404
          </h1>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Oops! Page Not Found
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-600 mb-2 leading-relaxed">
            We couldn't find the page you're looking for.
          </p>
          <p className="text-slate-500 mb-10">
            It may have been moved, deleted, or the URL might be incorrect.
          </p>

          {/* Quick Links */}
          <div className="mb-10 p-6 bg-gradient-to-r from-amber-50 to-rose-50 rounded-lg border border-amber-200">
            <p className="text-sm font-semibold text-slate-700 mb-4">Here are some helpful links:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={handleGoHome}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-amber-50 text-slate-700 font-medium transition-colors border border-amber-200"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              <button
                onClick={handleGoServices}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-amber-50 text-slate-700 font-medium transition-colors border border-amber-200"
              >
                <Search className="w-4 h-4" />
                <span>Services</span>
              </button>
              <button
                onClick={handleGoGallery}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-amber-50 text-slate-700 font-medium transition-colors border border-amber-200"
              >
                <Search className="w-4 h-4" />
                <span>Gallery</span>
              </button>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={handleGoHome}
              className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl font-semibold"
            >
              <Home className="w-5 h-5 mr-2" />
              Go to Homepage
            </Button>
          </div>

          {/* Contact Info */}
          <div className="border-t border-slate-200 pt-8 mt-8">
            <p className="text-sm text-slate-600 mb-4">Need help? Contact us:</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-700">
              <a
                href="tel:+15872731668"
                className="flex items-center gap-2 hover:text-rose-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">+1 (587) 273-1668</span>
              </a>
              <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full" />
              <a
                href="https://maps.google.com/?q=4919+59+Street+Unit+120+Red+Deer+AB"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-rose-600 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Red Deer, AB</span>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer Text */}
      <p className="text-center text-slate-500 text-sm mt-8">
        Error Code: 404 | Page Not Found
      </p>
    </div>
  );
}
