import "../../../App.scss";
import World from "../../../assets/images/worldmap.png";
import { aboutList } from "./about";

function About() {
  return (
    <>
      <div id="about" className="about-bg min-h-screen">
        <div className="flex flex-col text-white items-center py-11 px-8 md:px-12 lg:px-18 xl:px-24 2xl:px-36 3xl:px-48 gap-8 xl:gap-4">
          <div className="flex text-4xl items-center">
            About us
          </div>
          <div className="flex flex-col xl:flex-row w-full gap-4">
            <div className="flex flex-col w-full xl:w-2/5 gap-8 xl:gap-4">
              <div className="w-full text-3xl">
                One community for millions of crypto gamers around the world.
              </div>
              <div className="text-3md font-normal">
                Pixpel is the hub of players and developers. Whether you just want to find a game to have fun, earn or do both. If you are a developer who wants to connect your game with the players community, Pixpel offers various tools and ways for the players to find and be a part of your project.
              </div>
            </div>
            <div className="flex w-full xl:w-3/5 items-center justify-center">
              <img src={World} alt="world" className="flex w-full mx-auto" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row self-start w-full xl:w-3/5 gap-4">
            {
              aboutList.map((about, idx) => {
                return(
                  <div className="flex flex-col w-full md:w-1/3 gap-6" key={idx}>
                    <div className="text-2xl">
                      {about.title}
                    </div>
                    <div className="text-4md">
                      {about.content}
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

export default About;