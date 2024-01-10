import { useEffect, useState } from "react";
import { getAllPost } from "../../../services/newsService.js";
import { Card } from "../../components/Card/Card";
import { NavBar } from "../../components/Navbar/Navbar"
import { HomeBody } from "./HomeStyled.jsx";


export default function Home(){
    const [news, setNews] = useState([]);

    async function findAllNews(){
        const response = await getAllPost();
        setNews(response.data.results);
    }
    useEffect(() => {
        findAllNews();
    }, []);
    return (
    <>
        <NavBar/>
        <HomeBody>
        {news.map((item) => (
            <Card 
            key={item.id} 
            title={item.title} 
            text={item.text}
            banner={item.banner}
            likes={item.likes.length}
            comments={item.comments.length}
            />
        ))}
        </HomeBody>
    </>
    );
}