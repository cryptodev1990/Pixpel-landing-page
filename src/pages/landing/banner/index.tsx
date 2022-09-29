import React from "react";
import Hero from "../../../assets/images/banner_right.png";
import "../../../App.scss";

function Banner() {
  return (
    <>
      <div className="banner-bg w-full min-h-screen">
        <div className="flex flex-col-reverse lg:flex-row py-36 px-8 md:px-12 lg:px-18 xl:px-24 2xl:px-36 3xl:px-48 min-h-screen gap-8 lg:gap-16">
          <div className="grid grid-col-1 lg:w-1/2 w-full text-white content-center">
            <div className="text-4xl font-semibold">
              Play 2 Earn
            </div>
            <div className="text-4xl font-semibold">
              Grow Safely
            </div>
            <div className="pt-8 text-2md font-normal">
              Pixpel was created to provide all-around services for the P2E community.<br/>
              Our main goal is to make crypto games safe and enjoyable.<br/>
              In Pixpel, game developers and players have a place to connect, invest, and play.<br/>
              If you want to know more about us, please check out our deck.
            </div>
            <a href="https://docsend.com/view/q83qhhu6h66ckvgk" rel="noreferrer" className="flex flex-col bg-app-blue-500 py-2 px-4 rounded-full w-36 h-12 mt-8">
              <div className="items-center my-auto mx-auto">
                Check Deck
              </div>
            </a>
          </div>
          <div className="lg:w-1/2 w-full">
            <img src={Hero} className="w-full mx-auto" alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
