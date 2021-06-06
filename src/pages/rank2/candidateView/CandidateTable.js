import { Button, ButtonGroup, TableCell, TableRow, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from 'axios';
import React from 'react'
import EditCandidate from './EditCandidate';

// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
// import GridListTile from '@material-ui/core/GridListTile';

export default function CandidateTable(props) {

    const [open, setOpen] = React.useState(false);debugger;

    const handleClickOpen = () => {
        setOpen(true);
        };
    
        const handleClose = () => {
        setOpen(false);
        };
    
        const DeleteCandidate = () =>{
            if(window.confirm('Are you sure to delete this record?'))
            {
                axios.delete('https://localhost:5001/api/candidate/'+props.obj.candidateID)
                .then(json => {
                    if(json.statusText ==='OK'){
                        alert('Record deleted successfully!!');
                    }
                })
            }
        };

    return (
        <TableRow>
                <TableCell>{props.obj.candidateID}</TableCell>
                <TableCell>{props.obj.candidateNo}</TableCell>
                <TableCell>{props.obj.candidateName}</TableCell>
                <TableCell>{props.obj.party_ID}</TableCell>
                <TableCell>{props.obj.image}</TableCell>
                <TableCell>
                    <img src={props.obj.imageSrc} />
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
                            Edit Candidate Details
                            </DialogTitle>
                            <DialogContent>
                            <EditCandidate 
                                user = {props.obj.candidateID}
                                close = {handleClose}
                            />
                            </DialogContent>
                        </Dialog>
                        <Button>
                            <DeleteIcon color= "secondary"
                            onClick={DeleteCandidate}/>
                        </Button>
                    </ButtonGroup>
                </TableCell>
            </TableRow>
    )
}

