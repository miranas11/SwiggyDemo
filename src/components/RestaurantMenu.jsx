import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimer from "./Shimer";
import { render } from "react-dom";
import { CDN_URL, MENU_API } from "../utils/constants";
import useRestaurant from "../utils/hooks/useRestaurant";

import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../utils/redux/cartSlice";

// import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurant(resId);

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems[0]);

    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    if (resInfo === null || resInfo === undefined) {
        return <Shimer />;
    }

    const { itemCards } =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
            ?.card || "";

    const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
        resInfo?.cards[0]?.card?.card?.info || "";

    return (
        <div className="res-menu">
            <div>
                <img src={CDN_URL + cloudinaryImageId}></img>
                <h1> Restaurant Id:123</h1>
                <h2>{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h3>{costForTwoMessage}</h3>
            </div>
            <div className="menu">
                <ul>
                    {itemCards.map((item) => (
                        <div className="items" key={item.card.info.id}>
                            <li>
                                {item.card.info.name}{" "}
                                <button
                                    onClick={() => {
                                        handleAddItem(item.card.info);
                                    }}
                                >
                                    Add
                                </button>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;
