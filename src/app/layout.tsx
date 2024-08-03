import type { Metadata } from "next";
import { ThemeProvider, useTheme } from "./lib/ThemeContext";
import { Space_Mono } from "next/font/google";
import "./ui/globals.css";

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
      {/* <ThemeProvider> */}
        <body className={`${spaceMono.className}`}>
          {/* <ThemeWrapper>{children}</ThemeWrapper> */}
          {children}
        </body>
      {/* </ThemeProvider> */}
    </html>
  );
}

// // Component to wrap content and apply theme context
// const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const { theme } = useTheme();

//   return (
//     <div data-theme={theme}>
//       {children}
//     </div>
//   );
// };

// // Ensure you export ThemeToggleButton correctly
// import ThemeToggleButton from './components/ThemeToggleButton';