import { Container, Grid, IconButton, InputBase, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react'
import PersonTable from './PersonTable';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
    root: {
        "& .MuiTableCellHead": {
            fontSize:"1.25px",
        }
    },
    paper : {
        margin: "30px auto",
        padding: 20,
    },
}

export default class PersonList extends Component {

    constructor(props) {
        super(props);
        this.state = {business: []};
    }

    componentDidMount(){
        debugger;
        axios.get('https://localhost:5001/api/person/')
        .then(response => {
            this.setState({ business: response.data});
            debugger;
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    serchNIC(e){

    }

    tabRow(){
        return this.state.business.map(function (object, i) {
            return <PersonTable obj={object} key={i} /> ;
        })
    }
    
    render() {
        return (
            <Container>
                <InputBase
                    className= "searchBar"
                    placeholder="Search NIC"
                    // value = {this.state.CandidateNo}
                    onChange = {this.searchNIC}
                    style= {styles.textField}
                />
                <IconButton className= "searchButton" aria-label="search" onClick={''}>
                    <SearchIcon />
                </IconButton>
                <Paper style={styles.paper} elevation={3} >
                    <Grid container spacing={4}>
                        <Grid item xs= {12}>
                            <TableContainer>
                            <Table>
                            <TableHead style={styles.root}>
                                <TableRow>
                                    <TableCell>Serial No</TableCell>
                                    <TableCell>NIC</TableCell>
                                    <TableCell>GN Division</TableCell>
                                    <TableCell>Voted</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody style={{overflow:'auto'}}>
                                {this.tabRow()}
                            </TableBody>
                            </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        )
    }
}
