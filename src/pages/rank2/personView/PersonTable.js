import { Button, ButtonGroup, TableCell, TableRow } from '@material-ui/core';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from 'axios';
import React from 'react'

import EditPerson from './EditPerson';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core'




export default function PersonTable(props) {

    const [open, setOpen] = React.useState(false);debugger;

    // function PaperComponent(props) {
    //     return (
    //       <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
    //         <Paper {...props} />
    //       </Draggable>
    //     );
    // };

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const DeletePerson = () =>{
        axios.delete('https://localhost:5001/api/person/'+props.obj.nic)
        .then(json => {
            if(json.statusText ==='OK'){
                alert('Record deleted successfully!!');
            }
        })
    };

        return (
            <TableRow>
                <TableCell>{props.obj.serialNo}</TableCell>
                <TableCell>{props.obj.nic}</TableCell>
                <TableCell>{props.obj.gnd}</TableCell>
                <TableCell>{props.obj.voted.toString()}</TableCell>
                <TableCell>
                    <ButtonGroup variant="text">
                        <Button>
                        {/* <Link to={"/editPerson/"+this.props.obj.nic}>
                        <EditIcon color="primary" />
                        </Link> */}
                        <EditIcon color="primary" onClick={handleClickOpen}/>
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            // PaperComponent={PaperComponent}
                            // aria-labelledby="draggable-dialog-title"
                        >
                            <DialogTitle style={{ cursor: 'move' }} >
                            Edit NIC Details
                            </DialogTitle>
                            <DialogContent>
                            <EditPerson 
                                user = {props.obj.nic}
                                close = {handleClose}
                            />
                            </DialogContent>
                        </Dialog>
                        <Button>
                            <DeleteIcon color= "secondary"
                            onClick={DeletePerson}/>
                        </Button>
                    </ButtonGroup>
                </TableCell>
            </TableRow>
        );
}


