import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { Modal, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import {getUser} from '../../Actions/signUpAction'

const VerificationModal = (props) => {
    const dispatch = useDispatch()
    const email = props.email
    const userData = useSelector(state=>state.registerReducer)
    useEffect(()=>{
        dispatch(getUser(email))
    },[])
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    User Account Verfication
                    Hey,{props.name}
                    </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div className="input-container">
                        <Form>
                            <Form.Group controlId="formBasicRange">
                                <Form.Row>
                                    <div style={{ textDecoration: 'underline' }}>
                                        <h2>Email Verification</h2>
                                    </div>
                                </Form.Row>
                                <Form.Row>
                                    <div className='text-muted' style={{ fontSize: '20px' }}>
                                        <p>We will send you an email to your registerd email. <br />
                                                Please click the link in your mail to verfiy your Cashwibe Account within 10 mins
                                            </p>
                                    </div>
                                </Form.Row>
                                <Form.Row>
                                    <Col >
                                        <Form.Label>Email Verifivation Status :</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Label style={{ color: "red" }}> <FontAwesomeIcon icon={faTimesCircle} /> Not Verified !</Form.Label>
                                        <Form.Label style={{ color: "green" }}> <FontAwesomeIcon icon={faCheckCircle} /> Verified</Form.Label>
                                    </Col>

                                </Form.Row>

                            </Form.Group>
                            <Form.Group controlId="formBasicRange">
                                <Form.Row>
                                    <div style={{ textDecoration: 'underline' }}>
                                        <h2>Mobile Verification</h2>
                                    </div>
                                </Form.Row>
                                <Form.Row>
                                    <div className='text-muted' style={{ fontSize: '20px' }}>
                                        <p>We will send you an OTP(One Time Password) to your registerd Mobile Number. <br />
                                                Please Enter the OTP below textbox to verfiy your MoneyHue Account within 10 mins.
                                            </p>
                                    </div>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group controlId="formBasicRange">
                                <Form.Row>
                                    <Form.Control type="text" name='otp' placeholder="Enter OTP Here" />
                                </Form.Row>
                                <Form.Row>
                                        <Form.Label style={{ color: "red" }}> <FontAwesomeIcon icon={faTimesCircle} /> Not Verified !</Form.Label>
                                        <Form.Label style={{ color: "green" }}> <FontAwesomeIcon icon={faCheckCircle} /> Verified</Form.Label>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicRange">
                                <Button onClick={props.onHide}>Submit</Button>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                {/* <Button onClick={props.onHide}>Close</Button> */}
            </Modal.Footer>
        </Modal>
    )
}

export default VerificationModal;
