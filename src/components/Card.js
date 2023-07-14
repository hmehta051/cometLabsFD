import React from "react";
import { cardData, cardHeadText } from "../utils/CardData";
const Card = () => {
  return (
    <div className="w-[96%] m-auto mt-[70px] flex flex-col items-center justify-center">
      <div className="text-left text-[18px] w-full">
        {cardHeadText.headerOne}
      </div>
      &nbsp;
      <div className="text-center">{cardHeadText.headerTwo}</div>
      <div className="flex md:flex-row items-start justify-between mt-[3%] flex-col gap-[20px]">
        {cardData.map((elem, index) => {
          return (
            <div
              className="flex flex-col md:w-[24%] border border-gray-600 w-[96%] p-5"
              key={index}
            >
              <div className="flex items-center justify-center w-full">
                <img
                  src={elem.photoUrl}
                  alt="MULTER"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="p-5">
                <div className="flex flex-col justify-between gap-[20px]">
                  <div className="text-[20px]">{elem.heading}</div>
                  <div className="text-gray-600 text-[14px]">
                    {elem.content}
                  </div>
                </div>

                <button className="w-full mt-[10%] bg-white border-2 border-indigo-500 text-[#0033ff] hover:border-[#FFD700] hover:text-[#FFD700]">
                  {elem.btnText}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
