import { useParams } from "react-router-dom";
import Search from "../../assets/icons/search.svg";
import Section from "./section/detail";
import { newsList } from "./newslist";

function NewsDetail() {
  let { id } = useParams();
  let news = newsList[parseInt(id || "0") - 1];
  const animateSearch = () => {
    let searchInput = document.getElementById("search");
    if (!searchInput) return;
    if (["", "0px"].includes(searchInput.style.width))
      searchInput.style.width = "150px";
    else searchInput.style.width = "0px";
  };
  return (
    <div className="min-h-screen px-12 text-white md:px-24 lg:px-44 xl:px-60 2xl:px-80 news-bg py-52">
      <div className="text-4xl font-semibold text-center">News Updates</div>
      <div className="flex items-center gap-8 pt-32 text-lg cursor-pointer ">
        <a href="/" className="flex flex-col hover:text-app-green">
          All posts
        </a>
        <a href="/" className="flex flex-col hover:text-app-green">
          Games
        </a>
        <a href="/" className="flex flex-col hover:text-app-green">
          Tournaments
        </a>
        <div className="hidden border-white rounded-full cursor-pointer lg:flex border-1 bg-sky-500">
          <input
            id="search"
            className="flex flex-col w-0 py-1 text-black duration-1000 rounded-l-full focus:px-3 bg-slate-200 focus:outline-none blur:px-0 transition-[width]"
          />
          <div className="flex flex-col px-3 pt-1" onClick={animateSearch}>
            <img src={Search} alt="search" />
          </div>
        </div>
      </div>
      <Section
        blog={news.blog}
        date={news.date}
        blogger={news.blogger}
        title={news.title}
        content={news.content}
        views={news.views}
        popularity={news.popularity}
      />
    </div>
  );
}

export default NewsDetail;
