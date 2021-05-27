import React, { Component, Fragment } from 'react'
import axios from 'axios';
import { Button, Container, Grid, TextField, MenuItem, Select, InputLabel, FormControl, Paper } from '@material-ui/core';

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
        margin: 8,
    },
    paper : {
        margin: "30px auto",
        padding: 20,
    } 
}

export default class PollingCenter extends Component {

    constructor(props){
        super(props)

        this.onChangeAdmin = this.onChangeAdmin.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            personDist: 0,
            personDiv: 0,
            scanScreen: true,
            voteScreen: false,
            admin:'',
            adOptions: [{ value: '', display:'Select Admin'}],
        }
    } 

    componentDidMount(){
        axios.get('https://localhost:5001/api/Admin/GetByRank/4')
        .then(response => {
            debugger;
            let AdfromApi = response.data.map(adOption =>{
                return { value: adOption.adminID, display: adOption.name}
            });
            this.setState({
                adOptions: [{ value: '', display:'Select Admin'}].concat(AdfromApi)
            });
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }
    onChangeAdmin(e) {
        this.setState({
            admin: e.target.value
        });
    }
    onSubmit=()=>{
        debugger;
        const obj = {
            personDist: 0,
            personDiv: 0,
            scanScreen: true,
            voteScreen: false,
            Admin_ID: this.state.admin,
        };
        debugger;
        axios.post('https://localhost:5001/api/pollingCenter/', obj)
        .then(json => {debugger;
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
            <div className="PollingCenter_page">
                <Fragment>
            <Container maxWidth="md">
                <Paper style={styles.paper} elevation={3}>
                    <h4>Enter Candidate Informations</h4>
                    <form onSubmit={this.onSubmit} autoComplete="off" noValidate style={styles.root}>
                        <Grid container>
                            <Grid item xs={6} >
                            <FormControl variant="outlined" style={styles.formControl}>
                                <InputLabel >Admin</InputLabel>
                                <Select
                                    value = {this.state.admin}
                                    onChange= {this.onChangeAdmin}
                                >
                                    {this.state.adOptions.map((adOption) => 
                                        <MenuItem key={adOption.value} value={adOption.value}>{adOption.display}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
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
                                    <h4>This for display purpose</h4>
                            {/* <Card className="root" >
                                    <CardActionArea>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Choose The Candidate Image
                                        </Typography>

                                        {this.state.imageSrc ? (
                                            <img alt={this.state.imageSrc} src={this.state.imageSrc} />
                                            ) : null}
                                        <CardContent>
                                        <input  type="file" accept="image/*"  onChange = {this.onChangeImage} />
                                        </CardContent>
                                    </CardActionArea>
                                </Card> */}
                                
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
