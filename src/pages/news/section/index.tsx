import User from "../../../assets/icons/User.svg";
import Group from "../../../assets/icons/Group.svg";
import Likes from "../../../assets/icons/Likes.svg";

declare type News = {
  blog: any;
  blogger: string;
  title: string;
  content: string;
  date: string;
  views: number;
  popularity: number;
};

function Section(props: News) {
  return (
    <div className="flex w-full mt-16 border-2 border-white">
      <img src={props.blog} alt="blog" />
      <div className="relative">
        <div className="p-11">
          <div className="flex">
            <img src={User} alt="user" />
            <div className="p-1 pl-3 grow">
              <div className="text-sm text-gray-300">{props.blogger}</div>
              <div className="text-sm text-green-500">{props.date}</div>
            </div>
            <img
              src={Group}
              className="float-right w-1 cursor-pointer"
              alt="group"
            />
          </div>
          <div className="py-5 text-xl leading-relaxed">{props.title}</div>
          <div className="text-sm leading-relaxed text-gray-200">
            {props.content}
          </div>
        </div>
        <div className="absolute w-full text-gray-400 px-11 p bottom-10">
          <hr />
          <div className="mt-3 text-sm">
            <div className="flex float-right">
              {props.popularity}
              <img src={Likes} alt="likes" />
            </div>
            <div>{props.views} views</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
