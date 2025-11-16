import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const travelPosts = [
  {
    id: 1,
    location: "Ladakh",
    country: "India",
    dates: "June 2023",
    description: "High altitude adventures in the land of mountain passes and Buddhist monasteries",
    color: "pastel-purple",
  },
  {
    id: 2,
    location: "Goa",
    country: "India",
    dates: "December 2022",
    description: "Beach sunsets, Portuguese architecture, and coastal culture on India's western shores",
    color: "pastel-mint",
  },
  {
    id: 3,
    location: "Himachal Pradesh",
    country: "India",
    dates: "April 2023",
    description: "Trekking through pine forests and discovering hidden mountain villages",
    color: "pastel-yellow",
  },
  {
    id: 4,
    location: "Rajasthan",
    country: "India",
    dates: "January 2023",
    description: "Exploring desert forts, colorful bazaars, and the royal heritage of India",
    color: "pastel-pink",
  },
  {
    id: 5,
    location: "Kerala",
    country: "India",
    dates: "August 2022",
    description: "Backwater cruises, spice plantations, and lush green landscapes of God's Own Country",
    color: "pastel-purple",
  },
  {
    id: 6,
    location: "Pondicherry",
    country: "India",
    dates: "March 2023",
    description: "French colonial charm meets Indian spirituality on the Bay of Bengal",
    color: "pastel-mint",
  },
  {
    id: 7,
    location: "Uttarakhand",
    country: "India",
    dates: "September 2022",
    description: "Himalayan peaks, sacred rivers, and spiritual journeys in the land of gods",
    color: "pastel-yellow",
  },
  {
    id: 8,
    location: "Sikkim",
    country: "India",
    dates: "May 2023",
    description: "Alpine meadows, rhododendron forests, and views of Kanchenjunga",
    color: "pastel-pink",
  },
];

const Wanderlust = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 text-gradient">
          Wanderlust
        </h1>
        <p className="text-center text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
          Travel stories and adventures from around the world
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelPosts.map((post) => (
            <Link key={post.id} to={`/wanderlust/${post.id}`} className="group">
              <Card className={`${post.color} border-none overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full`}>
                <div className="aspect-[4/3] bg-background/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-background/30 group-hover:scale-110 transition-transform duration-500" />
                  <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {post.country}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-background/70 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{post.dates}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-background group-hover:text-background/80 transition-colors">
                    {post.location}
                  </h2>
                  <p className="text-background/80 line-clamp-3">
                    {post.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wanderlust;
