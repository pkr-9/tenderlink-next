import {
  Triangle,
  Globe,
  Hexagon,
  Zap,
  Command,
  Layers,
  Cpu,
  Fingerprint,
} from "lucide-react";

// Mock client data using Lucide icons
const CLIENTS = [
  { name: "Acme Corp", icon: Triangle },
  { name: "Global Bank", icon: Globe },
  { name: "HealthPlus", icon: Hexagon },
  { name: "NextGen", icon: Zap },
  { name: "Starlight", icon: Command },
  { name: "Umbrella", icon: Layers },
  { name: "Cyberdyne", icon: Cpu },
  { name: "SecureNet", icon: Fingerprint },
];

export default function ClientLogos() {
  return (
    <section className="section border-b border-border/40 bg-background/50 backdrop-blur-sm relative z-20 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-10">
          Trusted by innovative teams at
        </p>

        {/* Masked Container for the Fade Effect */}
        <div className="relative w-full overflow-hidden mask-gradient">
          {/* Inner Track - Width must accommodate duplicate items for seamless looping */}
          <div className="flex animate-marquee-slow gap-16 sm:gap-24 whitespace-nowrap py-4 items-center w-max">
            {/* We map 3 sets to ensure no gaps on wide screens */}
            {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, idx) => {
              const Icon = client.icon;
              return (
                <div
                  key={`${client.name}-${idx}`}
                  className="group flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-500 cursor-default select-none"
                >
                  {/* Logo Icon - Theme Aware Colors */}
                  <div className="p-2 rounded-xl bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-500">
                    <Icon className="w-8 h-8 text-foreground dark:text-foreground group-hover:text-primary transition-colors duration-500" />
                  </div>

                  {/* Company Name - Theme Aware Colors */}
                  <span className="text-xl font-bold text-foreground/80 dark:text-foreground/90 font-sans tracking-tight group-hover:text-foreground transition-colors">
                    {client.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        /* Gradient Mask for fading edges - works in both themes as it uses opacity */
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        /* Slower, smooth continuous scroll */
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* Move half width of the tripled list */
        }

        .animate-marquee-slow {
          animation: marquee-slow 60s linear infinite;
        }

        /* Pause animation on hover for better UX */
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
