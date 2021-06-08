import { Button, Container, Grid, TextField, MenuItem, Select, InputLabel, FormControl, Paper, Snackbar, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
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
        margin: "10px",
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
        this.closeMessage = this.closeMessage.bind(this);
        this.formReset = this.formReset.bind(this);

        this.state = {
            NIC:'',
            SerialNo:'',
            Voted:'false',
            gndOptions: [],
            GND: "",
            message: '',
            setMessage: false,
            validateError: {NIC: true, SerialNo: true, GND: true},
            error: {NIC: '', SerialNo: '', GND: ''},
        }
    }

    closeMessage(){
        this.setState({
            setMessage: false,
            message: '',
        });
    }

    componentDidMount(){
        axios.get('https://localhost:5001/api/GNDivision/')
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
        let nic = e.target.value;

        if (!nic){
            this.setState(prevState => ({
                validateError: {...prevState.validateError, NIC: true},
                error : {...prevState.error, NIC : 'Cannot be empty'}
            })) 
        }
        if(nic !== ''){
            if (!nic.match(/^(([0-9]{9})(V))|(((19)|(20))([0-9]{10}))$/gm)){
                debugger;
                this.setState(prevState => ({
                    validateError: {...prevState.validateError, NIC: true},
                    error : {...prevState.error, NIC : 'eg.: 962235432V or 199602235432'}
                }))
            }
            else{
                debugger;
                this.setState(prevState => ({
                    validateError: {...prevState.validateError, NIC: false},
                    error : {...prevState.error, NIC : ''}
                }))
            }
        }

        this.setState({
            NIC: e.target.value
        });
    }
    onChangeSerialNo(e) {
        let serial = e.target.value;

        if (!serial){
            this.setState(prevState => ({
                validateError: {...prevState.validateError, SerialNo: true},
                error : {...prevState.error, SerialNo : 'Cannot be empty'}
            })) 
        }
        if(serial !== ''){
            if (!serial.match(/^[0-9]*$/gm)){
                debugger;
                this.setState(prevState => ({
                    validateError: {...prevState.validateError, SerialNo: true},
                    error : {...prevState.error, SerialNo : 'eg.: 856'}
                }))
            }
            else{
                debugger;
                this.setState(prevState => ({
                    validateError: {...prevState.validateError, SerialNo: false},
                    error : {...prevState.error, SerialNo : ''}
                }))
            }
        }

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
        let gnd = e.target.value;

        if(!gnd){
            this.setState(prevState => ({
                validateError: {...prevState.validateError,  GND: true},
                error: {...prevState.error,  GND: 'Select a GN Division'}
            }))
        }
        else{
            this.setState(prevState => ({
                validateError: {...prevState.validateError,  GND: false},
                error: {...prevState.error,  GND: ''}
            }))
        }
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
            Voted: Boolean(this.state.Voted. false),
            GND: parseInt(this.state.GND)
        };
        axios.post('https://localhost:5001/api/person/', obj)
        .then(json => {
            if (json.statusText === 'Created'){
                debugger;
                console.log(json.statusText);
                debugger;
                this.setState({
                    setMessage: true,
                    message: 'Person Save Successfully',
                });
            }
            else{
                debugger;
                this.setState({
                    setMessage: true,
                    message: 'Person not Saved',
                });
            }
        });
        debugger;
        //this.props.history.push('/personList')
    }
    formReset(){
        this.setState({
            NIC:'',
            SerialNo:'',
            GND: "",
            validateError: {NIC: true, SerialNo: true, GND: true},
            error: {NIC: '', SerialNo: '', GND: ''},

        })
    }

    render() {
        return (
            <div className="AddPerson_page">
                <Fragment>
            <Container maxWidth="sm">
                <Paper className="add_person_container" style={styles.paper} elevation={3}>
                <Typography style={styles.heading}>
                    <h2>ADD NEW PERSON DETAILS</h2>
                    </Typography>
                <Snackbar open={this.state.setMessage} autoHideDuration={3000} onClose={this.closeMessage}>
                    <Alert severity="success">
                        {this.state.message}
                    </Alert>
                </Snackbar>
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
                            {this.state.validateError.NIC? 
                            <div>
                                <h4 className= 'validate'>{this.state.error.NIC}</h4> 
                            </div>
                            : null}
                            <TextField
                                name = "serialNo"
                                variant = "outlined"
                                label = "Serial No"
                                value = {this.state.SerialNo}
                                onChange = {this.onChangeSerialNo}
                                style= {styles.textField}
                            />
                            {this.state.validateError.SerialNo? 
                            <div>
                                <h4 className= 'validate'>{this.state.error.SerialNo}</h4> 
                            </div>
                            : null}
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
                            {this.state.validateError.GND? 
                            <div>
                                <h4 className= 'validate'>{this.state.error.GND}</h4> 
                            </div>
                            : null}
                        </Grid>
                    </Grid>
                    <div>
                        <Button
                            variant = "contained"
                            color = "primary"
                            type = "submit"
                            style= {styles.sMargin}
                            disabled= {this.state.validateError.NIC
                            || this.state.validateError.SerialNo
                            || this.state.validateError.GND}
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
            </form>
                </Paper>
            </Container>
            </Fragment>
            </div>
        )
    }
}
