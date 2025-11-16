import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const MusingPost = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
        <Link to="/musings">
          <Button variant="outline" className="mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Musings
          </Button>
        </Link>

        {/* Hero Image */}
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />
        </div>

        {/* Title and Meta */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
          The Art of Mindful Reading
        </h1>
        
        <div className="flex items-center gap-6 text-muted-foreground mb-12">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>March 15, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>5 min read</span>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <p className="text-foreground/90 leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </p>

          <p className="text-foreground/90 leading-relaxed mb-6">
            Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>

          <p className="text-foreground/90 leading-relaxed mb-6">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
          </p>

          <p className="text-foreground/90 leading-relaxed mb-6">
            Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
          </p>

          <p className="text-foreground/90 leading-relaxed mb-12">
            Quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
          </p>
        </article>

        {/* Related Posts */}
        <div className="mt-16 border-t border-border pt-12">
          <h2 className="text-3xl font-bold mb-8">Related Posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <Link key={i} to="/musings/2" className="group">
                <Card className="pastel-pink border-none overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="aspect-video bg-background/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-background/30" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-background">
                      Another Interesting Post
                    </h3>
                    <p className="text-background/80 text-sm">
                      A brief excerpt that gives readers a taste of what this post is about...
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusingPost;
