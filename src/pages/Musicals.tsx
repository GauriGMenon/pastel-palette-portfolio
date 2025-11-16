import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

const categories = ["All", "Covers", "Originals", "Collaborations"];

const videos = [
  {
    id: 1,
    title: "Classic Broadway Medley",
    description: "A journey through the greatest hits of Broadway musicals",
    videoId: "dQw4w9WgXcQ",
    duration: "5:32",
    category: "Covers",
    color: "pastel-pink",
  },
  {
    id: 2,
    title: "Original Composition: Starlight",
    description: "An original piece inspired by late night reflections",
    videoId: "9bZkp7q19f0",
    duration: "4:15",
    category: "Originals",
    color: "pastel-mint",
  },
  {
    id: 3,
    title: "Duet with Sarah",
    description: "A beautiful collaboration with vocalist Sarah Chen",
    videoId: "dQw4w9WgXcQ",
    duration: "3:48",
    category: "Collaborations",
    color: "pastel-yellow",
  },
  {
    id: 4,
    title: "Hamilton - Wait For It",
    description: "My take on this powerful Lin-Manuel Miranda song",
    videoId: "9bZkp7q19f0",
    duration: "3:12",
    category: "Covers",
    color: "pastel-purple",
  },
  {
    id: 5,
    title: "Sunset Serenade",
    description: "An instrumental original composed at dusk",
    videoId: "dQw4w9WgXcQ",
    duration: "6:20",
    category: "Originals",
    color: "pastel-pink",
  },
  {
    id: 6,
    title: "Group Performance: Ensemble",
    description: "A full ensemble piece with the musical theater group",
    videoId: "9bZkp7q19f0",
    duration: "7:45",
    category: "Collaborations",
    color: "pastel-mint",
  },
];

const Musicals = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVideos =
    selectedCategory === "All"
      ? videos
      : videos.filter((v) => v.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 text-gradient">
          Musicals
        </h1>
        <p className="text-center text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Musical performances, covers, and original compositions
        </p>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full font-medium transition-all duration-300",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card text-foreground hover:bg-card/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredVideos.map((video) => (
            <Card
              key={video.id}
              className={`${video.color} border-none overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>
                <Badge className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-foreground">
                  {video.duration}
                </Badge>
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-background/30 text-background">
                  {video.category}
                </Badge>
                <h2 className="text-2xl font-bold mb-2 text-background group-hover:text-background/80 transition-colors">
                  {video.title}
                </h2>
                <p className="text-background/80">{video.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default Musicals;
