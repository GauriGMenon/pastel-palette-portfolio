import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, Clock } from "lucide-react";

const WanderlustPost = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
        <Link to="/wanderlust">
          <Button variant="outline" className="mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Wanderlust
          </Button>
        </Link>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl relative overflow-hidden col-span-2">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />
          </div>
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl" />
          <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl" />
        </div>

        {/* Title and Meta */}
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin className="w-5 h-5 text-accent" />
          <span className="text-lg">Ladakh, India</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
          Adventures in the Land of High Passes
        </h1>
        
        <div className="flex items-center gap-6 text-muted-foreground mb-12">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>June 15-28, 2023</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>8 min read</span>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The mountains called to me with their snow-capped peaks and pristine valleys.
          </p>

          <p className="text-foreground/90 leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The journey began from Bangalore, with a flight to Leh that offered spectacular aerial views.
          </p>

          <p className="text-foreground/90 leading-relaxed mb-6">
            Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. The monasteries perched on hillsides seemed to touch the sky.
          </p>

          <p className="text-foreground/90 leading-relaxed mb-6">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. The Pangong Lake stretched endlessly in shades of blue.
          </p>

          <p className="text-foreground/90 leading-relaxed mb-6">
            Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Meeting local people and learning about their way of life at such high altitudes was humbling.
          </p>

          <p className="text-foreground/90 leading-relaxed mb-12">
            Quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi. The trek to Markha Valley tested my endurance but rewarded me with views that no photograph could capture.
          </p>
        </article>

        {/* Map */}
        <div className="mt-12 mb-16 bg-card border border-border rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">Location</h2>
          <div className="aspect-video bg-muted rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin className="w-12 h-12 text-primary animate-pulse-slow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WanderlustPost;
