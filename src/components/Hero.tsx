import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[120px]" />

      <div className="container relative z-10 text-center px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Long Island's Trusted Low-Voltage Experts</span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Professional{" "}
          <span className="text-gradient">Low-Voltage</span>
          <br />
          Electrical Solutions
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          From network cabling to security systems, we deliver reliable 
          low-voltage infrastructure for homes and businesses across Long Island.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" onClick={scrollToContact}>
            Request a Quote
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="hero-outline" onClick={scrollToServices}>
            View Services
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">Long Island</div>
              <div className="text-sm">Service Area</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">Licensed</div>
              <div className="text-sm">& Insured</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">Free</div>
              <div className="text-sm">Estimates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
