import { Typography } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import React, { Component, Fragment } from 'react';
import CardItem from "./CardItem";

function Rank4Home() {
    return (
      <div className="Rank4Home_page">
        <Fragment>

          <div className="page_heading">
            <h2>Welcome to Admin Menu</h2>
            <h2>(RANK-4)</h2>
            </div>
            {/* <div className="cards"> */}
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className='cards__items'>
                        <CardItem
                            src='https://lucascountyelections.iowa.gov/global/images/how_do_i_vote.png'
                            text='click here to step in the polling center'
                            label='START VOTING'
                            path='/polCenter'
                        />
                       
                     </ul>
                </div>
            </div>
        {/* </div> */}
      </Fragment>
      </div>
    )
}

export default Rank4Home