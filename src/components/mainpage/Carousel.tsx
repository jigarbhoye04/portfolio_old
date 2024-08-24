'use client';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import Image from 'next/image';

type Image = {
  src: string;
  alt: string;
};

const Carousel = ({ images }: { images: Image[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-x-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-80"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1920}
                height={1080}
                layout="responsive"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full bg-black text-white`}
      >
        <IoIosArrowDropleft className='text-3xl'/>
      </button>
      <button
        onClick={nextSlide}
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full bg-black text-white`}
      >
        <IoIosArrowDropright className='text-3xl'/>
      </button>
    </div>
  );
};

export default Carousel;
