import { Button, Container, Grid, TextField, MenuItem, Select, InputLabel, FormControl, Paper } from '@material-ui/core';
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
        margin: "30px auto",
    },
    paper : {
        margin: "30px auto",
        padding: 20,
    }
}

export default class AddPerson extends Component {

    constructor(props){
        super(props)

        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangeSerialNo = this.onChangeSerialNo.bind(this);
        this.onChangeVoted = this.onChangeVoted.bind(this);
        this.onChangeGND = this.onChangeGND.bind(this);
        this.AddPerson = this.addPerson.bind(this);

        this.state = {
            NIC:'',
            SerialNo:'',
            Voted:'false',
            gndOptions: [],
            GND: ""
        }
    }

    componentDidMount(){
        axios.get('https://localhost:5001/api/GNDivision/')
        // .then(response => {
        //     debugger;
        //     return response;
        // })
        .then(response => {
            debugger;
            let GNDfromApi = response.data.map(gndOption =>{
                debugger;
                return { value: gndOption.id, display: gndOption.name}
            });
            this.setState({
                gndOptions: [{ value: '', display:'Select GND'}].concat(GNDfromApi)
            });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    onChangeNIC(e) {
        this.setState({
            NIC: e.target.value
        });
    }
    onChangeSerialNo(e) {
        this.setState({
            SerialNo: e.target.value
        });
    }

    onChangeVoted(e) {
        this.setState({
            Voted: e.target.value
        });
    }

    onChangeGND(e) {
        debugger;
        this.setState({
            GND: e.target.value
        });
    }

    addPerson=()=>{
        debugger;
        //e.preventDefault();
        const obj = {
            NIC: parseInt(this.state.NIC),
            SerialNo: parseInt(this.state.SerialNo),
            Voted: Boolean(this.state.Voted),
            GND: parseInt(this.state.GND)
        };
        axios.post('http://localhost:5000/api/person/', obj)
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
        //this.props.history.push('/personList')
    }

    render() {
        return (
            <div className="AddPerson_page">
                <Fragment>
            <Container maxWidth="sm">
                <Paper style={styles.paper} elevation={3}>
                <h4>Enter Person Informations</h4>
                <form onSubmit={this.addPerson} autoComplete="off" noValidate style={styles.root}>
                    <Grid container>
                        <Grid item xs={6}>
                            <TextField
                                name = "nic"
                                variant = "outlined"
                                label = "NIC"
                                value = {this.state.NIC}
                                onChange = {this.onChangeNIC}
                                style= {styles.textField}
                            />
                            <TextField
                                name = "serialNo"
                                variant = "outlined"
                                label = "Serial No"
                                value = {this.state.SerialNo}
                                onChange = {this.onChangeSerialNo}
                                style= {styles.textField}
                            />
                            <TextField
                                name = "voted"
                                variant = "outlined"
                                label = "Voted"
                                value = {this.state.Voted}
                                onChange = {this.onChangeVoted}
                                style= {styles.textField}
                                disabled= "true"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl variant="outlined" style={styles.formControl}>
                                <InputLabel >GND</InputLabel>
                                <Select
                                    //name= "gND"
                                    value = {this.state.GND}
                                    onChange= {this.onChangeGND}
                                >
                                    {this.state.gndOptions.map((gndOption) => 
                                        <MenuItem key={gndOption.value} value={gndOption.value}>{gndOption.display}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>
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
                </Paper>
            </Container>
            </Fragment>
            </div>
        )
    }
}
