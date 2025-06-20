import "./globals.css";
import localFont from "next/font/local";

// Gunakan font dari Google Fonts
const Gully = localFont({
  src: [
    {
      path: "./fonts/Gully/Gully-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Gully/Gully-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Gully/Gully-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
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
          ${Gully.variable}
          antialiased min-h-screen bg-background text-foreground
        `}
      >
        {children}
      </body>
    </html>
  );
}
