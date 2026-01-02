import { Switch, Route } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PhotoGallery from "@/components/PhotoGallery";
import DiarySection from "@/components/DiarySection";
import VideoGallery from "@/components/VideoGallery";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";
import WorkDetail from "@/pages/WorkDetail";
import DiaryDetail from "@/pages/DiaryDetail";
import NotFound from "@/pages/not-found";

function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <PhotoGallery />
        <DiarySection />
        <VideoGallery />
        <PortfolioSection />
      </main>
      <Footer />
    </>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/works/:slug" component={WorkDetail} />
      <Route path="/diaries/:slug" component={DiaryDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Router />
      </div>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
