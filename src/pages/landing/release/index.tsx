import React from "react";
import yahoo from "../../../assets/images/Yahoo.png";
import tcu from "../../../assets/images/TCU.png";

function Release() {
  return (
    <div className="flex flex-col gradientbackground-release w-full py-20 items-center">
      <div className="text-3xl font-semibold mb-8 text-white">
        Press Release
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-24 gap-8 items-center hr-gradient mb-10  ">
        <a
          href="https://finance.yahoo.com/news/pixpel-concordium-bring-insurance-policy-074600622.html"
          rel="yahoo"
        >
          <img src={yahoo} alt="yahoo" />
        </a>
        <a
          href="https://www.europapress.es/comunicados/internacional-00907/noticia-comunicado-pixpel-and-concordium-bring-insurance-policy-to-web-30-gaming-20220913094734.html"
          rel="Europa"
        >
          <div className="text-3xl font-bold text-white">europa press</div>
        </a>
        <a
          href="https://www.thecryptoupdates.com/many-p2e-problems-one-solution-pixpel/"
          rel="TCU"
        >
          <img src={tcu} alt="tcu" />
        </a>
      </div>
    </div>
  );
}

export default Release;
