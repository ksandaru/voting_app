import { Button, ButtonGroup, TableCell, TableRow, Dialog, DialogContent, DialogTitle, TableContainer, Table, TableHead, TableBody, Popover, TextField, Box } from '@material-ui/core';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from 'axios';
import React, { useState, useEffect}  from 'react'
import { CheckCircle, SettingsSystemDaydreamTwoTone } from '@material-ui/icons';

export default function PartyDistrictTable(props) {

    const [data, setData] = useState([]);
    const [district_pty, setDistrict_pty] = useState([]);
    const [district, setDistrict] = useState([]);
    const [party, setParty] = useState([]);
    const [anchorEl, setAnchorEl] = useState(false);
    const [edit, setEdit] = useState('');

    useEffect(() => {
        axios.get('https://localhost:5001/api/District/')
        .then(response => {
            setDistrict(response.data) ;
        })
        .catch(function (error) {
            console.log(error);
        });
        axios.get('https://localhost:5001/api/Party/')
        .then(response => {
            setParty(response.data) ;
        })
        .catch(function (error) {
            console.log(error);
        });
        axios.get('https://localhost:5001/api/District_Party/')
        .then(response => {
            setData(response.data) ;
        })
        .catch(function (error) {
            console.log(error);
        });

        // for (let index = 0; index < data.length; index++) {
        //     setDistrict_pty( old => [
        //         ...old,
        //         data[index].district_ID,
        //         data[index].party_ID
        //     ])
        // }
        
        // debugger;

    })
    const deleteDistrict = (dist) => {
        debugger;
        if(window.confirm('Are you sure to delete '+dist.name+' ?'))
        {
            axios.delete('https://localhost:5001/api/District/'+dist.id)
            .then(json => {
                debugger;
                if(json.data){
                    alert('Record deleted successfully!!');
                }
            })
        }
        
    };
    const onChangeDistrict = (e) => {
        debugger;
        setEdit( prevState => ({
            ...prevState,
            name : e.target.value
        }));
        debugger;
    }
    const editData = () => {
        const obj = {
            Id : edit.id,
            Name : edit.name
        }
        debugger;
        axios.put('https://localhost:5001/api/district/' +edit.id, obj)
        .then(res => {console.log(res.config.data);});
    }
    const handleClickOpen = (dist, event) => {
        
        setAnchorEl(event.currentTarget);
        setEdit(dist);
        debugger;
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <TableContainer style={{maxHeight: '500px'}}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell><h4>District ID ({district_pty.length})</h4></TableCell>
                        <TableCell><h4>Party ID</h4></TableCell>
                        <TableCell><h4>Edit</h4></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {district_pty.map((dist) => (
                        <TableRow key= {dist.district_ID}>
                        <TableCell>{dist.district_ID}</TableCell>
                        <TableCell>{dist.party_ID}</TableCell>
                        <TableCell>
                            <ButtonGroup variant="text">
                                <Button>
                                    <DeleteIcon color= "secondary"
                                    onClick={(e) => deleteDistrict(dist, e)}/>
                                </Button>
                            </ButtonGroup>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}