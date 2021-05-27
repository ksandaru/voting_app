import { Button, Container, Grid, TextField, MenuItem, Select, InputLabel, FormControl, Paper, Dialog, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react'

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
            logo: '',
            // logoSrc: defaultPartyImg,
            // logoFile: null,
            color:''
        }
    }

    componentDidMount() {debugger;
        axios.get('https://localhost:5001/api/party/'+this.props.user)
        .then(response => {
            this.setState({
                PartyName: response.data.partyName,
                Logo: response.data.logo,
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
    onChangeLogo(e) {
        this.setState({
            Logo: e.target.value
        });
    }

    onChangeColor(e) {
        debugger;
        this.setState({
            Color: e.target.value
        });
    }

    onSubmit(e) {
        debugger;
        e.preventDefault();
        const obj = {
            PartyName:this.state.PartyName,
            Logo: this.state.Logo,
            Color: this.state.Color
        };
        axios.put('https://localhost:5001/api/party/'+this.props.user, obj)
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
                                name = "logo"
                                variant = "outlined"
                                label = "Logo"
                                value = {this.state.Logo}
                                onChange = {this.onChangeLogo}
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
                    </Grid>
                </form>
            </Container>
        )
    }
}
