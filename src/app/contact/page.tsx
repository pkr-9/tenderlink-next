import { contactData } from "@/data/contactData";
import { Contact } from "@/components/Contact";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Reusing the Contact Component for the Form Section */}
      <Contact />

      {/* New Maps Section */}
      <section className="pb-20 md:pb-32 -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Visit Our <span className="gradient-text">Offices</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Drop by for a coffee and a chat about your next big win.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {contactData.offices.map((office, index) => (
              <Card
                key={index}
                className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative border rounded-xl"
              >
                {/* Map Container with Overlay Effect */}
                <div className="h-80 w-full relative overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={office.mapUrl}
                    className="absolute inset-0 filter grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    title={`${office.city} Office Map`}
                  />

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

                  {/* Location Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-primary group-hover:border-primary transition-colors duration-300 shadow-lg">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-1 tracking-tight">
                          {office.city} HQ
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed max-w-xs font-light">
                          {office.address}
                          <br />
                          {office.state}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
