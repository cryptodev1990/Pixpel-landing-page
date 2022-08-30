import React from "react";

import ServiceItem from "../../../components/items/serviceitem";
import { itemList } from "./itemlist";
import "../../../App.scss";

function Service() {
  return (
    <>
      <div id="services" className="service-bg min-h-screen">
        <div className="flex flex-col py-28 items-center">
          <div className="text-white text-4xl font-semibold">
            Our Services
          </div>
          <div className="text-white text-md font-normal">
            Providing everything you need
          </div>
          <div className="w-full grid xl:grid-cols-4 md:grid-cols-2 grid-flow-row gap-12 justify-center px-8 md:px-18 lg:px-24 xl:px-36 3xl:px-48">
            {
              itemList.map((item, idx) => {
                return (
                  <div className="justify-self-center w-full" key={idx}>
                    <div className="flex flex-col">
                      <div className="flex flex-col h-56 items-center justify-center">
                        <img src={`${item.imageurl}`} alt={item.imagename} />
                      </div>
                      <ServiceItem title={item.title} content={item.content} />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;