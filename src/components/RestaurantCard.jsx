import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {
        name,
        cuisines,
        avgRating,
        deliveryTime,
        costForTwoString,
        cloudinaryImageId,
        id,
    } = props.resData?.data;
    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <div className="res-card-items">
                <h5>{avgRating} stars</h5>
                <h5>{deliveryTime} mins</h5>
                <h5>{costForTwoString}</h5>
            </div>
        </div>
    );
};

export default RestaurantCard;
