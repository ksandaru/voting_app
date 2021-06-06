import { Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react'
import PartyTable from './PartyTable';

const styles = {
    root: {
        "& .MuiTableCellHead": {
            fontSize:"1.25px",
        }
    },
    paper : {
        margin: "30px auto",
        padding: 20,
    }
}

export default class PartyList extends Component {

    constructor(props) {
        super(props);
        this.state = {business: []};
    }

    componentDidMount(){
        debugger;
        axios.get('https://localhost:5001/api/party/')
        .then(response => {
            this.setState({ business: response.data});
            debugger;
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    tabRow(){
        return this.state.business.map(function (object, i) {
            return <PartyTable obj={object} key={i} /> ;
        })
    }

    render() {
        return (
            <Container>
                <Paper style={styles.paper} elevation={3} >
                    <Grid container spacing={4}>
                        <Grid item xs= {12}>
                            <TableContainer>
                            <Table>
                            <TableHead style={styles.root}>
                                <TableRow>
                                    <TableCell>Party ID</TableCell>
                                    <TableCell>Party Name</TableCell>
                                    <TableCell>Color</TableCell>
                                    <TableCell>Logo</TableCell>
                                    <TableCell>Logo View</TableCell>
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
