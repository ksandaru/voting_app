import { Typography } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import React, { Component, Fragment } from 'react';
import CardItem from "./CardItem";

function Rank3Home() {
    return (
      <div className="Rank3Home_page">
        <Fragment>

          <div className="page_heading">
            <h2>Welcome to Admin Menu</h2>
            <h2>(RANK-3)</h2>
            </div>
            {/* <div className="cards"> */}
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className='cards__items'>
                        <CardItem
                            src='https://icon-library.com/images/data-entry-icon/data-entry-icon-25.jpg'
                            text='Create the details of public here'
                            label='NIC DATA ENTRY'
                            path='/addPerson'
                        />
                       
                     </ul>
                </div>
            </div>
        {/* </div> */}
      </Fragment>
      </div>
    )
}

export default Rank3Home