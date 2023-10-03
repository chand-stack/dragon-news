import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import RightSideNavigation from "../Shared/RightSideNavigation/RightSideNavigation";

const NewsDetail = () => {
    const [news,setNews] = useState({})

    const newsData = useLoaderData()
    const params = useParams()

    useEffect(()=>{
        const newNews = newsData?.find(news => news?._id === params?.id)
        setNews(newNews)
    },[newsData,params])
    console.log(news);
    

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h1 className="font-bold text-2xl -mb-10">Dragon News</h1>
<div className="grid lg:grid-cols-4 gap-4">

<div className="space-y-7 border p-5 lg:col-span-3 mt-10">
    
{/* <h1>{params?.id}</h1> */}
<img src={news?.image_url} alt="" />
<h1 className="text-3xl font-bold">{news.title}</h1>
<p>{news.details}</p>
<button className="btn btn-secondary text-xl font-semibold text-white rounded-none">All news in this category</button>
</div>

<div>
    <RightSideNavigation></RightSideNavigation>
</div>

</div>

        </div>
    );
};

export default NewsDetail;