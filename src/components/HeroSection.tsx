import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";

const images = [hero1, hero2, hero3, hero4, hero5, hero6];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    if (!isAutoScrolling) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const handlePrev = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image Gallery */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentIndex ? "opacity-30" : "opacity-0"
            )}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient animate-fade-in">
          Side Projects
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          xyzhxbquxbuqxiuqxiuxux
        </p>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          className="bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground border-primary/50"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground border-primary/50"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoScrolling(false);
              setCurrentIndex(index);
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-primary w-8"
                : "bg-foreground/30 hover:bg-foreground/50"
            )}
          />
        ))}
      </div>
    </section>
  );
};

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default HeroSection;
