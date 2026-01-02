import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { Link } from "wouter";
import { diaries } from "@/data/content";

export default function DiarySection() {

  return (
    <section id="diary" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" data-testid="text-diary-title">
          學習日記
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-mono uppercase tracking-wider text-sm" data-testid="text-diary-subtitle">
          Learning Diary
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {diaries.map((entry) => (
            <Link key={entry.id} href={`/diaries/${entry.slug}`}>
              <Card className="hover-elevate cursor-pointer" data-testid={`card-diary-${entry.id}`}>
                <CardHeader className="gap-2">
                  <h3 className="text-2xl font-bold" data-testid={`text-diary-title-${entry.id}`}>{entry.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1 font-mono" data-testid={`text-diary-date-${entry.id}`}>
                      <Calendar className="h-4 w-4" />
                      {entry.date}
                    </span>
                    <span className="flex items-center gap-1 font-mono" data-testid={`text-diary-readtime-${entry.id}`}>
                      <Clock className="h-4 w-4" />
                      {entry.readTime}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-diary-excerpt-${entry.id}`}>
                    {entry.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs" data-testid={`badge-diary-tag-${entry.id}-${index}`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
