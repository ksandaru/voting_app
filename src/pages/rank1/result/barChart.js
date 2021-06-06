import React, { Component } from 'react'
import axios from 'axios';
import { Paper, Grid } from '@material-ui/core';
import Map from './dashboard/Map';
import HeaderBar from './dashboard/HeaderBar';
import CanResult from './dashboard/CanResult';


export default class barChart extends Component {

    constructor(props){
        super(props)

        this.state = {
                //these are only for the process
            districtPartyCount: [],
            divisionPartyCount: [],
            partyCount: [],

            districtCanCount: [],
            divisionCanCount: [],
            candidateCount: [],

                // use these data to access vote counts
            partyData: [],
            districtPartyData: [],
            divisionPartyData: [],
            partyTotal: '',

            candidateData: [],
            districtCanData: [],
            divisionCanData: [],
            
        }
    } 

    componentDidMount(){
        debugger;
        this.partyClass();
        this.candidateClass();
    }

    partyClass(){

        //////////////////data load for vote party///////////////////////////////////

        axios.get('https://localhost:5001/api/vote/')
        .then(response => {
            // debugger;
            //all the vote objects
            const total = response.data;

            const Districts = total
            .map(disItem => disItem.personDist)
            .filter((district,index,array) => array.indexOf(district) === index );

            // debugger;
            //add party vote count by district into an array
            const DistPartyCounts = Districts
            .map(district => ({
                districtID: district,
                districtCount: total.filter(item => item.personDist === district).length,
                Party: total.filter(item => item.personDist === district)
                    .map(ptyItem => ptyItem.party_ID)
                    .filter((party,index,array) => array.indexOf(party) === index )
                    .map(PtyItem => ({
                        partyID: PtyItem,
                        partycount: total.filter(item => item.personDist === district)
                            .filter(item => item.party_ID === PtyItem).length
                    })),
            }));

            const Divisions = total
            .map(divItem => divItem.personDiv)
            .filter((division,index,array) => array.indexOf(division) === index );

            // debugger;
            //add party vote count by division into an array
            const DivPartyCounts = Divisions
                    .map(DivItem => ({
                        divisionID: DivItem,
                        divisionCount: total
                            .filter(item => item.personDiv === DivItem).length,
                        Party: total.filter(item => item.personDiv === DivItem)
                            .map(ptyItem => ptyItem.party_ID)
                            .filter((party,index,array) => array.indexOf(party) === index )
                            .map(PtyItem => ({
                                partyID: PtyItem,
                                partycount: total
                                    .filter(item => item.personDiv === DivItem)
                                    .filter(item => item.party_ID === PtyItem).length
                            }))
                    }))

            // debugger;
            //add party vote count into an array
            const Parties = total
             .map(dataItem => dataItem.party_ID)
             .filter((party,index,array) => array.indexOf(party) === index);

             const PartyCounts = Parties
                .map(Party => ({
                    partyID: Party,
                    partycount: total.filter(item => item.party_ID === Party).length
             }));

            this.setState({ 
                districtPartyCount: DistPartyCounts,
                divisionPartyCount: DivPartyCounts,
                partyCount: PartyCounts,
                partyTotal: total.length,
            });
            // debugger;
        })
        .then(
            axios.get('https://localhost:5001/api/party/')
            .then(res => {
                // debugger;
                //defining arrays
                const partyRec = res.data;
                const partyVote = this.state.partyCount;
                const partyVoteDist = this.state.districtPartyCount;
                const partyVoteDiv = this.state.divisionPartyCount;

                //temporary arrays to save merged arrays
                const partyList = [];
                const partyListDist = [];
                const partyListDiv = [];

                //merge 'partyRec' array and 'partyVote' array to new array called 'partyList'
                for (let i = 0; i < partyRec.length; i++) {
                    partyList.push({
                        ...partyRec[i],
                        ...(partyVote.find(item => item.partyID === partyRec[i].partyID))
                    })
                }
                // debugger;
                //merge 'partyRec' array and 'partyVoteDist' array to new array called 'partyListDist'
                for (let j = 0; j < partyVoteDist.length; j++) {
                    const count = partyVoteDist.map(item => item.Party)[j];
                    partyListDist.push({...partyVoteDist[j]});
                    partyListDist[j].Party = [];
                    // debugger;
                    // for (let i = 0; i < count.length; i++) {
                    //     debugger;
                    //     partyListDist[j].Party.push({
                    //         ...partyRec[i],
                    //         ...(count.find(item => item.partyID === partyRec[i].partyID))
                    //     })
                    //     debugger;
                    // }
                    for (let i = 0; i < count.length; i++) {
                        // debugger;
                        partyListDist[j].Party.push({
                            ...count[i],
                            ...(partyRec.find(item => item.partyID === count[i].partyID))
                        })
                        // debugger;
                    }
                }
                // debugger;
                //merge 'partyRec' array and 'partyVoteDiv' array to new array called 'partyListDiv'
                for (let j = 0; j < partyVoteDiv.length; j++) {
                    const count = partyVoteDiv.map(item => item.Party)[j];
                    partyListDiv.push({...partyVoteDiv[j]});
                    partyListDiv[j].Party = [];
                    // debugger;
                    for (let i = 0; i < count.length; i++) {
                        // debugger;
                        partyListDiv[j].Party.push({
                            ...count[i],
                            ...(partyRec.find(item => item.partyID === count[i].partyID))
                        })
                    }
                }
                // debugger;
                //assign array data to state data arrays
                this.setState({
                    partyData: partyList,
                    districtPartyData: partyListDist,
                    divisionPartyData: partyListDiv,
                })
                // debugger;
            })
            .catch(function (error) {
                console.log(error);
            })
        )
        .catch(function (error) {
            console.log(error);
        });

    }

    candidateClass(){

        //////////////////data load for vote candidate///////////////////////////////////

        debugger;
        axios.get('https://localhost:5001/api/voteCan/')
        .then(response => {
            // debugger;
            const total = response.data;

            const Districts = total
            .map(disItem => disItem.personDist)
            .filter((district,index,array) => array.indexOf(district) === index );

            // debugger;

            const DistCanCounts = Districts
            .map(district => ({
                districtID: district,
                districtCount: total.filter(item => item.personDist === district).length,
                Candidate: total.filter(item => item.personDist === district)
                    .map(canItem => canItem.candidate_ID)
                    .filter((candidate,index,array) => array.indexOf(candidate) === index )
                    .map(CanItem => ({
                        candidateID: CanItem,
                        candidateCount: total.filter(item => item.personDist === district)
                            .filter(item => item.candidate_ID === CanItem).length
                    })),
            }));

            // debugger;

            const Divisions = total
            .map(divItem => divItem.personDiv)
            .filter((division,index,array) => array.indexOf(division) === index );

            const DivCanCounts = Divisions
                .map(DivItem => ({
                    divisionID: DivItem,
                    divisionCount: total
                        .filter(item => item.personDiv === DivItem).length,
                    Candidate: total
                        .map(canItem => canItem.candidate_ID)
                        .filter((candidate,index,array) => array.indexOf(candidate) === index )
                        .map(CanItem => ({
                            candidateID: CanItem,
                            candidateCount: total
                                .filter(item => item.personDiv === DivItem)
                                .filter(item => item.candidate_ID === CanItem).length,
                        }))
                }))

            const Candidates = total
             .map(dataItem => dataItem.candidate_ID)
             .filter((candidate,index,array) => array.indexOf(candidate) === index);

             const CandidateCounts = Candidates
             .map(Candidate => ({
                 candidateID: Candidate,
                 candidatecount: total.filter(item => item.candidate_ID === Candidate).length
             }));

            this.setState({ 
                districtCanCount: DistCanCounts,
                divisionCanCount: DivCanCounts,
                candidateCount: CandidateCounts
            });
            // debugger;
        })
        .then(
            axios.get('https://localhost:5001/api/candidate/')
            .then(resCan => {
                debugger;
                const candidateRec = resCan.data;
                const candidateVote = this.state.candidateCount;
                const canVoteDist = this.state.districtCanCount;
                const canVoteDiv = this.state.divisionCanCount;

                const candidateList = [];
                const candidateListDist = [];
                const candidateListDiv = [];

                for (let i = 0; i < candidateRec.length; i++) {
                    candidateList.push({
                        ...candidateRec[i],
                        ...(candidateVote.find(item => item.candidateID === candidateRec[i].candidateID))
                    })
                        
                }
                // debugger;
                for (let j = 0; j < canVoteDist.length; j++) {
                    const count = canVoteDist.map(item => item.Candidate)[j];
                    candidateListDist.push({...canVoteDist[j]});
                    candidateListDist[j].Candidate = [];
                    // debugger;
                    for (let i = 0; i < count.length; i++) {
                        // debugger;
                        candidateListDist[j].Candidate.push({
                            ...count[i],
                            ...(candidateRec.find(item => item.candidateID === count[i].candidateID))
                        })
                    }
                }
                // debugger;
                for (let j = 0; j < canVoteDiv.length; j++) {
                    const count = canVoteDiv.map(item => item.Candidate)[j];
                    candidateListDiv.push({...canVoteDiv[j]});
                    candidateListDiv[j].Candidate = [];
                    // debugger;
                    for (let i = 0; i < count.length; i++) {
                        // debugger;
                        candidateListDiv[j].Candidate.push({
                            ...count[i],
                            ...(candidateRec.find(item => item.candidateID === count[i].candidateID))
                        })
                    }
                }

                // debugger;

                this.setState({
                    candidateData: candidateList,
                    districtCanData: candidateListDist,
                    divisionCanData: candidateListDiv,

                    distictPartyCount: [],
                    divisionPartyCount: [],
                    partyCount: [],

                    districtCanCount: [],
                    divisionCanCount: [],
                    candidateCount: [],
                })
                debugger;
            })
            .catch(function (error) {
                console.log(error);
            })
        )
        .catch(function (error) {
            console.log(error);
        });
    }

    openHeader(){
        return <HeaderBar obj1={this.state}/>;
    }
    
    openMap(){
        //debugger;
        return <Map obj={this.state}/>;
    }
    openCandidate(){
        //debugger;
        return <CanResult objct={this.state}/>;
    }

    render() {    
        return (
            <div>
                {this.openHeader()}
                <Paper>
                    <Grid>
                        {this.openMap()}
                    </Grid>
                </Paper>
                <Paper>
                    <Grid>
                        {this.openCandidate()}
                    </Grid>
                </Paper>
            </div>
        )
    }
}
