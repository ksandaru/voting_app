import { Container, FormControl, Grid, InputLabel, MenuItem, Select, Snackbar, Button, TableCell, TableRow, TableContainer, Table, TableHead, TableBody, ButtonGroup, } from '@material-ui/core'
import React, { Component } from 'react'
import axios from 'axios';
import DeleteIcon from "@material-ui/icons/Delete";
import PartyDistrictTable from './dataTables/PartyDistrict'
import { Alert } from '@material-ui/lab';

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
}
export default class AssignParties extends Component {

    constructor(props){
        super(props)

        this.onChangeDistrict = this.onChangeDistrict.bind(this);
        this.onChangeParty = this.onChangeParty.bind(this);
        this.closeMessage = this.closeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            district:'',
            disctOptions: [{ value: '', display:'Select District'}],
            party:'',
            ptyOptions: [{ value: '', display:'Select District'}],
            distPty : [],
            message: '',
            setMessage: false,
        }
    } 


    componentDidMount(){
        
        this.loading();

    }

    loading(){
        axios.get('https://localhost:5001/api/party/')
        .then(response => {
            debugger;
            let PartyfromApi = response.data.map(ptyOption =>{
                return { value: ptyOption.partyID, display: ptyOption.partyName}
            });
            this.setState({
                ptyOptions: [{ value: '', display:'Select Party'}].concat(PartyfromApi)
            });
            
            axios.get('https://localhost:5001/api/District/')
            .then(response => {
                debugger;
                let DisctfromApi = response.data.map(disctOption =>{
                    return { value: disctOption.id, display: disctOption.name}
                });
                this.setState({
                    disctOptions: [{ value: '', display:'Select District'}].concat(DisctfromApi)
                });
                axios.get('https://localhost:5001/api/District_Party/')
                .then(response => {
                    let data = response.data;
                    debugger;
                    const newData = data.map(dataItem => ({
                        distID : dataItem.district_ID,
                        distName : DisctfromApi.find(item => item.value === dataItem.district_ID).display,
                        ptyID : dataItem.party_ID,
                        ptyName : PartyfromApi.find(item => item.value === dataItem.party_ID).display,
                    }));
                    
                    this.setState({
                        distPty : newData
                    })
                    debugger;
                })
                .catch(function (error) {
                    console.log(error);
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        })
        .catch(function (error) {
            console.log(error);
        });

    }

    closeMessage(){
        this.setState({
            setMessage: false,
            message: '',
        });
    }

    onChangeDistrict(e) {
        this.setState({
            district: e.target.value
        });
    }
    onChangeParty(e) {
        this.setState({
            party: e.target.value
        });
    }
    onSubmit() {
        const obj = {
            District_ID : this.state.district,
            Party_ID : this.state.party
        }
        axios.post('https://localhost:5001/api/District_Party/', obj)
        .then(json => {
            if (json.data){
                debugger;
                console.log(json.statusText);
                debugger;
                this.setState({
                    setMessage: true,
                    message: 'Saved Successfully',
                });
                this.loading();
            }
            else{
                debugger;
                this.setState({
                    setMessage: true,
                    message: 'Not Saved',
                });
            }
        })
    }


    render() {
        return (
            <Container>
                <Snackbar open={this.state.setMessage} autoHideDuration={3000} onClose={this.closeMessage}>
                    <Alert severity="success">
                        {this.state.message}
                    </Alert>
                </Snackbar>
                    <h1>Assigning Parties</h1>
                <Grid container>
                    <Grid item xs={4}>
                        <form autoComplete="off" noValidate style={styles.root}>
                        <FormControl variant="outlined" style={styles.formControl}>
                            <InputLabel >District</InputLabel>
                            <Select
                                value = {this.state.district}
                                onChange= {this.onChangeDistrict}
                            >
                                {this.state.disctOptions.map((disctOption) => 
                                    <MenuItem key={disctOption.value} value={disctOption.value}>{disctOption.display}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined" style={styles.formControl}>
                            <InputLabel >Party</InputLabel>
                            <Select
                                value = {this.state.party}
                                onChange= {this.onChangeParty}
                            >
                                {this.state.ptyOptions.map((ptyOption) => 
                                    <MenuItem key={ptyOption.value} value={ptyOption.value}>{ptyOption.display}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        </form>
                        <div>
                            <Button
                                variant = "contained"
                                color = "primary"
                                onClick = {this.onSubmit}
                                style= {styles.sMargin}
                            >
                            Submit
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                    <TableContainer style={{maxHeight: '500px'}}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><h4>District ID ({this.state.distPty.length})</h4></TableCell>
                                    <TableCell><h4>Party ID</h4></TableCell>
                                    <TableCell><h4>Edit</h4></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.distPty.map((dist) => (
                                    <TableRow key= {dist.district_ID}>
                                    <TableCell>{dist.distName}</TableCell>
                                    <TableCell>{dist.ptyName}</TableCell>
                                    <TableCell>
                                        <ButtonGroup variant="text">
                                            <Button>
                                                <DeleteIcon color= "secondary"
                                                // onClick={(e) => deleteDistrict(dist, e)}
                                                />
                                            </Button>
                                        </ButtonGroup>
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}