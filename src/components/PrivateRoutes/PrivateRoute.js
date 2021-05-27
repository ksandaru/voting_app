import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect } from 'react-redux'
import PropTypes from 'prop-types'

const PrivateRoute = ({
   component: Component,
    auth:{isAuthenticated , loading},
     ...rest 
    }) => (
    <Route 
    {...rest}   
    render={props =>
        !isAuthenticated && !loading ?
        (<Redirect to='/login'/>
        ):(
        <Component {...props}/>)
    } 
        /> );

        PrivateRoute.propTypes={      
           auth:PropTypes.object.isRequired,
          }
          
          const mapStateToProps=state=>({
            // isAuthenticated: !!state.auth.uid
            auth:state.auth
          })

  export default connect(mapStateToProps)(PrivateRoute);


  //1...*********Didnot work**********

// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// export const PrivateRoute = ({ Component, ...props }) => {
//   const authenticated = JSON.parse(localStorage.authenticated || "false");

//   if (authenticated === true) {
//     return <Route exact {...props} component={Component} />;
//   } else {
//     return <Redirect to="/notfound" />;
//   }
// };




//2...*********Didnot work**********

// import React from 'react';
// import {connect} from 'react-redux';
// import { Route, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types'

// export const PrivateRoute = ({
//     isAuthenticated, 
//     component: Component,
//     ...rest
// }) => (
//     <Route {...rest} component={(props) => (
//         isAuthenticated ? (
//             <div>
//                 <Component {...props} />
//             </div>            
//         ): (
//             <Redirect to='/login' />
//         )
//     )} />
// )

// const mapStatetoProps = (state) => ({
//     isAuthenticated: !!state.auth.uid
// });

// export default connect(mapStatetoProps)(PrivateRoute);
