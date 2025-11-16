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
    <section className="min-h-[60vh] flex items-center justify-center py-10 px-6 bg-pastel-mint">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-12 text-background">
          Wanderlust
        </h2>

        <div className="relative w-full h-[500px] bg-background/10 backdrop-blur-sm rounded-3xl overflow-hidden border-4 border-background/20">
          {/* Detailed India Map Outline */}
          <svg
            viewBox="0 0 100 140"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* India outline - more detailed */}
            <path
              d="M 50 10 
                 L 48 12 L 46 14 L 44 16 L 42 18 L 40 20 
                 L 38 23 L 36 26 L 35 29 L 34 32 
                 L 33 36 L 32 40 L 31.5 44 L 31 48 
                 L 30.5 52 L 30 56 L 30 60 L 30.5 64 
                 L 31 68 L 32 72 L 33 76 L 34.5 80 
                 L 36 84 L 38 87 L 40 90 L 42 92 
                 L 44 94 L 46 96 L 48 98 L 50 100 
                 L 52 101 L 54 102 L 56 103 L 58 104 
                 L 60 105 L 62 106 L 64 106.5 L 66 107 
                 L 68 107 L 70 106.5 L 72 106 L 74 105 
                 L 76 103.5 L 78 102 L 80 100 L 82 98 
                 L 84 95 L 86 92 L 88 89 L 89 86 
                 L 90 83 L 91 80 L 92 76 L 92.5 72 
                 L 93 68 L 93 64 L 92.5 60 L 92 56 
                 L 91 52 L 90 48 L 89 44 L 88 40 
                 L 86 36 L 84 32 L 82 28 L 80 25 
                 L 78 22 L 76 19 L 74 17 L 72 15 
                 L 70 13 L 68 11.5 L 66 10.5 L 64 10 
                 L 62 9.5 L 60 9.5 L 58 9.5 L 56 10 
                 L 54 10 L 52 10 Z
                 
                 M 35 50 L 32 52 L 30 54 L 29 56 L 28 58 
                 L 28 60 L 29 62 L 31 64 L 33 65 L 35 66
                 L 37 65 L 38 63 L 38 61 L 37 59 L 36 57 
                 L 35 55 L 35 53 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              className="text-background/40"
            />
            
            {/* Additional details - Kashmir region */}
            <path
              d="M 48 12 Q 50 8 54 10 L 56 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
              className="text-background/30"
            />
            
            {/* Northeast states detail */}
            <path
              d="M 88 40 L 90 38 L 92 37 L 93 38 L 92 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
              className="text-background/30"
            />
          </svg>

          {/* Bangalore (Home) */}
          <div
            className="absolute transition-all duration-300 hover:scale-125"
            style={{ left: "52%", top: "65%" }}
          >
            <div className="relative group">
              <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center animate-pulse-slow cursor-pointer shadow-lg hover:shadow-2xl hover:drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]">
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
              className="absolute transition-all duration-300 hover:scale-125"
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
                <div className={cn(
                  "w-6 h-6 bg-secondary rounded-full flex items-center justify-center animate-pulse-slow cursor-pointer shadow-lg border-2 border-background transition-all duration-300",
                  hoveredSpot === spot.id && "shadow-2xl drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] scale-110"
                )}>
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
