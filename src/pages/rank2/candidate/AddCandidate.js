import React, { Component, Fragment } from 'react'
import axios from 'axios';
import { Button, Container, Grid, TextField, MenuItem, Select, InputLabel, FormControl, Paper, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import defaultCandidateImg from '../../../images/candidate_placeHolder.png'

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
        margin: "10px",
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
        this.closeMessage = this.closeMessage.bind(this);
        this.formReset = this.formReset.bind(this);

        this.state = {
            CandidateNo:'',
            CandidateName:'',
            partyOptions: [],
            PartyID:'',
            image: '',
            imageSrc: defaultCandidateImg,
            imageFile: null,
            message: '',
            setMessage: false,
            validateError: {CandidateNo: true, CandidateName: true, Party: true, Image: true},
            error: {CandidateNo: '', CandidateName: '', Party: '', Image: ''},
        
        }
    }

    closeMessage(){
        this.setState({
            setMessage: false,
            message: '',
        });
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
        let num = e.target.value;

        if (!num){
            this.setState(prevState => ({
                validateError: {...prevState.validateError, CandidateNo: true},
                error : {...prevState.error, CandidateNo : 'Cannot be empty'}
            })) 
        }
        if(num !== ''){
            if (!num.match(/^[0-9]*$/gm)){
                debugger;
                this.setState(prevState => ({
                    validateError: {...prevState.validateError, CandidateNo: true},
                    error : {...prevState.error, CandidateNo : 'eg.: 23'}
                }))
            }
            else{
                debugger;
                this.setState(prevState => ({
                    validateError: {...prevState.validateError, CandidateNo: false},
                    error : {...prevState.error, CandidateNo : ''}
                }))
            }
        }

        this.setState({
            CandidateNo: e.target.value
        });
    }

    onChangeCandidateName(e) {
        let name = e.target.value;

        if (!name){
            this.setState(prevState => ({
                validateError: {...prevState.validateError, CandidateName: true},
                error : {...prevState.error, CandidateName : 'Cannot be empty'}
            })) 
        }
        if(name !== ''){
            if (!name.match(/^[a-zA-Z]+$/)){
                debugger;
                this.setState(prevState => ({
                    validateError: {...prevState.validateError, CandidateName: true},
                    error : {...prevState.error, CandidateName : 'Numbers and special characters not accepted'}
                }))
            }
            else{
                debugger;
                this.setState(prevState => ({
                    validateError: {...prevState.validateError, CandidateName: false},
                    error : {...prevState.error, CandidateName : ''}
                }))
            }
        }
        
        this.setState({
            CandidateName: e.target.value
        });
    }

    onChangePartyID(e) {
        let party = e.target.value;

        if(!party){
            this.setState(prevState => ({
                validateError: {...prevState.validateError,  Party: true},
                error: {...prevState.error,  Party: 'Select a party'}
            }))
        }
        else{
            this.setState(prevState => ({
                validateError: {...prevState.validateError,  Party: false},
                error: {...prevState.error,  Party: ''}
            }))
        }
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
                this.setState(prevState => ({
                    imageFile: imageFile,
                    imageSrc: reader.result,
                    validateError: {...prevState.validateError, Image: false},
                    error : {...prevState.error, Image : ''}
                }));debugger;
            };
            reader.readAsDataURL(imageFile);
        }

        else{
            this.setState(prevState => ({
                imageFile:null,
                imageSrc: defaultCandidateImg,
                validateError: {...prevState.validateError, Image: true},
                error : {...prevState.error, Image : 'Add an image'}
            }));
        }

    }

    addCandidate =async (e)=>{
        debugger;
        const formData = new FormData()
        formData.append('candidateNo',this.state.CandidateNo)
        formData.append('candidateName',this.state.CandidateName)
        formData.append('partyID',parseInt(this.state.PartyID))
        formData.append('image',this.state.image)
        formData.append('imageFile',this.state.imageFile)

        await axios.post('https://localhost:5001/api/Candidate/', formData)
        .then(json => {
            if (json.statusText === 'Created'){
                debugger;
                console.log(json.statusText);
                debugger;
                this.setState({
                    setMessage: true,
                    message: 'Candidate Save Successfully',
                });
            }
            else{
                debugger;
                alert('Data not Saved');
                this.setState({
                    setMessage: true,
                    message: 'Candidate not Saved',
                });
            }
        });
        debugger;
    }
    formReset(){
        this.setState({
            CandidateNo:'',
            CandidateName:'',
            PartyID:'',
            image: '',
            imageSrc: defaultCandidateImg,
            imageFile: null,
            validateError: {CandidateNo: true, CandidateName: true, Party: true, Image: true},
            error: {CandidateNo: '', CandidateName: '', Party: '', Image: ''},
        

        })
    }

    render() {
        return (
            <div className="AddCandidate_page">
                <Fragment>
            <Container maxWidth="sm">
                <Paper className="add_candidate_container" style={styles.paper} elevation={3}>
                <Typography variant='h4' align='center'>ENTER CANDIDATE DETAILS </Typography>
                    <Snackbar open={this.state.setMessage} autoHideDuration={3000} onClose={this.closeMessage}>
                        <Alert severity="success">
                            {this.state.message}
                        </Alert>
                    </Snackbar>
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
                                {this.state.validateError.Party? 
                                <div>
                                    <h4 className= 'validate'>{this.state.error.Party}</h4> 
                                </div>
                                : null}
                                <TextField
                                    name = "candidateNo"
                                    variant = "outlined"
                                    label = "CandidateNo"
                                    value = {this.state.CandidateNo}
                                    onChange = {this.onChangeCandidateNo}
                                    style= {styles.textField}
                                />
                                {this.state.validateError.CandidateNo? 
                                <div>
                                    <h4 className= 'validate'>{this.state.error.CandidateNo}</h4> 
                                </div>
                                : null}
                                <TextField
                                    name = "candidateName"
                                    variant = "outlined"
                                    label = "CandidateName"
                                    value = {this.state.CandidateName}
                                    onChange = {this.onChangeCandidateName}
                                    style= {styles.textField}
                                />
                                {this.state.validateError.CandidateName? 
                                <div>
                                    <h4 className= 'validate'>{this.state.error.CandidateName}</h4> 
                                </div>
                                : null}
                                
                                <div>
                                    <Button
                                        variant = "contained"
                                        color = "primary"
                                        type = "submit"
                                        style= {styles.sMargin}
                                        disabled= {this.state.validateError.CandidateNo
                                            || this.state.validateError.CandidateName
                                            || this.state.validateError.Party
                                            || this.state.validateError.Image}
                                    >
                                        Submit
                                    </Button>
                                    <Button
                                        variant = "contained"
                                        onClick = {this.formReset}
                                        style= {styles.sMargin}
                                    >
                                        Reset
                                    </Button>
                                </div>
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
                                {this.state.validateError.Image? 
                                <div>
                                    <h4 className= 'validate'>{this.state.error.Image}</h4> 
                                </div>
                                : null}
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
