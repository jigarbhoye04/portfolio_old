import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./ui/globals.css";

// fonts
// const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

// metadata for the page
export const metadata: Metadata = {
  title: "Jigar Bhoye",
  description: "Portfolio of Jigar Bhoye",
  icons: [{
    url: "/LOGO.png",
    rel: "icon",
    type: "image/png",
    sizes: "180x180",
  }],
};

// layout for the page
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={`bg-pattern ${spaceMono.className}`}>
        {children}
      </body> */}
      <body className={`${spaceMono.className}`}>
        {children}
      </body>
    </html>
  );
}
