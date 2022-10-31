import React from "react";
import "../../App.scss";
import Pixpel from "../../assets/images/footer_pixpel.png";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Telegram from "../../assets/icons/telegram.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Discord from "../../assets/icons/discord.svg";
import FaceBook from "../../assets/icons/facebook.svg";

function Footer() {
  return (
    <>
      <div className="w-full min-h-screen footer-bg">
        <div className="flex flex-col items-center gap-12 px-4 text-white md:px-8 lg:px-12 xl:px-24 2xl:px-36 3xl:px-48">
          <img src={Pixpel} alt="footer_pixpel" className="sm:w-full lg:w-3/4 xl:w-3/5 2xl:w-1/2" />
          <div className="flex items-center justify-center w-full gap-2 lg:gap-8 md:gap-4">
            <a href="https://www.facebook.com/pages/category/Financial-service/Pixpel-100577316004386/" rel="noreferrer" target="_blank">
              <img src={FaceBook} alt="book" className="w-5 lg:w-9 md:w-7 sm:w-6" />
            </a>
            <a href="https://twitter.com/PixpelPlatform?t=aBKBqFiERPwY7mZW2ZtAPg&s=09/" rel="noreferrer" target="_blank">
              <img src={Twitter} alt="twitter" className="w-5 lg:w-9 md:w-7 sm:w-6" />
            </a>
            <a href="https://t.me/pixpel/" rel="noreferrer" target="_blank">
              <img src={Telegram} alt="telegram" className="w-5 lg:w-9 md:w-7 sm:w-6" />
            </a>
            <a href="https://discord.gg/JUPxf3HFrN/" rel="noreferrer" target="_blank">
              <img src={Discord} alt="discord" className="w-5 lg:w-9 md:w-7 sm:w-6" />
            </a>
            <a href="https://www.linkedin.com/company/pixpelplatform/" rel="noreferrer" target="_blank">
              <img src={LinkedIn} alt="linkedin" className="w-5 lg:w-9 md:w-7 sm:w-6" />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 mt-48 text-base font-medium lg:mt-36 xl:mt-28 2xl:mt-20 3xl:mt-16">
            <div>
              info@pixpel.io
            </div>
            <div className="flex items-center justify-center">
              © Copyright 2022 by Pixpel Trading S.A. de C.V.
            </div>
            <div>
              All rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;