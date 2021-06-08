import React from 'react';
import {BrowserRouter as Route} from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';
import SideNavbar from '../sidebar/SideNavbar';

// import Header from './../components/Header';
// import MainNavigation from '../components/MainNavigation';


const DynamicLayout = props => {
  const { component: RoutedComponent, layout, ...rest } = props;
  
    const actualRouteComponent = (
           <RoutedComponent {...props} />
      );


  
    switch (layout) {
      case 'MAIN_NAV': {
        return (
          <div>
            {/* <MainNavigation /> */}
            {/* <Header /> */}
            <Navbar />
            {actualRouteComponent}
            <Footer/>
          </div>
        )
      }
      case 'SUB_NAV': {
        return (
          <div>
            {/* <MainNavigation /> */}
            {/* <h2>Sub Nav</h2> */}
            {/* <Header /> */}
            <SideNavbar/>
            {actualRouteComponent}
          </div>
        )
      }
      default: {
        return (
          <div>
            {/* <MainNavigation /> */}
            {/* <Header /> */}
            <Navbar/>
            {actualRouteComponent}
            <Footer/>
          </div>
        )
      }
    }
  };    

  export default DynamicLayout;