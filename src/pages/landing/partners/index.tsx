import React from "react";
import "../../../App.scss";
import Concordium from "../../../assets/logo/concordium_logo.svg";
import EVA from "../../../assets/logo/eva_logo.svg";

function Partners() {
  return (
    <>
      <div id="partners" className="partners-bg">
        <div className="flex flex-col items-center gap-12 py-16 px-8 h-full max-h-screen">
          <div className="text-white text-3xl font-semibold">
            Partners
          </div>
          <div className="flex flex-col sm:flex-row gap-12 items-center justify-center w-full h-full">
            <div className="flex w-full sm:w-1/2 partners-circle mx-auto h-full items-center justify-center">
              <img src={Concordium} alt="concordium" className="w-28 md:w-40" />
            </div>
            <div className="flex w-full sm:w-1/2 partners-circle mx-auto h-full items-center justify-center">
              <img src={EVA} alt="eva" className="w-28 md:w-40" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;