import { Navigate, createBrowserRouter } from "react-router-dom";

import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Signup from "./views/signup";
import Product from "./views/product";
import Test from "./views/test";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/dashboard",
                element: <Navigate to="/" />,
            },
            {
                path: "/product",
                element: <Product />,
            },
            // {
            //     path: "/test",
            //     element: <Test />,
            // },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },
]);

export default router;
