import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

// Gunakan font dari Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ampat Reverie",
  description: "Tell you about Raja Ampat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable}
          antialiased min-h-screen bg-background text-foreground
        `}
      >
        {children}
      </body>
    </html>
  );
}
