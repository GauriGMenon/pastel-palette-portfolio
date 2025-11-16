import { Mail, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-background to-muted">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gradient">
          Contact Me
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Let's connect and create something amazing together
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {/* Email */}
          <a
            href="mailto:hello@example.com"
            className="group"
          >
            <div className="bg-card border-2 border-primary/50 rounded-2xl p-8 transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">hello@example.com</p>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-card border-2 border-secondary/50 rounded-2xl p-8 transition-all duration-300 hover:border-secondary hover:shadow-xl hover:shadow-secondary/20 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Instagram className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Instagram</h3>
              <p className="text-sm text-muted-foreground">@username</p>
            </div>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-card border-2 border-accent/50 rounded-2xl p-8 transition-all duration-300 hover:border-accent hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Youtube className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">YouTube</h3>
              <p className="text-sm text-muted-foreground">@channel</p>
            </div>
          </a>
        </div>

        <div className="mt-16">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
