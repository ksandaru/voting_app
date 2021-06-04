import React, { Fragment } from 'react';
import { Grid, Button, makeStyles, Typography } from '@material-ui/core';
//import studentsPic from '../../img/bannerimg.png';
import SLmap from '../images/SL-1.png';
import cryptoo from '../images/cryptoo.png';
import data from '../images/data.png';
//import './MainContent.css';


const useStyles = makeStyles(theme => ({
  content: {
    fontSize: '1.2rem',
    textAlign:'justify',
    cursor:'pointer',
  },

  // mainview:{
  //   backgroundImage: `url(${process.env.PUBLIC_URL + '/Assets/vote.png'})`,
  //   marginTop:'10em',
  //    height: '50em',
  //    width: '40em',
  //   marginLeft:'5em',
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
    
  // },

  container: {
    // border: '4px solid rgb(150, 240, 240)',
    borderRadius:'10px',
    //  backgroundColor:'#13DDB0',
    WebkitBoxShadow:'2rem 2rem 2rem rgb(108 58 134 / 40%)',
    boxShadow:'2rem 2rem 2rem rgb(108 58 134 / 63%)',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    zIndex:'-1',
    cursor:'pointer',
    
     '&:hover': {
       background: '#35A7F8',
     },
  },
  // btn: {
  //   color: '#53F2F5',
  //   border: '1px solid #00ff71',
  // },
  // imgText: {
  //   color: '#457b9d',
  //   border: '1px solid white',
  //   width: '100%',
  //   textAlign: 'right',
  //   paddingRight: '10px',
  //   zIndex: '-1',
  //   fontSize: '2rem',
  //   padding: '90px',
  // },
}));

const MainContent = () => {
  const classes = useStyles();

  return (
    
    <div className="MainContent_background">
      <Fragment>
      <Grid container justify='space-around' alignItems='center'>
        <Grid md={5} item>
          <div className={classes.mainview}>
          </div>
        </Grid>

      
        {/* <Grid md={5} item>
          <div className={classes.container}>
            <Typography variant='h2'>Safe and Efficient way of Voting</Typography>
            <p className={classes.content}>
              This online voting system is safe to use in an Emergency situation
              and this is more efficient than marking and putting ballet paper.
              So,Be prepared for online voting.
            </p>
          </div>
        </Grid> */}
      </Grid>
      


   {/* Container 2 */}
   <Grid container justify='space-around' alignItems='center'>

<Grid md={5} item>
  <div className={classes.container}>
    <Typography variant='h2'>Transparent and verified system</Typography>
    <p className={classes.content}>
    This is not traditional technology being used to build an online system that permits voting,
     but innovative technology, purpose-built for elections,
      resulting in a true voting system that lives online.
       The difference means unmatched election integrity.
    </p>
  </div>

</Grid>

<Grid md={5} item>
  <div className='main'>
    <img
      style={{ width: '45rem', height: '40rem' }}
      src={cryptoo}
      alt=''
    />
 
  </div>
</Grid>

</Grid>


      {/* Container 3 */}
      <Grid container justify='space-around' alignItems='center'>

        <Grid md={5} item>
          <div className={classes.container}>
            <Typography variant='h2'>Easy to Manage Results</Typography>
            <p className={classes.content}>
              The Results can be generated as Graphically and Numerically.It Is
              easy to manage the results according to different references and 
              observe how behave with recent elections. 
            </p>
          </div>

        </Grid>

        <Grid md={5} item>
          <div className='main'>
            <img
              style={{ width: '45rem', height: '40rem' }}
              src={data}
              alt=''
            />
          </div>
        </Grid>
        
        
      </Grid>


      

 {/* Container 4 */}
 <Grid container justify='space-around' alignItems='center'>

<Grid md={5} item>
  <div className={classes.container}>
    <Typography variant='h2'>Voting Integrity</Typography>
    <p className={classes.content}>
    Voter can only vote once and voting choices remain anonymous.
     Each ballot has one, secure voting key and the vote is auditable,
      verifiable and can be independently observed.
    </p>
  </div>

</Grid>

<Grid md={5} item>
  <div className='main'>
    <img
      style={{ width: '45rem', height: '40rem' }}
      src={SLmap}
      alt=''
    />
  </div>
</Grid>
</Grid>
</Fragment> 
    </div>
    
  );
};

export default MainContent;
