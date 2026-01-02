import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "wouter";
import { works } from "@/data/content";

export default function PortfolioSection() {

  return (
    <section id="portfolio" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" data-testid="text-portfolio-title">
          作品集
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-mono uppercase tracking-wider text-sm" data-testid="text-portfolio-subtitle">
          Portfolio
        </p>

        <div className="space-y-12">
          {works.map((project, index) => (
            <Link key={project.id} href={`/works/${project.slug}`}>
              <Card
                className="overflow-hidden hover-elevate cursor-pointer"
                data-testid={`card-project-${project.id}`}
              >
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {project.imageUrl && (
                    <div className={`aspect-video md:aspect-auto ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        data-testid={`img-project-${project.id}`}
                      />
                    </div>
                  )}
                  <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h3 className="text-2xl font-bold mb-4" data-testid={`text-project-title-${project.id}`}>
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6" data-testid={`text-project-description-${project.id}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" data-testid={`badge-tech-${project.id}-${techIndex}`}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.demoUrl && project.demoUrl !== "#" && (
                        <Button className="gap-2" data-testid={`button-demo-${project.id}`} onClick={(e) => e.stopPropagation()}>
                          <ExternalLink className="h-4 w-4" />
                          查看 Demo
                        </Button>
                      )}
                      {project.codeUrl && project.codeUrl !== "#" && (
                        <Button variant="outline" className="gap-2" data-testid={`button-code-${project.id}`} onClick={(e) => e.stopPropagation()}>
                          <Github className="h-4 w-4" />
                          原始碼
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
