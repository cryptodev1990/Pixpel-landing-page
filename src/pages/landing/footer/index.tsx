import React from "react";
import "../../../App.scss";
import Pixpel from "../../../assets/images/footer_pixpel.png";
import LinkedIn from "../../../assets/icons/linkedin.svg";
import Telegram from "../../../assets/icons/telegram.svg";
import Twitter from "../../../assets/icons/twitter.svg";
import Discord from "../../../assets/icons/discord.svg";
import FaceBook from "../../../assets/icons/facebook.svg";

function Footer() {
  return (
    <>
      <div className="footer-bg w-full min-h-screen">
        <div className="flex flex-col gap-12 items-center px-4 md:px-8 lg:px-12 xl:px-24 2xl:px-36 3xl:px-48 text-white">
          <img src={Pixpel} alt="footer_pixpel" className="sm:w-full lg:w-3/4 xl:w-3/5 2xl:w-1/2" />
          <div className="flex items-center justify-center gap-2 lg:gap-8 md:gap-4 w-full">
            <a href="https://www.facebook.com/pages/category/Financial-service/Pixpel-100577316004386/" rel="noreferrer" target="_blank">
              <img src={FaceBook} alt="book" className="lg:w-9 md:w-7 sm:w-6 w-5" />
            </a>
            <a href="https://twitter.com/PixpelPlatform?t=aBKBqFiERPwY7mZW2ZtAPg&s=09/" rel="noreferrer" target="_blank">
              <img src={Twitter} alt="twitter" className="lg:w-9 md:w-7 sm:w-6 w-5" />
            </a>
            <a href="https://t.me/pixpel/" rel="noreferrer" target="_blank">
              <img src={Telegram} alt="telegram" className="lg:w-9 md:w-7 sm:w-6 w-5" />
            </a>
            <a href="https://discord.gg/JUPxf3HFrN/" rel="noreferrer" target="_blank">
              <img src={Discord} alt="discord" className="lg:w-9 md:w-7 sm:w-6 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/pixpelplatform/" rel="noreferrer" target="_blank">
              <img src={LinkedIn} alt="linkedin" className="lg:w-9 md:w-7 sm:w-6 w-5" />
            </a>
          </div>
          <div className="mt-48 lg:mt-36 xl:mt-28 2xl:mt-20 3xl:mt-16 flex flex-col items-center justify-center gap-8 text-base font-medium">
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