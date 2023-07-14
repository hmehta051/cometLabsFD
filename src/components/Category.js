import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
function Category() {
  return (
    <div className="m-auto mt-[120px] md:mt-[150px] w-[96%] flex flex-col justify-center gap-y-16">
      <div className="hidden md:flex items-center gap-x-1 w-full">
        <MdKeyboardArrowLeft className="text-[blue]" />
        <span className="text-[14px] text-gray-400">BACK TO TEMPLATES</span>
      </div>
      <div className="flex items-start md:justify-between w-full ">
        <div className="flex flex-col items-start justify-between gap-[32px] w-[45%]">
          <div className="text-[28px]">MULTOR</div>
          <div className="text-[16px]">
            Schedule more virtual appointments, online classes, and video
            consultations with this high-converting lead capture template.
          </div>
          <button className="bg-[#f6921e] text-white text-[18px] hover:opacity-80 p-3 hidden md:block">
            MAKE IT YOURS
          </button>
        </div>
        <div className="md:w-[45%] w-[55%] flex items-center justify-between md:gap-0 gap-[20px]">
          <div className="md:w-[40%] w-[0%]"></div>
          <div className="md:w-[60%] w-[100%] flex flex-col items-start justify-between gap-[30px]">
            <div className="text-[24px]">Category</div>
            <div className="md:leading-8 leading-2 w-full break-all">
              <span> Agency Lead Generation|Consulting|Ecourse|</span>
              <span>Events|Featured|Health|Landing Pages|</span>
              <span> LeadGeneration|Medical|Webinar|WordPress</span>
            </div>
            <div className="items-center gap-[10px] text-[12px] hidden md:flex">
              <div>DESKTOP VIEW</div>
              <img
                src={
                  "https://unbounce.com/wp-content/themes/unbounce2019/assets/img/lpt-preview-desktop-icon.png"
                }
                alt="Desktop View"
                width="50px"
              />
              <div>MOBILE VIEW</div>
              <img
                src={
                  "https://unbounce.com/wp-content/themes/unbounce2019/assets/img/lpt-preview-mobile-icon.png"
                }
                alt="Mobile View"
                width="25px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
