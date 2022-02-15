import React from "react";
import logo from "../images/logo.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faUser,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} />

      <div className="logo__name">
        <h1>BETONGGRIS</h1>
      </div>

      <div className="header__search">
        <button className="category__bar">
          <FontAwesomeIcon className="bar-icon" icon={faBars} size="xl" />
        </button>
        <input className="header__searchInput" type="text" />
        <FontAwesomeIcon
          className="header__searchIcon"
          icon={faMagnifyingGlass}
        />
      </div>

      <div className="header__nav">
        <div className="header__option option__hoverGray">
          <span className="header__optionLine ">
            Kundservice{" "}
            <span>
              <FontAwesomeIcon className="cservice__icon" icon={faMessage} />
            </span>
          </span>
        </div>

        <div className="header__option items__basket">
          <span className="header__optionLine basket__line">
            Varukorg{" "}
            <span>
              <FontAwesomeIcon
                className="basket__icon"
                icon={faBasketShopping}
              />
              <span className="number_basketItem">0</span>
            </span>
          </span>
        </div>

        <div className="header__option option__hoverGray">
          <span className="header__optionLine ">
            Logga in{" "}
            <span>
              <FontAwesomeIcon className="user__icon" icon={faUser} />
            </span>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
