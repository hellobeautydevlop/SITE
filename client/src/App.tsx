import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import Reviews from "./pages/Reviews";
import HairColoring from "./pages/HairColoring";
import CutsAndStyling from "./pages/CutsAndStyling";
import HairExtensions from "./pages/HairExtensions";
import NailDesign from "./pages/NailDesign";
import BridalHair from "./pages/BridalHair";
import KevinMurphy from "./pages/KevinMurphy";
import StylistQuiz from "./components/StylistQuiz";
import BookingAssistant from "./components/BookingAssistant";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/services/hair-coloring"} component={HairColoring} />
      <Route path={"/services/cuts-and-styling"} component={CutsAndStyling} />
      <Route path={"/services/hair-extensions"} component={HairExtensions} />
      <Route path={"/services/nail-design"} component={NailDesign} />
      <Route path={"/services/bridal-hair"} component={BridalHair} />
      <Route path={"/gallery"} component={Gallery} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:slug"} component={BlogPostDetail} />
      <Route path={"/reviews"} component={Reviews} />
      <Route path={"/kevin-murphy"} component={KevinMurphy} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
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
          <Toaster />
          <Router />
          <StylistQuiz />
          <BookingAssistant />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
