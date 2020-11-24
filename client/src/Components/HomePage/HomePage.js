import React, { Component } from 'react'
import './HomePage.css'
import {Card} from 'react-bootstrap'
import ApplicationCard from '../ApplicationCard/ApplicationCard'
import InfoCard from '../InfoCard/InfoCard'
import FooterCard from '../FooterCard/FooterCard'

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="info_container">
                    <InfoCard/>
                </div>
                <div className="row_container">
                    <div className="application_container">
                        <ApplicationCard/>
                    </div>
                   
                </div>
                <div className="footer_container">
                    <FooterCard/> 
                </div>
                <Card >
                    <Card.Footer style={{backgroundColor:"#5F021F",color:"white", fontSize:"small"}}>CopyRight @2020 MoneyHue Private Limited.</Card.Footer>
                </Card>
                  
            </div>
        )
    }
}
export default HomePage
