import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/Tech_hero_banner_background_7f360f3a.png";
import profileImage from "@assets/generated_images/Female_student_profile_portrait_ae97c8ad.png";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="mb-8">
          <img
            src={profileImage}
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto border-4 border-primary/50 shadow-xl"
            data-testid="img-profile"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent" data-testid="text-hero-title">
          你好，我是仙草
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-hero-subtitle">
          探索科技 · 記錄生活 · 分享創意
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button size="lg" className="gap-2" data-testid="button-view-works">
            查看作品
          </Button>
          <Button size="lg" variant="outline" data-testid="button-contact">
            聯絡我
          </Button>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="h-8 w-8 text-primary" />
        </button>
      </div>
    </section>
  );
}
