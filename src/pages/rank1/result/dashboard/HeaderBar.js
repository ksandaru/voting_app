//import "../Result.css";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import React, { Component } from 'react'
import axios from 'axios';

export default class HeaderBar extends Component {

    constructor(props){
        super(props)

        this.state = {
            electors: 0,
        }
    }
    componentDidMount(){

        axios.get('https://localhost:5001/api/person/')
        .then(response=> {
            //debugger;
            this.setState({
                electors: response.data.length,
            });
        });
        //debugger;
    }

    render() {
        return (
        <main>
        <div className="main__container">       
            <div className="main__title">
                <div className="main__greeting">
                    <h1>Vote Result Summary</h1>
                </div>
            </div>

            {/* CARDS STARTS HERE */}
            <div className="main__cards">
                <div className="card">
                    <div className="card_inner">
                        <span className="font-bold text-title"><strong>Electors</strong></span>
                        <span className="font-bold text-title">{this.state.electors}</span> 
                    </div>
                    {/* <div>
                        <Progress
                        percent={40}
                        status="error"
                        theme={{
                            error: {
                            symbol: '40%',
                            color: '#fbc630'
                            }
                        }}
                        />
                    </div> */}
                </div>

                <div className="card">
                    <div className="card_inner">
                        <span className="font-bold text-title"><strong>Polled</strong></span>
                        <span className="font-bold text-title">{this.props.obj1.partyTotal}</span>
                    </div>
                    <div>
                        <Progress
                            percent={(this.props.obj1.partyTotal/this.state.electors)*100}
                            status="error"
                            theme={{
                                error: {
                                symbol: ((this.props.obj1.partyTotal/this.state.electors)*100).toFixed(2) + '%',
                                color: '#fbc630'
                                }
                            }}
                        />
                    </div>
                </div>

                <div className="card">
                    <div className="card_inner">
                        <span className="font-bold text-title"><strong>Rejected</strong></span>
                        <span className="font-bold text-title">0</span>
                    </div>
                    <div>
                        <Progress
                            percent={0}
                            status="error"
                            theme={{
                                error: {
                                symbol: '0%',
                                color: '#fbc630'
                                }
                            }}
                        />
                    </div>
                </div>

                <div className="card">
                    <div className="card_inner">
                        <span className="font-bold text-title"><strong>Valid</strong></span>
                        <span className="font-bold text-title">{this.props.obj1.partyTotal}</span>
                    </div>
                    <div>
                        <Progress
                            percent={(this.props.obj1.partyTotal/this.state.electors)*100}
                            status="error"
                            theme={{
                                error: {
                                symbol:((this.props.obj1.partyTotal/this.state.electors)*100).toFixed(2) + '%',
                                color: '#fbc630'
                                }
                            }}
                        />
                    </div>
                </div>
            </div> 
        </div>
        </main>
        )
    }
}
