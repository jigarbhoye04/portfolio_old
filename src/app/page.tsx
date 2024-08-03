import MainFirst from "@/components/mainpage/mainFirst";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Carousel from "@/components/mainpage/Carousel";
import { useTheme } from "next-themes";

export default function Home() {
  const images = [
    { src: '/cat2.jpg', alt: 'Project 1' },
    { src: '/vvg.jpg', alt: 'Project 2' },
    { src: '/cat3.jpg', alt: 'Project 3' },
    { src: '/cat4.jpg', alt: 'Project 4' },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-10">
      <Header />
      <MainFirst />
      <div className="relative bg-black text-gray-100 py-4 mb-4">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Featured Cats</h2>
          <Carousel images={images} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
