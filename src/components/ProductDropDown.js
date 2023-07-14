import React from "react";
import { ProductData } from "../utils/DropDownData";
import { AiFillStar } from "react-icons/ai";
const ProductDropDown = () => {
  return (
    <div
      className="w-[90%] m-auto h-[450px] 
    absolute bg-white shadow-lg top-[11%] z-10 flex items-center justify-between left-[5%]"
    >
      <div className="w-[33.3%] h-full flex flex-col items-start justify-between p-5">
        {ProductData.filter((_, idx) => idx < 3).map((elem, index) => {
          return (
            <div className="flex flex-col items-start gap-3 w-full" key={index}>
              <div className="flex items-center gap-5 w-full">
                <AiFillStar className="text-[25px]" />
                <div className="text-[20px] hover:text-[#0033ff]">
                  {elem.title}
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="w-[15%]"></div>
                <div className="text-[14px] text-gray-500">
                  {elem.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-[33.3%] h-full flex flex-col items-start justify-between p-5">
        {ProductData.filter((_, idx) => idx >= 3).map((elem, index) => {
          return (
            <div className="flex flex-col items-start gap-3 w-full" key={index}>
              <div className="flex items-center gap-5 w-full">
                <AiFillStar className="text-[25px]" />
                <div className="text-[20px] hover:text-[#0033ff]">
                  {elem.title}
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="w-[15%]"></div>
                <div className="text-[14px] text-gray-500">
                  {elem.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-[33.3%] h-full p-8 flex flex-col justify-between items-start">
        <div className="text-[20px]">Do more with less using AI</div>
        <div className="text-[14px] text-gray-500">
          Save time, money, and energy with Unbounce’s AI-powered marketing
          tools.
        </div>
        <div className="text-[14px] text-gray-500 underline hover:text-[#0033ff] font-bold">
          Learn More
        </div>
        <div>
          <img
            src={"https://unbounce.com/photos/NavBlock-NYCampaign_2023-2X.jpg"}
            alt="Demo"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDropDown;
