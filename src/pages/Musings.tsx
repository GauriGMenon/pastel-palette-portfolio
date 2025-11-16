import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Mindful Reading",
    excerpt: "Exploring how slowing down with books can transform your perspective on life and learning. In a world of endless scrolling, rediscovering the joy of pages.",
    date: "March 15, 2024",
    color: "pastel-purple",
  },
  {
    id: 2,
    title: "Creative Sparks in Daily Life",
    excerpt: "Finding inspiration in the mundane moments and turning them into creative opportunities. Every ordinary day holds extraordinary potential.",
    date: "March 10, 2024",
    color: "pastel-pink",
  },
  {
    id: 3,
    title: "Coffee Shop Chronicles",
    excerpt: "Stories and observations from my favorite local cafes and the people who frequent them. A collection of overheard conversations and life lessons.",
    date: "March 5, 2024",
    color: "pastel-yellow",
  },
  {
    id: 4,
    title: "Writing as Therapy",
    excerpt: "How journaling and creative writing became my go-to tools for mental clarity. Putting pen to paper as a form of self-care and discovery.",
    date: "February 28, 2024",
    color: "pastel-purple",
  },
  {
    id: 5,
    title: "Digital Minimalism Journey",
    excerpt: "My experiment with reducing screen time and reclaiming presence in the physical world. Learning to live with less digital noise.",
    date: "February 20, 2024",
    color: "pastel-mint",
  },
  {
    id: 6,
    title: "Learning to Learn Again",
    excerpt: "Rediscovering the joy of learning without the pressure of grades or outcomes. Education as exploration rather than obligation.",
    date: "February 15, 2024",
    color: "pastel-pink",
  },
  {
    id: 7,
    title: "The Beauty of Solitude",
    excerpt: "Embracing alone time as a necessary practice for creativity and self-reflection. Finding comfort in your own company.",
    date: "February 10, 2024",
    color: "pastel-yellow",
  },
  {
    id: 8,
    title: "Chasing Sunsets",
    excerpt: "Why I make time to watch the sunset every day and what it teaches me about presence and gratitude.",
    date: "February 5, 2024",
    color: "pastel-mint",
  },
];

const Musings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 text-gradient">
          Musings
        </h1>
        <p className="text-center text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
          Thoughts, reflections, and stories from my journey
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/musings/${post.id}`} className="group">
              <Card className={`${post.color} border-none overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full`}>
                <div className="aspect-video bg-background/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-background/30 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-background/70 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-background group-hover:text-background/80 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-background/80 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="outline"
                    className="bg-background/20 text-background border-background/30 hover:bg-background hover:text-primary-foreground"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Musings;
