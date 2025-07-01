import "./globals.css";
import localFont from "next/font/local";
import AuthProvider from "./providers/AuthProvider";
import { SupabaseProvider } from "./providers/SupabaseProvider";
import FeedbackPopup from "./components/feedback/FeedbackPopup";
import { ConsoleOptimizer } from "./components/ConsoleOptimizer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const Gully = localFont({
  src: "./fonts/Gully/Gully-ECDRegular.ttf",
  weight: "400",
  style: "normal",
});

export const metadata = {
  title: "Ampat Reverie",
  description: "Tell you about Raja Ampat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${Gully.className} antialiased min-h-screen bg-background text-foreground`}
      >
        <SpeedInsights />
        <ConsoleOptimizer />
        <SupabaseProvider>
          <AuthProvider>
            {children}
            <FeedbackPopup />
          </AuthProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
