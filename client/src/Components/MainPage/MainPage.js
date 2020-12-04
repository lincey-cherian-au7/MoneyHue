import React, { Component } from 'react';
import ReadMoreReact from 'read-more-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faMoneyBill ,faFileAlt,faClock } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../CarouselComp/CarouselComp';
import VideoComponent from '../Video/VideoComponent';
import CalculatorModal from '../CalculatorModal/CalculatorModal';
import {Card} from 'react-bootstrap';
import './MainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewCarousel from '../ReviewCarousel/ReviewCarousel';
import LoanApplication from '../LoanApplication/LoanApplication';


class MainPage extends Component {
    constructor(){
        super()
        this.state={
            modalShow:false,
            
        }
        this.setModalShow=(modalShow)=>{
            this.setState({modalShow})
        }   
    }
    render() {
        const setApplication=()=>{
            <LoanApplication/>
        }
        
        return (
            <div>
                <div className="media_container">
                    <div className="carousel_container">
                        <Carousel/>
                    </div>
                    <div className="video_container">
                        <VideoComponent/>
                    </div>
                </div>
                <div className="button_section">
                    <button class="btn-light button btn-lg" style={{width:"260px",height:"90px",fontSize:"20px"}} onClick={setApplication} type="submit" href="">Personal Loan</button>
                    <button class="btn-light btn-lg button "style={{width:"260px",height:"90px",fontSize:"20px"}}>Home Loan</button>
                    <button class="btn-light btn-lg button "style={{width:"260px",height:"90px",fontSize:"20px"}}>Car Loan</button>
                    <button class="btn-light btn-lg button "style={{width:"260px",height:"90px",fontSize:"20px"}}>Credit Card</button>
                </div>
                
                <CalculatorModal
                    show={this.state.modalShow}
                    onHide={() => this.setModalShow(false)}/>
                <div className="loan_container">
                    <div className="button_container">
                        <div>
                            <div className="row_container">
                                <button className="buttontag" onClick={() => this.setModalShow(true)}>Personal Loan EMI Calculator</button>
                                <button className="buttontag" onClick={() => this.setModalShow(true)}>Home Loan EMI Calculator</button>
                            </div>
                        </div>
                        <div>
                            <div className="row_container">
                                <button className="buttontag" onClick={() => this.setModalShow(true)}>Car Loan EMI Calculator</button>
                                <button className="buttontag" onClick={() => this.setModalShow(true)}>Credit Card  EMI Calculator</button>
                            </div>
                        </div> 
                    </div>
                    <div className="blog_container">
                        <div>
                            <img src="./logo.png" alt="logo"></img></div>
                        <div>
                        <ReadMoreReact text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                            min={340}
                            ideal={350}max={5000}
                            readMoreText="Read More>>>" style={{fontFamily: "Verdana, Geneva, Tahoma, sans-serif"}}/>
                        </div>  
                    </div>
                </div>
                <div className="media_container">
                    <div className="section_ad">
                        <Card className="circle">
                        <FontAwesomeIcon icon={faCalculator } size = '3x' /><br/>
                        100% Online Process</Card>
                        <Card className="circle">
                            <FontAwesomeIcon icon={faMoneyBill } size = '3x' /><br/>
                            Loans starting from ₹ 1,000 to ₹ 15 Lakhs </Card>
                        <Card className="circle">
                        <FontAwesomeIcon icon={faFileAlt } size = '3x' /><br/>
                        Minimum Documentation</Card>
                        <Card className="circle">
                        <FontAwesomeIcon icon={faClock } size = '3x' /><br/>
                        Money in Bank in 15 minutes</Card>
                    </div>
                </div>
                <div className="review_container">
                    <div className="review_section">
                       <ReviewCarousel/>
                    </div>
                </div>
                <div/>
             
                
                
            </div>
        )
    }
}
export default MainPage;
