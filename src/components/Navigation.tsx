import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { label: "Hello!", path: "/" },
    { label: "About", path: "/about" },
    { label: "Musings", path: "/musings" },
    { label: "Musicals", path: "/musicals" },
    { label: "Wanderlust", path: "/wanderlust" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <ul className="flex justify-center gap-8 md:gap-12">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "text-lg font-medium transition-all duration-300 hover:text-primary relative",
                  "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5",
                  "after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300",
                  "hover:after:scale-x-100",
                  location.pathname === item.path && "text-primary after:scale-x-100"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
