
import { Button, Container, Grid, TextField, MenuItem, Select, InputLabel, FormControl, Paper } from '@material-ui/core';
import axios from 'axios';
import React, { Component, Fragment } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//import { Link } from 'react-router-dom';

import defaultPartyImg from '../../images/image_placeholder.png'

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
        margin: "30px auto",
    },
    paper : {
        margin: "60px auto",
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

        this.state = {
            partyName:'',
            partyVotecount:0,
            logo: '',
            logoSrc: defaultPartyImg,
            logoFile: null,
            color:''
        }
    } 

    
    onChangePartyName(e) {
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
                    this.setState({
                        logoFile:logoFile,
                        logoSrc: reader.result
                    });
            };debugger;
            reader.readAsDataURL(logoFile);
        }

        else{
            this.setState({
                logoFile:null,
                logoSrc: defaultPartyImg
            });
        }

    }
    onChangeColor(e) {
     //   debugger;
        this.setState({
            color: e.target.value
        });
    }

   
    addParty=async (e)=>{
        debugger;
        const formData = new FormData()
        formData.append('partyName',this.state.partyName)
        formData.append('partyVotecount',this.state.partyVotecount)
        formData.append('logo',this.state.logo)
        formData.append('logoFile',this.state.logoFile)
        formData.append('color',this.state.color)

        await axios.post('https://localhost:5001/api/party/', formData)
        .then(json => {
            if (json.statusText == 'Created'){
                debugger;
                console.log(json.statusText);
                debugger;
                alert("Data Save Successfully");
            }
            else{
                debugger;
                alert('Data not Saved');
            }
        });
    }

    render() {
        return (
    <div className="AddParty_page">
        <Fragment>
            <Container maxWidth="sm">
                <Paper style={styles.paper} elevation={3}>
                <Typography variant='h4' align='center'>Enter Party Information </Typography>
                    <form onSubmit={this.addParty} autoComplete="off" noValidate style={styles.root}>
                        <Grid container>
                            <Grid item xs={6}>
                                <TextField
                                    name = "partyName"
                                    variant = "outlined"
                                    label = "PartyName"
                                    value = {this.state.partyName}
                                    onChange = {this.onChangePartyName}
                                    style= {styles.textField}
                                />
                                <TextField
                                    name = "color"
                                    variant = "outlined"
                                    label = "Color"
                                    value = {this.state.color}
                                    onChange = {this.onChangeColor}
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
