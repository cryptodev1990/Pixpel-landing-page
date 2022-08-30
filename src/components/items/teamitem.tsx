import React from "react";

declare type ServiceItemProps = {
  photo: any;
  job: string;
  name: string;
}

function TeamItem(props:ServiceItemProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={`${props.photo}`} alt={props.name} />
      <div className="text-5md text-app-blue">
        {props.job}
      </div>
      <div className="text-1xl text-white">
        {props.name}
      </div>
    </div>
  );
};

export default TeamItem;