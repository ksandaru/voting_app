import { Button, ButtonGroup, TableCell, TableRow, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from 'axios';
import React from 'react'
import EditParty from './EditParty';

export default function PartyTable(props) {

    const [open, setOpen] = React.useState(false);debugger;

    const handleClickOpen = () => {
        setOpen(true);
        };
    
        const handleClose = () => {
        setOpen(false);
        };
    
        const DeleteParty = () =>{
            if(window.confirm('Are you sure to delete this record?'))
            {
                axios.delete('https://localhost:5001/api/party/'+props.obj.partyID)
            .then(json => {
                if(json.statusText ==='OK'){
                    alert('Record deleted successfully!!');
                }
            })
            }
        };

    return (
        <TableRow>
                <TableCell>{props.obj.partyID}</TableCell>
                <TableCell>{props.obj.partyName}</TableCell>
                <TableCell>{props.obj.color}</TableCell>
                <TableCell>{props.obj.logo}</TableCell>
                <TableCell>
                    <img src={props.obj.logoSrc} />
                </TableCell>
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
                            Edit Party Details
                            </DialogTitle>
                            <DialogContent>
                            <EditParty 
                                user = {props.obj.partyID}
                                close = {handleClose}
                            />
                            </DialogContent>
                        </Dialog>
                        <Button>
                            <DeleteIcon color= "secondary"
                            onClick={DeleteParty}/>
                        </Button>
                    </ButtonGroup>
                </TableCell>
            </TableRow>
    )
}
