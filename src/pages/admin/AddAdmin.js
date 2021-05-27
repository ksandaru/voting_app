import { Button, Container, Grid, TextField, MenuItem, Select, InputLabel, FormControl, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { Component, useEffect } from 'react';


const styles = {
    root: {
        padding:"auto",
        margin: "50px 60px",
        minWidth: 230,
        height: "800",
        display:"flex",  
          
    }, 
    heading:{
        margin: "auto 100px",
        
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
        margin: "10px",//changed
    }
}
export default class AddAdmin extends Component {

    constructor(props){
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRank = this.onChangeRank.bind(this);
        this.onChangeCenter = this.onChangeCenter.bind(this);
        this.addAdmin = this.addAdmin.bind(this);

        this.state = {
            Name:'',
            Password:'',
            Rank:'',
            PollingCenter: '',
            disabled: true,
            obj: {}
        }
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

        if (e.target.value === 'Rank4Admin') {
            this.setState({disabled: false})
        }
        else{
            this.setState({
                disabled: true,
                obj: {
                    Name: this.state.Name,
                    Password: this.state.Password,
                },
            });
        }
        debugger;
    }
    onChangeCenter(e) {
        this.setState({
            PollingCenter: e.target.value,
            obj: {
                Name: this.state.Name,
                Password: this.state.Password,
                PollingCenter: e.target.value,
            },
        });
        debugger;
    }


    addAdmin=()=>{
        debugger;
        axios.post('https://localhost:5001/api/'+this.state.Rank, this.state.obj)
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
        debugger;
    }

    
    render() {
        return (
          <div className="add_admin_container">
            <Container maxWidth="sm" >
                <Typography style={styles.heading}>
                    <h2>CREATE NEW ADMIN</h2>
                    </Typography>
                <form onSubmit={this.addAdmin} autoComplete="off" noValidate style={styles.root}>
                    <Grid container>
                    
                        <Grid >
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
                                    <MenuItem value="Rank1Admin">Rank 1</MenuItem> 
                                    <MenuItem value="Rank2Admin">Rank 2</MenuItem> 
                                    <MenuItem value="Rank3Admin">Rank 3</MenuItem> 
                                    <MenuItem value="Rank4Admin">Rank 4</MenuItem> 
                                    </Select>
                            </FormControl>
                            
                            {
                            this.state.disabled? null :
                            <TextField 
                                name = "center"
                                variant = "outlined"
                                label = "Polling Center"
                                value = {this.state.PollingCenter}
                                onChange = {this.onChangeCenter}
                                style= {styles.textField}
                                disabled= {this.state.disabled}
                            />
                            }
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
                    </Grid>
                
                
                {/* <input name="name" placeholder="Name" onChange={this.onChangeName} value={this.state.Name} /> <br />
                <input name="password" placeholder="Password" onChange={this.onChangePassword} value={this.state.Password} /> <br />
                <input name="rank" placeholder="Rank" onChange={this.onChangeRank} value={this.state.Rank} /> <br />
                <button type="submit">Submit</button> */}
            </form>
            </Container>
            </div>
        )
    }
}