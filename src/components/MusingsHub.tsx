import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import personSilhouette from "@/assets/person-silhouette.png";
import bookIcon from "@/assets/musing-book.png";
import lightbulbIcon from "@/assets/musing-lightbulb.png";
import coffeeIcon from "@/assets/musing-coffee.png";
import penIcon from "@/assets/musing-pen.png";
import laptopIcon from "@/assets/musing-laptop.png";
import brainIcon from "@/assets/musing-brain.png";

const blogPosts = [
  {
    id: 1,
    icon: bookIcon,
    title: "The Art of Mindful Reading",
    excerpt: "Exploring how slowing down with books can transform your perspective on life and learning.",
    color: "pastel-pink",
  },
  {
    id: 2,
    icon: lightbulbIcon,
    title: "Creative Sparks in Daily Life",
    excerpt: "Finding inspiration in the mundane moments and turning them into creative opportunities.",
    color: "pastel-mint",
  },
  {
    id: 3,
    icon: coffeeIcon,
    title: "Coffee Shop Chronicles",
    excerpt: "Stories and observations from my favorite local cafes and the people who frequent them.",
    color: "pastel-yellow",
  },
  {
    id: 4,
    icon: penIcon,
    title: "Writing as Therapy",
    excerpt: "How journaling and creative writing became my go-to tools for mental clarity.",
    color: "pastel-purple",
  },
  {
    id: 5,
    icon: laptopIcon,
    title: "Digital Minimalism Journey",
    excerpt: "My experiment with reducing screen time and reclaiming presence in the physical world.",
    color: "pastel-pink",
  },
  {
    id: 6,
    icon: brainIcon,
    title: "Learning to Learn Again",
    excerpt: "Rediscovering the joy of learning without the pressure of grades or outcomes.",
    color: "pastel-mint",
  },
];

const MusingsHub = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredPerson, setHoveredPerson] = useState(false);

  return (
    <section className="min-h-[60vh] flex items-center justify-center py-10 px-6 bg-pastel-purple">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-12 text-background">
          Musings
        </h2>

        <div className="relative flex items-center justify-center min-h-[500px]">
          {/* Central Person Silhouette */}
          <Link to="/about">
            <div 
              className="relative w-32 h-32 md:w-40 md:h-40 cursor-pointer transition-all duration-300 hover:scale-125"
              onMouseEnter={() => setHoveredPerson(true)}
              onMouseLeave={() => setHoveredPerson(false)}
            >
              <img 
                src={personSilhouette} 
                alt="Person Silhouette"
                className={cn(
                  "w-full h-full object-contain transition-all duration-300",
                  hoveredPerson && "drop-shadow-[0_0_20px_rgba(0,0,0,0.5)] scale-110"
                )}
              />
            </div>
          </Link>

          {/* Icons with arrows */}
          {blogPosts.map((post, index) => {
            const angle = (index * 60 - 90) * (Math.PI / 180);
            const radius = 250;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={post.id}
                className="absolute"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Arrow Line */}
                <svg
                  className="absolute pointer-events-none"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) rotate(${angle * (180 / Math.PI) + 90}deg)`,
                    width: `${radius}px`,
                    height: "2px",
                  }}
                >
                  <line
                    x1="0"
                    y1="1"
                    x2={radius}
                    y2="1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="text-background/30"
                  />
                </svg>

                {/* Icon Image */}
                <div className="relative">
                  <div
                    className={cn(
                      "w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-all duration-300",
                      "bg-background/80 backdrop-blur-sm shadow-lg cursor-pointer p-3",
                      hoveredIndex === index && "scale-125 shadow-2xl drop-shadow-[0_0_25px_rgba(0,0,0,0.5)]"
                    )}
                  >
                    <img 
                      src={post.icon} 
                      alt={post.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Blog Card on Hover */}
                  {hoveredIndex === index && (
                    <Link to={`/musings/${post.id}`}>
                      <Card
                        className={cn(
                          "absolute z-50 w-72 animate-fade-in shadow-2xl",
                          post.color,
                          index < 3 ? "top-full mt-4" : "bottom-full mb-4",
                          index % 2 === 0 ? "left-0" : "right-0"
                        )}
                      >
                        <CardContent className="p-4">
                          <h3 className="font-bold text-lg mb-2 text-background">
                            {post.title}
                          </h3>
                          <p className="text-sm text-background/80">{post.excerpt}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default MusingsHub;
