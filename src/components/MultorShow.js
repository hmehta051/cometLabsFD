import React from "react";
import MulterFirst from "./MulterShow/MulterFirst";
import MulterSecond from "./MulterShow/MulterSecond";
import MulterThird from "./MulterShow/MulterThird";
import MulterFourth from "./MulterShow/MulterFourth";

const MultorShow = () => {
  return (
    <div className="w-[96%] m-auto mt-[26px] rounded-sm flex items-center md:justify-end justify-center">
      <div className="w-[96%] m-auto">
        <MulterFirst />
        <MulterSecond />
        <MulterThird />
        <MulterFourth />
      </div>
    </div>
  );
};

export default MultorShow;
