import User from "../../../assets/icons/User.svg";
import Group from "../../../assets/icons/Group.svg";
import Likes from "../../../assets/icons/Likes.svg";
import { useNavigate } from "react-router-dom";

declare type News = {
  index: number;
  blog: any;
  blogger: string;
  title: string;
  content: string;
  date: string;
  views: number;
  popularity: number;
};

function Section(props: News) {
  const navigate = useNavigate();
  return (
    <div onClick={() => {navigate(`../newsdetail/${props.index + 1}`)}} className="relative flex flex-col-reverse w-full mt-16 border-2 border-white cursor-pointer lg:static lg:flex-row">
      <div className="pb-20 px-11 lg:p-0 lg:w-1/2">
        <img src={props.blog} alt="blog" className="min-h-[100%]" />
      </div>
      <div className="lg:relative lg:w-1/2">
        <div className="p-11">
          <div className="flex">
            <img src={User} alt="user" />
            <div className="p-1 pl-3 grow">
              <div className="text-sm text-gray-300">{props.blogger}</div>
              <div className="text-sm text-green-500">{props.date}</div>
            </div>
            <img src={Group} className="float-right w-1" alt="group" />
          </div>
          <div className="py-5 text-xl leading-relaxed">{props.title}</div>
          <div className="text-sm leading-relaxed text-gray-200 lg:mb-8">
            {props.content}
          </div>
        </div>
        <div className="absolute w-full text-gray-400 px-11 p bottom-10 lg:block">
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
