// src/pages/CareersPage.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Rocket, Target, Mail, Briefcase } from "lucide-react";

// Placeholder job openings
const jobOpenings = [
  {
    title: "Senior React Developer",
    location: "Mumbai, Maharashtra (Remote)",
    type: "Full-Time",
    link: "mailto:info@tenderlink.tech?subject=Application for Senior React Developer",
  },
  {
    title: "Procurement Data Analyst",
    location: "Mumbai, Maharashtra",
    type: "Full-Time",
    link: "mailto:info@tenderlink.tech?subject=Application for Procurement Data Analyst",
  },
  {
    title: "Digital Marketing Manager",
    location: "Mumbai, Maharashtra",
    type: "Full-Time",
    link: "mailto:info@tenderlink.tech?subject=Application for Digital Marketing Manager",
  },
];

const CareersPage = () => {
  return (
    <section className="py-32 md:py-48">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Page Title */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Join Our <span className="gradient-text">Mission</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're building the future of procurement in India. If you are
            passionate about technology and transparency, we want to hear from
            you.
          </p>
        </div>

        {/* Company Culture Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Rocket,
              title: "Innovate Daily",
              desc: "We tackle complex problems and build solutions that have a real-world impact.",
            },
            {
              icon: Users,
              title: "Grow Together",
              desc: "We invest in our team's growth with mentorship and learning opportunities.",
            },
            {
              icon: Target,
              title: "Customer-Obsessed",
              desc: "Our users' success is our success. We are driven by their needs and feedback.",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="glass-card p-6 text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 rounded-lg bg-gradient-primary w-fit mx-auto">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-heading font-semibold mb-2">
                {item.title}
              </h2>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </Card>
          ))}
        </div>

        {/* Open Positions - NO OPENINGS STATE */}
        <div className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            Open <span className="gradient-text">Positions</span>
          </h2>

          <div
            className="flex justify-center animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Card className="glass-card p-10 max-w-2xl w-full text-center">
              <div className="mb-6 inline-flex p-4 rounded-full bg-muted/50">
                <Briefcase className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                No Current Openings
              </h3>
              <p className="text-muted-foreground mb-6">
                We don't have any open roles at the moment, but things change
                fast here! Check back soon.
              </p>
            </Card>
          </div>
        </div>

        {/* General Inquiry */}
        {/* <div
          className="text-center animate-slide-up"
          style={{ animationDelay: "0.5s" }}
        >
          <h3 className="text-2xl font-heading font-semibold mb-4">
            Want to be considered for future roles?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            We're always looking for talented people. Send your resume to us and
            we'll keep it on file.
          </p>
          <Button asChild size="lg" variant="outline" className="border-2">
            <a href="mailto:info@tenderlink.tech?subject=General Career Inquiry">
              <Mail className="h-4 w-4 mr-2" />
              Email Your Resume
            </a>
          </Button>
        </div> */}

        {/* ------------------------------------------------------------------ */}
        {/* Open Positions */}
        {/* <div className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            Open <span className="gradient-text">Positions</span>
          </h2>
          <div className="space-y-4">
            {jobOpenings.map((job, index) => (
              <Card
                key={index}
                className="glass-card p-4 md:p-6 flex flex-col md:flex-row justify-between md:items-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
              >
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {job.location} • {job.type}
                  </p>
                </div>
                <Button asChild className="mt-4 md:mt-0 md:w-auto w-full">
                  <a href={job.link}>Apply Now</a>
                </Button>
              </Card>
            ))}
          </div>
        </div> */}

        {/* No suitable position? */}
        {/* <div
          className="text-center animate-slide-up"
          style={{ animationDelay: "0.8s" }}
        >
          <h3 className="text-2xl font-heading font-semibold mb-4">
            Don't see a role that fits?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            We're always looking for talented people. Send your resume to us and
            we'll keep it on file.
          </p>
          <Button asChild size="lg" variant="outline" className="border-2">
            <a href="mailto:info@tenderlink.tech?subject=General Career Inquiry">
              <Mail className="h-4 w-4 mr-2" />
              Email Your Resume
            </a>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default CareersPage;
