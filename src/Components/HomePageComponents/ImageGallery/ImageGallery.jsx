import React, { useState } from "react";
import "./ImageGallery.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaExpand } from "react-icons/fa6";
import { LiaExpandArrowsAltSolid } from "react-icons/lia";
import { TfiArrowRight } from "react-icons/tfi";

const imageSources = [
  {
    ImgSrc:
      "https://i.ibb.co/wWzHGkx/delphi-homepage-gallery-03-64be9659e12d6.webp",
    key: 0,
  },
  {
    ImgSrc:
      "https://i.ibb.co/nm0GjNS/delphi-homepage-gallery-04-64be965d21267.webp",
    key: 1,
  },
  {
    ImgSrc: "https://i.ibb.co/pbg6jY7/delphi-gallery-64dd387bae739.webp",
    key: 2,
  },
  {
    ImgSrc: "https://i.ibb.co/r0zMgVQ/delphi-gallery-2-64dd3859bcc6e.webp",
    key: 3,
  },
  {
    ImgSrc:
      "https://i.ibb.co/BKqfQWb/delphi-homepage-gallery-01-64be96552fd38.webp",
    key: 4,
  },
  {
    ImgSrc:
      "https://i.ibb.co/ZfD4WNC/delphi-homepage-gallery-05-64be965f97bec.webp",
    key: 5,
  },
];

const ImageGallery = () => {
  const [fullscreenIndex, setFullscreenIndex] = useState(-1);

  const openFullscreen = (index) => {
    setFullscreenIndex(index);
  };

  const closeFullscreen = () => {
    setFullscreenIndex(-1);
  };

  const nextImage = () => {
    setFullscreenIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
  };

  const prevImage = () => {
    setFullscreenIndex(
      (prevIndex) => (prevIndex - 1 + imageSources.length) % imageSources.length
    );
  };
  return (
    <>
      <div className="relative mb-[30rem] custom-grid grid-cols-2 gap-8">
        <div className="z-10 relative flex xl:flex-col lg:flex-col md:flex-col sm:flex-row xs:flex-row">
          <div
            className="image-container xl:left-[10rem] lg:left-[10rem] md:left-[10rem] sm:left-1 xs:left-1 h-[400px] w-[309px]  group"
            onClick={() => openFullscreen(imageSources[0].key)}
          >
            <img
              src={imageSources[0].ImgSrc}
              alt="Gallery Image 1"
              className="w-full h-full object-cover cursor-pointer"
            />
            <div className="hidden group-hover:flex items-center justify-center absolute inset-0 bg-black bg-opacity-50 transition duration-300">
              <LiaExpandArrowsAltSolid className="text-white text-3xl transform scale-0 group-hover:scale-100 transition duration-300" />
            </div>
          </div>

          <div
            className="image-container xl:block lg:block md:block sm:hidden xs:hidden top-[200px] left-[0rem] h-[288px] w-[210px] group"
            onClick={() => openFullscreen(imageSources[1].key)}
          >
            <img
              src={imageSources[1].ImgSrc}
              alt="Gallery Image 2"
              className="w-full h-full object-cover cursor-pointer"
            />
            <div className="hidden group-hover:flex items-center justify-center absolute inset-0 bg-black bg-opacity-50 transition duration-300">
              <LiaExpandArrowsAltSolid className="text-white text-3xl transform scale-0 group-hover:scale-100 transition duration-300" />
            </div>
          </div>
          <div
            className="image-container top-[450px] xl:left-[20rem] lg:left-[20rem] md:left-[20rem] sm:left-[5rem] xs:left-[5rem] h-[230px] w-[250px] group"
            onClick={() => openFullscreen(imageSources[2].key)}
          >
            <img
              src={imageSources[2].ImgSrc}
              alt="Gallery Image 3"
              className="w-full h-full object-cover cursor-pointer"
            />
            <div className="hidden group-hover:flex items-center justify-center absolute inset-0 bg-black bg-opacity-50 transition duration-300">
              <LiaExpandArrowsAltSolid className="text-white text-3xl transform scale-0 group-hover:scale-100 transition duration-300" />
            </div>
          </div>
        </div>
        <div className="z-10 relative xl:flex lg:flex md:hidden sm:hidden xs:hidden xl:flex-col lg:flex-col md:flex-col sm:flex-row xs:flex-row">
          <div
            className="image-container right-[6rem] h-[600px] w-[400px] group"
            onClick={() => openFullscreen(imageSources[3].key)}
          >
            <img
              src={imageSources[3].ImgSrc}
              alt="Gallery Image 4"
              className="w-full h-full object-cover cursor-pointer"
            />
            <div className="hidden group-hover:flex items-center justify-center absolute inset-0 bg-black bg-opacity-50 transition duration-300">
              <LiaExpandArrowsAltSolid className="text-white text-3xl transform scale-0 group-hover:scale-100 transition duration-300" />
            </div>
          </div>
          <div
            className="image-container top-[200px] right-[0rem] h-[266px] w-[210px] group"
            onClick={() => openFullscreen(imageSources[4].key)}
          >
            <img
              src={imageSources[4].ImgSrc}
              alt="Gallery Image 5"
              className="w-full h-full object-cover cursor-pointer"
            />
            <div className="hidden group-hover:flex items-center justify-center absolute inset-0 bg-black bg-opacity-50 transition duration-300">
              <LiaExpandArrowsAltSolid className="text-white text-3xl transform scale-0 group-hover:scale-100 transition duration-300" />
            </div>
          </div>
          <div
            className="image-container top-[430px] right-[25rem] h-[270px] w-[210px] group"
            onClick={() => openFullscreen(imageSources[5].key)}
          >
            <img
              src={imageSources[5].ImgSrc}
              alt="Gallery Image 6"
              className="w-full h-full object-cover cursor-pointer"
            />
            <div className="hidden group-hover:flex items-center justify-center absolute inset-0 bg-black bg-opacity-50 transition duration-300">
              <LiaExpandArrowsAltSolid className="text-white text-3xl transform scale-0 group-hover:scale-100 transition duration-300" />
            </div>
          </div>
        </div>

        {/* Fullscreen Modal */}
        {fullscreenIndex !== -1 && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <img
              className="max-w-full max-h-full p-10"
              src={imageSources[fullscreenIndex].ImgSrc}
              alt={`Fullscreen Image ${fullscreenIndex + 1}`}
            />
            <button
              className="absolute top-4 right-8 text-white text-3xl"
              onClick={closeFullscreen}
            >
              ×
            </button>
            <button
              className="absolute top-1/2 -translate-y-1/2 right-4 text-white text-3xl"
              onClick={nextImage}
            >
              <FaArrowRight />
            </button>
            <button
              className="absolute top-1/2 -translate-y-1/2 left-4 text-white text-3xl"
              onClick={prevImage}
            >
              <FaArrowLeft />
            </button>
          </div>
        )}
      </div>
      <div className="xl:z-0 lg:z-0 md:z-10 sm:z-10 xs:z-10 flex flex-col relative xl:justify-center lg:justify-center md:justify-center sm:justify-end xs:justify-end xl:items-center lg:items-center md:items-end sm:items-end xs:items-end  -top-[30rem] xl:p-20 lg:p-20 md:p-2 sm:p-2 xs:p-2 ">
        <div className=" text-black xl:text-center lg:text-center md:text-center sm:text-left xs:text-left bg-transparent xl:w-[25%] lg:w-[25%] md:w-[45%] sm:w-[80%] xs:w-[80%] gap-7 leading-10">
          <span className="uppercase text-7xl">SCENES</span> <br />
          <span className="text-4xl">from</span>
          <br />
          <span className=" text-7xl">The City</span>
        </div>
        <div className="pt-5 flex justify-start">
          <span className="flex justify-start items-start me-24">
            <button>
              <div className="View-gallery">
                <span className="line6"></span>
                <span className="text-black text-[16px] cursor-pointer flex items-center">
                  View gallery
                  <TfiArrowRight className="w-8 text-xl" />
                </span>
              </div>
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
