import React, { Component } from 'react'
import axios from 'axios';
import { Grid, Container, Paper,  Button, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import jwt_decode from "jwt-decode"

const styles = {
    root: {
          overflow: 'hidden',
        },
        paper : {
          margin: "30px auto",
          padding: 20,
        },
        card: {
          display: 'flex',
          width: 1000
        },
        text: {
          alignSelf: 'center',
          paddingLeft: 30,
        },
        media: {
          paddingLeft: 20,
          padding: 10,
        },
        sMargin: {
          position: 'fixed',
          top: 100,
          right: 0,
          height: 600,
          width: 140,
        }
  }

export default class VoteCandidate extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.closeMessage = this.closeMessage.bind(this);

        var today = new Date(),

        time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ':' + today.getMilliseconds();
    
        this.state = {
          business: [],
          count : 0,
          currentTime: time,
          personDist: 1,
          personDiv: 1,
          PollingCenter: '',
          message: '',
          setMessage: false,
          // onScreen: true,
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
        this.setState({PollingCenter: decoded})
        debugger;
        axios.get('https://localhost:5001/api/Rank4Admin/'+ decoded.id)
        .then(res => {
            this.setState({ 
              personDist: res.data.personDist,
              personDiv: res.data.personDiv,
            });
            debugger;
            const distId =  this.state.personDist;
            axios.get('https://localhost:5001/api/candidate/GetByParty/'+ this.props.history.location.state.party + '/'+ distId)
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
        debugger;
      }
    }

    nextVote(e) {
      this.setState(( {count}) => ({
        count : count + 1
      }));
      this.setState({
        setMessage: true,
        message: 2-this.state.count +" votes left",
      });
      if (this.state.count < 3) {
        debugger;
        this.selectCandidate(e);
        if(this.state.count === 2){
          debugger;
          this.onSubmit();
        }
      }
    }
    
    selectCandidate(e) {
      debugger;
      const obj = {
        Time: this.state.currentTime,
        Candidate_ID: parseInt(e.candidateID),
        personDist: parseInt(this.state.personDist),
        personDiv: parseInt(this.state.personDiv),
      };
      debugger;
      axios.post('https://localhost:5001/api/voteCan/', obj)
      .then(json => {
          if (json.statusText === 'Created'){
            debugger;
            console.log(json.statusText);
            debugger;
            this.setState({
              setMessage: true,
              message: 'vote Saved Successfully',
            });
          }
          else{
              debugger;
              this.setState({
                setMessage: true,
                message: 'vote not Saved',
              });
          }
      });
    }

    onSubmit() {
      const obj = {
        ScanScreen: Boolean(true),
        VoteScreen: Boolean(false),
      };
      debugger;
      axios.put('https://localhost:5001/api/Rank4Admin/Screen/'+this.state.PollingCenter.id, obj)
      .then(res => {
          console.log(res.config.data);
          debugger;
          // this.props.history.push('/voteParty');
      })
      .catch(function (error) {
          console.log(error);
      })
      debugger;
    //   this.setState({
    //     onScreen: false,
    // });
    this.props.history.push('/freezeScreen');
    }
    
      render() {
        return (
        <Container style={styles.root} >
             <Paper style={styles.paper} elevation={3} >
                <Snackbar open={this.state.setMessage} autoHideDuration={3000} onClose={this.closeMessage}>
                    <Alert severity="success">
                        {this.state.message}
                    </Alert>
                </Snackbar>
                <Grid  spacing={4} >
                {this.state.business.map((tile, i) => (
                        <Button 
                          key={i}
                          onClick={() => this.nextVote(tile)}
                          variant="contained"
                        >
                          <div style={styles.card} >
                            <div style={styles.media}>
                            <img src={tile.imageSrc} alt={tile.image} />
                            </div>
                            <div style={styles.text}>
                            <h1>{tile.candidateName}</h1>
                            </div>
                          </div>
                        </Button>
                    ))}
                </Grid>
                <Grid>
                  {/* <Link to="/voteParty"> */}
                    <Button
                      variant = "contained"
                      color = "secondary"
                      onClick = {this.onSubmit}
                      style= {styles.sMargin}
                    >
                      <h2>Submit</h2>
                    </Button>
                  {/* </Link> */}
                </Grid>
            </Paper>
        </Container>
        )
      }
    }