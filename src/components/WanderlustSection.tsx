import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const travelSpots = [
  {
    id: 1,
    name: "Ladakh",
    country: "India",
    x: 55,
    y: 35,
    description: "Mountain adventures in the land of high passes",
    color: "pastel-purple",
  },
];

const WanderlustSection = () => {
  const [hoveredSpot, setHoveredSpot] = useState<number | null>(null);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-pastel-mint">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-16 text-background">
          Wanderlust
        </h2>

        <div className="relative w-full h-[600px] bg-background/10 backdrop-blur-sm rounded-3xl overflow-hidden border-4 border-background/20">
          {/* Simplified India Map Outline */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* India outline - simplified */}
            <path
              d="M 45 20 Q 42 22 40 25 L 38 30 L 36 35 Q 35 40 35 45 L 34 50 L 33 55 Q 32 60 33 65 L 35 70 Q 37 75 40 78 L 45 82 L 50 85 L 55 87 L 60 88 Q 65 88 68 86 L 72 83 L 75 78 Q 77 73 78 68 L 79 63 L 80 58 Q 81 53 80 48 L 78 43 L 75 38 Q 72 33 68 29 L 63 25 L 58 22 Q 53 20 48 20 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-background/40"
            />
          </svg>

          {/* Bangalore (Home) */}
          <div
            className="absolute"
            style={{ left: "52%", top: "65%" }}
          >
            <div className="relative group">
              <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center animate-pulse-slow cursor-pointer shadow-lg">
                <Home className="w-5 h-5 text-pastel-mint" />
              </div>
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Bangalore
              </div>
            </div>
          </div>

          {/* Travel Spots */}
          {travelSpots.map((spot) => (
            <div
              key={spot.id}
              className="absolute"
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              onMouseEnter={() => setHoveredSpot(spot.id)}
              onMouseLeave={() => setHoveredSpot(null)}
            >
              {/* Connection Line */}
              <svg
                className="absolute pointer-events-none"
                style={{
                  left: "50%",
                  top: "50%",
                  width: "200px",
                  height: "200px",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <line
                  x1="100"
                  y1="100"
                  x2={`${(52 - spot.x) * 2 + 100}`}
                  y2={`${(65 - spot.y) * 2 + 100}`}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  className="text-background/30"
                />
              </svg>

              {/* Marker */}
              <div className="relative">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center animate-pulse-slow cursor-pointer shadow-lg border-2 border-background">
                  <MapPin className="w-4 h-4 text-background" />
                </div>

                {/* Travel Card on Hover */}
                {hoveredSpot === spot.id && (
                  <Link to={`/wanderlust/${spot.id}`}>
                    <Card
                      className={cn(
                        "absolute z-50 w-64 animate-fade-in shadow-2xl",
                        "top-full mt-2 left-1/2 -translate-x-1/2",
                        spot.color
                      )}
                    >
                      <CardContent className="p-4">
                        <h3 className="font-bold text-lg mb-1 text-background">
                          {spot.name}, {spot.country}
                        </h3>
                        <p className="text-sm text-background/80">{spot.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-6 text-background/80">
          Click on the markers to explore travel stories
        </p>
      </div>
    </section>
  );
};

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default WanderlustSection;
