import { useState, useContext } from "react";
import logo from "../../img/logo.png";

import { Link } from "react-router-dom";

import UserContext from "../utils/contexts/userContext";

import { useSelector } from "react-redux";
import store from "../utils/redux/store";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { user, setUser } = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="header">
            <div className="logo-container">
                <img src={logo} className="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>Contact Us</li>
                    <li>
                        <Link to="/cart">Cart- {cartItems.length} items</Link>{" "}
                    </li>
                    <li>
                        <Link to="/instamart">INSTAMART</Link>
                    </li>
                    <li>{user.name}</li>
                    <li>
                        {" "}
                        <input
                            type="text"
                            className="search-input"
                            placeholder="search"
                            value={user.name}
                            onChange={(e) => {
                                setUser({
                                    name: e.target.value,
                                    email: "hello@gmail.com",
                                });
                            }}
                        ></input>
                    </li>
                    <li>
                        <button
                            className="auth-btn"
                            onClick={() => setIsLoggedIn(!isLoggedIn)}
                        >
                            {isLoggedIn ? "Logout" : "Login"}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
