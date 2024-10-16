import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TfiArrowRight } from "react-icons/tfi";
import "./DelphiMap.css";

const DelphiMap = () => {
  const [refP, inViewP] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const [refH1, inViewH1] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const [refP2, inViewP2] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <div className="w-full h-full">
      <div className="relative flex justify-end text-start text-black">
        <div className="relative xl:right-36 lg:right-36 md:right-36 sm:right-0 xs:right-0 top-20 xl:w-[25%] lg:w-[25%] md:w-[35%] sm:w-full xs:w-full xl:ps-0 lg:ps-0 md:ps-0 sm:ps-10 xs:ps-10 pe-2">
          <motion.p
            ref={refP}
            initial={{ y: 150, opacity: 0 }}
            whileInView={inViewP ? { y: 0, opacity: 1 } : { y: 150, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl mb-5"
          >
            Our location
          </motion.p>
          <motion.h1
            ref={refH1}
            initial={{ y: 150, opacity: 0 }}
            whileInView={inViewH1 ? { y: 0, opacity: 1 } : { y: 150, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="uppercase text-3xl mb-5"
          >
            FLOWER STREET FAME
          </motion.h1>
          <motion.p
            ref={refP2}
            initial={{ y: 150, opacity: 0 }}
            whileInView={inViewP2 ? { y: 0, opacity: 1 } : { y: 150, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#707070] text-sm font-medium"
          >
            Set your sights on a kaleidoscope of cultural hotspots, from art
            galleries and acclaimed eateries to flagship stores and
            architectural masterpieces, situated mere steps from our lobby.
          </motion.p>
          <div className="pt-5 ">
            <span className="flex justify-start items-center">
              <button>
                <div className="see-more">
                  <span className="line5"></span>
                  <span className="text-black text-[16px] cursor-pointer flex items-center">
                    See more
                    <TfiArrowRight className="w-8 text-xl" />
                  </span>
                </div>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelphiMap;
