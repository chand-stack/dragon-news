import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="container mx-auto font-poppin">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;