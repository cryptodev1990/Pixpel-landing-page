import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../../../App.scss";
import { faqList } from "./faqlist";

declare type FapProps = {
  question: string;
  answer: string;
}

const FaqItem = (props: FapProps) => {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <div className="flex flex-row text-white">
      <div
        className="flex flex-col p-2 py-4 cursor-pointer w-full"
        onClick={() => {
          setCollapsed(!collapsed)
        }}
      >
        <div className="flex justify-between items-center text-base2 font-semibold py-2 rounded-lg border-app-blue faqitem-bg px-2">
          {props.question}
          <FontAwesomeIcon
            icon={collapsed ? faAngleRight : faAngleDown}
            className="mx-2"
          />
        </div>
        {!collapsed && (
          <>
            <div className="mt-2 text-black flex openitem-bg text-base font-light py-2 px-2 rounded-lg">
              {props.answer}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function Faq() {
  return (
    <>
      <div className="faq-bg min-h-screen">
        <div className="flex flex-col gap-8 px-4 md:px-8 lg:px-12 xl:px-24 2xl:px-36 3xl:px-48 py-12 items-center justify-center text-white">
          <div className="flex flex-col lg:flex-row gap-8 w-full">
            <div className="flex items-center w-full lg:w-2/5">
              <div className="flex font-semibold text-5xl">
                Have more questions?
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-3/5">
              {
                faqList.map((dt, idx) => {
                  return(
                    <FaqItem {...dt} key={idx} />
                  )
                })
              }
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center text-white w-full">
            <div className="flex flex-col gap-2 w-full lg:w-2/5">
              <div className="text-self-xl font-semibold">
                Are you a GAMER?
              </div>
              <div className="text-base2 font-normal">
                Enter your email and subscribe to get the latest news!.
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-3/5">
              <div className="rounded-lg border-app-blue">
                <input type="text" className="bg-transparent input-faq h-12 w-72 px-2" placeholder="Enter your email address." />
              </div>
              <button className="subscribe-btn text-white w-48 h-12">Subscribe</button>
            </div>
          </div>
          <div className="mt-4 flex flex-col lg:flex-row gap-4 items-center justify-center text-white w-full lg:w-3/4">
            <div className="flex flex-col gap-2 w-full lg:w-1/2">
              <div className="text-self-xl font-semibold">
                Are you a DEVELOPER?
              </div>
              <div className="text-base2 font-normal">
                Get in touch with us!
              </div>
            </div>
            <div className="flex gap-2 w-full lg:w-1/2">
              <button className="subscribe-btn text-white w-48 h-12">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;