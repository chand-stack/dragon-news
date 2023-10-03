import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import news1 from '../../assets/3.png'
import news2 from '../../assets/2.png'
import news3 from '../../assets/1.png'
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import moment from 'moment';


const LeftSideNavigation = () => {
    const [newsList,setNewsList] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then( res => res.json())
        .then(data => setNewsList(data))
    },[])

    return (
        <div>
            <h2 className="font-bold text-2xl">All Caterogy</h2>
            <div className="pl-8 space-y-4 mt-10 text-gray-500">
                 {
                    newsList.map(category => <NavLink to={`/news/${category.id}`} className="block text-2xl px-2 py-3" key={category.id}>{category.name}</NavLink>)
                 }
            </div>
            <div className="mt-5 space-y-4">
                <img className="mx-auto w-full px-4" src={news1} alt="" />
                <h1 className="font-semibold w-full text-center text-2xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                <p className="flex px-4 items-center justify-between gap-2 text-xl font-semibold"><span>Sports</span><span className="flex items-center gap-3 text-gray-500"> <BsFillCalendarCheckFill/> {moment().format("MMMM D, YYYY")}</span></p>
            </div>
            <div className="mt-5 space-y-4">
                <img className="mx-auto w-full px-4" src={news2} alt="" />
                <h1 className="font-semibold w-full text-center text-2xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                <p className="flex px-4 items-center justify-between gap-2 text-xl font-semibold"><span>Sports</span><span className="flex items-center gap-3 text-gray-500"> <BsFillCalendarCheckFill/> {moment().format("MMMM D, YYYY")}</span></p>
            </div>
            <div className="mt-5 space-y-4">
                <img className="mx-auto w-full px-4" src={news3} alt="" />
                <h1 className="font-semibold w-full text-center text-2xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                <p className="flex px-4 items-center justify-between gap-2 text-xl font-semibold"><span>Sports</span><span className="flex items-center gap-3 text-gray-500"> <BsFillCalendarCheckFill/> {moment().format("MMMM D, YYYY")}</span></p>
            </div>
        </div>
    );
};

export default LeftSideNavigation;