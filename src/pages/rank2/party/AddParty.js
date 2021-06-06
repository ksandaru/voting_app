
import { Button, Container, Grid, TextField, Paper, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import axios from 'axios';
import React, { Component, Fragment } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//import { Link } from 'react-router-dom';

import defaultPartyImg from '../../../images/image_placeholder.png'

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
    } 
}

export default class AddParty extends Component {

    constructor(props){
        super(props)

        this.onChangePartyName = this.onChangePartyName.bind(this);
        this.onChangeLogo = this.onChangeLogo.bind(this);
        this.onChangeColor = this.onChangeColor.bind(this);
        this.AddParty = this.addParty.bind(this);
        this.closeMessage = this.closeMessage.bind(this);
        this.formReset = this.formReset.bind(this);

        this.state = {
            partyName:'',
            logo: '',
            logoSrc: defaultPartyImg,
            logoFile: null,
            color:'',
            message: '',
            setMessage: false,
            validateError: {PartyName: true, Color: true, Logo: true},
            error: {PartyName: '', Color: '', Logo: ''},
        
        }
    } 

    closeMessage(){
        this.setState({
            setMessage: false,
            message: '',
        });
    }
    
    onChangePartyName(e) {
        let party = e.target.value;

        if (!party){
            this.setState(prevState => ({
                validateError: {...prevState.validateError, PartyName: true},
                error : {...prevState.error, PartyName : 'Cannot be empty'}
            })) 
        }
        if(party !== ''){
            if (!party.match(/^[a-zA-Z]+$/)){
                debugger;
                this.setState(prevState => ({
                    validateError: {...prevState.validateError, PartyName: true},
                    error : {...prevState.error, PartyName : 'Input a proper party name'}
                }))
            }
            else{
                debugger;
                this.setState(prevState => ({
                    validateError: {...prevState.validateError, PartyName: false},
                    error : {...prevState.error, PartyName : ''}
                }))
            }
        }

        this.setState({
            partyName: e.target.value
        });
    }

    onChangeLogo(e) {
        e.preventDefault();

        if(e.target.files && e.target.files[0]){
            let logoFile = e.target.files[0];
            let reader = new FileReader();
debugger;
            reader.onloadend =() => {debugger;
                    this.setState(prevState => ({
                        logoFile:logoFile,
                        logoSrc: reader.result,
                        validateError: {...prevState.validateError, Logo: false},
                        error : {...prevState.error, Logo : ''}
                        
                    }));
            };debugger;
            reader.readAsDataURL(logoFile);
        }

        else{debugger;
            this.setState(prevState => ({
                logoFile:null,
                logoSrc: defaultPartyImg,
                validateError: {...prevState.validateError, Logo: true},
                error : {...prevState.error, Logo : 'Add a logo'}
                
            }));
            debugger;
        }

    }
    onChangeColor(e) {
     //   debugger;
     let color = e.target.value;

        if (!color){
            this.setState(prevState => ({
                validateError: {...prevState.validateError, Color: true},
                error : {...prevState.error, Color : 'Cannot be empty'}
            })) 
        }
        else{
            debugger;
            this.setState(prevState => ({
                validateError: {...prevState.validateError, Color: false},
                error : {...prevState.error, Color : ''}
            }))
        }

        this.setState({
            color: e.target.value
        });
    }

   
    addParty=async (e)=>{
        debugger;
        const formData = new FormData()
        formData.append('partyName',this.state.partyName)
        formData.append('logo',this.state.logo)
        formData.append('logoFile',this.state.logoFile)
        formData.append('color',this.state.color)

        await axios.post('https://localhost:5001/api/party/', formData)
        .then(json => {
            if (json.statusText === 'Created'){
                debugger;
                console.log(json.statusText);
                debugger;
                this.setState({
                    setMessage: true,
                    message: 'Party Save Successfully',
                });
            }
            else{
                debugger;
                alert('Party not Saved');
            }
        });
    }
    formReset(){
        this.setState({
            partyName:'',
            logo: '',
            logoSrc: defaultPartyImg,
            logoFile: null,
            color:'',
            validateError: {PartyName: true, Color: true, Logo: true},
            error: {PartyName: '', Color: '', Logo: ''},

        })
    }

    render() {
        return (
            <div className="AddParty_page">
        <Fragment>
            <Container maxWidth="sm">
                <Paper className="add_party_container" style={styles.paper} elevation={3}>
                <Typography variant='h4' align='center'>ENTER PARTY DETAILS </Typography>
                    <Snackbar open={this.state.setMessage} autoHideDuration={3000} onClose={this.closeMessage}>
                        <Alert severity="success">
                            {this.state.message}
                        </Alert>
                    </Snackbar>
                    <form onSubmit={this.addParty} autoComplete="off" noValidate style={styles.root}>
                        <Grid container>
                            <Grid item xs={6}>
                                <TextField
                                    name = "Party Name"
                                    variant = "outlined"
                                    label = "Enter party name"
                                    value = {this.state.partyName}
                                    onChange = {this.onChangePartyName}
                                    style= {styles.textField}
                                />
                                {this.state.validateError.PartyName? 
                                <div>
                                    <h4 className= 'validate'>{this.state.error.PartyName}</h4> 
                                </div>
                                : null}
                                <TextField
                                    type = "color"
                                    name = "Color"
                                    variant = "outlined"
                                    label = "Select color"
                                    value = {this.state.color}
                                    onChange = {this.onChangeColor}
                                    style= {styles.textField}
                                />
                                {this.state.validateError.Color? 
                                <div>
                                    <h4 className= 'validate'>{this.state.error.Color}</h4> 
                                </div>
                                : null}
                                <div>
                                    <Button
                                        variant = "contained"
                                        color = "primary"
                                        type = "submit"
                                        style= {styles.sMargin}
                                        disabled= {this.state.validateError.PartyName
                                        || this.state.validateError.Color
                                        || this.state.validateError.Logo}
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
                                <Card className="root" >
                                    <CardActionArea>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Choose The Party Logo
                                        </Typography>

                                        {this.state.logoSrc ? (
                                            <img alt={this.state.logoSrc} src={this.state.logoSrc } />
                                            ) : null}
                                        <CardContent>
                                        <input  type="file" accept="image/*"  onChange = {this.onChangeLogo} />
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                {this.state.validateError.Logo? 
                                <div>
                                    <h4 className= 'validate'>{this.state.error.Logo}</h4> 
                                </div>
                                : null}
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
            </Fragment>
            </div>
        )
    }
}
