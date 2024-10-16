import { FaPhone } from "react-icons/fa";
import "./bottomnav.css";
import { IoIosMenu } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const Bottomnav = ({ toggleSidebar }) => {
  return (
    <div className="w-full fixed z-[99] bottom-0 left-0 right-0 bg-white text-[#1d1d1d] hidden xs:flex justify-center items-center sm:flex lg:hidden md:hidden xl:hidden">
      <ul className="xs:flex hidden justify-center w-full">
        <li className="w-1/5 border-black border border-solid p-3">
          <button
            onClick={toggleSidebar}
            className="flex items-center py-2 w-full h-full rounded-lg bg-white text-[#1d1d1d] transition duration-300"
          >
            <IoIosMenu className="text-3xl sm:text-md xs:text-md" />
            <span className="uppercase text-lg  sm:text-md xs:text-sm">Menu</span>
          </button>
        </li>
        <li className="w-1/5 border-l-0 border-b-1 border-t-1 border-r-1 border-black border-solid p-3">
          <button className="flex items-center w-full h-full py-2 rounded-lg bg-white text-[#1d1d1d] transition duration-300">
            <FaPhone className="text-3xl rotate-90 sm:text-md xs:text-md" />
            <span className="uppercase text-lg sm:text-md xs:text-sm">Call</span>
          </button>
        </li>
        <li className="w-3/5 border-l-0 border-b-1 border-t-1 border-r-1 border-black border-solid">
          <button className="flex justify-center items-center w-full h-full bg-[#1d1d1d] text-white transition duration-300 text-center">
            <span className="uppercase text-center text-lg">
              Check Availability
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Bottomnav;
