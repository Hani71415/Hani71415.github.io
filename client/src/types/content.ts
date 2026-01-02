export interface Work {
  id: string;
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  codeUrl?: string;
  content: string;
}

export interface Diary {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  duration: string;
}

export interface Photo {
  id: string;
  url: string;
  title: string;
  category: string;
  date: string;
}

