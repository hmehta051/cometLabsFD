import React from "react";
import { AiFillStar } from "react-icons/ai";
import { ProductData } from "../utils/DropDownData";
import { featureData } from "../utils/CardData";

const MultorShow = () => {
  const styles = {
    backgroundImage:
      'url("https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/abbcf2d7-multor-heroshot_100000000000000000001o.jpg")',
    width: "100%",
  };

  return (
    <div className="w-[96%] m-auto mt-[26px] rounded-sm flex items-center md:justify-end justify-center">
      <div className="w-[96%] ">
        {/* h-[3829px] */}
        {/* <iframe
          src="https://templates.unbounce.com/multor/"
          title="Iframe"
          width={"100%"}
          height={3829}
        /> */}
        <div style={styles} className="md:p-28">
          <div className="flex flex-col items-start md:w-[60%] w-[100%] md:gap-10 gap-6 md:p-0 p-8">
            <div className="md:text-[25px]">
              <img
                src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/42234823-multor-logo.svg"
                alt="Multor"
              />
            </div>
            <div className="md:text-[82px] text-[52px] md:leading-[120%] leading-[100%]">
              Describe the value of booking an appointment
            </div>
            <div className="text-[18px] w-[100%]">
              No need to get clever. Tell people exactly what you're offering,
              then use this space to communicate your key value proposition.
            </div>
          </div>
          {/* <div></div> */}
        </div>
        <div className="md:w-[80%] w-[90%] m-auto flex md:flex-row flex-col-reverse items-center justify-between">
          <div className="md:w-[50%] h-full flex flex-col items-start justify-between p-10 gap-10">
            {ProductData.filter((_, idx) => idx < 3).map((elem, index) => {
              return (
                <div
                  className="flex flex-col items-start gap-3 w-full"
                  key={index}
                >
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
              Here, let visitors know what will happen when they complete your
              form.
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
        <div style={styles} className="md:p-20 mt-[10%] w-full">
          <div className="flex flex-col items-center justify-center w-[100%] md:w-[50%] m-auto md:gap-10 gap-6">
            <div className="md:text-[52px] text-[48px] md:leading-[120%] leading-[100%] text-center">
              Show visitors what they're signing up for
            </div>
            <div className="text-[18px] w-[100%] text-center">
              Include a video or photo from one of your sessions to help people
              understand your service (or just to hype ‘em up).
            </div>
          </div>
          <div className="md:w-full md:h-[600px] w-[250px] m-auto h-[150px] mt-10 flex items-center justify-center">
            <a
              href="https://unbounce.com?wvideo=9o5wexcj4p"
              className="flex items-center justify-center"
            >
              <img
                src="https://embed-ssl.wistia.com/deliveries/29da46dbc01985d85354fde8c733a9b2.jpg?image_play_button_size=2x&amp;image_crop_resized=960x541&amp;image_play_button=1&amp;image_play_button_color=00c2c5e0"
                width="100%"
                height="100%"
                alt="Hello"
                className="w-[100%] h-full"
              />
            </a>
          </div>
        </div>
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
              Share a little about yourself as a business owner, or maybe
              describe what makes your service unique. Give visitors one more
              reason to care about your offer and want to work with you
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
      </div>
    </div>
  );
};

export default MultorShow;
