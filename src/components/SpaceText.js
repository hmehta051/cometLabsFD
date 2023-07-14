import React, { useContext } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineArrowUp } from "react-icons/ai";
import { ScrollContext } from "../context/ScrollContextProvider";

const SpaceText = () => {
  const { handleScroll } = useContext(ScrollContext);
  return (
    <div className="w-[80%] md:w-[96%] m-auto flex items-center justify-between h-[500px]">
      <div className="flex items-center gap-x-1">
        <MdKeyboardArrowLeft className="text-[blue]" />
        <span className="text-[14px] text-gray-400">BACK TO TEMPLATES</span>
      </div>
      <div className="flex items-center gap-x-1" onClick={handleScroll}>
        <span className="text-[14px] text-gray-400">BACK TO TOP</span>
        <AiOutlineArrowUp className="text-[blue]" />
      </div>
    </div>
  );
};
export default SpaceText;
