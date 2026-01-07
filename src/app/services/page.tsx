import { Features } from "@/components/Features";

const ServicesPage = () => {
  return (
    <div className="min-h-screen py-20 md:py-32">
      {/* Reusing the Features component but passing custom title/subtitle.
        This ensures both pages stay perfectly in sync.
      */}
      <Features
        heading={
          <>
            Our <span className="gradient-text">Services</span>
          </>
        }
        subheading="We provide a complete suite of services to help you win tenders, from discovery and documentation to submission and legal compliance."
        className="pt-12"
      />
    </div>
  );
};

export default ServicesPage;
