import { Button, Container, Grid, TextField, MenuItem, Select, InputLabel, FormControl, Paper, Dialog, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
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
        this.onChangeRank = this.onChangeRank.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name: '',
            Password: '',
            Rank: ''
        }
    }

    componentDidMount() {debugger;
        axios.get('https://localhost:5001/api/admin/'+this.props.user)
        .then(response => {
            this.setState({
                Name: response.data.name,
                Password: response.data.password,
                Rank: response.data.rank
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

    onChangeRank(e) {
        this.setState({
            Rank: e.target.value
        });
    }

    onSubmit(e) {
        debugger;
        e.preventDefault();
        const obj = {
            Id: this.state.adminID,
            Name: this.state.Name,
            Password: this.state.Password,
            Rank: parseInt(this.state.Rank)
        };
        axios.put('https://localhost:5001/api/admin/'+this.props.user, obj)
        .then(res => {console.log(res.config.data);});
        debugger;
        this.props.close();
        // this.props.history.push('/adminList');
        // debugger;
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
                        <FormControl variant="outlined" style={styles.formControl}>
                            <InputLabel >Rank</InputLabel>
                            <Select
                                name= "rank"
                                value = {this.state.Rank}
                                onChange= {this.onChangeRank}
                            >
                                <MenuItem value="">Select Rank</MenuItem>  
                                <MenuItem value="1">Rank 1</MenuItem> 
                                <MenuItem value="2">Rank 2</MenuItem> 
                                <MenuItem value="3">Rank 3</MenuItem> 
                                <MenuItem value="4">Rank 4</MenuItem> 
                                </Select>
                        </FormControl>
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
                                style= {styles.sMargin}
                            >
                                Reset
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
