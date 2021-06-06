import { FormControl, InputLabel, Select, MenuItem, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { Component, Fragment } from 'react'
import AddAdmin from './AddAdmin';
import AdminTable from './AdminTable';
import jwt_decode from "jwt-decode"

const styles = {
    root: {
        "& .MuiTableCellHead": {
            fontSize:"1.25px",
            margin: "50px auto",
            minWidth: 230,
            height: "800",
            display:"flex",
        }
    },
    paper : {
       // margin: "10px auto",  //removed for fixed NavBar on top
        padding: 80,
    }
}

//const classes = styles();

export default class AdminList extends Component {

    constructor(props) {
        super(props);
        
        this.onChangeRank = this.onChangeRank.bind(this);

        this.state = {
            business: [],
            Rank: 'Rank4Admin',
            userRank: '',
        };
    }

   
    componentDidMount(){
        debugger;
        if(localStorage.token){
            var decoded = jwt_decode(localStorage.token);
            this.setState({userRank: decoded.role})
            debugger;
        }
        debugger;
        axios.get('https://localhost:5001/api/Rank4Admin/')
        .then(response => {
            this.setState({ business: response.data});
            debugger;
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    onChangeRank(e) {
        this.setState({
            Rank: e.target.value
        });
        debugger;
        axios.get('https://localhost:5001/api/' + e.target.value)
        .then(response => {
            this.setState({ business: response.data});
            debugger;
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    tabRow(){
        const rank = this.state.Rank;
        return this.state.business.map(function (object, i ) {
            return <AdminTable obj={object} key={i} rank={rank} />;
        })
    }
    createAdmin(){
        const user = this.state.userRank;
        return <AddAdmin userRank={user}/>;
    }

    render() {
        return (
            <Fragment>
            <Paper className="AdminList_page" style={styles.paper} elevation={3} >
                <Container >
                <Grid container spacing={4}>
                    <Grid item xs= {5}>
                        {this.createAdmin()}
                        </Grid>
                    <Grid item xs= {5}>
                        <TableContainer style={{maxHeight: '700px'}} className="tableContainer">
                            <Table>
                            <TableHead style={styles.root}>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Password</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.tabRow()}
                            </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid className="Rank_filter">
                        <FormControl variant="outlined" style={styles.formControl}>
                        <Typography className="Rank_label" >Select Rank</Typography>
                            {this.state.userRank === "Rank1Admin" ?
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
                            </Select>    :
                            <Select
                            name= "rank"
                            value = {this.state.Rank}
                            onChange= {this.onChangeRank}
                        >
                            <MenuItem value="">Select Rank</MenuItem>
                            <MenuItem value="Rank3Admin">Rank 3</MenuItem> 
                            <MenuItem value="Rank4Admin">Rank 4</MenuItem> 
                        </Select>
                            }
                        </FormControl>
                    </Grid>
                </Grid>
                </Container>
            </Paper>
            </Fragment>
        );
    }
}