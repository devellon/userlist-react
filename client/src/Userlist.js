import React, { Component } from 'react';
import Usercard from './Usercard';
import './Userlist.css';

const Userlist = (props) => {
    return(
        <div className="cardsArea">
            <Usercard />
        </div>
    );
}

export default Userlist;