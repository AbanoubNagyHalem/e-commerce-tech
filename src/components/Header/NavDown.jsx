import { Link } from "react-router-dom";
import "./NavDown.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

const NavDown = () => {
  return (
    <div className="nav-down">
      <div className="container">
        <Link to="#">
          <img src={logoImg} alt="logo" />
        </Link>
        <div className="nav-left">
          <div className="dropdown">
            Categories
            <IoIosArrowDown />
          </div>
          <p>Daily Deals</p>
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <IoSearchOutline className="search-icon" />
        </div>
        <div className="nav-right">
          <div className="sign-in">
            <FiUser />
            <p>Sign in</p>
          </div>
          <div className="cart">
            <FiShoppingCart />
            <p>Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDown;
