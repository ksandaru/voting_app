import { Button, ButtonGroup, TableCell, TableRow, Dialog, DialogContent, DialogTitle, TableContainer, Table, TableHead, TableBody, Popover, TextField, Box } from '@material-ui/core';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from 'axios';
import React, { useState, useEffect}  from 'react'
import { CheckCircle } from '@material-ui/icons';

export default function DivisionTable(props) {

    const [division, setDivision] = useState([]);
    const [anchorEl, setAnchorEl] = useState(false);
    const [edit, setEdit] = useState('');

    useEffect(() => {
        axios.get('https://localhost:5001/api/division/')
        .then(response => {
            setDivision(response.data) ;
        })
        .catch(function (error) {
            console.log(error);
        });
    })
    const deleteDistrict = (dist) => {
        debugger;
        if(window.confirm('Are you sure to delete '+dist.name+' ?'))
        {
            axios.delete('https://localhost:5001/api/division/'+dist.id)
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
            Name : edit.name,
            ED_ID : edit.eD_ID
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
                        <TableCell><h4>Division ID ({division.length})</h4></TableCell>
                        <TableCell><h4>Division Name</h4></TableCell>
                        <TableCell><h4>Edit</h4></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {division.map((div) => (
                        <TableRow key= {div.id}>
                        <TableCell>{div.id}</TableCell>
                        <TableCell>{div.name}</TableCell>
                        <TableCell>
                            <ButtonGroup variant="text">
                                <Button>
                                <EditIcon color="primary" onClick={(e) => handleClickOpen(div, e)}/>
                                </Button>
                                <Button>
                                    <DeleteIcon color= "secondary"
                                    onClick={(e) => deleteDistrict(div, e)}/>
                                </Button>
                            </ButtonGroup>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
            >
                <Box  style = {{padding: '10px'}}>
                    <TextField
                        name = "districtname"
                        variant = "outlined"
                        label = "Division Name"
                        value = {edit.name}
                        onChange = {onChangeDistrict}
                    />
                    <Button onClick = {editData} disabled = {!edit.name}>
                        <CheckCircle 
                        style = {{fontSize: 'xxx-large', color: 'green'}}
                        onClick = {handleClose}
                        disabled = {!edit.name}
                        />
                    </Button>
                </Box>
            </Popover>
        </TableContainer>
    )
}