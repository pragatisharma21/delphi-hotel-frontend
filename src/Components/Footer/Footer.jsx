import React, { useState } from "react";
import "./footer.css";
import { motion } from "framer-motion";
import { TfiArrowRight } from "react-icons/tfi";

const Footer = () => {
  const options = ["FAQ", "Media Inquiries", "Contact Us", "Careers"];

  const cardVariants = {
    offscreen: {
      y: 300,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.8,
      },
    },
  };

  const formFields = [
    { id: "fname", label: "First Name" },
    { id: "lname", label: "Last Name" },
    { id: "email", label: "Email Address" },
  ];

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const [activeItem, setActiveItem] = useState("");

  const handleActiveField = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="bg-[#1D1D1D]">
      <motion.div
        variants={cardVariants}
        initial={"offscreen"}
        whileInView="onscreen"
      >
        <div className="flex justify-center pt-20 pb-10">
          <img src="https://i.ibb.co/bNRfgjF/logo-white.png" alt="Logo" />
        </div>
        <div className="block justify-center text-white text-center gap-5">
          <p className="foot-hover">
            <span className="child-hover-border-b-1 border-white">
              550 S Flower St
            </span>
            <br />
            <span className="child-hover-border-b-1 border-white">
              Los Angeles, CA 90071
            </span>
          </p>
          <br />
          <p className="foot-hover pt-5 text-center">
            <span className="child-hover-border-b-1 border-white">
              2138928080
            </span>
          </p>
        </div>

        <div className="mt-10">
          <ul className="lg:flex md:flex sm:flex xs:block justify-center items-center lg:text-[22px] md:text-[16px] sm:text-[14px] text-white text-center pb-2 px-5">
            {options.map((item, index) => (
              <li
                className="border-white border-1 w-full p-2 item-hover"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center text-center mt-10">
          <h1 className="text-white text-4xl">Stay in The Know</h1>
        </div>

        <div className="py-10">
          <form onSubmit={handleSubmit} className="py-2 px-5">
            <div className="gap-10 xs:grid-flow-col lg:flex md:flex sm:flex justify-center items-center">
              {formFields.map((field) => (
                <div
                  key={field.id}
                  className="py-2 w-1/3 text-center lg:block sm:block md:block xs:contents justify-center"
                >
                  <label
                    className={`block text-white relative ${
                      activeItem === field.id ? "smallLabel" : "largeLabel"
                    }`}
                    htmlFor={field.id}
                  >
                    {field.label}
                  </label>
                  <input
                    className="block h-[2.5rem] bg-transparent border-b-1 w-full text-white bg-[#1d1d1d]"
                    id={field.id}
                    type={field.id === "email" ? "email" : "text"}
                    value={formData[field.id]}
                    onChange={handleInputChange}
                    onClick={() => handleActiveField(field.id)}
                  />
                </div>
              ))}
            </div>

            <div className="px-4 items-center flex lg:flex-row xs:flex-col justify-between gap-10 mt-10  lg:py-0 md:py-0 xs:py-10">
              <div className="flex justify-start items-center">
                <input
                  id="privecyCheck"
                  type="checkbox"
                  onChange={handleInputChange}
                  className="before:content['']  peer relative h-5 w-5 cursor-pointer appearance-none  border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-white-gray-500 before:opacity-0 before:transition-opacity checked:border-white checked:bg-white checked:before:bg-white hover:before:opacity-10"
                />
                <label
                  htmlFor="privecyCheck"
                  className="px-2 text-white text-[16px] font-thin  items-center"
                >
                  I have read and agree to the <a href="#">Privacy Policy.</a>
                </label>
              </div>
              <div className="flex justify-start items-center">
                <input
                  id="emailAgree"
                  type="checkbox"
                  onChange={handleInputChange}
                  className="before:content['']  peer relative h-5 w-5 cursor-pointer appearance-none  border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-white-gray-500 before:opacity-0 before:transition-opacity checked:border-white checked:bg-white checked:before:bg-white hover:before:opacity-10"
                />
                <label
                  htmlFor="privecyCheck"
                  className="px-2 text-white text-[16px] font-thin  items-center"
                >
                  Yes, I would like to receive emails with exclusive specials
                  and offers.
                </label>
              </div>
              <span className="flex justify-start items-center ">
                <button>
                  <div className="signup-container me-10">
                    <span className="line"></span>
                    <span className="text-white text-[16px] cursor-pointer flex items-center">
                      Sign Up <TfiArrowRight className="w-8 text-xl" />
                    </span>
                  </div>
                </button>
              </span>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
