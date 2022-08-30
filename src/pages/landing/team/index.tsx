import React from "react";
import TeamItem from "../../../components/items/teamitem";
import { teamList } from "./teamlist";

import "../../../App.scss";

function Team() {
  return (
    <>
      <div id="team" className="team-bg min-h-screen">
        <div className="flex flex-col gap-10 py-24 px-8 md:px-12 lg:px-18 xl:px-24 3xl:px-36 items-center">
          <div className="flex text-white text-3xl">
            Our Team
          </div>
          <div className="w-full grid xl:grid-cols-4 md:grid-cols-2 grid-flow-row gap-6">
            {
              teamList.map((team, idx) => {
                return(
                  <TeamItem key={idx} name={team.name} job={team.job} photo={team.photo} />
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;