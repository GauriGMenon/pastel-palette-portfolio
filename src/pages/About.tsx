import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { User, Heart, Code, Music } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 text-gradient">
          About Me
        </h1>
        <p className="text-center text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
          Getting to know the person behind the projects
        </p>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Intro Section */}
          <Card className="pastel-purple border-none">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-background/20 flex items-center justify-center">
                  <User className="w-8 h-8 text-background" />
                </div>
                <h2 className="text-3xl font-bold text-background">Hello, I'm [Your Name]</h2>
              </div>
              <p className="text-background/80 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </CardContent>
          </Card>

          {/* Passions Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="pastel-mint border-none">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background/20 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-background">Writing</h3>
                <p className="text-background/80">
                  Passionate about sharing thoughts and stories through written words. Exploring life's nuances one blog post at a time.
                </p>
              </CardContent>
            </Card>

            <Card className="pastel-pink border-none">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background/20 flex items-center justify-center">
                  <Music className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-background">Music</h3>
                <p className="text-background/80">
                  Music is my creative outlet. From covers to originals, I love exploring different genres and expressing emotions through melodies.
                </p>
              </CardContent>
            </Card>

            <Card className="pastel-yellow border-none">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background/20 flex items-center justify-center">
                  <Code className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-background">Travel</h3>
                <p className="text-background/80">
                  Exploring new places, cultures, and experiences. Every journey teaches something new and inspires countless stories.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Background Section */}
          <Card className="pastel-purple border-none">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-background">My Background</h2>
              <div className="space-y-4 text-background/80 text-lg">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
                  Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </p>
                <p>
                  Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. 
                  Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                </p>
                <p>
                  Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. 
                  Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Future Goals */}
          <Card className="pastel-mint border-none">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-background">What's Next</h2>
              <p className="text-background/80 text-lg leading-relaxed">
                Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. Suspendisse finibus mauris et bibendum molestie. 
                Aenean ex augue, varius et pulvinar in, pretium non nisi. Quisque volutpat, lorem vel dignissim mollis, 
                elit nisi maximus mauris, in convallis dolor lorem ut purus. Sed vitae erat non erat venenatis faucibus.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
