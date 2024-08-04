import MainFirst from "@/components/mainpage/mainFirst";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default function Home() {
  const images = [
    { src: '/cat2.jpg', alt: 'Project 1' },
    { src: '/vvg.jpg', alt: 'Project 2' },
    { src: '/cat3.jpg', alt: 'Project 3' },
    { src: '/cat4.jpg', alt: 'Project 4' },
  ];

  return (
    <main>
      <Header />
      <MainFirst />
      <Footer />
    </main>
  );
}
