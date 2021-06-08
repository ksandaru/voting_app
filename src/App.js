
import{useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch,NavLink, Link, Redirect } from 'react-router-dom';
//import './App.css';
//import Candidate from './pages/candidate/Candidate';
//import Party from './pages/party/Party';
import Home from './pages/home/Home';
//import HomeRank2 from './pages/rank2/HomeRank2';


import React, {useState} from 'react';
// import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Hero from './components/Hero';

import { SliderData } from './data/SliderData';
import GlobalStyle from './components/globalStyles';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './components/Theme';

import Navbar from './components/Navbar';
import Rank1Home from './pages/home/Rank1Home';
import Rank2Home from './pages/home/Rank2Home';
import Rank3Home from './pages/home/Rank3Home';
import Rank4Home from './pages/home/Rank4Home';

import AdminList from './pages/rank1/admin/AdminList';

import AddCandidate from './pages/rank2/candidate/AddCandidate';

import AddPerson from './pages/rank3/person/AddPerson';

import AddParty from './pages/rank2/party/AddParty';

import DatabaseView from './pages/rank2/DatabaseView';


import AboutUs from './components/AboutUs';

import Background from "./images/bak5.jpg";
import { Provider } from "react-redux";
import { Fragment } from "react";
import store from "./store";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";


// import { PublicRoute, PrivateRoute } from "react-private-public-route";
import  PrivateRoute  from "./components/PrivateRoutes/PrivateRoute";
import Authtoken from './utilities/Authtoken';
import { loadUser } from './Actions/auth';
import { LOGOUT } from './Actions/types';
import SideNavbar from './components/sidebar/SideNavbar';
import { Component } from 'react';
import DynamicLayout from './components/layout/DynamicLayout';
import ScrollTop from './components/layout/ScrollTop';

import Scanner from './pages/rank4/barCode/Scanner';
import VoteCandidate from './pages/rank4/voting/voteCandidate/VoteCandidate';
import VoteParty from './pages/rank4/voting/voteParty/VoteParty';
import AddDistricts from './pages/rank1/setting/AddDistricts';

import barChart from './pages/rank1/result/barChart';
import ContactUs from './components/ContactUs';
import Settings from './pages/rank1/setting/Settings';
import FreezeScreen from './pages/rank4/barCode/FreezeScreen';

import jwt_decode from "jwt-decode"

if (localStorage.token){
  Authtoken(localStorage.token);
}

const App = () => {
  const [userRole] = useState( localStorage.token ? jwt_decode(localStorage.token).role : 'Guest')

      useEffect(() => {
        store.dispatch(loadUser());




//make the admin completely loggedout
window.addEventListener("storage", () => {
  if (!localStorage.token) store.dispatch({ type: LOGOUT });
});
},
 []);


 //define toggle function
 const [isOpen ,setIsOpen] = useState(false);
  const toggle =() =>{
    setIsOpen(!isOpen);
  };

  function RoleBasedRoute(router) {
    debugger;
    switch (router.dynamicLayout) {
      case true:
        return (
          <>
            {userRole === router.role  ?
              
            <DynamicLayout exact path= {router.path} component={router.component} layout="SUB_NAV" />
    
            : <Route exact path="*" render={() => {window.location.href="404.html"}} />
            }
          </>
        );

      case false:
        return (
          <>
            {userRole === router.role  ?
              
            <Route exact path= {router.path} component={router.component} />
    
            : <Route exact path="*" render={() => {window.location.href="404.html"}} />
            }
          </>
        );
    
      default:
        return (
          <>
            <Route exact path="*" render={() => {window.location.href="404.html"}} />
          </>
        );
    }
    
    
  }
return (
  <Provider store={store}>
  <Router>
  <>
    <div >
    <GlobalStyle />
    {/* <Navbar toggle = {toggle} /> */}
      <Alert />
        <Switch>

         
          <Route path="/login" component={Login} />
         
          {/* role based routing */}
          {/* rank 1 routes */}
          <RoleBasedRoute path = "/rank1Home" component={Rank1Home} role={"Rank1Admin"} dynamicLayout= {true}/>
          <RoleBasedRoute path= "/setting" component={Settings} role={"Rank1Admin"} dynamicLayout= {true}/>
          <RoleBasedRoute path = "/adminList" component={AdminList} role={"Rank1Admin"} dynamicLayout= {true}/>
          <RoleBasedRoute path= "/barChart" component={barChart} role={"Rank1Admin"} dynamicLayout= {true}/>
          <RoleBasedRoute path= "/addDistricts" component={AddDistricts} role={"Rank1Admin"} dynamicLayout= {true}/>

          {/* rank 2 routes */}

          <RoleBasedRoute path = "/rank2Home" component={Rank2Home} role={"Rank2Admin"} dynamicLayout= {true}/>
          <RoleBasedRoute path = "/databaseView" component={DatabaseView} role={"Rank2Admin"} dynamicLayout= {true}/>
          <RoleBasedRoute path = "/addCandidate" component={AddCandidate} role={"Rank2Admin"} dynamicLayout= {true}/>
          <RoleBasedRoute path= "/addParty" component={AddParty} role={"Rank2Admin"} dynamicLayout= {true}/>
          {/* <RoleBasedRoute path= "/operator" component={OperaterLogIn} role={"Rank2Admin"}/>
          <RoleBasedRoute path= "/operatorView" component={OperatorView} role={"Rank2Admin"}/> */}
          <RoleBasedRoute path= "/settings" component={Settings} role={"Rank2Admin"} dynamicLayout= {true}/>
          <RoleBasedRoute path = "/adminList" component={AdminList} role={"Rank2Admin"} dynamicLayout= {true}/>
          
          {/* rank 3 routes */}
          <RoleBasedRoute path = "/rank3Home" component={Rank3Home} role={"Rank3Admin"} dynamicLayout= {true} />
          <RoleBasedRoute path= "/addPerson" component={AddPerson} role={"Rank3Admin"} dynamicLayout= {true}/>

          {/* rank 4 routes */}
          <RoleBasedRoute path = "/rank4Home" component={Rank4Home} role={"Rank4Admin"} dynamicLayout= {true}/>
          <Route path= "/scanner" component={Scanner} />
          {/* <RoleBasedRoute path= "/voteParty" component={VoteParty} role={"Rank4Admin"}/>
          <RoleBasedRoute path= "/voteCandidate" component={VoteCandidate} role={"Rank4Admin"}/> */}
          {/* <RoleBasedRoute path= "/freezeScreen" component={FreezeScreen} role={"Rank4Admin"}/> */}

          <Route path= "/voteParty" component={VoteParty}/>
         < Route path= "/voteCandidate" component={VoteCandidate}/>
         <Route path= "/freezeScreen" component={FreezeScreen}/>
        
         

          <DynamicLayout exact path="/aboutUs" component={AboutUs} layout="MAIN_NAV"/>
          <DynamicLayout exact path="/" component={Home} layout="MAIN_NAV"/>
          <DynamicLayout exact path="/home" component={Home}/>
          <DynamicLayout exact path= "/contactUs" component={ContactUs} layout="MAIN_NAV"/>

          {/* below 404 should be at the bottom of rote paths */}
          <Route exact path="*" render={() => {window.location.href="404.html"}} />
        </Switch>

    <CssBaseline />
    </div>
    <div>
    {/* <Footer/> */}
    </div>
    <ScrollTop/>
    </>
    </Router>
    </Provider>
  );
};
export default App;
