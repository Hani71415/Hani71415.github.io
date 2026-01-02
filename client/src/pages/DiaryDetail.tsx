import { useRoute } from "wouter";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import MarkdownContent from "@/components/MarkdownContent";
import { diaries } from "@/data/content";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function DiaryDetail() {
  const [, params] = useRoute("/diaries/:slug");
  const diary = diaries.find((d) => d.slug === params?.slug);

  if (!diary) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">找不到日記</h2>
            <p className="text-muted-foreground">這篇日記可能不存在</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Link href="/#diary">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              返回日記列表
            </Button>
          </Link>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">{diary.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1 font-mono">
                <Calendar className="h-4 w-4" />
                {diary.date}
              </span>
              <span className="flex items-center gap-1 font-mono">
                <Clock className="h-4 w-4" />
                {diary.readTime}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {diary.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardHeader>
          
          <CardContent className="pt-6">
            <div className="border-t pt-6">
              <MarkdownContent content={diary.content} />
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

