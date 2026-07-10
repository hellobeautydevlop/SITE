import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Star, ArrowLeft, Check } from "lucide-react";
import { useLocation } from "wouter";
import Footer from "@/components/Footer";

export default function StylistTiaraBlack() {
  const [, setLocation] = useLocation();

  const reviews = [
    {
      id: 1,
      name: "Emily R.",
      rating: 5,
      date: "3 weeks ago",
      text: "Tiara is an absolute artist! She gave me the most beautiful hand-tied extensions. They look so natural and blend seamlessly with my hair. Highly recommend!",
      service: "Hand-Tied Extensions"
    },
    {
      id: 2,
      name: "Rachel H.",
      rating: 5,
      date: "1 month ago",
      text: "I've been getting extensions from Tiara for over a year. She's incredibly skilled and always makes sure my extensions look perfect. The quality is outstanding!",
      service: "Hair Extensions"
    },
    {
      id: 3,
      name: "Lauren M.",
      rating: 5,
      date: "6 weeks ago",
      text: "Tiara's extension work is flawless. She's so detail-oriented and takes time to ensure everything is perfect. My hair looks fuller and healthier than ever!",
      service: "Extension Installation"
    },
    {
      id: 4,
      name: "Nicole S.",
      rating: 5,
      date: "2 months ago",
      text: "Best extensions I've ever had! Tiara's technique is amazing and she uses only premium quality hair. Worth every penny!",
      service: "Premium Extensions"
    }
  ];

  const portfolio = [
    { id: 1, title: "Seamless Hand-Tied Extensions", category: "Extensions" },
    { id: 2, title: "Volume Enhancement", category: "Extensions" },
    { id: 3, title: "Length Transformation", category: "Extensions" },
    { id: 4, title: "Blonde Extension Blend", category: "Extensions" },
    { id: 5, title: "Brunette Extensions", category: "Extensions" },
    { id: 6, title: "Extension Maintenance", category: "Styling" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Tiara Black - Extension Specialist | Hello Beauty Lounge Red Deer"
        description="Meet Tiara Black, expert extension specialist at Hello Beauty Lounge. Specializing in hand-tied extensions and hair transformations in Red Deer, AB."
        keywords="extension specialist Red Deer, hand-tied extensions, hair extensions expert"
      />

      {/* Hero Section with Image */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/manus-storage/IMG_1200_b85e3391.PNG')", backgroundAttachment: "scroll", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
        </div>

        <div className="container relative z-10 max-w-3xl px-4 md:px-8">
          <button 
            onClick={() => setLocation("/services")}
            className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </button>
          <h1 className="text-4xl md:text-6xl text-white mb-4 font-bold leading-[1.15]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Tiara Black
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-4">Extension Specialist</p>
          <div className="flex items-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
            <span className="ml-2 text-white/90">(4.9 · 98 reviews)</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => window.open("https://www.vagaro.com/hellobeautylounge", "_blank")}
              className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-full px-8 py-6"
            >
              Book with Tiara
            </Button>
            <Button variant="outline" className="border-white/40 text-white hover:bg-white/10 font-semibold rounded-full px-8 py-6">
              Call: +1 (587) 273-1668
            </Button>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Specializations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Check className="w-6 h-6 text-accent" />
                Hand-Tied Extensions
              </h3>
              <p className="text-foreground/70 mb-4">
                Premium hand-tied extensions that blend seamlessly with your natural hair. Tiara specializes in creating natural-looking, voluminous hair that feels and looks authentic.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Premium quality hair
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Seamless blending
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Natural appearance
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Check className="w-6 h-6 text-accent" />
                Length & Volume
              </h3>
              <p className="text-foreground/70 mb-4">
                Add length and volume to your hair with expertly placed extensions. Whether you want subtle enhancement or dramatic transformation, Tiara delivers beautiful results.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Custom length options
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Volume enhancement
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Personalized styling
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Check className="w-6 h-6 text-accent" />
                Extension Maintenance
              </h3>
              <p className="text-foreground/70 mb-4">
                Keep your extensions looking beautiful with professional maintenance services. Tiara provides expert care to extend the life of your extensions.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Regular maintenance appointments
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Professional care tips
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Extension longevity
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Check className="w-6 h-6 text-accent" />
                Color Matching & Styling
              </h3>
              <p className="text-foreground/70 mb-4">
                Perfect color matching and expert styling to ensure your extensions blend flawlessly. Tiara takes time to get every detail right.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Precise color matching
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Expert styling
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Texture blending
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-accent/5">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-foreground/40 font-semibold">{item.title}</span>
                </div>
                <div className="p-4">
                  <p className="text-sm text-accent font-semibold mb-2">{item.category}</p>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Client Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{review.name}</h3>
                    <p className="text-sm text-foreground/60">{review.date}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-foreground/70 mb-4">{review.text}</p>
                <p className="text-xs text-accent font-semibold">{review.service}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Beautiful Extensions?</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Book your consultation with Tiara today and discover how hand-tied extensions can transform your look.
            </p>
            <Button 
              onClick={() => window.open("https://www.vagaro.com/hellobeautylounge", "_blank")}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-full px-8"
            >
              Book Your Appointment
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
