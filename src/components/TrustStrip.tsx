import Image from "next/image";

interface TrustStripProps {
  title?: string;
  logos?: {
    src: string;
    alt: string;
  }[];
}

const defaultLogos = [
  { src: "/logos/startup-india.png", alt: "Startup India Recognized" },
  { src: "/logos/dpiit.png", alt: "DPIIT Recognition" },
  { src: "/logos/gem.png", alt: "Supports GeM Portal" },
  { src: "/logos/cppp.png", alt: "CPPP Procurement Portal" },
  { src: "/logos/nic.png", alt: "NIC e-Procurement" },
  { src: "/logos/msme.png", alt: "MSME / Udyam Support" },
];

export function TrustStrip({
  title = "Recognized by Government of India & Built for the Procurement Ecosystem",
  logos = defaultLogos,
}: TrustStripProps) {
  return (
    <section className="py-10 bg-white border-y border-primary/10">
      <div className="container mx-auto px-4 text-center">
        {/* Caption */}
        <p className="text-lg text-muted-foreground mb-10 font-medium">
          {title}
        </p>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
          {logos.map((logo) => (
            <div
              key={logo.src}
              className="h-10 md:h-12 flex items-center transition duration-300 hover:scale-105"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={100}
                className="object-contain h-14 md:h-16 w-auto"
              />
            </div>
          ))}
        </div>

        {/* Legal-safe microcopy */}
        <p className="text-md text-muted-foreground mt-10">
          Startup India & DPIIT recognitions owned by TenderLink. Other logos
          indicate ecosystem compatibility.
        </p>
      </div>
    </section>
  );
}

// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// interface TrustStripProps {
//   title?: string;
//   logos?: {
//     src: string;
//     alt: string;
//   }[];
// }

// const defaultLogos = [
//   { src: "/logos/startup-india.png", alt: "Startup India Recognized" },
//   { src: "/logos/dpiit.png", alt: "DPIIT Recognition" },
//   { src: "/logos/gem.png", alt: "Supports GeM Portal" },
//   { src: "/logos/cppp.png", alt: "CPPP Procurement Portal" },
//   { src: "/logos/nic.png", alt: "NIC e-Procurement" },
//   { src: "/logos/msme.png", alt: "MSME / Udyam Support" },
// ];

// export function TrustStrip({
//   title = "Recognized by Government of India & Built for the Procurement Ecosystem",
//   logos = defaultLogos,
// }: TrustStripProps) {
//   const stripRef = useRef<HTMLDivElement | null>(null);
//   const [animate, setAnimate] = useState(false);

//   // Start animation only when visible in viewport
//   useEffect(() => {
//     const el = stripRef.current;
//     if (!el) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setAnimate(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.3 }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   // Duplicate logos for seamless loop
//   const marqueeLogos = [...logos, ...logos];

//   return (
//     <section className="py-10 bg-white border-y border-primary/10">
//       <div className="container mx-auto px-4 text-center">

//         {/* Caption */}
//         <p className="text-lg text-muted-foreground mb-3 font-medium">
//           {title}
//         </p>

//         {/* Viewport */}
//         <div
//           ref={stripRef}
//           className="relative overflow-hidden w-full"
//         >
//           {/* Gradient fade edges */}
//           <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
//           <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

//           {/* Track */}
//           <div
//             className={`flex items-center gap-10 whitespace-nowrap ${
//               animate ? "animate-marquee" : ""
//             }`}
//           >
//             {marqueeLogos.map((logo, i) => (
//               <div
//                 key={i}
//                 className="flex items-center justify-center"
//               >
//                 <Image
//                   src={logo.src}
//                   alt={logo.alt}
//                   width={120}
//                   height={60}
//                   className="h-10 md:h-12 w-auto object-contain opacity-80"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Legal note */}
//         <p className="text-sm text-muted-foreground mt-4 max-w-xl mx-auto leading-tight">
//           Startup India & DPIIT recognitions owned by TenderLink. Other logos
//           indicate ecosystem compatibility.
//         </p>
//       </div>

//       {/* Marquee animation style */}
//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 22s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }
