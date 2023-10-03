import Header from "../Shared/Header/Header";
import Latestbtn from "../Shared/Latestbtn/Latestbtn";
import LeftSideNavigation from "../Shared/LeftSideNavigation/LeftSideNavigation";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNavigation from "../Shared/RightSideNavigation/RightSideNavigation";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Latestbtn></Latestbtn>
            <Navbar></Navbar>

<div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">

<div className="border-2"><LeftSideNavigation></LeftSideNavigation></div>
<div className="border-2 lg:col-span-2"><h1 className="text-3xl">news coming soon</h1></div>
<div><RightSideNavigation></RightSideNavigation></div>

</div>

        </div>
    );
};

export default Home;