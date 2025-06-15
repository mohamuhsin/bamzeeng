import type { Metadata } from "next";
import { Poppins, Geist, Geist_Mono } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";

// Fonts
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  title: "Bamzee Engineering Company",
  description: "Think Safety, Think Bamzee",
};

// Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <Theme
          accentColor="crimson"
          grayColor="sand"
          radius="medium"
          scaling="95%"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}
