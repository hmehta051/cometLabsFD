import React, { useState } from "react";
import { footerData } from "../utils/CardData";
import {
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
const Footer = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="w-[96%] m-auto mb-5">
      <div className="w-full">
        <img
          src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-footer-icon-dark.svg"
          alt="Logo"
          width={"120px"}
          height={"120px"}
        />
      </div>
      <div className="hidden md:flex mt-16 justify-evenly md:flex-row flex-col">
        {footerData.map((elem, index) => {
          return (
            <div key={index} className="flex flex-col gap-x-5 w-[20%]">
              <div className="text-[22px] flex flex-col">{elem.title}</div>
              &nbsp;
              <div className="flex flex-col gap-9 text-gray-500">
                {elem.content.map((el, idx) => {
                  return <div key={idx}>{el}</div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex md:hidden mt-12 justify-evenly md:flex-row flex-col w-full gap-5">
        {footerData.map((elem, index) => {
          return (
            <div
              key={index}
              className="flex items-start justify-between w-[100%] flex-col"
              onClick={() => setDropDown((p) => !p)}
            >
              <div className="flex items-center justify-between w-full">
                <div className="text-[22px]">{elem.title}</div>
                <div>
                  {dropDown ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </div>
              </div>
              <div>
                {dropDown ? (
                  <div className="flex flex-col gap-5 text-gray-500 mt-5">
                    {elem.content.map((el, idx) => {
                      return <div key={idx}>{el}</div>;
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="hidden md:flex items-center justify-between mt-[8%] mb-[8%]">
        <div>© 2010-2023 Unbounce. All rights reserved.</div>
        <div className="flex items-center justify-between gap-5">
          <div>Security</div>
          <div>Privacy Policy</div>
          <div>Terms and Service</div>
          <div className="flex items-center justify-between gap-2">
            <AiFillTwitterCircle className="text-[30px] hover:bg-[#0033FF]" />
            <AiFillLinkedin className="text-[30px] hover:bg-[#0033FF]" />
            <AiFillGoogleCircle className="text-[30px] hover:bg-[#0033FF]" />
            <AiFillInstagram className="text-[30px] hover:bg-[#0033FF]" />
            <AiFillYoutube className="text-[30px] hover:bg-[#0033FF]" />
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col items-center justify-between mt-[20%] mb-[8%] gap-[20px] w-[90%] m-auto">
        <div className="flex items-center justify-between gap-2">
          <AiFillTwitterCircle className="text-[30px] hover:bg-[#0033FF]" />
          <AiFillLinkedin className="text-[30px] hover:bg-[#0033FF]" />
          <AiFillGoogleCircle className="text-[30px] hover:bg-[#0033FF]" />
          <AiFillInstagram className="text-[30px] hover:bg-[#0033FF]" />
          <AiFillYoutube className="text-[30px] hover:bg-[#0033FF]" />
        </div>
        <div>© 2010-2023 Unbounce. All rights reserved.</div>
        <div className="flex items-center justify-between gap-5 mt-[10px]">
          <div>Security</div>
          <div>Privacy Policy</div>
          <div>Terms and Service</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
