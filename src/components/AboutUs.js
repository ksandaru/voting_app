import React, { useEffect } from "react";
// IMPORTING SINGLE CONTAINER CHILDREN COMPONENT
import AboutDetailBox from "./AboutDetailBox";

// importing AOS for animations
import AOS from "aos";
import "aos/dist/aos.css";

// IMPORTING REACT-ICONS
import { GiCheckMark } from "react-icons/gi";
import ParticlesEffect from "./layout/ParticlesEffect";

const AboutUs = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div id="about" className="AboutPageContainer">
      
			<div className="row">
				<div
					data-aos="fade-left"
					data-aos-duration="1200"
					data-aos-offset="350"
					className="col-lg-6 col-md-12"
				>
					<h1
						data-aos="fade-left"
						data-aos-duration="1200"
						data-aos-offset="350"
						className="AboutTitle"
					>
						We Are The Leading Support of Electronic Voting of Future
					</h1>
					{/* <p
						data-aos="fade-left"
						data-aos-duration="1200"
						data-aos-offset="350"
						className="ADetailPara"
					>
						Thanks to a safe, convenient and flexible digital ecosystem,
             to become an unprecedented level of transparency in
              governance and built broad trust in its digital society.
					</p> */}
					<div
						data-aos="fade-left"
						data-aos-duration="1200"
						data-aos-offset="350"
						className="row"
					>
						<div className="col-6">
							<ul>
								<li>
									<GiCheckMark className="AboutListIcon" /> Cryptography
								</li>
								<li>
									<GiCheckMark className="AboutListIcon" /> Private Cloud
								</li>
								<li>
									<GiCheckMark className="AboutListIcon" /> Accuracy
								</li>
							</ul>
						</div>
						<div
							data-aos="fade-left"
							data-aos-duration="500"
							data-aos-offset="350"
							className="col-6"
						>
							<ul>
								<li>
									<GiCheckMark className="AboutListIcon" /> Control
								</li>
								<li>
									<GiCheckMark className="AboutListIcon" /> Visual Reviews
								</li>
								<li>
									<GiCheckMark className="AboutListIcon" /> Result Generation
								</li>
							</ul>
						</div>
					</div>
					{/* <div
						data-aos="fade-left"
						data-aos-duration="1200"
						data-aos-offset="200"
						className="button6th_container"
					>
						<button className="btn6th">
							<span>Learn more!</span>
						</button>
					</div> */}
				</div>
				<div
					data-aos="fade-right"
					data-aos-duration="500"
					data-aos-offset="350"
					className="AboutUS-RSideContainer col-lg-6 col-md-12"
				>
					<div className="row">
						{/* Single Box Component */}
						<AboutDetailBox
							Quantity="4 Students"
							Detail="Web Development"
						/>
						<AboutDetailBox Quantity="React.js" Detail="Library for FrontEnd" />
						<AboutDetailBox Quantity="ASP.Net Core" Detail="BackEnd Development" />
						<AboutDetailBox
							Quantity="MySQL"
							Detail="Database Support"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;






























// import React from 'react';


// class AboutUs extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { color: "#000" }//this constructor line to make a different background color for this component
//   }
//   render(){
//   return (
//     <div style={{ background: this.state.color }} >
//       <div className="about">
// 	<img src="https://scessila.sirv.com/portfolio/quote.svg" alt="Hello"/>
// 	<h2>Hello World</h2>
// 	<section className="about-content">
// 	  <p data-aos="fade-up">I’m an enthusiastic web developer and UI/UX designer currently shaping the future of design in Nigeria. I am passionate about creating user centric, delightful and human experiences.</p>
// 	  <p data-aos="fade-up">With about a year of experience, I’ve enjoyed designing and developing web applications</p>
// 	  <p data-aos='fade-up'>If you'd like to talk about a project you want help with or need an advice web design, , just drop me a message at <a href="mailto:emmanuelstephen024@gmail.com">emmanuelstephen024@gmail.com</a> . I'm currently AVAILABLE to work on new (and cool) ideas and if you’ve got one of those, hit me up.</p>
// 	<h2 className="skillset" data-aos="fade-up">MY SKILLSETS</h2>
// 	<div className="skill">
// 	  <h1 data-aos="fade-up">Frontend Web</h1>
// 	  <ul>
// 	    <li data-aos="fade-down-left">
// 	      <i className="fa fa-html5"></i>
// 	      <p>HTML</p>
// 	    </li>
// 	    <li data-aos="fade-up-right">
// 	      <i className="fa fa-css3"></i>
// 	      <p>CSS</p>
// 	    </li>
// 	    <li data-aos="fade-down-left">
// 	      <i className="fab fa-bootstrap"></i>
// 	      <p>Bootstrap</p>
// 	    </li>
// 	    <li data-aos="fade-up-right">
// 	      <i className="fab fa-js"></i>
// 	      <p>Javascript</p>
// 	    </li>
// 	    <li data-aos="fade-down-left">
// 	      <i className="fab fa-react"></i>
// 	      <p>React.JS</p>
// 	    </li>
// 	    <li data-aos="fade-up-right">
// 	      <i className="fab fa-js"></i>
// 	      <p>jQuery</p>
// 	    </li>
//           </ul>
//         </div>
// 	<div className="skill">                             <h1>Backend Web</h1>      
// 	  <ul>                  
// 	    <li data-aos="fade-down-left">
// 	      <i className="fab fa-python"></i>
// 	      <p>Python (Django)</p>
// 	    </li>     
// 	    <li data-aos="fade-up-right">
// 	      <i className="fab fa-node-js"></i>
// 	      <p>NodeJS</p>
// 	    </li>   
// 	    <li data-aos="fade-down-left">
// 	      <i className="fab fa-js"></i>
// 	      <p>ExpressJS</p>
// 	    </li>    
//           </ul>                                           </div>
// 	<div className="skill">       
// 	  <h1 data-aos="fade-up">Database</h1>        
// 	  <ul>  
// 	    <li data-aos="fade-down-left">
// 	      <i className="fa fa-database"></i>
// 	      <p>MongoDB</p>
// 	    </li>
//           </ul>                                           </div>
// 	<div className="skill">                             <h1 data-aos="fade-up">Design</h1>    
// 	  <ul>   
// 	    <li data-aos="fade-down-left">
// 	      <i className="fab fa-figma"></i>
// 	      <p>Figma</p>
// 	    </li>  
// 	  </ul>     
// 	</div>

// 	</section>
//       </div>
//     </div>
//   )
// }
// }

// export default AboutUs





















// // import React from 'react';
// // import {  makeStyles } from '@material-ui/core/styles';
// // import Button from '@material-ui/core/Button';
// // import Typography from '@material-ui/core/Typography';
// // import Fade from 'react-reveal/Fade';
// // import { BrowserRouter as Router, Route, Switch,NavLink, Link, Redirect } from 'react-router-dom';
// // import { ButtonBase } from '@material-ui/core';
// // import Flip from 'react-reveal/Flip';
// // import Footer from './Footer';
// // export const images = [
// //   {
// //     //url: '/static/images/grid-list/breakfast.jpg',
// //     url: 'https://ak.picdn.net/shutterstock/videos/3769277/thumb/1.jpg',
// //     title: 'ABOUT US',
// //     body:'',
// //     width: '100%',
   
    
// //   },
 
// // ];

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     minWidth: 300,
// //     maxHeight:'800',
// //     width: '100%',
// //     backgroundImage: 'linear-gradient(45deg, #FFC312, #EE5A24, #00a8ff)',
// //   },
// //   image: {
// //     position: 'relative',
// //     height: 400,
// //     [theme.breakpoints.down('xs')]: {
// //       width: '100% !important', // Overrides inline-style
// //       height: 50,
   
// //   },
// //   focusVisible: {},
  
// //   imageSrc: {
// //     position: 'absolute',
// //     left: 0,
// //     right: 0,
// //     top: 0,
// //     bottom: 0,
// //     backgroundSize: 'cover',
// //     backgroundPosition: 'center 40%',
// //   },
// //   imageBackdrop: {
// //     position: 'absolute',
// //     left: 0,
// //     right: 0,
// //     top: 0,
// //     bottom: 0,
// //     backgroundColor: theme.palette.common.black,
// //     opacity: 0.4,
// //     transition: theme.transitions.create('opacity'),
// //   },
// //   imageTitle: {
     
// //     position: 'relative',
// //     fontSize:'30px',
// //     padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
// //   },

// //   imageBody: {
     
// //     position: 'relative',
// //     fontSize:'30px',
// //     padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
// //   },


// // },
// // }));

// // export default function AboutUs() {
// //   const classes = useStyles();

// //   return (
// //     <div className={classes.root}>
// //       {images.map((image) => (
// //         <ButtonBase
// //           focusRipple
// //           key={image.title}
// //           className={classes.image}
// //           focusVisibleClassName={classes.focusVisible}
// //           style={{
// //             width: image.width,
// //           }}
// //         >
// //           <span
// //             className={classes.imageSrc}
// //             style={{
// //               backgroundImage: `url(${image.url})`,
// //             }}
// //           />
// //           <span className={classes.imageBackdrop} />
// //           <span className={classes.imageButton}>
// //             <Typography 
// //               component="span"
// //               variant="h3"
// //               color="inherit"
// //               className={classes.imageTitle}
// //             >
// //               {image.title}
              
// //             </Typography>
// // <div>
// //             <Typography 
// //               component="div"
// //               variant="body"
// //               color="inherit"
// //               align="center"
// //               style={{whiteSpace: 'pre-line'}}
// //               className={classes.imageBody}
             
// //             > 
// //                {image.body}
              
              
// //             </Typography>
// //             </div>
// //           </span>
// //         </ButtonBase>
// //       ))}
// //     </div>
    
// //   );
// // }


