import React from "react";

import "../../../App.scss";
import Chart from "../../../assets/images/tokenomics_chart.png";
import Nft from "../../../assets/images/tokenomics_nft.png";

function Tokenomics() {
  return (
    <>
      <div id="tokenomics" className="tokenomics-bg min-h-screen">
        <div className="flex flex-col items-center px-8 md:px-12 lg:px-18 xl:px-24 2xl:px-36 3xl:px-48 py-28 gap-6 text-white">
          <div className="flex text-3xl font-semibold">
            Tokenomics
          </div>
          <div className="flex text-md font-normal">
            Decentralized Autonomous Organization
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center w-full">
            <div className="w-full md:w-1/2">
              <img src={Nft} alt="tokenomics_nft" className="mx-auto" />
            </div>
            <div className="w-full md:w-1/2 ">
              <img src={Chart} alt="chart" className="my-auto"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;