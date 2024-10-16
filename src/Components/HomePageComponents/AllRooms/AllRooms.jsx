import React from "react";
import { motion } from "framer-motion";
import { TfiArrowRight } from "react-icons/tfi";
import "./Allrooms.css";

const AllRooms = () => {
  return (
    <div className=" relative w-[100vw] h-full bg-[#1d1d1d] py-2 mt-10 overflow-hidden flex justify-center xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col">
      <div className="w-full h-full px-5 py-10 flex justify-center overflow-hidden ">
        <motion.div
          className="bg-[#1d1d1d] w-full h-full z-10 absolute"
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <img
          className="z-9"
          src="https://i.ibb.co/ZJG5VZS/delphi-homepage-rooms-64be951902ebd.jpg"
          alt="delphi-homepage-rooms-64be951902ebd"
          border="0"
        />
      </div>
      <div className="xl:px-0 lg:px-0 md:px-5 sm:px-5 xs:px-5">
      <div className="z-20 xl:absolute lg:absolute md:relative sm:relative xs:relative max-w-[83rem] max-h-[23rem] bg-white xl:right-12 lg:right-12 md:right-auto sm:right-auto xs:right-auto xl:bottom-16 lg:bottom-16 md:bottom-10 sm:bottom-10 xs:bottom-10 flex justify-center xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col">
        <div className="relative ps-2 pe-16 flex flex-col text-left">
          <div className="relative xl:top-2 lg:top-2 md:top-2 sm:top-5 xs:top-8 left-0 block">Rooms</div>
          <div className="xl:w-[10rem] lg:w-[10rem] md:w-[15rem] sm:w-[20rem] xs:w-[20rem] flex justify-center items-center relative translate-y-16 xl:mt-0 lg:mt-0 md:mt-0 sm:-mt-5 xs:-mt-5">
            <h1 className="text-3xl xl:ml-5 lg:ml-5 md:ml-5 sm:-ml-5 xs:-ml-5">PEACE & QUIET</h1>
          </div>
        </div>
        <div className="px-[3rem] py-[5rem] border-l-1 border-solid border-[#707070] max-w-[40rem]">
          <div className="">
            From premium amenities to personalized experiences, our 205 spacious
            guest rooms and two penthouses create an environment of
            sophistication, elegance, and comfort that sets The Delphi apart.
          </div>
          <div className="pt-5">
            <span className="flex justify-start items-center ">
              <button>
                <div className="All-rooms">
                  <span className="line2"></span>
                  <span className="text-black text-[16px] cursor-pointer flex items-center">
                    View all rooms
                    <TfiArrowRight className="w-8 text-xl" />
                  </span>
                </div>
              </button>
            </span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AllRooms;
