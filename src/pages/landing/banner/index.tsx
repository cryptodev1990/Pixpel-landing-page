import React from "react";
import Hero from "../../../assets/images/banner_right.png";
import "../../../App.scss";

function Banner() {
  return (
    <>
      <div className="w-full min-h-screen banner-bg">
        <div className="flex flex-col-reverse min-h-screen gap-8 px-8 lg:flex-row py-36 md:px-12 lg:px-18 xl:px-24 2xl:px-36 3xl:px-48 lg:gap-16">
          <div className="grid content-center w-full text-white grid-col-1 lg:w-1/2">
            <div className="text-4xl font-semibold">Play 2 Earn</div>
            <div className="text-4xl font-semibold">Safe and fun</div>
            <div className="pt-8 font-normal text-2md">
              Pixpel was created to provide all-around services for the P2E
              community.
              <br />
              Our main goal is to make crypto games safe and enjoyable.
              <br />
              In Pixpel, game developers and players have a place to connect,
              invest, and play.
              <br />
              If you want to know more about us, please check out our deck.
            </div>
            <div className="flex gap-4">
              <a
                href="https://docsend.com/view/q83qhhu6h66ckvgk"
                rel="noreferrer"
                className="flex flex-col h-12 px-4 py-2 mt-8 rounded-full bg-app-blue-500 w-36"
              >
                <div className="items-center mx-auto my-auto">Check Deck</div>
              </a>
              <a
                href="https://docsend.com/view/p26a9bvfpqf52ddi"
                rel="noreferrer"
                className="flex flex-col h-12 px-4 py-2 mt-8 rounded-full bg-app-green w-36"
              >
                <div className="items-center mx-auto my-auto">White Paper</div>
              </a>
              <a
                href="news"
                rel="noreferrer"
                className="flex flex-col h-12 px-4 py-2 mt-8 rounded-full bg-app-blue-500 w-36"
              >
                <div className="items-center mx-auto my-auto">News</div>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={Hero} className="w-full mx-auto" alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
