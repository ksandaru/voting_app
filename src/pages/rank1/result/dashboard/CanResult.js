import React, { Component } from 'react'
import '../Result.css';
import {InputLabel, Container, MenuItem,Select,FormControl,Table, TableBody,TableCell, TableContainer, TableRow, TableHead,Paper} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ProgressBar from './ProgressBar';
import axios from 'axios';
//import barChart from '../result/barChart';
import { Col, Overlay, Row, Button,Card,CardGroup } from 'react-bootstrap';


const styles = {

    table: {
        minWidth: 650,       
      },

    root: {
      display: 'flex',
    },

    media: {
      paddingLeft: 20,
      padding: 10,
    },

     rowProperty: {
      height: 10,
      margin :"0px"
      },

    colProperty1: {
      minWidth : 10
    },

    colProperty2: {
      minWidth : 50
    },  
    formControl: {
        margin: "10px auto",
        minWidth: 230,
    },  
    cross: {
        Fontsize: "20px",
    },
////////////////////////////////

    tablecan: {
        minWidth: 250,       
      },

    rootcan: {
      display: 'flex',
    },

    mediacan: {
      paddingLeft: 20,
      padding: 10,
    },

     rowPropertycan: {
      height: 6,
      },

    colProperty1can: {
      minWidth : 10
    },

    colProperty2can: {
      minWidth : 50
    },  
    formControlcan: {
        margin: "10px auto",
        minWidth: 230,
    },  
    crosscan: {
        Fontsize: "20px",
    },
    small: {
        width: "35px",
        height:"35px",
        display: 'flex'
      },

       progressStylesMin :{
        height: 12,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 8,
        margin: 0,
        Align : 'left'
      },

      progressStyles : {
        height: 20,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 8,
        margin: 0,
        Align : 'left'
      },

};

export default class CanResult extends Component {

    constructor(props){
  //     debugger;
        super(props);

        this.onChangeDistrict = this.onChangeDistrict.bind(this);
        this.CanChart = this.CanChart.bind(this);
       
        this.state = {
            disctOptions: [{ value: '', display:'Select District'}],
            District: "",
            Candidates : [],
            PartyData: [],
            partyWiseCan :[],
            // partyAmount :"",

            districtCanCount: [],
            divisionCanCount: [],
            candidateCount: [],

            districtPartyCount: [],
            divisionPartyCount: [],
            partyCount: [],

            candidateData: [],
            districtCanData: [],
            divisionCanData: [],

        };
    }

    componentDidMount(){

        axios.get('https://localhost:5001/api/District/')
        .then(response => {
          //  debugger;
            let DisctfromApi = response.data.map(disctOption =>{
                return { value: disctOption.id, display: disctOption.name}
            });
            this.setState({
                disctOptions: [{ value: '', display:'Select District'}].concat(DisctfromApi)
            });
        })
        .catch(function (error) {
            console.log(error);
        });
        


       debugger;

    }

    onChangeDistrict(e) {
   //   debugger;
        this.setState({
            District: e.target.value
        });

        const DisID = parseInt(e.target.value);
        const DisName = e.target.name;

         const Candidates =  this.props.objct.districtCanData
        //const Candidates =  this.state.districtCanData
        .filter(item => item.districtID === DisID)
        .map(canItem => canItem.Candidate)
        .reduce((Prev, current) => Prev.concat(current),[]);

       this.CanChart(DisID,Candidates);
    }

    

    CanChart(DisID,Candidates){   
         var totData;
      //  debugger;
         if(DisID == ''){
          //  totData = this.state.candidateData;
            <p>select the District you are looking forward Results</p>
         }

         else {
             if(Candidates.length == 0){
                 totData =[];
             }
             else {
                 totData = Candidates; 
            }
         }

       const canList = [];

       if(totData.length !=0){
           debugger;
           let canVotecount = [];
           let canID = [];
           let CanNo =[];
           totData.forEach(element => {
               canVotecount.push(element.candidateCount);
               canID.push(element.candidateID);
               CanNo.push(element.candidateNo);        
           });

       //    debugger;
           var canPercent =[];
        
          const totvote = this.props.objct.districtCanData
         // const totvote = this.state.districtCanData
                           .map(item => item.districtCount)
                           .reduce((Prev, current) => Prev.concat(current),[])
         //   debugger;
           for (let i=0; i< canVotecount.length; i++){
               var numerator = canVotecount[i];

               if(numerator == undefined){
                   canPercent.push(0);
               }
               else{
                   var cal = (((parseInt(numerator))/ (parseInt(totvote)))*100).toFixed(2);
                   canPercent.push(cal);
               }
          //     debugger;
           }

           var canPercentID = canID.map((id,index)=> {
               return{
                   ID : id,
                   percnt : canPercent[index]
               }
           });
         //   debugger;
           const canRec = totData.sort(sortFunction);

           function sortFunction(a,b){
               if (a.candidateCount === b.candidateCount){
                   return 0;
               }
               else{
                   return (a.candidateCount > b.candidateCount) ? -1 : 1;
               }
           }
           const percentage = canPercentID;

          const ptyData = this.props.objct.partyData;
         // const ptyData = this.state.PartyData;

           let ptyColor =[];
           let ptyID = [];
           let ptyName =[];
           
        //debugger;
           ptyData.forEach(item =>{ 
               ptyColor.push(item.color);
               ptyID.push(item.partyID);
               ptyName.push(item.partyName);
           })

           var partyColorID  = canID.map((id,index) =>{
               return{
                  pID : ptyID[index],
                  colr: ptyColor[index], 
                  pName: ptyName[index], 
               }
           });

           for(let i=0; i< canRec.length; i++){
            canList.push({
                ...canRec[i],
                ...(partyColorID.find(item => item.pID === canRec[i].party_ID)),
                ...(percentage.find(item => item.ID === canRec[i].candidateID)),
               
            });
        }
            debugger;
        // var ptyAmount = this.state.PartyData.length;
       var ptyWiseCan = [];

            for(let j=0; j< ptyData.length; j++){
            ptyWiseCan.push({
                 ...ptyData[j],
                can: canList.filter(item => item.party_ID === partyColorID[j].pID),
                
                 });
               }

       debugger;
            
       this.setState({
        Candidates : canList,
        partyWiseCan : ptyWiseCan,
       
         });

    }}

    render() {
        return (

         

            <main>

            <div className="main__container">       
              <div className="main__title">
                <div className="main__greeting">
                  <h1>Candidate Result View</h1>
                 
                  <FormControl variant="outlined" style={styles.formControl}>
                                <InputLabel >Select District</InputLabel>
                                <Select
                                    value = {this.state.District}
                                    onChange= {this.onChangeDistrict}
                                >
                                    {this.state.disctOptions.map((disctOption) => 
                                        <MenuItem key={disctOption.value} value={disctOption.value}>{disctOption.display}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                </div>
              </div>
      

             
      
              {/* <!-- CHARTS STARTS HERE --> */}
              <div className="charts">
                <div className="charts__left">
                  <div className="charts__left__title">
                    <div>
                      <h1>District Candidates Result</h1>
                    </div>
                    {/* <i className="fa fa-usd" aria-hidden="true"></i> */}
                  </div>
                  <hr className="new1"/>
                  {/* <BarChart /> */}
                </div>
              {/* Right handside chart */}
                <div className="charts__right">
                  <div className="charts__right__title">
                    <div>
                      <h1>Districts Result - Candidates</h1>
                    </div>
                    {/* <i className="fa fa-usd" aria-hidden="true"></i> */}
                  </div>
                  <hr className="new1"/>
                  <div className="charts__right__cards">
                  <div>
                  <div className="Canscroll">
                     <TableContainer component={Paper}>
                    <Table style={styles.table} aria-label="simple table">
                        <TableBody>
                            {this.state.Candidates.map((row) => (
                                <TableRow key={row.candidateID}  style={styles.rowProperty} hover>
                                    <TableCell component="th" scope="row" style={{width : "15%"}}>

                                        <div className="v1" height="25px"><strong>{row.pName}</strong></div>
                                        <div className ="v1" height="50px"><h2> <strong> {row.candidateNo}&#10006;</strong></h2></div>
                                        
                                    </TableCell>
                                    <TableCell component="th" scope="row" style={{width : "5%"}}>                         
                                        <div style={styles.media}>
                                            <Avatar alt={row.image} src={row.imageSrc} />
                                        </div>                           
                                    </TableCell>
                                    <TableCell align="left">
                                        <span className="charts__right__title"><strong>{row.candidateName}</strong></span>
                                        <div>
                                            <ProgressBar key={row.candidateID} bgcolor={row.colr} completed={row.percnt} style={styles.progressStyles}/> 
                                        </div>
                                        <span className="charts__right__title">{row.candidateCount}</span>
                                    </TableCell>
                                    <TableCell align="right" style={{width : "5%"}}>
                                        <span className="charts__right__title"><strong>{row.percnt}%</strong></span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
               </div>
                    </div>
                  </div>
      
                </div>
              </div>

                 {/* cadidate_party_table */}
                <div className="cadidate_party_table">
                  <div className="charts__right__title">
                    <div>
                      <h1>Party Wise Candidates Result </h1>
                    </div>
                    {/* <i className="fa fa-usd" aria-hidden="true"></i> */}
                  </div>
                  <hr className="new1"/>
                  <div className="block__cards">
                
                  {this.state.partyWiseCan.map((item) => (
           

                <TableCell hover>
                        <div className="card_candidates" >
                            <div className= "card_Candidate_title">
                            <div><h2>{item.partyName}</h2></div> 
                            </div>
                            <hr className="new1"/>



                              {/* <div className="CardRowScroll"> */}
                
                            {item.can.map((row) => (

                                <div className= "dis_ele_result">
                                    <div className= "dis_ele_block d-flex align-items-center">
                                        <div className= "ele_log">
                                              <Avatar src={row.imageSrc} height="20" width="2 0" alt={row.image} />
                                        </div>
                                        <div className="ele_party">
                                              {row.candidateName}
                                        </div>
                                        <div className="ele_value ml-auto">
                                            <strong> {row.percnt}% </strong> 
                                            <span> {row.candidateCount} </span>
                                        </div>
                                        
                                    </div>
                                    <div className="progress">
                                    <ProgressBar key={row.candidateID} bgcolor={row.colr} completed={row.percnt} style={styles.progressStylesMin} /> 
                                    </div>
                                </div>
                                ))}

                                </div>
                   








    
                        {/* </div> */}
                        </TableCell>
                  ))}
                
                    </div>
                  </div>
                  </div>
                       

            {/* </div> */}
          </main>
        )
    }
}
