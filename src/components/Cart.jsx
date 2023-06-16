import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);

    return cartItems.length == 0 ? (
        <h1>CART EMPTY</h1>
    ) : (
        <div className="res-container">
            {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Cart;
