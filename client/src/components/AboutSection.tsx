import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Rocket } from "lucide-react";

export default function AboutSection() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", 
    "Python", "Tailwind CSS", "Git", "Docker"
  ];

  const interests = [
    { icon: Code, title: "程式開發", description: "熱愛編寫優雅的程式碼" },
    { icon: Palette, title: "UI/UX 設計", description: "創造美觀的使用者介面" },
    { icon: Rocket, title: "科技創新", description: "探索新技術與可能性" },
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" data-testid="text-about-title">
          關於我
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-mono uppercase tracking-wider text-sm" data-testid="text-about-subtitle">
          About Me
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-4" data-testid="text-introduction-title">自我介紹</h3>
            <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-introduction-content">
              我叫仙草，是一名充滿熱情的學生開發者，目前專注於全端網頁開發與使用者體驗設計。
              喜歡透過科技解決實際問題，並且相信優秀的設計能夠改變世界。
            </p>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-introduction-content-2">
              在學習的過程中，我不斷挑戰自己，嘗試新的技術與工具。
              這個部落格記錄了我的學習旅程、專案作品，以及對科技的思考。
            </p>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-4" data-testid="text-skills-title">技能標籤</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm" data-testid={`badge-skill-${index}`}>
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <Card key={index} className="p-6 hover-elevate cursor-pointer" data-testid={`card-interest-${index}`}>
              <interest.icon className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2" data-testid={`text-interest-title-${index}`}>{interest.title}</h4>
              <p className="text-muted-foreground" data-testid={`text-interest-description-${index}`}>{interest.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
