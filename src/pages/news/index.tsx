import Search from "../../assets/icons/search.svg";
import Section from "./section";
import { newsList } from "./newslist";

function News() {
  return (
    <div className="min-h-screen text-white px-80 news-bg py-52">
      <div className="text-4xl font-semibold text-center">News Updates</div>
      <div className="flex items-center gap-8 pt-32 text-lg cursor-pointer ">
        <a href="/" className="flex flex-col hover:text-app-green" >All posts</a>
        <a href="/" className="flex flex-col hover:text-app-green">Games</a>
        <a href="/" className="flex flex-col hover:text-app-green">Tournaments</a>
        <div className="flex border-white rounded-full cursor-pointer border-1 bg-sky-500">
          <input className="flex flex-col px-3 py-1 text-black rounded-l-full bg-slate-200 focus:outline-none w-max"/>
          <div className="flex flex-col px-3 pt-1"> 
            <img src={Search} alt="search"/>
          </div>         
        </div>
      </div>
      {
        newsList.map(news => (          
          <Section blog={news.blog} date={news.date} blogger={news.blogger} title={news.title} content={news.content} views={news.views} popularity={news.popularity}/>
        ))
      }
    </div>
  );
}

export default News;