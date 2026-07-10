import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect, useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import BlogMaintainBalayage from "./pages/BlogMaintainBalayage";
import BlogExtensionMaintenance from "./pages/BlogExtensionMaintenance";
import Reviews from "./pages/Reviews";
import HairColoring from "./pages/HairColoring";
import CutsAndStyling from "./pages/CutsAndStyling";
import HairExtensions from "./pages/HairExtensions";
import NailDesign from "./pages/NailDesign";
import BridalHair from "./pages/BridalHair";
import KevinMurphy from "./pages/KevinMurphy";
import FAQ from "./pages/FAQ";
import ModelApplication from "./pages/ModelApplication";
import ContactUs from "./pages/ContactUs";
import ServicesOverview from "./pages/ServicesOverview";
import StylistNoonK from "./pages/StylistNoonK";
import StylistMelissa from "./pages/StylistMelissa";
import StylistKeltie from "./pages/StylistKeltie";
import StylistTiaraBlack from "./pages/StylistTiaraBlack";
import StylistQuiz from "./components/StylistQuiz";
import BookingAssistant from "./components/BookingAssistant";
import ScrollToTop from "./components/ScrollToTop";
import FloatingNav from "./components/FloatingNav";


function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 50);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className={`page-wrapper ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
      {children}
    </div>
  );
}

function Router() {
  return (
    <PageTransitionWrapper>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/services"} component={ServicesOverview} />
        <Route path={"/stylists/noon-k"} component={StylistNoonK} />
        <Route path={"/stylists/melissa-mitchell"} component={StylistMelissa} />
        <Route path={"/stylists/keltie-cummins"} component={StylistKeltie} />
        <Route path={"/stylists/tiara-black"} component={StylistTiaraBlack} />
        <Route path={"/services/hair-coloring"} component={HairColoring} />
        <Route path={"/services/cuts-and-styling"} component={CutsAndStyling} />
        <Route path={"/services/hair-extensions"} component={HairExtensions} />
        <Route path={"/services/nail-design"} component={NailDesign} />
        <Route path={"/services/bridal-hair"} component={BridalHair} />
        <Route path={"/gallery"} component={Gallery} />
        <Route path={"/blog"} component={Blog} />
        <Route path={"/blog/maintain-balayage"} component={BlogMaintainBalayage} />
        <Route path={"/blog/extension-maintenance"} component={BlogExtensionMaintenance} />
        <Route path={"/blog/:slug"} component={BlogPostDetail} />
        <Route path={"/reviews"} component={Reviews} />
        <Route path={"/kevin-murphy"} component={KevinMurphy} />
        <Route path={"/faq"} component={FAQ} />
        <Route path={"/model-application"} component={ModelApplication} />
        <Route path={"/contact"} component={ContactUs} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </PageTransitionWrapper>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <FloatingNav />
          <Toaster />
          <Router />
          <ScrollToTop />
          <StylistQuiz />
          <BookingAssistant />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
