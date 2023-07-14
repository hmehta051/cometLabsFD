import React from "react";
import { BiSearch } from "react-icons/bi";

const Hamburgur = ({ isMenuOpen }) => {
  return (
    <div>
      {isMenuOpen ? (
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 fixed top-[11%] w-full bg-white">
          <div className="bg-white flex items-center border-2 border-gray-500 mb-10 p-1">
            <BiSearch />
            <input
              type="text"
              className="px-4 py-2 rounded-md focus:outline-none w-full"
              placeholder="Search"
            />
          </div>
          <div className="text-black block px-3 py-2 rounded-md text-base font-medium">
            Products
          </div>
          <div className="text-black block px-3 py-2 rounded-md text-base font-medium">
            Solutions
          </div>
          <div className="text-black block px-3 py-2 rounded-md text-base font-medium">
            Pricing
          </div>
          <div className="text-black block px-3 py-2 rounded-md text-base font-medium">
            Learn
          </div>
          <div className="text-black block px-3 py-2 rounded-md text-base font-medium">
            Contract
          </div>
          <div
            className={`flex items-center flex-col gap-[10px] w-full`}
            // style={{
            //   display: isMenuOpen ? "none" : "flex",
            //   alignItems: "center",
            //   gap: "10px",
            // }}
          >
            <button className="bg-[#0033ff] text-white hover:text-[#0033ff] hover:bg-white hover:border-2 border-indigo-600 w-full h-[70px]">
              Start My Free Trial
            </button>
            <button className="bg-white border-2 border-indigo-500 text-[#0033ff] hover:text-[white] hover:bg-[#0027cc] w-full h-[60px]">
              Login
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Hamburgur;
