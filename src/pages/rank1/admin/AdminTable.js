import { Button, ButtonGroup, TableCell, TableRow } from '@material-ui/core';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from 'axios';
import React from 'react'

import { Dialog, DialogContent, DialogTitle } from '@material-ui/core'
import EditAdmin from './EditAdmin';

export default function AdminTable(props) {

    const [open, setOpen] = React.useState(false);debugger;

    const handleClickOpen = () => {
        debugger;
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const DeleteAdmin = () =>{
        debugger;
        if (props.obj.rank1AdminID) {debugger;
            axios.delete('https://localhost:5001/api/rank1Admin/'+props.obj.rank1AdminID)
            .then(json => {
                if(json.data){
                    alert('Record deleted successfully!!');
                }
            })
        } 
        if (props.obj.rank2AdminID) {debugger;
            axios.delete('https://localhost:5001/api/rank2Admin/'+props.obj.rank2AdminID)
            .then(json => {
                if(json.data){
                    alert('Record deleted successfully!!');
                }
            })
        }
        if (props.obj.rank3AdminID) {debugger;
            axios.delete('https://localhost:5001/api/rank3Admin/'+props.obj.rank3AdminID)
            .then(json => {
                if(json.data){
                    alert('Record deleted successfully!!');
                }
            })
        }
        if (props.obj.rank4AdminID) {debugger;
            axios.delete('https://localhost:5001/api/rank4Admin/'+props.obj.rank4AdminID)
            .then(json => {
                if(json.data){
                    alert('Record deleted successfully!!');
                }
            })
        }
    }

    return (
        <TableRow>
                <TableCell>{props.obj.name}</TableCell>
                <TableCell>{props.obj.password}</TableCell>
                <TableCell>
                    <ButtonGroup variant="text">
                        <Button>
                        <EditIcon color="primary" onClick={handleClickOpen}/>
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                        >
                            <DialogTitle style={{ cursor: 'move' }} >
                            Edit User Details
                            </DialogTitle>
                            <DialogContent>
                            <EditAdmin 
                                table = {props.rank}
                                user = {props.obj.rank1AdminID?props.obj.rank1AdminID
                                    :props.obj.rank2AdminID?props.obj.rank2AdminID
                                    :props.obj.rank3AdminID?props.obj.rank3AdminID
                                    :props.obj.rank4AdminID?props.obj.rank4AdminID:null}
                                close = {handleClose}
                            />
                            </DialogContent>
                        </Dialog>
                        <Button>
                            <DeleteIcon color= "secondary"
                            onClick={DeleteAdmin}/>
                        </Button>
                    </ButtonGroup>
                </TableCell>
            </TableRow>
    )
}