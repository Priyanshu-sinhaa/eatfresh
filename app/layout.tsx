import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EatFresh | Organic Fruits & Vegetables, Farm to Table",
  description:
    "EatFresh sources fresh, organic, seasonal fruits and vegetables grown using modern hydroponic and aeroponic farming. Shop nutritious, low-calorie, healthy produce online.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,ital@9..144,300..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* GA4 tag placeholder — replace G-XXXXXXXXXX with your Measurement ID */}
      </head>
      <body className="bg-bg text-text font-body antialiased">
        <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}