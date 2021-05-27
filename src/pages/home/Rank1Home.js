import { Typography } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import React, { Component, Fragment } from 'react';
import CardItem from "./CardItem";

function Rank1Home() {
    return (
      <div className="Rank1Home_page">
        <Fragment>
          <div className="page_heading">
            <h2>Welcome to Admin Menu</h2>
            <h2>(RANK-1)</h2>
            </div>
            {/* <div className="cards"> */}
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className='cards__items'>
                        <CardItem
                            src='https://icon-library.com/images/admin_1246350.png'
                            text='You are able to create a new admin account here'
                            label='CREATE NEW ADMIN'
                            path='/adminList'
                        />
                        <CardItem
                          src='https://www.quinntessential.com.au/Icon-Reports%203D.png'
                          text='View and analyse the results in a wide or brief criterias'
                          label='VIEW RESULTS'
                          path='/barChart'
                        />
                        <CardItem
                          src='https://www.propertymatrix.com/wp-content/uploads/2016/07/settings3.png'
                          text='Set up the system privacy and policies '
                          label='SETTING'
                          path='/addDistricts'
                        />
                     </ul>
                </div>
            </div>
        {/* </div> */}
      </Fragment>
      </div>
    )
}

export default Rank1Home