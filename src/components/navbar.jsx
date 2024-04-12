import React, { useState } from "react";
import { FaArrowLeft, FaCartPlus, FaHeart, FaHome} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";
import toast from "react-hot-toast";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const back_fxn = () => {
    window.history.back();
  };

  const path = window.location.pathname;
  if(path==='/success'){
    // toast.success('Payment successfull');
    alert('Payment successfull');
    window.location.href='/';
  }else if(path==='/cancel'){
    // toast.error('Payment cancelled');
    alert('Payment cancelled');
    window.location.href='/';
  }
  return (
    <nav className="navbar">
      <button className="back_btn" onClick={() => back_fxn()}>
        <FaArrowLeft />
      </button>
         <Link  className="heading" to='/'> <span className="nav_heading">Product</span></Link>
      <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
        <div className="btn">
          <Link to="/" className="cart" onClick={() => setShowMenu(!showMenu)}>
            Home
          </Link>
          <Link
            to="/cart"
            className="cart"
            onClick={() => setShowMenu(!showMenu)}
          >
            Cart
          </Link>
          <Link
            to="/wishlist"
            className="cart"
            onClick={() => setShowMenu(!showMenu)}
          >
            Wishlist
          </Link>
        </div>
      </div>

      <div
        className={`${
          showMenu ? "nav__toggle animated-toggle" : "nav__toggle"
        }`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
