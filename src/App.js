
import{useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch,NavLink, Link, Redirect } from 'react-router-dom';
//import './App.css';
//import Candidate from './pages/candidate/Candidate';
//import Party from './pages/party/Party';
import Home from './pages/home/Home';
//import HomeRank2 from './pages/rank2/HomeRank2';

import AdminList from './pages/admin/AdminList';
import AddAdmin from './pages/admin/AddAdmin';
import AdminTable from './pages/admin/AdminTable';
import EditAdmin from './pages/admin/EditAdmin';

import AddCandidate from './pages/candidate/AddCandidate';
import CandidateList from './pages/rank2/candidateView/CandidateList';
import CandidateTable from './pages/rank2/candidateView/CandidateTable';
import EditCandidate from './pages/rank2/candidateView/EditCandidate';

import AddPerson from './pages/person/AddPerson';
import PersonTable from './pages/rank2/personView/PersonTable';
import EditPerson from './pages/rank2/personView/EditPerson';
import PersonList from './pages/rank2/personView/PersonList';

import AddParty from './pages/party/AddParty';
import PartyList from './pages/rank2/partyView/PartyList';
import PartyTable from './pages/rank2/partyView/PartyTable';
import EditParty from './pages/rank2/partyView/EditParty';

import React, {useState} from 'react';
// import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Hero from './components/Hero';

import { SliderData } from './data/SliderData';
import GlobalStyle from './components/globalStyles';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './components/Theme';
import HomePolling from './pages/homePolling/HomePolling';
import Navbar from './components/Navbar';
import Rank1Home from './pages/home/Rank1Home';
import Rank2Home from './pages/home/Rank2Home';
import Rank3Home from './pages/home/Rank3Home';
import Rank4Home from './pages/home/Rank4Home';

import DatabaseView from './pages/rank2/DatabaseView';
import DataEntryMenu from './pages/rank2/DataEntryMenu';

import AboutUs from './components/AboutUs';

import Background from "./images/bak5.jpg";
import { Provider } from "react-redux";
import { Fragment } from "react";
import store from "./store";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";


// import { PublicRoute, PrivateRoute } from "react-private-public-route";
import  PrivateRoute  from "./components/PrivateRoutes/PrivateRoute";
import NotFound from './components/auth/NotFound';
import Authtoken from './utilities/Authtoken';
import { loadUser } from './Actions/auth';
import { LOGOUT } from './Actions/types';
import SideNavbar from './components/sidebar/SideNavbar';
import { Component } from 'react';
import DynamicLayout from './components/layout/DynamicLayout';
import ScrollTop from './components/layout/ScrollTop';

import Scanner from './pages/barCode/Scanner';
import VoteCandidate from './pages/rank4/voteCandidate/VoteCandidate';
import VoteParty from './pages/rank4/voteParty/VoteParty';
import AddDistricts from './pages/rank1/setting/AddDistricts';
import PollingCenter from './pages/rank1/pollingCenter/PollingCenter';
import barChart from './pages/rank1/result/barChart';
import ContactUs from './components/ContactUs';


if (localStorage.token){
  Authtoken(localStorage.token);
}

const App = () => {
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

return (
  <Provider store={store}>
  <Router>
    <>
    <div >
    <GlobalStyle />
    {/* <Navbar toggle = {toggle} /> */}
      <Alert />
        <Switch>
         
          {/* <Route exact path = "/home" component={Home} /> */}
          {/* <Route exact path = "/" component={Home} /> */}
          <Route path="/login" component={Login} />
          {/* make private below */}
          <DynamicLayout path = "/rank1Home" component={Rank1Home} layout="SUB_NAV" />
          <DynamicLayout path = "/rank2Home" component={Rank2Home} layout="SUB_NAV" />
          <DynamicLayout path = "/rank3Home" component={Rank3Home} layout="SUB_NAV" />
          <DynamicLayout path = "/rank4Home" component={Rank4Home} layout="SUB_NAV" />
          {/* <Route path = "/aboutUs" component={AboutUs} /> */}
          
          <DynamicLayout exact path="/aboutUs" component={AboutUs} layout="MAIN_NAV"/>
          <DynamicLayout exact path="/" component={Home} layout="MAIN_NAV"/>
          <DynamicLayout exact path="/home" component={Home}/>
          <DynamicLayout exact path="/adminList" component={AdminList} layout="SUB_NAV"/>
           <DynamicLayout exact path= "/contactUs" component={ContactUs} layout="MAIN_NAV"/> 

          <Route path = "/adminList" component={AdminList} />
          <Route path = "/addCandidate" component={AddCandidate} />
          <Route path = "/adminList" component={AdminList} />
          <Route path = "/myhome" component={NotFound} />


          <Route path= "/scanner" component={Scanner}/>
          <Route path= "/addDistricts" component={AddDistricts}/>
          <Route path= "/polCenter" component={PollingCenter}/>
          <Route path= "/barChart" component={barChart}/>


          <Route path= "/voteParty" component={VoteParty}/>
          <Route path= "/voteCandidate" component={VoteCandidate}/>


          <Route path= "/dataEntry" component={DataEntryMenu}/>
          <Route path = "/databaseView" component={DatabaseView} />
          <Route path = "/homePolling" component={HomePolling} />
          <Route path= "/addPerson" component={AddPerson}/>
          <DynamicLayout exact path= "/addParty" component={AddParty} layout="SUB_NAV"/>
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





