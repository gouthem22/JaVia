import type { Metadata } from "next";
import { Inter, Bebas_Neue, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "JaVia — Enterprise Innovation",
  description: "Scalable digital products and enterprise-grade web platforms.",
  icons: {
    icon: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://javia.studio",
  },
  openGraph: {
    siteName: "JaVia Ventures",
    locale: "en_IN",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Tamil Nadu, India",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} ${bebasNeue.variable} ${playfair.variable} antialiased bg-background text-text-primary overflow-x-hidden`}>
        <SmoothScroll>
          <Navbar />
          {children}
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
