import React, { useState } from "react";
import "../CSS/Header.css";
import Data from "../../data.json";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="header_menu">
      <div className="header">
        <div className="header_left">
          <img src={Data[0].image1} alt="There is somthing wrong" />
        </div>
        <div className="header_right">
          <div className="header_option">
            <Link to="/home">
              <p className="active">HOME</p>
            </Link>
            <p>ABOUT</p>
          </div>
          <div className="hiddenoption">
            <IconButton
              className="menu_iconbtn"
              onClick={() => setNavbar(true)}
            >
              <MenuIcon className="menu_btn" />
            </IconButton>
          </div>
        </div>
      </div>
      {navbar && (
        <div className="header_slidebar">
          <div className="close_icondiv">
            <CloseIcon
              className="close_icon"
              onClick={() => setNavbar(false)}
            />
          </div>

          <div className="slidebar_upper">
            <AccountCircleIcon className="avtar_icon" />
            <span>Saurabh Yadav</span>
          </div>
          <div className="slidebar_middle">
            <p className="active">HOME</p>
            <p>ABOUT</p>
            <p>LOGIN</p>
          </div>
          <div className="slidebar_down"></div>
        </div>
      )}
    </div>
  );
}

export default Header;
