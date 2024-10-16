import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

SwiperCore.use([EffectFade, Autoplay, Navigation]);

const images = [
  {
    src: "https://i.ibb.co/NVd4bFh/thedelphidowntownla-homepage-aniconicaddress-02-65022b0bb4c71.webp",
    text: "With its Moderne-style architecture, the handiwork of famed architect Claud Beelman, The Delphi has been the literal blueprint for L.A. living—setting trends and turning heads of locals and visitors alike—over the past seven decades.",
    heading: "An Iconic Address",
    number: "01",
  },
  {
    src: "https://i.ibb.co/pbBmWFp/delphi-homepage-topreasons-01-64be9313262e7.webp",
    text: "Exclusively serving La Colombe coffee and tea, our baristas-turned-bartenders craft a range of caffeinated beverages, light bites and innovative cocktails—all best enjoyed in our stunning lobby or outdoor sunken patio.",
    heading: "A Craft Coffee & Tea Bar",
    number: "02",
  },
  {
    src: "https://i.ibb.co/grSPfhV/thedelphidowntownla-homepage-aniconicaddress-1-6503203e12f5f.webp",
    text: "To us, the ultimate luxury is service that’s personal. Not too refined or rigid. We look forward to welcoming you into our community, but don’t worry—there won’t be any red carpets or white gloves.",
    heading: "An Elevated Experience",
    number: "03",
  },
];

const DelphiDetail = () => {
  const [currentText, setCurrentText] = useState(images[0].text);
  const [currentHeading, setCurrentHeading] = useState(images[0].heading);
  const [currentNumber, setCurrentNumber] = useState(images[0].number);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const nextIndex = (currentIndex + 1) % images.length;
      swiperRef.current.swiper.slideTo(nextIndex);
      setCurrentIndex(nextIndex);
      updateSlide(nextIndex);
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const prevIndex =
        currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      swiperRef.current.swiper.slideTo(prevIndex);
      setCurrentIndex(prevIndex);
      updateSlide(prevIndex);
    }
  };

  const updateSlide = (index) => {
    setCurrentText(images[index].text);
    setCurrentHeading(images[index].heading);
    setCurrentNumber(images[index].number);
  };

  return (
    <>
      <div className="xl:flex lg:flex md:block sm:block xs:block justify-center relative items-center border-1 border-[#707070] border-solid py-10">
        <div className="xl:w-[25%] lg:w-[25%] md:w-full sm:w-full xs:w-full xl:py-[2rem] lg:py-[2rem] md:py-10 sm:py-10 xs:py-10  flex justify-center items-center ">
          <h1 className="text-5xl">
            THE DELPHI
            <span className="block top-1 relative xl:ps-10 lg:ps-10 md:ps-32 sm:ps-32 xs:ps-32">
              In Detail
            </span>
          </h1>
        </div>

        <div className="xl:w-[45%] lg:w-[45%] md:w-full overflow-hidden sm:w-full xs:w-full max-w-[56rem] relative p-10">
          <div className="overflow-hidden flex justify-center">
            <motion.img
              className="absolute top-0 z-9 w-full h-full right-0 p-2 "
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 100,
                ease: "linear",
              }}
              src="/slider-texture.svg"
              alt="svg"
            />
            <Swiper
              ref={swiperRef}
              modules={[EffectFade, Autoplay, Navigation]}
              effect="fade"
              autoplay={{
                delay: 3000,
                duration: 100,
                disableOnInteraction: false,
              }}
              onSlideChange={(swiper) => {
                setCurrentIndex(swiper.realIndex);
                updateSlide(swiper.realIndex);
              }}
              loop={true}
              className="relative z-10 top-0 xl:w-[90%] lg:w-[90%] md:w-[80%] sm:w-[95%] xs:w-[100%]"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index} className="p-5">
                  <img
                    src={image.src}
                    alt={`Slide ${index}`}
                    className="w-full h-full object-contain rounded-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="xl:w-[25%] lg:w-[25%]  max-w-[56rem] md:w-full sm:w-full xs:w-full ">
          <div className="xl:py-0 mb-3 lg:py-0 md:py-5 sm:py-5 xs:py-5 xl:px-0 lg:px-0 md:px-14 sm:px-14 xs:px-14 xl:absolute lg:absolute md:relative sm:absolute xs:relative top-0 xl:right-12 lg:right-12 md:right-0 sm:left-0 xs:right-0 xl:left-auto lg:left-auto md:top-14 sm:top-auto xs:top-2 ">
            <motion.span
              key={currentNumber}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.05 }}
              className="text-2xl text-black"
            >
              {currentNumber}
            </motion.span>
          </div>
          <motion.div
            key={currentNumber}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.05 }}
            className="relative xl:px-5 lg:px-5 md:px-14 sm:px-14 xs:px-14 xl:py-0 lg:py-0 md:py-10 sm:py-10 xs:py-10"
          >
            <h1 className="text-4xl text-black pe-14">{currentHeading}</h1>
            <div className="mt-4">
              <p className="text-sm text-black leading-6">{currentText}</p>
            </div>
          </motion.div>
          <div className="xl:absolute lg:absolute md:relative sm:relative xs:relative bottom-0 xl:right-0 lg:right-0 md:right-[50%] sm:left-[50%] xs:left-[50%] transform lg:translate-x-0 xl:translate-x-0 md:-translate-x-[90%] sm:-translate-x-[85%] xs:-translate-x-[50%] flex justify-center sm:justify-end xs:justify-center">
            <div
              className="border-1 border-[#707070] px-4 py-4 hover:px-[15px] hover:py-[15px] text-black border-solid hover:bg-[#254844] hover:text-white cursor-pointer"
              onClick={handlePrevSlide}
            >
              <GoArrowLeft className="text-4xl hover:-translate-x-1 object-contain" />
            </div>
            <div
              className="border-1 border-[#707070] px-4 py-4 hover:px-[15px] hover:py-[15px] text-black border-solid hover:bg-[#254844] hover:text-white cursor-pointer"
              onClick={handleNextSlide}
            >
              <GoArrowRight className="text-4xl hover:translate-x-1 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DelphiDetail;
