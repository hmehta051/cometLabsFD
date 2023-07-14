import React from "react";
import { AiFillStar } from "react-icons/ai";
import { ProductData } from "../../utils/DropDownData";

const MulterSecond = () => {
  return (
    <div className="md:w-[80%] w-[90%] m-auto flex md:flex-row flex-col-reverse items-center justify-between">
      <div className="md:w-[50%] h-full flex flex-col items-start justify-between p-10 gap-10">
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
                <div className="w-[10%]"></div>
                <div className="text-[14px] text-gray-500">
                  {elem.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-[#152f2e] md:w-[30%] flex flex-col items-center justify-between gap-8 md:absolute md:left-[60%] p-5">
        <div className="text-white text-[32px] text-center">
          Schedule an Appointment
        </div>
        <div className="text-white text-center">
          Here, let visitors know what will happen when they complete your form.
        </div>
        <form className="flex flex-col items-center justify-center gap-5 w-[100%]">
          <input
            placeholder="First Name"
            type="text"
            required
            className="w-full p-3"
          />
          <input
            placeholder="Last Name"
            type="text"
            required
            className="w-full p-3"
          />
          <input
            placeholder="Email"
            type="email"
            required
            className="w-full p-3"
          />
          <input
            placeholder="Phone Number"
            type="text"
            required
            className="w-full p-3"
          />
          <select className="w-full p-3">
            <option>Type of Appointment</option>
            <option>Type 1</option>
            <option>Type 2</option>
            <option>Type 3</option>
          </select>
          <button className="w-full p-3 bg-[#00c2c5] text-white">
            SCHEDULE NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default MulterSecond;
