import React, { Fragment } from 'react';
import {Link} from "react-router-dom"



class IconsGrid extends React.Component {
  constructor(props) {
    super(props)
    this.text = "eSolution • eWorld"
    this.state = {text:"", index:0}
    //this.state = { color: "#282c34" }//this constructor line to make a different background color for this component
  }


  
  componentDidMount() {
    this.timerID = setInterval( () => {this.animateText()}, 400)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  animateText = () => {
      if (this.state.index === 23) {
      setTimeout(() => {
	this.setState({index:0})
      },2000)
    }
    this.setState({
      index:this.state.index + 1,
      text:this.text.slice(0,this.state.index)
    })
  }
  render() {
    return (
      <div className="banner">
        <Fragment>
        <div className="name">
    	  <h2>MEET THE FEATURES <br /> eVote</h2>
        </div>

        <div className="anime-text">
	  <small>{this.state.text}</small>
	  <i class="fa fa-i-cursor" aria-hidden="true"></i>
	</div>

        <div className="me">
	  <p data-aos='fade-up'>The web app is developed with React.js and ASP.Net Core for the purpose of a Online voting demonstration in the covid-19 season.</p>
        </div>
        <div className="learn-more" data-aos='fade-up'>
  	  <p>Learn <Link className="a-link" to="/aboutUs">More about us</Link> or <Link className="a-link" to="/contactUs">Contact Us</Link></p>
        </div>
        </Fragment>
      </div>
    
    )
  }
}

export default IconsGrid


















// import { Card, CardActionArea, CardContent, Grid, makeStyles } from '@material-ui/core';
// import React from 'react';
// //import{ Link} from 'react-router-dom';
// //import Link from '@material-ui/core/Link';
// // import {
// //   FaMoneyBillWave,
// //   FaPhoenixFramework,
// //   FaUserGraduate,
// // } from 'react-icons/fa';
// // import { GiPayMoney, GiSpellBook } from 'react-icons/gi';


// import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';

// const useStyles = makeStyles(theme => ({
//   iconsGridContainer: {
//     color: 'yellow',
//     background: '#272C34',
//     paddingTop: '20px',
//   },

//   card_1: {
//     textAlign: 'center',
//     marginBottom: '20px',
//     '&:hover': {
//       background: 'white',
//     // marginTop: '-70px',
//     // height: '150px',
//     // marginBottom: '20px',
//     // background: '#264653',
//     // textAlign: 'center',
//     // '&:hover': {
//     //   background: 'black',
//     },
//   },

//   card_2_3: {
//     textAlign: 'center',
//     marginBottom: '20px',
//     '&:hover': {
//       background: 'white',
//     },
//   },

  

//   icon_1: {
//     fontSize: '4rem',
//     textAlign: 'center',
//     marginRight: '80px',
//     marginLeft: '100px',
//     color: '#C545F0',
//   },
// }));

// const IconsGrid = () => {
//   const classes = useStyles();
//   return (
//     <>
//       <Grid
//         className={classes.iconsGridContainer}
//         container
//         direction='row'
//         justify='space-evenly'>




//         <Grid item xs={12} md={3}>
//           <Card  elevation={0} className={classes.card_1}>
//             <CardActionArea  >                  
//             <CardContent>
//               <div>
//                 <div>
//                   <CloudOutlinedIcon className={classes.icon_1} />
//                 </div>
//                 <div>
//                   <h3>Database</h3>
//                 </div>
//               </div>
//             </CardContent>
//             </CardActionArea>
//           </Card>
//         </Grid>


//         <Grid item xs={12} md={3}>
//           <Card className={classes.card_2_3}>
//           <CardActionArea  >  
//             <CardContent>
//               <div className={classes.card_2_3_parent}>
//                 <div>
//                   <LocationOnOutlinedIcon className={classes.icon_1} />
//                 </div>
//                 <div>
//                   <h3>Locations</h3>
//                 </div>
//               </div>
//             </CardContent>
//             </CardActionArea>
//           </Card>
//         </Grid>

        
//         <Grid item xs={12} md={3}>
//           <Card className={classes.card_2_3}>
//           <CardActionArea >  
//             <CardContent>
//               <div className={classes.card_2_3_parent}>
//                 <div>
//                   <InsertChartOutlinedIcon className={classes.icon_1} />
//                 </div>
//                 <div>
//                   <h3>Results</h3>
//                 </div>
//               </div>
//             </CardContent>
//             </CardActionArea>
//           </Card>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default IconsGrid;
