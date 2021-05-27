import React, { Component, Fragment } from 'react'
import axios from 'axios';
import { Button, Container, Grid, TextField, MenuItem, Select, InputLabel, FormControl, Paper } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import defaultCandidateImg from '../../images/candidate_placeHolder.png'

const styles = {
    root: {
          margin: "30px auto",
          minWidth: 230,
    },
    formControl: {
        margin: "10px auto",
        minWidth: 230,
    },
    textField: {
        margin: "10px auto",
        width: 230,
      },
    sMargin:{
        margin: "30px auto",
    },
    paper : {
        margin: "30px auto",
        padding: 20,
    }
}

export default class AddCandidate extends Component {

    constructor(props){
        super(props)

        this.onChangeCandidateNo = this.onChangeCandidateNo.bind(this);
        this.onChangeCandidateName = this.onChangeCandidateName.bind(this);
        this.onChangePartyID= this.onChangePartyID.bind(this);
        this.onChangeImage= this.onChangeImage.bind(this);
        this.AddCandidate = this.addCandidate.bind(this);

        this.state = {
            CandidateNo:'',
            CandidateName:'',
            partyOptions: [],
            PartyID:'',
            image: '',
            imageSrc: defaultCandidateImg,
            imageFile: null
        }
    }

    componentDidMount(){
        axios.get('https://localhost:5001/api/party/')
        .then(response => {
            debugger;
            let PartyfromApi = response.data.map(partyOption =>{
                debugger;
                return { value: partyOption.partyID, display: partyOption.partyName}
            });
            this.setState({
                partyOptions: [{ value: '', display:'Select Party'}].concat(PartyfromApi)
            });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    onChangeCandidateNo(e) {
        this.setState({
            CandidateNo: e.target.value
        });
    }

    onChangeCandidateName(e) {
        this.setState({
            CandidateName: e.target.value
        });
    }

    onChangePartyID(e) {
        debugger;
        this.setState({
            PartyID: e.target.value
        });
    }
    onChangeImage(e) {
        e.preventDefault();

        if(e.target.files && e.target.files[0]){
            let imageFile = e.target.files[0];
            let reader = new FileReader();
debugger;
            reader.onloadend =()=> {debugger;
                this.setState({
                    imageFile: imageFile,
                    imageSrc: reader.result
                });debugger;
            };
            reader.readAsDataURL(imageFile);
        }

        else{
            this.setState({
                imageFile:null,
                imageSrc: defaultCandidateImg
            });
        }

    }

    addCandidate =async (e)=>{
        debugger;
        //e.preventDefault();
        // const obj = {
        //     CandidateNo: this.state.CandidateNo,
        //     CandidateName: this.state.CandidateName, 
        //     PartyID: parseInt(this.state.PartyID)
        // };

        const formData = new FormData()
        formData.append('candidateNo',this.state.CandidateNo)
        formData.append('candidateName',this.state.CandidateName)
        formData.append('partyID',parseInt(this.state.PartyID))
        formData.append('image',this.state.image)
        formData.append('imageFile',this.state.imageFile)

        await axios.post('https://localhost:5001/api/Candidate/', formData)
        .then(json => {
            if (json.statusText == 'Created'){
                debugger;
                console.log(json.statusText);
                debugger;
                alert("Data Save Successfully");
            }
            else{
                debugger;
                alert('Data not Saved');
            }
        });
        debugger;
    }

    render() {
        return (
            <div className="AddCandidate_page">
                <Fragment>
            <Container maxWidth="sm">
                <Paper style={styles.paper} elevation={3}>
                    <h4>Enter Candidate Informations</h4>
                    <form onSubmit={this.addCandidate} autoComplete="off" noValidate style={styles.root}>
                        <Grid container>
                            <Grid item xs={6}>
                            <FormControl variant="outlined" style={styles.formControl}>
                                <InputLabel >Party</InputLabel>
                                <Select
                                    value = {this.state.PartyID}
                                    onChange= {this.onChangePartyID}
                                >
                                    {this.state.partyOptions.map((partyOption) => 
                                        <MenuItem key={partyOption.value} value={partyOption.value}>{partyOption.display}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                                <TextField
                                    name = "candidateNo"
                                    variant = "outlined"
                                    label = "CandidateNo"
                                    value = {this.state.CandidateNo}
                                    onChange = {this.onChangeCandidateNo}
                                    style= {styles.textField}
                                />
                                <TextField
                                    name = "candidateName"
                                    variant = "outlined"
                                    label = "CandidateName"
                                    value = {this.state.CandidateName}
                                    onChange = {this.onChangeCandidateName}
                                    style= {styles.textField}
                                />
                                
                            </Grid>
                            <Grid item xs={6}>

                            <Card className="root" >
                                    <CardActionArea>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Choose The Candidate Image
                                        </Typography>

                                        {this.state.imageSrc ? (
                                            <img alt={this.state.imageSrc} src={this.state.imageSrc} />
                                            ) : null}
                                        <CardContent>
                                        <input  type="file" accept="image/*"  onChange = {this.onChangeImage} />
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <div>
                                    <Button
                                        variant = "contained"
                                        color = "primary"
                                        type = "submit"
                                        style= {styles.sMargin}
                                    >
                                        Submit
                                    </Button>
                                    <Button
                                        variant = "contained"
                                        style= {styles.sMargin}
                                    >
                                        Reset
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                </form>
            </Paper>
        </Container>
        </Fragment>
        </div>
        )
    }
}
