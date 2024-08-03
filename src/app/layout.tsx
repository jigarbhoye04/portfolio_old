import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import '@/components/ui/globals.css'
import { ThemeProvider } from "@/components/theme-provider";

// Fonts
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

// Metadata for the page
export const metadata: Metadata = {
  title: "Jigar Bhoye",
  description: "Portfolio of Jigar Bhoye",
  icons: [
    {
      url: "/LOGO.png",
      rel: "icon",
      type: "image/png",
      sizes: "180x180",
    },
  ],
};

// Layout for the page
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${spaceMono.className}`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
        </body>
    </html>
  );
}