import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Latestbtn from "../Shared/Latestbtn/Latestbtn";
import LeftSideNavigation from "../Shared/LeftSideNavigation/LeftSideNavigation";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNavigation from "../Shared/RightSideNavigation/RightSideNavigation";
import News from "./News";
import { useEffect, useState } from "react";


const Home = () => {
    const [news,setNews] = useState([])

    const data = useLoaderData()

    const params = useParams()
    console.log(params.id);

    useEffect(()=>{
        setNews(data)
    },[data])
   

    return (
        <div>
            <Header></Header>
            <Latestbtn></Latestbtn>
            <Navbar></Navbar>

<div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">

<div><LeftSideNavigation></LeftSideNavigation></div>
<div className="lg:col-span-2 h-screen md:h-[270vh] lg:h-[250vh] overflow-y-scroll scroll-smooth">
    <h1 className="font-bold text-2xl">Dragon News Home {params.id}</h1>
    
    
{
    news.map((news,idx) => <News key={idx}  news={news}></News>)
}

    </div>
<div className="md:col-span-2 lg:col-span-1"><RightSideNavigation></RightSideNavigation></div>

</div>

        </div>
    );
};

export default Home;