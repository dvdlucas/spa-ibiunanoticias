import { useEffect, useState } from "react";
import { getAllPost, getTopNews } from "../../../services/newsService.js";
import { Card } from "../../components/Card/Card";
import { NavBar } from "../../components/Navbar/Navbar"
import { HomeBody, HomeHeader } from "./HomeStyled.jsx";


export default function Home(){
    const [news, setNews] = useState([]);
    const [topNews, setTopNews ] = useState({});

    async function findAllNews(){
        const response = await getAllPost();
        setNews(response.data.results);

        const topNews = await getTopNews();
        setTopNews(topNews.data.news);
        console.log(topNews.data.news)
    }
    useEffect(() => {
        findAllNews();
    }, []);
    return (
    <>
        <NavBar/>
        <HomeHeader>
        <Card 
            top={true}
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