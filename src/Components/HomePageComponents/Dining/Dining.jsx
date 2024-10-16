import React from "react";
import "./Dining.css";
import { motion } from "framer-motion";
import { TfiArrowRight } from "react-icons/tfi";

const Dining = () => {
  return (
    <div className=" border-r-1 border-l-1 border-[#707070] border-solid">
      <div className="relative">
        <div className="relative z-10 w-full h-full py-10 mb-20 overflow-hidden flex justify-center xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#1d1d1d]"></div>
          <div className="relative">
            <div className="absolute inset-x-1/2 transform -translate-x-1/2 top-[-4rem] w-[52rem] h-[52rem] bg-[#1D1D1D] rounded-full z-[-1]  xl:w-[46rem] xl:h-[46rem] lg:w-[40rem] lg:h-[42rem] md:w-[35rem] md:h-[36rem] sm:w-[24rem] sm:h-[26rem] xs:w-[19rem] xs:h-[21rem]"></div>
            <div className="flex justify-center mt-0 mb-10 xl:h-5/6 lg:h-5/6 md:h-[90%] sm:h-full xs:h-full">
              <img
                src="https://i.ibb.co/nDSzLKK/thedelphidowntownla-homepage-dining-image-03-650e00b0beeed.png"
                alt="thedelphidowntownla-homepage-dining-image-03-650e00b0beeed"
                border="0"
                className="max-w-[56rem]  xl:max-w-[44rem] lg:max-w-[40rem] md:max-w-[30rem] sm:max-w-[20rem] xs:max-w-[15rem]"
              />
            </div>
          </div>
        </div>
        <div className=" px-5  absolute xl:top-[12%] lg:top-[12%] md:top-[50%] sm:top-[70%] xs:top-[70%] w-full flex justify-center">
          <p className="z-0 relative uppercase text-[10rem] xl:text-[23rem] lg:text-[18rem] md:text-[14rem] sm:text-[5rem] xs:text-[5rem] text-[#1D1D1D]">
            Dining
          </p>
          <motion.p
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 1.5 },
            }}
            className="z-20 absolute uppercase text-transparent text-stroke text-[10rem] xl:text-[23rem] lg:text-[18rem] md:text-[14rem] sm:text-[5rem] xs:text-[5rem]"
          >
            Dining
          </motion.p>
        </div>
      </div>
      <div className="px-5  relative xl:-mt-[25rem] lg:-mt-[25rem] md:-mt-20 sm:-mt-20 xs:-mt-20 xl:w-[44%] lg:w-[44%] md:w-full sm:w-full xs:w-full xl:ps-10 lg:ps-10 md:ps-2 sm:ps-2 xs:ps-2 xl:pe-25 lg:pe-20 md:pe-5 sm:pe-0 xs:pe-0 xl:pt-5 lg:pt-5 md:-pt-5 sm:-pt-5 xs:-pt-5 pb-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.05 }}
          className="relative xl:px-5 lg:px-5 md:px-14 sm:px-10 xs:px-10 xl:py-0 lg:py-0 md:py-10 sm:py-10 xs:py-10"
        >
          <h1 className="text-4xl text-black pe-14 uppercase">
            INTRIGUE THE APPETITE
          </h1>
          <div className="mt-4">
            <p className="text-sm text-black leading-6">
              Let your palate decide what’s on the table—classic American diner
              fare, Japanese-omakase creations, or some light bites to get
              started.
            </p>
          </div>
          <div className="pt-5 relative z-10">
            <span className="flex justify-start items-center">
              <div className="lets-eat">
                <span className="line3"></span>
                <span className="text-black text-[16px] cursor-pointer flex items-center">
                  Let&apos;s eat
                  <TfiArrowRight className="w-8 text-xl" />
                </span>
              </div>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dining;
