import React, { useState } from "react";
function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <div className="overflow-y-hidden">
      <nav className="w-full">
        <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
          <div>
            <img
              className="w-32 md:w-36"
              src="https://www.technovative.co.id/_nuxt/img/technovative-logo_scale-w350.7e6ea57.png"
              alt="logo"
            />
          </div>
          <div>
            <button
              onClick={() => setShow(!show)}
              className={`${
                show ? "hidden" : ""
              } flex bg-[#D2E4F7] p-2 rounded-md font-medium gap-2 md:hidden text-primary hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:hidden"
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
              className={` ${show ? "" : "hidden"} md:block lg:block `}
            >
              <button
                onClick={() => setShow(!show)}
                className={`block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6`}
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
              <ul className="flex text-3xl md:text-base font-bold items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
                <li className="text-primary hover:text-secondary cursor-pointer text-base lg:text-lg pt-10 md:pt-0">
                  <a href="#">Home</a>
                </li>
                <li className="text-primary hover:text-secondary cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                  <a href="#">Our Work</a>
                </li>
                <li className="text-primary hover:text-secondary cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                  <a href="#">Our Success</a>
                </li>
                <li className="text-primary hover:text-secondary cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                  <a href="#">Our Team</a>
                </li>
                <li className="text-primary md:hidden hover:text-secondary cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <button className="focus:outline-none text-white lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-secondary hidden md:block bg-primary hover:bg-secondary transition duration-150 ease-in-out rounded-md border border-secondary px-4 sm:px-6 py-1 sm:py-2 text-sm">
            Contact Us
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
