import { createBrowserRouter } from "react-router-dom";
import Root from "../Mainlayout/Root";
import Home from "../Pages/Home";
import Login from "../Shared/Login/Login";
import Register from "../Shared/Register/Register";
import NewsDetail from "../Pages/NewsDetail";
import PrivateRoute from "../Private/PrivateRoute";
import About from "../Pages/About";

const router = createBrowserRouter ([
    {
        path:"/",
        element:<Root></Root>,
        children: [
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/news/:id",
                element:<PrivateRoute><NewsDetail></NewsDetail></PrivateRoute>,
                loader: () => fetch('/news.json')
            },
            {
                path:"/about",
                element:<About></About>
            }
        ]
    }
])

export default router