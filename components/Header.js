import React from "react";
import logo from "/assets/images/foodvilla.png";
import userIcon from "/assets/images/userIcon.png";
import "./Header.css";


const Header = () => {
  
  return (
    <>
      <ul className="navbar">
        <li><img className="logo" src={logo} /></li>
        <li><input className="search-box" type="text" /> <button className="search-box" >Search</button></li>
        <li><img className="user-icon" src={userIcon} /></li>
      </ul>
    </>
  )
}

export default Header;