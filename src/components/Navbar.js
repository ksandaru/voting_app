import React, { useState, Fragment } from 'react';
import styled, {css} from 'styled-components/macro';
import { useHistory, Route,Link, BrowserRouter as Router} from 'react-router-dom';
// import { menuData } from '../data/MenuData.js';
import { SubButton } from '../components/SubButton.js';
import Drop from '../images/drop.svg';
import Logo1 from '../images/logo1.png';
// import { FaToggleOff } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  {logout}  from '../Actions/auth';

import { withRouter } from 'react-router-dom';
import jwt_decode from "jwt-decode";

import { AiOutlineLogout } from 'react-icons/ai';
import { AiOutlineLogin } from 'react-icons/ai';
import { RiContactsLine } from 'react-icons/ri';
import { BiWorld } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import { ImUsers } from 'react-icons/im';


const Nav = styled.nav`
height: 80px;
display: flex;
justify-content: space-between;
padding: 2rem  2rem;
z-index: 100;
position: relative;//this line is changed to start the content from below to Navbar.otherwise below content and Navbar are overlayed
width: 100%;
//margin-top: -30px; 
background: #2EAAD6;
`;

const NavLink = css`
color: #fff;
display:flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration : none;
`;




const AppLogo = styled.img`
  ${NavLink}
  margin-top:-40px;
  height: 150px;
  width:200px;
  vertical-align: center;
  &:hover  {
    -webkit-transform: translateY(-5px);
	transform: translateY(-5px);
}
  `;
  



const MenuBars = styled.i`
display: none;

@media screen and (max-width: 768px){
    display: block;
    background-image:url(${Drop});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top:0;
    right: 0;
    transform: translate(-50% , 25%);
}
`; 



const NavMenu = styled.div`
display:flex;
align-items:center;
margin-right:-48px;

@media screen and (max-width: 768px){
    display:none;
}
`;

const NavMenuLinks = styled(Link)`
${NavLink}
font-size: medium;

&:hover  {
  color: yellow;
}
`;

const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right:24px;



@media screen and (max-width: 768px){
    display:none;
}
`;

//this is the authenticated admin home redirection




const Navbar = ({auth: { isAuthenticated, loading }, logout, toggle}) => {

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
    const authLinks = (
        <Fragment>
             <AppLogo to = '/home' src={Logo1} alt="logo" ></AppLogo>
          <MenuBars onClick={toggle} />
          <NavMenu>
          < NavMenuLinks to={path} >
            <ImUsers/>
            <span>Admin Home</span>
          </NavMenuLinks>
            <NavMenuLinks to='/aboutUs' >
            <BiWorld/>
            <span>AboutUs</span>
            </NavMenuLinks>
            <NavMenuLinks to='/contactUs' >
            <RiContactsLine/>
              <span>ContactUs</span>
            </NavMenuLinks>
          </NavMenu>
         
          <NavBtn>
          <SubButton onClick={logout} to='/home' primary= 'true'  ><span>Logout</span><AiOutlineLogout/></SubButton>
          </NavBtn>
        </Fragment>
      )
    
      const guestLinks = (
        <Fragment>
          <AppLogo to = '/' src={Logo1} alt="logo" ></AppLogo>
          <MenuBars onClick={toggle} />
          <NavMenu>          
            <NavMenuLinks to='/home' >
            <AiOutlineHome/>
              <span>Home</span>
            </NavMenuLinks>
            <NavMenuLinks to='/aboutUs'  >
            <BiWorld/>
            <span>AboutUs</span>
            </NavMenuLinks>
            <NavMenuLinks to='/contactUs' >
            <RiContactsLine/>
              <span>ContactUs</span>
            </NavMenuLinks>
          </NavMenu>
          <NavBtn>
          <SubButton to='/login' primary= 'true'  ><AiOutlineLogin/><span>Login</span></SubButton>
          </NavBtn>
        </Fragment>
      );

    return (
      <>
      <Nav id="Navbar"> 
          <Fragment>
            {isAuthenticated && !loading ?  authLinks : guestLinks} 
          </Fragment>
      </Nav>
      </>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.auth.user,
});


export default connect(mapStateToProps, { logout })(Navbar);

