import React from "react";

import Banner from "./banner";
import Service from "./service";
import About from "./about";
import Team from "./team";
import Tokenomics from "./tokenomics";
import Roadmap from "./roadmap";
import Partners from "./partners";
import Faq from "./faq";
import Release from "./release";

function Landing() {
  return (
    <>
      <Banner />
      <Service />
      <About />
      <Team />
      <Tokenomics />
      <Roadmap />
      <Partners />
      <Faq />
      <Release /> 
    </>
  );
};

export default Landing;