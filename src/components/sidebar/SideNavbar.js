import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./SideNavbar.css";
import { IconContext } from "react-icons";
import { SubButton } from "../SubButton";

import { withRouter } from 'react-router-dom';
import Clock from "../layout/Clock";
import { connect } from 'react-redux';
import { logout } from "../../Actions/auth";
import { Typography } from "@material-ui/core";
import PropTypes from 'prop-types';
import {RiFileUserLine} from 'react-icons/ri';
import {RiAdminLine} from 'react-icons/ri';
import {IoChevronBackCircleOutline } from 'react-icons/io5';
import {AiOutlineLogout } from 'react-icons/ai';
import jwt_decode from "jwt-decode"


const SideNavbar = ({auth: { isAuthenticated, loading }, logout, toggle})=> {debugger;
  const [sidebar, setSidebar] = useState(false);
  const [userName, setuserName] = useState( localStorage.token ? jwt_decode(localStorage.token).sub : 'Guest')
  const [userRole, setuserRole] = useState( localStorage.token ? jwt_decode(localStorage.token).role : 'Guest')
  var path = "/";
  switch (userRole) {
    case "Rank1Admin":
      path = "/rank1Home";
      break;
    case "Rank2Admin":
      path = "/rank2Home";
      break;
    case "Rank3Admin":
      path = "/rank3Home";
      break;
    case "Rank4Admin":
      path = "/rank4Home";
      break;
    default:
      break;
  }
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
debugger;
  //this is the back button
const GoBackButton = withRouter(
  ({ history }) => (
    <SubButton onClick={history.goBack} primary='true'><IoChevronBackCircleOutline/><span>BACK</span></SubButton>
  )
);

return (
  <div>
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="sidenavbar">
        <Link to="#" className="menu-bars-side">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <GoBackButton/>
        <div className ="clock-container">
        <Clock/>
        </div>
        <div className="rightside">
        <Link>
        <SubButton onClick={logout} to='/home' primary= 'true'><span>Logout</span><AiOutlineLogout/></SubButton>
        </Link>
        </div>
        <Typography className="current-user">
        <RiAdminLine/>Hi,<span>{userName}</span>
        </Typography>
      </div>
      <nav className={sidebar ? "sidenav-menu active" : "sidenav-menu"}>
        <ul className="sidenav-menu-items" onClick={showSidebar}>
          <li className="sidenavbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {/* {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li> 
            );
          })} */}
        
          <li className="sidenav-text">
            <Link to="/">
              <AiIcons.AiFillHome />
              <span>Home</span>
            </Link>
            <Link to={path}>
            <RiFileUserLine/>
              <span>My Home</span>
            </Link>
            <Link to="/">
              <FaIcons.FaCartPlus />
              <span>Notificaton</span>
            </Link>
            <Link to="/aboutUs">
              <IoIcons.IoMdPeople />
              <span>Team</span>
            </Link>
            <Link to="/contactUs">
              <IoIcons.IoMdHelpCircle />
              <span>Support</span>
            </Link>
          </li>
        </ul>
      </nav>
    </IconContext.Provider>
  </div>
);
};
SideNavbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(SideNavbar);