import { Network, Camera, KeyRound, Speaker, Building2, Cable } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Cable,
    title: "Network Cabling",
    description: "Professional Cat6, Cat6a, and fiber optic installations for reliable, high-speed connectivity.",
  },
  {
    icon: Camera,
    title: "Security Cameras",
    description: "HD surveillance systems with remote viewing, motion detection, and 24/7 recording capabilities.",
  },
  {
    icon: KeyRound,
    title: "Access Control",
    description: "Keycard, fob, and biometric entry systems to secure your property and manage access.",
  },
  {
    icon: Speaker,
    title: "Audio/Visual Systems",
    description: "Conference rooms, distributed audio, and integrated AV solutions for any environment.",
  },
  {
    icon: Building2,
    title: "Smart Building",
    description: "Integrated automation solutions connecting lighting, HVAC, and security systems.",
  },
  {
    icon: Network,
    title: "Structured Wiring",
    description: "Complete low-voltage infrastructure design and installation for new construction and retrofits.",
  },
];

const Services = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive low-voltage electrical solutions designed for reliability, 
            security, and seamless integration.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl border border-border bg-card card-gradient hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Button 
                variant="ghost" 
                className="px-0 text-primary hover:text-primary/80"
                onClick={scrollToContact}
              >
                Get a Quote →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
