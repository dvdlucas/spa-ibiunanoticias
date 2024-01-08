import { Card } from "../../components/Card/Card";
import { NavBar } from "../../components/Navbar/Navbar"
import { news } from '../../Datas.js'
import { HomeBody } from "./HomeStyled.jsx";


export default function Home(){
    return (
    <>
        <NavBar/>
        <HomeBody>
        {news.map((item, index) => {
            return  <Card key={index} news={item} />;
        })}
        </HomeBody>
    </>
    );
}