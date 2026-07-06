import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Star, ArrowLeft, Check } from "lucide-react";
import { useLocation } from "wouter";

export default function StylistKeltie() {
  const [, setLocation] = useLocation();

  const reviews = [
    {
      id: 1,
      name: "Sarah W.",
      rating: 5,
      date: "1 week ago",
      text: "Keltie did my bridal hair and I felt like a princess! She listened to my vision, made suggestions that enhanced it, and executed perfectly. My hair stayed beautiful all day and night!",
      service: "Bridal Hair"
    },
    {
      id: 2,
      name: "Jessica P.",
      rating: 5,
      date: "3 weeks ago",
      text: "Best haircut I've ever had! Keltie really understood what I wanted and gave me a cut that works with my hair type. I get compliments constantly.",
      service: "Cuts & Styling"
    },
    {
      id: 3,
      name: "Amanda L.",
      rating: 5,
      date: "1 month ago",
      text: "I had Keltie do my bridal trial and the actual wedding day hair. She was so professional, calm, and made me feel confident. Highly recommend for any special occasion!",
      service: "Bridal Hair & Styling"
    },
    {
      id: 4,
      name: "Michelle G.",
      rating: 5,
      date: "6 weeks ago",
      text: "Keltie gave me a complete style refresh. She's so talented and makes you feel comfortable. I've already booked my next appointment!",
      service: "Cut & Style"
    }
  ];

  const portfolio = [
    { id: 1, title: "Romantic Bridal Updo", category: "Bridal" },
    { id: 2, title: "Modern Layered Cut", category: "Cuts" },
    { id: 3, title: "Bridesmaid Styling", category: "Bridal" },
    { id: 4, title: "Textured Waves", category: "Styling" },
    { id: 5, title: "Bridal Trial", category: "Bridal" },
    { id: 6, title: "Precision Haircut", category: "Cuts" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Keltie Cummins - Bridal & Styling Expert | Hello Beauty Lounge Red Deer"
        description="Meet Keltie Cummins, expert bridal hair and styling specialist at Hello Beauty Lounge. Specializing in wedding hair and precision cuts in Red Deer, AB."
        keywords="bridal hair Red Deer, wedding hair specialist, hair styling expert"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 md:py-20">
        <div className="container">
          <button 
            onClick={() => setLocation("/services")}
            className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Keltie Cummins</h1>
              <p className="text-xl mb-4 opacity-90">Bridal & Styling Expert</p>
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
                <span className="ml-2 text-lg">(4.9 · 156 reviews)</span>
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-lg opacity-90">
                  With 10+ years of experience in bridal styling and precision cutting, Keltie specializes in creating stunning looks for weddings, special events, and everyday styling.
                </p>
                <p className="text-lg opacity-90">
                  Keltie is known for her attention to detail, creative vision, and ability to make every client feel beautiful and confident on their special day.
                </p>
              </div>

              <Button 
                onClick={() => window.open("https://vagaro.com", "_blank")}
                className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 mr-4"
              >
                Book with Keltie
              </Button>
              <Button variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
                Call: +1 (587) 273-1668
              </Button>
            </div>

            <Card className="p-6 text-center">
              <div className="text-7xl mb-4">💇‍♀️</div>
              <h3 className="text-2xl font-bold mb-2">Keltie Cummins</h3>
              <p className="text-accent font-semibold mb-4">Bridal & Styling Expert</p>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold">Experience</p>
                  <p className="text-foreground/70">10+ years</p>
                </div>
                <div>
                  <p className="font-semibold">Specialties</p>
                  <p className="text-foreground/70">Bridal Hair, Cuts, Styling</p>
                </div>
                <div>
                  <p className="font-semibold">Certification</p>
                  <p className="text-foreground/70">Master Stylist & Bridal Specialist</p>
                </div>
              </div>
            </Card>
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
                Bridal Hair
              </h3>
              <p className="text-foreground/70 mb-4">
                Create your dream bridal look with Keltie's expert styling. From romantic updos to flowing waves, she brings your vision to life with precision and creativity.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Bridal trials & consultations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Wedding day styling
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  All-day hold & styling
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Check className="w-6 h-6 text-accent" />
                Precision Cutting
              </h3>
              <p className="text-foreground/70 mb-4">
                Expert cutting techniques tailored to your face shape, hair type, and lifestyle. Keltie creates cuts that are easy to style and always look fresh.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Custom cut consultations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Texture & movement
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Styling tutorials
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Check className="w-6 h-6 text-accent" />
                Event Styling
              </h3>
              <p className="text-foreground/70 mb-4">
                Look stunning for any special occasion. Keltie creates custom styles for proms, galas, anniversaries, and other memorable events.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Updo & formal styling
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Accessory integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Long-lasting styles
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Check className="w-6 h-6 text-accent" />
                Everyday Styling
              </h3>
              <p className="text-foreground/70 mb-4">
                Get professional styling for your everyday look. Keltie teaches you techniques to recreate salon-quality styles at home.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Style consultations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Styling tutorials
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Product recommendations
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-secondary/5 py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Portfolio</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-accent/20 to-accent/5 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">✨</div>
                    <p className="text-sm font-semibold text-accent">{item.category}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Client Reviews</h2>
          
          <div className="space-y-6">
            {reviews.map((review) => (
              <Card key={review.id} className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-lg">{review.name}</h3>
                    <p className="text-sm text-foreground/60">{review.service}</p>
                  </div>
                  <span className="text-sm text-foreground/60">{review.date}</span>
                </div>
                
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-foreground/70">{review.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Perfect Look?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book a consultation with Keltie to discuss your style goals and create a look that makes you feel confident and beautiful.
          </p>
          <Button 
            onClick={() => window.open("https://vagaro.com", "_blank")}
            className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
          >
            Book with Keltie
          </Button>
        </div>
      </section>
    </div>
  );
}
