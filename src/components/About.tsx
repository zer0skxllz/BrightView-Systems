import { Shield, MapPin, CheckCircle2 } from "lucide-react";

const About = () => {
  const credentials = [
    "Licensed & Insured",
    "Quality Workmanship",
    "Competitive Pricing",
    "Free Estimates",
  ];

  return (
    <section id="about" className="py-24 relative bg-secondary/30">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Trusted <span className="text-gradient">Partner</span> in Low-Voltage Solutions
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We specialize in designing and installing low-voltage electrical systems 
              that keep your property connected, secure, and running efficiently. From 
              small residential projects to large commercial installations, we bring 
              expertise and attention to detail to every job.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Serving Long Island, we understand the unique needs of local homes and 
              businesses. Our team is committed to delivering solutions that meet your 
              requirements and exceed your expectations.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Info cards */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-border bg-card card-gradient">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Licensed & Insured</h3>
                  <p className="text-muted-foreground text-sm">
                    Fully licensed contractor with comprehensive insurance coverage 
                    for your peace of mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card card-gradient">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Serving Long Island</h3>
                  <p className="text-muted-foreground text-sm">
                    Local contractor serving Nassau and Suffolk counties. We know 
                    the area and are always nearby when you need us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
