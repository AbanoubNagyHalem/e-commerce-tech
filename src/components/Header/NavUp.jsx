import { IoCall } from "react-icons/io5";
import "./NavUp.css";

const NavUp = () => {
  return (
    <div className="nav-up">
      <div className="container">
        <div className="nav-left">
          <p>عربي</p>
          <div className="delivery-span">
            <span className="gray">My delivery area:</span>
            <span>Cairo</span>
          </div>
        </div>
        <div className="nav-right">
          <p>Sell on B.TECH</p>
          <span className="call-span">
            <IoCall /> 
            <p>Call 19966</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavUp;
