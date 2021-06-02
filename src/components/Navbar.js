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
`;

const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right:24px;


@media screen and (max-width: 768px){
    display:none;
}
`;

//this is the back button
const GoBackButton = withRouter(
  ({ history }) => (
    <SubButton onClick={history.goBack} >Admin Home</SubButton>
  )
);


const Navbar = ({auth: { isAuthenticated, loading }, logout, toggle}) => {

    const authLinks = (
        <Fragment>
             <AppLogo to = '/home' src={Logo1} alt="logo" ></AppLogo>
          <MenuBars onClick={toggle} />
          <NavMenu>
          <GoBackButton/> 
          <NavMenuLinks to='/home' >
            Home
          </NavMenuLinks>
          {/* <NavMenuLinks to='/dashboard' >
              Dashboard
            </NavMenuLinks> */}
            {/* <NavMenuLinks to='/rank1Home' >
              Rank1
            </NavMenuLinks>
            <NavMenuLinks to='/rank2Home' >
              Rank2
            </NavMenuLinks>
            <NavMenuLinks to='/rank3Home'>
              Rank3
            </NavMenuLinks>
            <NavMenuLinks to='/rank4Home' >
              Rank4
            </NavMenuLinks> */}
            <NavMenuLinks to='/aboutUs' >
              AboutUs
            </NavMenuLinks>
            <NavMenuLinks to='/contactUs' >
              ContactUs
            </NavMenuLinks>
          </NavMenu>
         
          <NavBtn>
          <SubButton onClick={logout} to='/login' primary= 'true'  >Logout</SubButton>
          </NavBtn>
        </Fragment>
      )
    
      const guestLinks = (
        <Fragment>
          <AppLogo to = '/' src={Logo1} alt="logo" ></AppLogo>
          <MenuBars onClick={toggle} />
          <NavMenu>          
            <NavMenuLinks to='/home' >
              Home
            </NavMenuLinks>
            <NavMenuLinks to='/aboutUs' >
              AboutUs
            </NavMenuLinks>
            <NavMenuLinks to='/contactUs' >
              ContactUs
            </NavMenuLinks>
          </NavMenu>
          <NavBtn>
          <SubButton to='/login' primary= 'true'  >Login</SubButton>
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

