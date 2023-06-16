import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimer from "./components/Shimer";
import Cart from "./components/Cart";

import store from "./utils/redux/store";
import { Provider } from "react-redux";

const Instamart = lazy(() => import("./components/Instamart"));

import UserContext from "./utils/contexts/userContext";

//RouterProvider is component
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

//Applayout should be above appRouter
const AppLayout = () => {
    const [user, setUser] = useState({
        name: "anas",
        email: "anas@gmail.com",
    });
    return (
        <Provider store={store}>
            <UserContext.Provider
                value={{
                    user: user,
                    setUser: setUser,
                }}
            >
                <div className="app">
                    <Header />
                    {/* Outlet will be filled by childeren of AppLayout */}
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
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
            {
                path: "/instamart",
                element: (
                    <Suspense fallback={<Shimer />}>
                        <Instamart />
                    </Suspense>
                ),
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
