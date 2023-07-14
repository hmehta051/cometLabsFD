import React from "react";

const MulterThird = () => {
  const styles = {
    backgroundImage:
      'url("https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/abbcf2d7-multor-heroshot_100000000000000000001o.jpg")',
    width: "100%",
  };
  return (
    <div style={styles} className="p-5 md:p-20 mt-[10%] w-full">
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
  );
};

export default MulterThird;
