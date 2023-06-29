import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-10 w-full">
      <div className="py-5 lg:py-0 container mx-auto px-6 flex items-center justify-between">
        <div>
          <Link to="hero" spy={true} smooth={true} offset={-120} duration={500}>
            <img
              className="w-36 lg:w-40 cursor-pointer"
              src="https://www.technovative.co.id/_nuxt/img/technovative-logo_scale-w350.7e6ea57.png"
              alt="logo"
            />
          </Link>
        </div>
        <div>
          <button
            onClick={() => setShow(!show)}
            className={`${
              show ? "block" : ""
            } flex bg-[#D2E4F7] p-2 rounded-md font-medium gap-2 lg:hidden text-primary hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:hidden"
              width={24}
              height={24}
              stroke="#184A7E"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Menu
          </button>
          <div
            id="menu"
            className={` ${show ? "" : "hidden"} lg:block `}
          >
            <button
              onClick={() => setShow(!show)}
              className={`block lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 right-12 mt-6`}
            >
              <svg
                aria-label="close main menu"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </button>
            <ul className="flex text-3xl lg:text-base font-bold items-center py-10 lg:flex flex-col lg:flex-row justify-center fixed lg:relative top-0 right-0 w-1/3 lg:w-full bg-white rounded-lg shadow-md lg:shadow-none lg:bg-transparent z-20">
              <li className="text-primary hover:text-secondary cursor-pointer text-base lg:text-lg mt-10 lg:mt-0">
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={500}
                  onClick={() => setShow(!show)}
                >
                  Home
                </Link>
              </li>
              <li className="text-primary hover:text-secondary cursor-pointer text-base lg:text-lg mt-5 lg:mt-0 lg:ml-5 xl:ml-10">
                <Link
                  to="ourwork"
                  spy={true}
                  smooth={true}
                  offset={-125}
                  duration={500}
                  onClick={() => setShow(!show)}
                >
                  Our Work
                </Link>
              </li>
              <li className="text-primary hover:text-secondary cursor-pointer text-base lg:text-lg mt-5 lg:mt-0 lg:ml-5 xl:ml-10">
                <Link
                  to="oursuccess"
                  spy={true}
                  smooth={true}
                  offset={-125}
                  duration={500}
                  onClick={() => setShow(!show)}
                >
                  Our Success
                </Link>
              </li>
              <li className="text-primary hover:text-secondary cursor-pointer text-base lg:text-lg mt-5 lg:mt-0 lg:ml-5 xl:ml-10">
                <Link
                  to="meetteam"
                  spy={true}
                  smooth={true}
                  offset={-125}
                  duration={500}
                  onClick={() => setShow(!show)}
                >
                  Our Team
                </Link>
              </li>
              <li className="text-primary lg:hidden hover:text-secondary cursor-pointer text-base lg:text-lg mt-5 lg:mt-0 lg:ml-5 xl:ml-10">
                <Link
                  to="contactus"
                  spy={true}
                  smooth={true}
                  offset={-125}
                  duration={1000}
                  onClick={() => setShow(!show)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Link
          to="contactus"
          spy={true}
          smooth={true}
          offset={-125}
          duration={500}
          className="focus:outline-none text-white cursor-pointer lg:text-base lg:font-medium focus:ring-2 focus:ring-offset-2 hidden lg:block bg-primary hover:bg-secondary transition duration-300 ease-in-out rounded-md px-4 sm:px-7 py-1 sm:py-3 text-sm"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
