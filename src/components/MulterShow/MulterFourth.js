import React from "react";
import { featureData } from "../../utils/CardData";

const MulterFourth = () => {
  return (
    <>
      <div className="mt-[100px] w-full md:w-[90%] m-auto flex flex-col items-center md:p-10">
        <div className="text-[#00c2c5]">DON'T JUST TAKE OUR WORD FOR IT</div>
        <div className="flex md:flex-row flex-col items-center justify-between gap-10 w-full md:mt-10 mt-5">
          <div className="flex flex-col items-start gap-5 w-full md:w-[40%]">
            <div>
              <img
                src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/dfb61e74-multor-testimonial1-stars.svg"
                alt="star"
              />
              <div className="md:mt-5 mt-2">
                Share a real testimonial that hits some of your benefits (but
                isn't too sales-y).
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/52bdc545-multor-testimonial1-headshot_100000000000000000001o.jpg"
                alt="PhotoIcon"
                width={"60px"}
              />
              &nbsp;
              <div>
                <div>Real Name</div>
                <div>Location</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5 w-full md:w-[40%]">
            <div>
              <img
                src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/dfb61e74-multor-testimonial1-stars.svg"
                alt="star"
              />
              <div className="md:mt-5 mt-2">
                Share a real testimonial that hits some of your benefits (but
                isn't too sales-y).
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/52bdc545-multor-testimonial1-headshot_100000000000000000001o.jpg"
                alt="PhotoIcon"
                width={"60px"}
              />
              &nbsp;
              <div>
                <div>Real Name</div>
                <div>Location</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 w-full md:w-[90%] m-auto flex md:flex-row flex-col items-center justify-between">
        {featureData.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="w-full md:w-[30%] flex flex-col items-center gap-y-10 md:gap-[30px]"
            >
              <div>
                <img src={elem.imageUrl} alt="" />
              </div>
              <div className="flex flex-col gap-[20px] items-start justify-center">
                <div className="text-[18px] font-bold">{elem.headerM}</div>
                <div>{elem.content}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-[100px] flex items-center justify-between flex-col w-full md:flex-row md:w-[90%] m-auto">
        <div className="md:w-[45%] w-full">
          <img
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/df213ca0-multor-about_10go0ei00000000000001o.jpg"
            alt=""
            width="100%"
          />
        </div>
        <div className="md:w-[45%] w-full flex flex-col justify-center md:gap-4 gap-2">
          <div className="text-[#00c0c5] md:mt-0 mt-8">ABOUT</div>
          <div className="text-[28px] text-black font-bold leading-10">
            Some more information about your business
          </div>
          <div>
            Share a little about yourself as a business owner, or maybe describe
            what makes your service unique. Give visitors one more reason to
            care about your offer and want to work with you
          </div>
        </div>
      </div>
      <div className="mt-[60px] md:mt-[100px] md:flex-row flex-col w-full flex items-center justify-between h-[130px] bg-[#152f2e] p-5">
        <div>
          <img
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/77034ff2-multor-logo-footer.svg"
            alt="Multor"
          />
        </div>
        <div className="text-gray-500 text-center">
          © 2020 Insert Name Here. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default MulterFourth;
