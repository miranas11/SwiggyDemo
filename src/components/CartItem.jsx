import { CDN_URL } from "../utils/constants";

const CartItem = (props) => {
    console.log(props.item);
    const { name, price, category, imageId, id } = props?.item;

    return props.item === undefined ? (
        <h1>NoItemAdded</h1>
    ) : (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + imageId}></img>
            <h3>{name}</h3>
            <div className="res-card-items">
                {/* <h5>{avgRating} stars</h5> */}
                <h5>{category}</h5>
                <h5>Rs - {price / 100}</h5>
            </div>
        </div>
    );
};

export default CartItem;
