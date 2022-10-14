import React from "react";
import linkedin from "../../assets/images/LinkedIn.svg";

declare type ServiceItemProps = {
  photo: any;
  job: string;
  name: string;
};

function TeamItem(props: ServiceItemProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={`${props.photo}`} alt={props.name} />
      <div className="text-5md text-app-blue">{props.job}</div>
      <div className="flex gap-2 text-1xl text-white">
        {props.name}
        <img src={linkedin} alt="LinkedIn" />
      </div>
    </div>
  );
}

export default TeamItem;
