import "./globals.css";
import { Geist, Geist_Mono, Space_Grotesk, Unbounded } from "next/font/google";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mi Portafolio",
  description: "Portafolio que contiene mis proyectos y sus detalles",
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=BBH+Sans+Bartle:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}  ${unbounded.variable} ${spaceGrotesk.variable}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
