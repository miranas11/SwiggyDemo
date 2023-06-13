import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
//RouterProvider is component
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

//Applayout should be above appRouter
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            {/* Outlet will be filled by childeren of AppLayout */}
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />,
                    },
                ],
            },
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
