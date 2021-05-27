import { Button, Container, Grid, TextField, MenuItem, Select, InputLabel, FormControl, Paper, InputAdornment } from '@material-ui/core';
import axios from 'axios';
import React, { Component, Fragment } from 'react'

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

export default class AddDistricts extends Component {

    constructor(props){
        super(props)

        this.onChangeDistrict = this.onChangeDistrict.bind(this);
        this.onChangeDistricts = this.onChangeDistricts.bind(this);
        this.onChangeDivision = this.onChangeDivision.bind(this);
        this.onChangeGNDivision = this.onChangeGNDivision.bind(this);
        this.AddDistrict = this.AddDistrict.bind(this);
        this.AddDivision = this.AddDivision.bind(this);
        this.AddGNDivision = this.AddGNDivision.bind(this);

        this.state = {
            district:'',
            disctOptions: [{ value: '', display:'Select District'}],
            division: '',
            divOptions: [{ value: '', display:'Select Division'}],
            gndivision:'',
        }
    } 

    componentDidMount(){
        axios.get('https://localhost:5001/api/District/')
        .then(response => {
            debugger;
            let DisctfromApi = response.data.map(disctOption =>{
                return { value: disctOption.id, display: disctOption.name}
            });
            this.setState({
                disctOptions: [{ value: '', display:'Select District'}].concat(DisctfromApi)
            });
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }
    onChangeDistrict(e) {
        this.setState({
            district: e.target.value
        });
    }

    onChangeDistricts(e) {
        this.setState({
            district: e.target.value
        });
        debugger;
        axios.get('https://localhost:5001/api/Division/GetByDistrict/' + e.target.value)
            .then(response => {
                debugger;
                let DivfromApi = response.data.map(divOption =>{
                    return { value: divOption.id, display: divOption.name}
                });
                this.setState({
                    divOptions: [{ value: '', display:'Select Division'}].concat(DivfromApi)
                });
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    onChangeDivision(e) {
        this.setState({
            division: e.target.value
        });
    }
    onChangeGNDivision(e) {
        this.setState({
            gndivision: e.target.value
        });
    }
    AddDistrict=()=>{
        debugger;
        const obj = {
            Name: this.state.district,
        };
        debugger;
        axios.post('https://localhost:5001/api/district/', obj)
        .then(json => {debugger;
            if (json.statusText == 'Created'){
                debugger;
                console.log(json.statusText);
                debugger;
                this.setState({
                    district: ''
                });
                alert("Data Save Successfully");
            }
            else{
                debugger;
                alert('Data not Saved');
            }
        });
        debugger;
    }
    AddDivision=()=>{
        debugger;
        const obj = {
            Name: this.state.division,
            ED_ID: parseInt(this.state.district)
        };
        debugger;
        axios.post('https://localhost:5001/api/division/', obj)
        .then(json => {debugger;
            if (json.statusText == 'Created'){
                debugger;
                console.log(json.statusText);
                debugger;
                this.setState({
                    division: ''
                });
                alert("Data Save Successfully");
            }
            else{
                debugger;
                alert('Data not Saved');
            }
        });
        debugger;
    }
    AddGNDivision=()=>{
        debugger;
        const obj = {
            Name: this.state.gndivision,
            PD_ID: parseInt(this.state.division)
        };
        debugger;
        axios.post('https://localhost:5001/api/gNDivision/', obj)
        .then(json => {debugger;
            if (json.statusText == 'Created'){
                debugger;
                console.log(json.statusText);
                debugger;
                this.setState({
                    gndivision: ''
                });
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
            <div className="AddDistrict_page">
                <Fragment>
            <Container maxWidth="xl">
                <Paper style={styles.paper} elevation={3}>
                    <h4>Settings</h4>
                    <form autoComplete="off" noValidate style={styles.root}>
                        <Grid container>
                            <Grid item lg={2}>
                            <h4>Add Districts</h4>
                                <TextField
                                    name = "districtname"
                                    variant = "outlined"
                                    label = "District"
                                    value = {this.state.district}
                                    onChange = {this.onChangeDistrict}
                                    style= {styles.textField}
                                />
                                <div>
                                    <Button
                                        variant = "contained"
                                        color = "primary"
                                        onClick = {this.AddDistrict}
                                        style= {styles.sMargin}
                                    >
                                    Submit
                                    </Button>
                                </div>
                            </Grid>

                            <Grid item lg={2}>
                            <h4>Add Divisions</h4>
                                <FormControl variant="outlined" style={styles.formControl}>
                                    <InputLabel >District</InputLabel>
                                    <Select
                                        //name= "gND"
                                        value = {this.state.district}
                                        onChange= {this.onChangeDistrict}
                                    >
                                        {this.state.disctOptions.map((disctOption) => 
                                            <MenuItem key={disctOption.value} value={disctOption.value}>{disctOption.display}</MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                                <TextField
                                    name = "divisionname"
                                    variant = "outlined"
                                    label = "Division"
                                    value = {this.state.division}
                                    onChange = {this.onChangeDivision}
                                    style= {styles.textField}
                                />
                                <div>
                                    <Button
                                        variant = "contained"
                                        color = "primary"
                                        onClick = {this.AddDivision}
                                        style= {styles.sMargin}
                                    >
                                    Submit
                                    </Button>
                                </div>
                            </Grid>
                            <Grid item lg={2}>
                            <h4>Add Grama Niladhari Divisions</h4>
                                <FormControl variant="outlined" style={styles.formControl}>
                                    <InputLabel >District</InputLabel>
                                    <Select
                                        //name= "gND"
                                        value = {this.state.district}
                                        onChange= {this.onChangeDistricts}
                                    >
                                        {this.state.disctOptions.map((disctOption) => 
                                            <MenuItem key={disctOption.value} value={disctOption.value}>{disctOption.display}</MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                                <FormControl variant="outlined" style={styles.formControl}>
                                <InputLabel >Division</InputLabel>
                                <Select
                                    //name= "gND"
                                    value = {this.state.division}
                                    onChange= {this.onChangeDivision}
                                >
                                    {this.state.divOptions.map((divOption) => 
                                        <MenuItem key={divOption.value} value={divOption.value}>{divOption.display}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                                <TextField
                                    name = "divisionname"
                                    variant = "outlined"
                                    label = "Division"
                                    value = {this.state.gndivision}
                                    onChange = {this.onChangeGNDivision}
                                    style= {styles.textField}
                                />
                                <div>
                                    <Button
                                        variant = "contained"
                                        color = "primary"
                                        onClick = {this.AddGNDivision}
                                        style= {styles.sMargin}
                                    >
                                    Submit
                                    </Button>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                            <h4>This is for display and update values</h4>
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
