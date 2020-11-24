import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import './InfoCard.css'

export default class InfoCard extends Component {
    render() {
        return (
            <div className="card_container">
                <div  className="card_cont">
                   Total Applications
                   <p>112</p>
                </div>
                <div className="card_cont">
                    Total Approved
                    <p>112</p>
                </div>
                <div className="card_cont">
                    Total Rejected
                    <p>112</p>
                </div>
                <div className="card_cont">
                    Total Applications
                    <p>112</p>
                </div>
                 
            </div>
        )
    }
}
