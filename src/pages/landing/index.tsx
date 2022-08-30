import React from "react";

import Header from "../../components/header";
import Banner from "./banner";
import Service from "./service";
import About from "./about";
import Team from "./team";
import Tokenomics from "./tokenomics";
import Roadmap from "./roadmap";
import Partners from "./partners";
import Faq from "./faq";
import Footer from "./footer";

function Landing() {
  return (
    <div className="flex flex-col bg-main h-screen min-h-screen w-full relative">
      <main className="flex-1 overflow-y-scroll">
        <Header />
        <Banner />
        <Service />
        <About />
        <Team />
        <Tokenomics />
        <Roadmap />
        <Partners />
        <Faq />
        <Footer />

      </main>
    </div>
  );
};

export default Landing;