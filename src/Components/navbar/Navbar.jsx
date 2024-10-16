import { useState } from "react";
import "./navbar.css";
import { MdPhone } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";
import { TbMenu } from "react-icons/tb";
import { RiCloseLargeLine } from "react-icons/ri";
import { SlSocialInstagram } from "react-icons/sl";
import Bottomnav from "../HomePageComponents/Bottomnav/Bottomnav"


const navItems = [
  "Rooms & Suites",
  "Dining & Entertainment",
  "Offers",
  "Explore",
  "Meetings & Events",
  "Our Hotel",
  "Gallery",
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(navItems[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleActive = (item) => {
    setActiveItem(item);
    console.log(item);
  };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderNavItems = () =>
    navItems.map((item, index) => (
      <li
        key={index}
        className={`${activeItem === item ? "active" : "navitem-hover"}`}
        onClick={() => handleActive(item)}
      >
        {item}
      </li>
    ));

  return (
    <header className="top-0 text-base relative z-30 bg-white">
      <div className=" flex justify-center w-full z-[99]">
        <div className="py-2">
          <img
            src="https://i.ibb.co/WgM8tZ1/logo.png"
            alt=""
            className="lg:h-20 md:h-20 sm:h-16 xs:h-16 max-w-[15.5rem] py-3"
          />
        </div>

        <div className=" gap-4 text-[16px] py-2">
          <div className="hidden md:flex lg:flex gap-5 items-center uppercase text-right justify-end px-8 py-2 md:pt-9">
            <ul className="gap-3 flex items-center ">
              <li className="flex items-center gap-2">
                <MdPhone />
                2138928080
              </li>
              <li className="flex items-center gap-2">
                <IoDiamond />
                Best Rate Guarantee
              </li>
            </ul>
          </div>
          <div className="lg:flex hidden">
            <ul className="flex gap-5 items-center uppercase px-8 ">
              {renderNavItems()}
            </ul>
          </div>
        </div>
        <div className="menu hidden md:flex lg:hidden px-5">
          <div
            className="flex justify-center gap-2 pt-2 items-center"
            onClick={toggleSidebar}
          >
            <TbMenu className="text-xl" />
            <span className="uppercase md:text-xl">Menu</span>
          </div>
        </div>
        <button className="custom-border lg:w-[10%] md:w-[12%] right-0 hidden lg:block md:block text-black hover:bg-[#1D1D1D] hover:text-white transition duration-300">
          Reserve
        </button>
      </div>

      <Bottomnav toggleSidebar={toggleSidebar} />

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-full h-full transition-transform transform text-center ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden sm:translate-x-0 transition-all duration-1000 ease-in-out`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white text-[#1d1d1d] text-center items-center">
          <div className="text-end flex justify-end text-3xl right-0">
            <RiCloseLargeLine className="font-light" onClick={toggleSidebar} />
          </div>
          <ul className="space-y-2 font-medium grid justify-center text-center gap-10 text-lg">
            {renderNavItems()}
            <li className="flex justify-center">
              <span className=" border-1 border-black border-solid rounded-full w-10 h-10 text-center items-center">
                <SlSocialInstagram className="translate-x-[11px] translate-y-[11px]" />
              </span>
            </li>
          </ul>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
