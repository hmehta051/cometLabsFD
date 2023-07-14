import React from "react";

const MulterFirst = () => {
  const styles = {
    backgroundImage:
      'url("https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/abbcf2d7-multor-heroshot_100000000000000000001o.jpg")',
    width: "100%",
  };
  return (
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
          No need to get clever. Tell people exactly what you're offering, then
          use this space to communicate your key value proposition.
        </div>
      </div>
      {/* <div></div> */}
    </div>
  );
};

export default MulterFirst;
