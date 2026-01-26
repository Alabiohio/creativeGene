import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "./components/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creative Gene | Unveiling the Creative Force Within You",
  description: "An immersive experience designed to help you decode your potential. Learn from industry masters through real journeys, mistakes, and what actually works. Join the movement and unveil the creative force within you.",
  keywords: ["Creative Gene", "Tech Event", "Innovation", "Career Growth", "Industry Insights", "Praise Unuigboje", "Tech Mentorship"],
  authors: [{ name: "Praise Unuigboje" }],
  creator: "Ohiocheoya Alabi",
  publisher: "Creative Gene",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://creativefestcon.vercel.app"),
  openGraph: {
    title: "Creative Gene | Unveiling the Creative Force Within You",
    description: "Join Creative Gene, an immersive tech experience designed to help you decode your potential. Learn from industry masters.",
    url: "/",
    siteName: "Creative Gene",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Creative Gene - Unveiling the Creative Force Within You",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Gene | Unveiling the Creative Force Within You",
    description: "Unveiling the Creative Force Within You. Join the movement and learn from the masters.",
    images: ["/hero-bg.png"],
    creator: "@creative_gene",
  },
  icons: {
    icon: "/cg-Icon.png",
    shortcut: "/cg-Icon.png",
    apple: "/cg-Icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: "#db2777",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Background />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
