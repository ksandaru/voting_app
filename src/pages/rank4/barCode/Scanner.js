import { Button, Container, Grid, TextField, Paper, Snackbar} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import axios from 'axios';
import React, { Component } from 'react'
import jwt_decode from "jwt-decode"


const styles = {
    root: {
          margin: "30px auto",
          minWidth: 230,
    },
    formControl: {
        margin: "10px auto",
        minWidth: 230,
    },
    textField: {
        margin: "10px auto",
        width: 230,
    },
    sMargin:{
        margin: "10px",
    },
    paper : {
        margin: "30px auto",
        padding: 20,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
    
}

export default class Scanner extends Component {

    constructor(props){
        super(props)

        this.onChangeBarcode = this.onChangeBarcode.bind(this);
        this.checkPerson = this.checkPerson.bind(this);
         // this.findDistrict = this.findDistrict.bind(this);
        this.allowVote = this.allowVote.bind(this);
        this.screen = this.screen.bind(this);
        this.closeMessage = this.closeMessage.bind(this);
        this.formReset = this.formReset.bind(this);

        this.state = {
            barcode:'',
            NIC: '',
            SerialNo: '',
            GND: '',
            Voted: true,
            Division: '',
            District: '',
            PollingCenter: '',
            onScreen: '',
            message: '',
            setMessage: false,
        }
    }
    
    closeMessage(){
        this.setState({
            setMessage: false,
            message: '',
        });
    }

    componentDidMount(){
       
        debugger;
        this.onget();
        setInterval(this.screen,2000);
    }

    screen(){
        debugger;
        axios.get('https://localhost:5001/api/Rank4Admin/'+ this.state.PollingCenter.id)
        .then(res => {debugger;
            this.setState({
                onScreen: res.data.scanScreen,
            });
            debugger;
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    onget(){
        debugger;
        if(localStorage.token){
            var decoded = jwt_decode(localStorage.token);
            this.setState({PollingCenter: decoded})
        }
        debugger;
        axios.get('https://localhost:5001/api/Rank4Admin/'+ decoded.id)
            .then(res => {debugger;
                this.setState({
                    onScreen: res.data.scanScreen,
                });
                debugger;
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    onChangeBarcode(e) {debugger;
        this.setState({
            barcode: e.target.value
        });
    }

    checkPerson(e) {
        debugger;
        e.preventDefault();
        axios.get('https://localhost:5001/api/person/'+this.state.barcode)
        .then(response => {
            debugger;
            this.setState({
                NIC: response.data.nic,
                SerialNo: response.data.serialNo,
                GND: response.data.gnd,
                Voted: response.data.voted
            });
            debugger;
            console.log(response.data);

            if (this.state.Voted === false) {
                this.setState({
                    setMessage: true,
                    message: this.state.NIC + ' is eligible to vote',
                });
            } else {
                this.setState({
                    setMessage: true,
                    message: 'Already Voted',
                });
            }
            
            axios.get('https://localhost:5001/api/GNDivision/'+response.data.gnd)
            .then(resp => {debugger;
                this.setState({
                    Division: resp.data.pD_ID,
                });
                debugger;
                const divId = resp.data.pD_ID;
                axios.get('https://localhost:5001/api/Division/'+ divId)
                .then(res => {debugger;
                    this.setState({
                        
                        District: res.data.eD_ID,
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
        })
        .catch(function (error) {
            debugger;
            console.log(error);
            // this.setState({
            //     setMessage: true,
            //     message: 'Not eligible to vote',
            // });
            alert('Not eligible to vote');
        });
        debugger;
        // this.findDistrict();
    }

    allowVote(e){
        debugger;
        e.preventDefault();
        
        // window.alert('allowed');
        this.setState({
                setMessage: true,
                message: this.state.NIC + 'allowed to vote',
            });
        const obj = {
            PersonDist: parseInt(this.state.District),
            PersonDiv: parseInt(this.state.Division),
            ScanScreen: Boolean(false),
            VoteScreen: Boolean(true),
        };
        debugger;
        axios.put('https://localhost:5001/api/Rank4Admin/State/'+this.state.PollingCenter.id, obj)
        .then(res => {
            console.log(res.config.data);
            debugger;
        })
        .catch(function (error) {
            console.log(error);
        })
        debugger;
        const obj1 = {
            NIC: parseInt(this.state.NIC),
            SerialNo: parseInt(this.state.SerialNo),
            Voted: Boolean(true),
            GND: parseInt(this.state.GND)
        };
        debugger;
        axios.put('https://localhost:5001/api/person/'+this.state.NIC, obj1)
        .then(res => {
            console.log(res.config.data);
            debugger;
        })
        .catch(function (error) {
            console.log(error);
            debugger;
        });
        this.setState({
            onScreen: false,
            Voted: true,
        });
        debugger;
    }

    formReset(){
        this.setState({
            barcode: ''
        })
    }

    render() {
        return (
            <div>
                {this.state.onScreen?
                <Container maxWidth="sm">
                <Paper style={styles.paper} elevation={3}>
                <h4>Scan barcode to verify person</h4>
                <Snackbar open={this.state.setMessage} autoHideDuration={6000} onClose={this.closeMessage} >
                    <Alert severity="success" style={{ background: '#4ff398', color: '#060b26' }}>
                        {this.state.message}
                    </Alert>
                </Snackbar>
                <form onSubmit={this.checkPerson} autoComplete="off" noValidate style={styles.root}>
                    <Grid container>
                        <Grid item xs={6}>
                            <TextField
                                name = "nic"
                                variant = "outlined"
                                label = "Enter NIC"
                                value = {this.state.barcode}
                                onChange = {this.onChangeBarcode}
                                style= {styles.textField}
                            />
                            
                            <div>
                                <Button
                                    variant = "contained"
                                    color = "primary"
                                    type = "submit"
                                    style= {styles.sMargin}
                                >
                                Submit
                                </Button>
                                <Button
                                    variant = "contained"
                                    onClick = {this.formReset}
                                    style= {styles.sMargin}
                                >
                                    Reset
                                </Button>
                            </div> 
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name = "nic"
                                variant = "outlined"
                                label = "Read NIC"
                                value = {this.state.NIC}
                                style= {styles.textField}
                                disabled= "true"
                                // style={{color: "#001482"}}
                            />
                            <TextField
                                name = "nic"
                                variant = "outlined"
                                label = "Serial No"
                                value = {this.state.SerialNo}
                                style= {styles.textField}
                                disabled= "true"
                            />
                            <TextField
                                name = "nic"
                                variant = "outlined"
                                label = "Grama Niladhari Division"
                                value = {this.state.GND}
                                style= {styles.textField}
                                disabled= "true"
                            />
                            <TextField
                                name = "nic"
                                variant = "outlined"
                                label = "Voted ?"
                                value = {this.state.Voted}
                                style= {styles.textField}
                                disabled= "true"
                            />
                        </Grid>
                        <div>
                            <Button
                                variant = "contained"
                                color = "primary"
                                style= {styles.sMargin}
                                onClick= {this.allowVote}
                                disabled={this.state.Voted}
                            >
                                Allow Vote
                            </Button>                    
                        </div>
                    </Grid>       
                
                
                {/* <input name="name" placeholder="Name" onChange={this.onChangeName} value={this.state.Name} /> <br />
                <input name="password" placeholder="Password" onChange={this.onChangePassword} value={this.state.Password} /> <br />
                <input name="rank" placeholder="Rank" onChange={this.onChangeRank} value={this.state.Rank} /> <br />
                <button type="submit">Submit</button> */}
            </form>
                </Paper>
            </Container>
            :<div>
                <Container style={styles.root}>
                    <Paper>
                        <h1>Scanner screen locked</h1>
                    </Paper>
                </Container>
            </div>
            }
            </div>
        )
    }
}
