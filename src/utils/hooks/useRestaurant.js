//Gets the data from api and send that in a state variabele

import { useState, useEffect } from "react";
import { MENU_API } from "../constants";

const useRestaurant = (resId) => {
    const [restaurantMenu, setRestaurantMenu] = useState();

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(MENU_API + resId);
        const jsonData = await data.json();

        setRestaurantMenu(jsonData.data);
    }

    return restaurantMenu;
};

export default useRestaurant;
