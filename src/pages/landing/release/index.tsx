import React from "react";
import yahoo from "../../../assets/images/Yahoo.png";
import tcu from "../../../assets/images/TCU.png";

function Release() {
  return (
    <div className="flex flex-col gradientbackground-release w-full py-16 items-center">
      <div className="text-3xl font-semibold mb-8 text-white">Press Release</div>
      <div className="flex flex-col lg:flex-row lg:gap-24 gap-8 items-center hr-gradient">
        <img src={yahoo} alt="yahoo" />
        <div className="text-3xl font-bold text-white">europa press</div>
        <img src={tcu} alt="tcu" />
      </div>
    </div>
  );
}

export default Release;
