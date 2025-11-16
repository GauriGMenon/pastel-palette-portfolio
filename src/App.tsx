import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Musings from "./pages/Musings";
import MusingPost from "./pages/MusingPost";
import Musicals from "./pages/Musicals";
import Wanderlust from "./pages/Wanderlust";
import WanderlustPost from "./pages/WanderlustPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/musings" element={<Musings />} />
          <Route path="/musings/:id" element={<MusingPost />} />
          <Route path="/musicals" element={<Musicals />} />
          <Route path="/wanderlust" element={<Wanderlust />} />
          <Route path="/wanderlust/:id" element={<WanderlustPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
