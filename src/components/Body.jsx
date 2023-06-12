import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

function filterData(searchText, listOfRestaurants) {
    return listOfRestaurants.filter((res) => {
        return res.data.name.toLowerCase().includes(searchText.toLowerCase());
    });
}

const Body = () => {
    const [listOfRestaurants, setListofRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4752983&lng=77.48233379999999&page_type=DESKTOP_WEB_LISTING"
        );

        const jsonData = await data.json();
        setListofRestaurants(jsonData.data.cards[2].data.data.cards);
        setFilteredRestaurants(jsonData.data.cards[2].data.data.cards);
    }

    //not render component(Early return);

    if (!listOfRestaurants) return null;

    return (
        <div className="body">
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                        console.log(searchText);
                    }}
                ></input>
                <button
                    className="search-btn"
                    onClick={() => {
                        const data = filterData(searchText, listOfRestaurants);
                        console.log(data);
                        setFilteredRestaurants(data);
                    }}
                >
                    SEARCH
                </button>
            </div>
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = filteredRestaurants.filter(
                            (res) => res.data.avgRating > 4
                        );
                        console.log(filteredList);
                        setFilteredRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants.length === 0 ? (
                        <h1>NO RESTAURANT MATCHES YOUR QUERY</h1>
                    ) : (
                        filteredRestaurants.map((res) => {
                            return (
                                <RestaurantCard
                                    key={res.data.id}
                                    resData={res}
                                ></RestaurantCard>
                            );
                        })
                    )
                    /* {resList.map((res) => (
                    <RestaurantCard key={res.data.id} resData={res} />
                ))} */
                }
            </div>
        </div>
    );
};

export default Body;
