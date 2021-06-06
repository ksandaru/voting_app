import React, { Component } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode"
import { Grid, Container, Paper,  Button, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';


const styles = {
  root: {
        overflow: 'hidden',
      },
      paper : {
        margin: "30px auto",
        padding: 20,
      },
      card: {
        display: 'contents',
      },
      text: {
        alignSelf: 'center',
        paddingLeft: 30,
      },
      media: {
        paddingLeft: 20,
        padding: 10,
      },
}

export default class VoteParty extends Component {

  constructor(props) {
    super(props);

    
    this.closeMessage = this.closeMessage.bind(this);

    var today = new Date(),

    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ':' + today.getMilliseconds();

    this.state = {
      business: [],
      currentTime: time,
      personDist: '',
      personDiv: '',
      message: '',
      setMessage: false,
    };
}

closeMessage(){
  this.setState({
      setMessage: false,
      message: '',
  });
}


componentDidMount(){
    debugger;
    if(localStorage.token){
      var decoded = jwt_decode(localStorage.token);
      debugger;
      axios.get('https://localhost:5001/api/Rank4Admin/'+ decoded.id)
      .then(res => {
          this.setState({ 
            personDist: res.data.personDist,
            personDiv: res.data.personDiv,
          });
          debugger;
          const distId =  this.state.personDist;
          axios.get('https://localhost:5001/api/party/district/' + distId)
          .then(response => {
              this.setState({ 
                business: response.data
              });
              debugger;
          })
          .catch(function (error) {
              console.log(error);
          })
      })
      .catch(function (error) {
          console.log(error);
      })
  }
    
}

selectParty(e) {
  debugger;

  const obj = {
    // VoteID: '',
    Time: this.state.currentTime,
    Party_ID: parseInt(e.partyID),  
    personDist: parseInt(this.state.personDist),
    personDiv: parseInt(this.state.personDiv),
  };
  debugger;
  axios.post('https://localhost:5001/api/vote/', obj)
  .then(json => {
      if (json.statusText === 'Created'){
          debugger;
          console.log(json.statusText);
          debugger;
          this.setState({
            setMessage: true,
            message: 'Vote Save Successfully',
          });
      }
      else{
          debugger;
          this.setState({
            setMessage: true,
            message: 'Vote not Saved',
          });
      }
  });
debugger;
  // this.props.close();
  this.props.history.push('/voteCandidate', {party: e.partyID });
  
}

  render() {
    return (
      <Container style={styles.root}>
            <Paper style={styles.paper} elevation={3} >
              {/* <Grid  spacing={4}> */}
              <Snackbar open={this.state.setMessage} autoHideDuration={3000} onClose={this.closeMessage}>
                    <Alert severity="success">
                        {this.state.message}
                    </Alert>
              </Snackbar>
              <Grid>
              {this.state.business.map((tile, i) => (
                      <Button 
                        key={i}
                        onClick={() => this.selectParty(tile)}
                        variant="contained"
                        //style= {styles.card}
                      // onMouseOver={MouseOver} 
                      // onMouseOut={MouseOut}
                      >
                        <div style={{backgroundColor:tile.color, display :"flex", width: 1000}} >
                          <div style={styles.media}>
                          <img src={tile.logoSrc} alt={tile.logo} />
                          </div>
                          <div style={styles.text}>
                          <h1>{tile.partyName}</h1>
                          </div>
                        </div>
                      </Button>
                  ))}
              </Grid>
          </Paper>
      </Container>
    )
  }
}
