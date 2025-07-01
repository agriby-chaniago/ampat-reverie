import "./globals.css";
import localFont from "next/font/local";
import AuthProvider from "./providers/AuthProvider";
import FeedbackPopup from "./components/feedback/FeedbackPopup";

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
        className={`
          ${Gully.className}
          antialiased min-h-screen bg-background text-foreground
        `}
      >
        <AuthProvider>
          {children}
          <FeedbackPopup />
        </AuthProvider>
      </body>
    </html>
  );
}
