import { Button, Container, Grid, TextField, MenuItem, Select, InputLabel, FormControl, Snackbar, Icon, IconButton, Typography } from '@material-ui/core';
import { HelpOutlineRounded } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import axios from 'axios';
import React, { Component } from 'react';


const styles = {
    root: {
        padding:"auto",
        margin: "50px 40px",
        minWidth: 230,
        height: "800",
        display:"flex", 
          
    }, 
    formControl: {
        margin: "10px auto",
        minWidth: 230,
       
    
        
    },
    heading:{
        margin: "auto 100px",
        
    },
    textField: {
        margin: "10px auto",
        width: 230,
      },
    sMargin:{
        margin: "10px",//changed
    }
}
export default class AddAdmin extends Component {

    constructor(props){
        super(props)
        debugger;
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRank = this.onChangeRank.bind(this);
        this.onChangeCenter = this.onChangeCenter.bind(this);
        this.addAdmin = this.addAdmin.bind(this);
        this.formReset = this.formReset.bind(this);
        this.closeMessage = this.closeMessage.bind(this);

        this.state = {
            Name:'',
            Password:'',
            Rank:'',
            PollingCenter: '',
            disable: true,
            obj: {},
            message: '',
            setMessage: false,
            validateError: {Name: true, Password: true, Rank: true, PollingCenter: true},
            error: {Name: '', Password: '', Rank: '', PollingCenter: ''},
        }
    }


    closeMessage(){
        this.setState({
            setMessage: false,
            message: '',
        });
    }

    onChangeName(e) {
        let name = e.target.value;

        if (!name){
            this.setState(prevState => ({
                validateError: {...prevState.validateError, Name: true},
                error : {...prevState.error, Name : 'Cannot be empty'}
            })) 
        }
        if(name !== ''){
            if (!name.match(/^[0-9a-zA-Z]+$/)){
                debugger;
                this.setState(prevState => ({
                    validateError: {...prevState.validateError, Name: true},
                    error : {...prevState.error, Name : 'Special characters not accepted'}
                }))
            }
            else{
                debugger;
                this.setState(prevState => ({
                    validateError: {...prevState.validateError, Name: false},
                    error : {...prevState.error, Name : ''}
                }))
            }
        }
        
        this.setState({
            Name: e.target.value
        });
    }
    onChangePassword(e) {
        let password = e.target.value;
        
        if (!password){
            this.setState(prevState => ({
                validateError: {...prevState.validateError, Password: true},
                error : {...prevState.error, Password : 'Cannot be empty'}
            })) 
        }
        if(password !== ''){
            debugger;
            if(password.length >= 8 ){
                if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,15}$/)){
                   debugger;
                    this.setState(prevState => ({
                        validateError: {...prevState.validateError, Password: true},
                        error : {...prevState.error, Password : 'Including at least an upercase, a lowercase a number and a special character'}
                    }))
                }
                else{
                    debugger;
                    this.setState(prevState => ({
                        validateError: {...prevState.validateError, Password: false},
                        error : {...prevState.error, Password : ''}
                    }))
                }
            }
            else{
                this.setState(prevState => ({
                    validateError: {...prevState.validateError, Password: true},
                    error : {...prevState.error, Password : 'Must contain more than 8 characters'}
                }))
            }
        }
        this.setState({
            Password: e.target.value
        });
    }

    onChangeRank(e) {
        this.setState(prevState => ({
            Rank: e.target.value,
            validateError: {...prevState.validateError, PollingCenter: false, Rank: false},
            error: {...prevState.error,  Rank: ''}
        }));

        if (!e.target.value){
            debugger;
            this.setState(prevState => ({
                validateError: {...prevState.validateError,  Rank: true},
                error: {...prevState.error,  Rank: 'Select a rank'}
            }))
        }
        if (e.target.value === 'Rank4Admin') {
            
            this.setState(prevState => ({
                disable: false,
                validateError: {...prevState.validateError,  PollingCenter: true},
            }));
            debugger;
        }
        else{
            this.setState({
                disable: true,
                obj: {
                    Name: this.state.Name,
                    Password: this.state.Password,
                },
            });
        }
        debugger;
    }
    onChangeCenter(e) {
        let center = e.target.value;
        let available = !this.state.disabled;
        if(available && !center){
            this.setState(prevState => ({
                validateError: {...prevState.validateError, PollingCenter: true},
                error : {...prevState.error, PollingCenter : 'cannot be empty'}
            }))
        }
        if(available && center){
            this.setState(prevState => ({
                validateError: {...prevState.validateError, PollingCenter: false},
                error : {...prevState.error, PollingCenter : ''}
            }))
        }
        this.setState({
            PollingCenter: e.target.value,
            obj: {
                Name: this.state.Name,
                Password: this.state.Password,
                PollingCenter: e.target.value,
            },
        });
        debugger;
    }


    addAdmin=()=>{
        debugger;
        axios.post('https://localhost:5001/api/'+this.state.Rank, this.state.obj)
        .then(json => {
            if (json.data){
                debugger;
                console.log(json.statusText);
                debugger;
                this.setState({
                    setMessage: true,
                    message: 'Admin Save Successfully',
                });
            }
            else{
                debugger;
                this.setState({
                    setMessage: true,
                    message: 'Admin not Saved',
                });
            }
        });
        debugger;
    }

    formReset(){
        this.setState({
            Name: '',
            Password:'',
            Rank:'',
            PollingCenter: '',
            validateError: {Name: true, Password: true, Rank: true, PollingCenter: true},
            error: {Name: '', Password: '', Rank: '', PollingCenter: ''},
        
        })
    }

    
    render() {
        return (
            <div className="add_admin_container">
            <Container maxWidth="lgsm" >
            <Typography style={styles.heading}>
            <h2>CREATE NEW ADMIN</h2>
            </Typography>
                {/* <h4>Enter Admin Informations</h4> */}
                <Snackbar open={this.state.setMessage} autoHideDuration={3000} onClose={this.closeMessage}>
                    <Alert severity="success">
                        {this.state.message}
                    </Alert>
                </Snackbar>
                <form onSubmit={this.addAdmin} autoComplete="off" noValidate style={styles.root}>
                    <Grid container>
                    
                        <Grid >
                            <TextField 
                                name = "name"
                                variant = "outlined"
                                label = "Name"
                                value = {this.state.Name}
                                onChange = {this.onChangeName}
                                style= {styles.textField}
                            />
                            <IconButton  className='tooltip'>
                                <HelpOutlineRounded className= 'helpicon'/>
                                <span className="tooltiptext">Name must contain only letters and numbers. Special characters are not allowed.</span>
                            </IconButton>
                            {this.state.validateError.Name? 
                            <div>
                                <h4 className= 'validate'>{this.state.error.Name}</h4> 
                            </div>
                            : null}
                            <TextField 
                                name = "password"
                                variant = "outlined"
                                label = "Password"
                                value = {this.state.Password}
                                onChange = {this.onChangePassword}
                                style= {styles.textField}
                            />
                            <IconButton  className='tooltip'>
                                <HelpOutlineRounded className= 'helpicon'/>
                                <span className="tooltiptext">Passwords must contain at least eight characters, including at least an upercase, a lowercase a number and a special character.</span>
                            </IconButton>
                            {this.state.validateError.Password? 
                            <div>
                                <h4 className= 'validate'>{this.state.error.Password}</h4> 
                            </div>
                            : null}
                            <FormControl variant="outlined" style={styles.formControl}>
                                <InputLabel >Rank</InputLabel>
                                {this.props.userRank === "Rank1Admin" ?
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
                            {this.state.validateError.Rank? 
                            <div>
                                <h4 className= 'validate'>{this.state.error.Rank}</h4> 
                            </div>
                            : null}
                            
                            {
                            this.state.disable? null :
                            <TextField 
                                name = "center"
                                variant = "outlined"
                                label = "Polling Center"
                                value = {this.state.PollingCenter}
                                onChange = {this.onChangeCenter}
                                style= {styles.textField}
                                disabled= {this.state.disable}
                            />
                            }
                            {this.state.validateError.PollingCenter? 
                                <div>
                                    <h4 className= 'validate'>{this.state.error.PollingCenter}</h4> 
                                </div>
                                : null
                            }
                            <div>
                                <Button
                                    variant = "contained"
                                    color = "primary"
                                    type = "submit"
                                    style= {styles.sMargin}
                                    disabled= {this.state.validateError.Name 
                                        || this.state.validateError.Password 
                                        || this.state.validateError.Rank 
                                        || this.state.validateError.PollingCenter}
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
                    </Grid>
                
                
                {/* <input name="name" placeholder="Name" onChange={this.onChangeName} value={this.state.Name} /> <br />
                <input name="password" placeholder="Password" onChange={this.onChangePassword} value={this.state.Password} /> <br />
                <input name="rank" placeholder="Rank" onChange={this.onChangeRank} value={this.state.Rank} /> <br />
                <button type="submit">Submit</button> */}
            </form>
            </Container>
          </div>
        )
    }
}