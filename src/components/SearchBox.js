import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBox = ({ inputShowMobile, setInputShowMobile }) => {
  return (
    <>
      {inputShowMobile ? (
        <>
          <div className="bg-white fixed  md:hidden top-[9%] w-[98%] flex items-center border-b border-gray-500 shadow-lg p-4">
            <BiSearch onClick={() => setInputShowMobile((p) => !p)} />
            <input
              type="text"
              className="px-4 py-2 rounded-md focus:outline-none w-full"
              placeholder="Search"
            />
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchBox;
