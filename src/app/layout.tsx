import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import '@/styles/global.css'
import { ThemeProvider } from "@/components/random_not_used/theme-provider";

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
        <body className={`${spaceMono.className} bg-neutral-900`}>
        {/* <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            // enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider> */}
        {children}
        </body>
    </html>
  );
}