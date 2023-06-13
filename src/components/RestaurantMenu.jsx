import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimer from "./Shimer";
import { render } from "react-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    console.log("render");
    const { resId } = useParams();

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(MENU_API + resId);
        const jsonData = await data.json();

        setResInfo(jsonData.data);
    }

    if (resInfo === null || resInfo === undefined) {
        return <Shimer />;
    }
    const { itemCards } =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
            ?.card || "";
    console.log(resInfo);
    console.log("item cards" + itemCards);
    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[0]?.card?.card?.info || "";

    return (
        <div>
            <h1> Restaurant Id:123</h1>
            <h2>{resInfo?.cards[0]?.card?.card?.info.name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
