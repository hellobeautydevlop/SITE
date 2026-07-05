import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, RotateCcw, Check, X, User } from "lucide-react";

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    value: string;
    description: string;
  }[];
}

const quizQuestions: Question[] = [
  {
    id: 1,
    text: "What is your primary hair goal?",
    options: [
      { text: "Stunning Color & Balayage", value: "color", description: "Vibrant dimensional color or customized balayage." },
      { text: "Luxurious Length & Fullness", value: "extensions", description: "Premium hand-tied hair extensions for volume." },
      { text: "Precision Cut & Elegant Style", value: "cut", description: "A tailored cut matching your face shape." },
    ],
  },
  {
    id: 2,
    text: "How would you describe your style vibe?",
    options: [
      { text: "Artistic & Bold", value: "bold", description: "You love custom, creative, show-stopping transformations." },
      { text: "Elegant & Classic", value: "elegant", description: "Timeless luxury, natural-looking dimension, and beauty." },
      { text: "Modern & Low-Maintenance", value: "modern", description: "Sleek, chic styles that are easy to manage daily." },
    ],
  },
  {
    id: 3,
    text: "What is your preference for salon products?",
    options: [
      { text: "Eco-Conscious & Natural", value: "eco", description: "Environmentally friendly, weightless care like Kevin Murphy." },
      { text: "Scientific & High-Performance", value: "science", description: "Advanced hair science and damage repair." },
      { text: "A Blend of Both", value: "both", description: "You want a balance of clean ingredients and high performance." },
    ],
  },
];

const stylistsData = {
  noon: {
    name: "Noon K",
    role: "Master Stylist & Founder",
    specialty: "Hair Transformation & Artistry",
    image: "/manus-storage/IMG_4067_Original_13c5ff7d.JPG",
    matchReason: "Noon is the visionary founder and specializes in premium custom color artistry and high-end transformations. Her meticulous eye for detail is perfect for bold, luxurious hair transformations.",
    bookingLink: "https://www.vagaro.com/hellobeautylounge",
  },
  melissa: {
    name: "Melissa Mitchell",
    role: "Hair Specialist",
    specialty: "Balayage, Extensions & Color",
    image: "/manus-storage/IMG_3887_Original_057626f3.JPG",
    matchReason: "Melissa is our balayage and hand-tied extensions expert with over a decade of experience. She is perfect for clients seeking luxurious length, fullness, and rich dimensional color.",
    bookingLink: "https://www.vagaro.com/hellobeautylounge",
  },
  tiara: {
    name: "Tiara Black",
    role: "Hair Stylist",
    specialty: "Precision Cuts & Styling",
    image: "/manus-storage/IMG_0253_Original_76cd13e1.JPG",
    matchReason: "Tiara specializes in precision cuts and chic styling. She has a knack for making clients feel incredibly comfortable while crafting modern, easy-to-maintain, beautiful styles.",
    bookingLink: "https://www.vagaro.com/hellobeautylounge",
  },
};

export default function StylistQuiz() {
  const [currentStep, setCurrentStep] = useState<"intro" | "quiz" | "result">("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleStart = () => {
    setCurrentStep("quiz");
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentStep("result");
    }
  };

  const handleReset = () => {
    setCurrentStep("intro");
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  // Determine matching stylist based on answers
  const getMatch = () => {
    const primaryGoal = answers[0]; // color, extensions, cut
    const vibe = answers[1]; // bold, elegant, modern

    if (primaryGoal === "extensions") {
      return stylistsData.melissa;
    }
    if (primaryGoal === "cut" || vibe === "modern") {
      return stylistsData.tiara;
    }
    if (primaryGoal === "color" && vibe === "bold") {
      return stylistsData.noon;
    }
    // Default fallback logic
    if (vibe === "elegant") {
      return stylistsData.melissa;
    }
    return stylistsData.noon;
  };

  const matchedStylist = currentStep === "result" ? getMatch() : null;

  return (
    <>
      {/* Floating Quiz Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
      >
        <Sparkles className="w-5 h-5 animate-pulse" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap text-sm">
          Find Your Stylist
        </span>
      </button>

      {/* Quiz Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-border flex flex-col max-h-[90vh] animate-scale-in">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-foreground/50 hover:text-foreground bg-secondary/50 hover:bg-secondary p-2 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Area */}
            <div className="p-8 overflow-y-auto flex-grow">
              {currentStep === "intro" && (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Find Your Perfect Stylist
                  </h3>
                  <p className="text-foreground/70 mb-8 leading-relaxed">
                    Take our quick 3-question match quiz to find the Hello Beauty Lounge stylist who best aligns with your hair goals and style vibe.
                  </p>
                  <Button
                    onClick={handleStart}
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-base font-semibold shadow-md w-full flex items-center justify-center gap-2"
                  >
                    Start Match Quiz
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              )}

              {currentStep === "quiz" && (
                <div>
                  {/* Progress Indicator */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-semibold tracking-wider text-accent uppercase">
                      Question {currentQuestionIndex + 1} of {quizQuestions.length}
                    </span>
                    <div className="flex gap-1.5">
                      {quizQuestions.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx <= currentQuestionIndex ? "w-6 bg-accent" : "w-2 bg-secondary"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {quizQuestions[currentQuestionIndex].text}
                  </h3>

                  <div className="space-y-4">
                    {quizQuestions[currentQuestionIndex].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(option.value)}
                        className="w-full text-left p-5 rounded-2xl border border-border hover:border-accent hover:bg-secondary/30 transition-all duration-200 group flex items-start gap-4"
                      >
                        <div className="w-6 h-6 rounded-full border border-border group-hover:border-accent flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent group-hover:text-white transition-colors">
                          <span className="text-xs font-bold">{idx + 1}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {option.text}
                          </p>
                          <p className="text-xs text-foreground/60 mt-1 leading-relaxed">
                            {option.description}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === "result" && matchedStylist && (
                <div className="text-center py-2">
                  <span className="inline-block text-accent font-semibold tracking-widest uppercase text-xs mb-4 bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
                    Your Perfect Match!
                  </span>
                  
                  {/* Stylist Profile Teaser */}
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-accent shadow-lg">
                    <img
                      src={matchedStylist.image}
                      alt={matchedStylist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {matchedStylist.name}
                  </h3>
                  <p className="text-accent font-semibold text-sm mb-4">{matchedStylist.role}</p>
                  
                  <div className="bg-secondary/30 p-5 rounded-2xl text-left border border-border/50 mb-8">
                    <h4 className="font-bold text-primary text-sm mb-2 uppercase tracking-wider flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Why you matched:
                    </h4>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {matchedStylist.matchReason}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button
                      onClick={() => window.open(matchedStylist.bookingLink, "_blank")}
                      className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 text-base font-semibold shadow-md w-full flex items-center justify-center gap-2"
                    >
                      Book with {matchedStylist.name.split(' ')[0]}
                      <Sparkles className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleReset}
                      className="border-border text-foreground/70 hover:bg-secondary/50 rounded-full py-6 flex items-center justify-center gap-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Retake Quiz
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
