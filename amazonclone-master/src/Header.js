import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  //initializing basket
  const [{ basket, user }, dispatch] = useStateValue();

  //handling authentication
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  console.log(basket);
  return (
    <div className="header">
      {/*Amazon Logo*/}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/*Search Bar*/}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/*Top bar*/}
      <div className="header__nav">
        {/*The link to !user is used to sign out but stay on the same page*/}
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            {/*user?.email||"Guest" alternative*/}
            <span className="header__optionLineOne">
              Hello,
              {user ? user.email : "Guest"}
            </span>{" "}
            {/*part of homework*/}
            <span className="header__optionLineTwo">
              {/*This is conditional state if user present then sign out otherwise sign in*/}
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />

            {/*pulling the basket length*/}
            <span className="header_optionLineTwo option_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
