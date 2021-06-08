import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../../Actions/alert";
import './Login.css';
import { login } from "../../Actions/auth";
import AdminList from "../../pages/rank1/admin/AdminList";
import ParticlesEffect from "../layout/ParticlesEffect";
import history from "../history";
import { withRouter } from 'react-router-dom';
import { SubButton } from "../SubButton";
import { AiOutlineHome } from 'react-icons/ai';
import Logo1 from '../../images/logo1.png';
const Login = ({ setAlert, login, isAuthenticated, user }) => {
  const [formData, setFromData] = useState({
    name: "",
    password: "",
  });

  const { name, password } = formData;

  const onChange = (e) =>
    setFromData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name && password) {
    login(name, password)
  }
        else{
        setAlert('Please fill empty fileds','warning');
        }
      }

    if (isAuthenticated) {
      if (user.role === "Rank1Admin")
        return <Redirect to="/rank1Home" />;
      else if (user.role == "Rank2Admin")
        return <Redirect to="/rank2Home" />
      else if (user.role == "Rank3Admin")
        return <Redirect to="/rank3Home" />
      else if (user.role == "Rank4Admin")
        return <Redirect to="/rank4Home" />
      else
        console.log(user.role);
    }
    
  



  return (
    <div className="LoginPage">  
    <Fragment>
      <section className="login-container">
      <div className="login_wrapper">
      <ParticlesEffect />
    <div className="text">
    <h1>WELCOME TO ELECTRONIC VOTING WEB PARTNER</h1>
    <img src={Logo1} alt="logo" width="200px" height="150px"/>
        
    </div>
    </div>
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user" /> Sign Into Admin Account
        </p>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <small className="form-text"> Username</small>
              <input
                type="text"
                placeholder="Enter Username"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
              />
            </div>
          <div className="form-group">
            <small className="form-text"> Password</small>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
            />
          </div>
          <input type="submit" className="btn" value="Login" />
          
        </form>
        <SubButton to='/home' primary= 'true'><AiOutlineHome/><span>Home</span></SubButton>
      </section>
     
    </Fragment>
    </div>
    
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  // use `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  setAlert:PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, { login,setAlert })(Login);
