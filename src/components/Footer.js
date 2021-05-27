
  
import { Grid, IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";
import "./Footer.css";
import logo from '../images/logo1.png';

function Footer() {
  return (
     <>
        <Grid container className="footer__container">
          <Grid container md={4} sm={12} alignItems="center" className="center">
            <img src={logo} alt="logo" className="logo" />
            <span className="logo__name">EASY.ONLINE.</span>
            <div className="logo__description">
            The Goal of eVote is to inspire the 
            elections with the success story of 
            Web solutions.unique solution that    
            simply and conveniently helps to 
            engage people in the governance process.
            </div>
            <hr className="hr" />
          </Grid>

          <Grid container md sm={12}>
            <Grid className="col" xs={12} sm md>
              <div className="col__title">Products</div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Government Cloud
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Data embassy
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  e-cabinet
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  e-identity
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  smart-ID
                </a>
              </div>
            </Grid>
            <Grid className="col" xs={12} sm md>
              <div className="col__title">Features</div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Overview
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Design
                  
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Support
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Collaborate
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Security
                </a>
              </div>
            </Grid>
          </Grid>
          <Grid container md sm={12}>
            <Grid className="col" xs={12} sm md>
              <div className="col__title">Get Started</div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Guides
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Resources
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  E-services
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Downloads
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Docs
                </a>
              </div>
            </Grid>
            <Grid className="col" xs={12} sm md>
              <div className="col__title">About</div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Stories
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Vision
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Standards
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  Community
                </a>
              </div>
              <div style={{ marginBottom: "0.4rem" }}>
                <a href="www.google.com" className="col__links">
                  FAQ
                </a>
              </div>
            </Grid>
          </Grid>
          <Grid md={12} sm={12} className="social">
            <hr className="social__hr" />
            <div className="social__tags">
              <IconButton>
                <FacebookIcon className="social__tags__color" />
              </IconButton>
              <IconButton>
                <LinkedInIcon className="social__tags__color" />
              </IconButton>
              <IconButton>
                <TwitterIcon className="social__tags__color" />
              </IconButton>
              <IconButton>
                <GitHubIcon className="social__tags__color" />
              </IconButton>
            </div>
            <div className="social__copyrights">
              © 2021 TEAM VOTING SYSTEM. All Rights Reserved.
            </div>
          </Grid>
        </Grid>
     </>
    
  );
}

export default Footer;
