import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Configure the font
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cinzel.variable} ${cormorant.variable}`}
    >
      <body>
        <div className="bg-background text-foreground min-h-screen">
          <Header />
          <main className="pt-0">{children}</main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
