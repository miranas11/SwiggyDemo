import { useState } from "react";
import logo from "../../img/logo.png";

import { Link } from "react-router-dom";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
                    <li>Cart</li>
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
