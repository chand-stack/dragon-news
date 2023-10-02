import Marquee from "react-fast-marquee";
const Latestbtn = () => {
    return (
        <div className="flex bg-gray-100 p-4 mt-8">
            <button className="btn btn-active btn-secondary text-lg text-white border-none rounded-none">Latest</button>
            <Marquee className="font-semibold" pauseOnHover={true} speed={100}>
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
</Marquee>
        </div>
    );
};

export default Latestbtn;