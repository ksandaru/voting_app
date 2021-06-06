import { Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react'
import CandidateTable from './CandidateTable';

// import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import ListSubheader from '@material-ui/core/ListSubheader';


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

export default class CandidateList extends Component {

    constructor(props) {
        super(props);
        this.state = {business: []};
    }

    componentDidMount(){
        debugger;
        axios.get('https://localhost:5001/api/candidate/')
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
            return <CandidateTable obj={object} key={i} /> ;
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
                                    <TableCell>Candidate ID</TableCell>
                                    <TableCell>Candidate No</TableCell>
                                    <TableCell>Candidate Name</TableCell>
                                    <TableCell>Party</TableCell>
                                    <TableCell>Image</TableCell>
                                    <TableCell>Image View</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody style={{overflow:'auto'}}>
                                {this.tabRow()}
                            </TableBody>
                            </Table>
                            </TableContainer>

                            {/* <GridList cellHeight={180} style={styles.gridList}>
                                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                                <ListSubheader component="div">December</ListSubheader>
                                </GridListTile>
                                {this.tabRow()}
                            </GridList> */}
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        )
    }
}
