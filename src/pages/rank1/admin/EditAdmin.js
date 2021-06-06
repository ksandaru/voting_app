import { Button, Container, Grid, TextField, MenuItem, Select, InputLabel, FormControl } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react'

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

export default class EditAdmin extends Component {

    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.cancel = this.cancel.bind(this);

        this.state = {
            Name: '',
            Password: '',
            Rank: ''
        }
    }

    componentDidMount() {debugger;
        axios.get('https://localhost:5001/api/'+ this.props.table + '/' +this.props.user)
        .then(response => {
            this.setState({
                Name: response.data.name,
                Password: response.data.password,
            });debugger;
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            Password: e.target.value
        });
    }

    onSubmit(e) {
        debugger;
        e.preventDefault();
        const obj = {
            Id: this.state.adminID,
            Name: this.state.Name,
            Password: this.state.Password,
        };
        axios.put('https://localhost:5001/api/'+ this.props.table + '/' +this.props.user, obj)
        .then(res => {console.log(res.config.data);});
        debugger;
        this.props.close();
    }

    cancel(){
        this.props.close();
    }

    render() {
        return (
            <Container maxWidth="lg" >
                <form onSubmit={this.onSubmit} autoComplete="off" noValidate style={styles.root}>
                <Grid container>
                        <TextField
                            name = "name"
                            variant = "outlined"
                            label = "Name"
                            value = {this.state.Name}
                            onChange = {this.onChangeName}
                            style= {styles.textField}
                        />
                        <TextField
                            name = "password"
                            variant = "outlined"
                            label = "Password"
                            value = {this.state.Password}
                            onChange = {this.onChangePassword}
                            style= {styles.textField}
                        />
                </Grid>
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
                                onClick = {this.cancel}
                                style= {styles.sMargin}
                            >
                                Cancel
                            </Button>
                        </div>

                {/* <input name="name" placeholder="Name" onChange={this.onChangeName} value={this.state.Name} /> <br />
                <input name="password" placeholder="Password" onChange={this.onChangePassword} value={this.state.Password} /> <br />
                <input name="rank" placeholder="Rank" onChange={this.onChangeRank} value={this.state.Rank} /> <br />
                <button type="submit">Submit</button> */}
                </form>
            </Container>
        )
    }
}