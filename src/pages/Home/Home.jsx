import { useEffect, useState } from "react";
import { getAllNews, getTopNews } from "../../../services/newsService.js";
import { Card } from "../../components/Card/Card";
import { HomeBody, HomeHeader } from "./HomeStyled.jsx";
import Cookies from "js-cookie";

export default function Home() {
  const [news, setNews] = useState([]);
  const [topNews, setTopNews] = useState({});

  async function findAllNews() {
    const response = await getAllNews();
    setNews(response.data.results);

    const topNews = await getTopNews();
    setTopNews(topNews.data.news);
  }
  useEffect(() => {
    findAllNews();
  }, []);
  return (
    <>
      <HomeHeader>
        <Card
          top={true.toString()}
          title={topNews.title}
          text={topNews.text}
          banner={topNews.banner}
          likes={topNews.likes}
          comments={topNews.comments}
        />
      </HomeHeader>
      <HomeBody>
        {news.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes={item.likes}
            comments={item.comments}
          />
        ))}
      </HomeBody>
    </>
  );
}
