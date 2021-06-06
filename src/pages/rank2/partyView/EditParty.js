import { Button, Container, Grid, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
        margin: "30px auto",
        padding: 20,
    }
}

export default class EditParty extends Component {

    constructor(props){
        super(props)

        this.onChangePartyName = this.onChangePartyName.bind(this);
        this.onChangeLogo = this.onChangeLogo.bind(this);
        this.onChangeColor = this.onChangeColor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            partyName:'',
            logoSrc: '',
            logoFile: '',
            color:''
        }
    }

    componentDidMount() {debugger;
        axios.get('https://localhost:5001/api/party/'+this.props.user)
        .then(response => {
            this.setState({
                PartyName: response.data.partyName,
                logo: response.data.logo,
                logoFile: response.data.logoFile,
                logoSrc: response.data.logoSrc,
                Color: response.data.color
            });debugger;
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    onChangePartyName(e) {
        this.setState({
            PartyName: e.target.value
        });
    }
    onChangeColor(e) {
        this.setState({
            Color: e.target.value
        });
    }
    onChangeLogo(e) {
        e.preventDefault();
        debugger;
        if(e.target.files && e.target.files[0]){
            let logoFile = e.target.files[0];
            let reader = new FileReader();

            reader.onloadend =() => {
                    this.setState({
                        logoFile:logoFile,
                        logoSrc: reader.result
                    });
            };
            reader.readAsDataURL(logoFile);
        }

        else{
            this.setState({
                logoFile:this.state.logoFile,
                logoSrc: this.state.logoSrc
            });
        }
    }

    onSubmit= async (e) => {
        debugger;
        e.preventDefault();
        // const obj = {
        //     PartyName:this.state.PartyName,
        //     Logo: this.state.Logo,
        //     Color: this.state.Color
        // };
        const formData = new FormData()
        formData.append('partyName',this.state.PartyName)
        formData.append('logo',this.state.logo)
        formData.append('logoFile',this.state.logoFile)
        formData.append('color',this.state.Color)
        await axios.put('https://localhost:5001/api/party/'+this.props.user, formData)
        .then(res => {console.log(res.config.data);});
        debugger;
        this.props.close();
        
        // this.props.history.push('/personList');
        // debugger;
    }

    render() {
        return (
            <Container maxWidth="lg">
                <form onSubmit={this.onSubmit} autoComplete="off" noValidate style={styles.root}>
                    <Grid container>
                        <Grid item xs={6}>
                            <TextField
                                name = "partyName"
                                variant = "outlined"
                                label = "partyName"
                                value = {this.state.PartyName}
                                onChange = {this.onChangePartyName}
                                style= {styles.textField}
                            />
                            <TextField
                                name = "color"
                                variant = "outlined"
                                label = "color"
                                value = {this.state.Color}
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
                                    onClick= {this.props.close}
                                >
                                    Cancel
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
            </Container>
        )
    }
}
