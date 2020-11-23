import React, { Component } from 'react'
import {Form, Col, Row ,Button} from 'react-bootstrap'

const LoanApplication =()=>{
   
        return (
            <div className="container" style={{padding:"25px",}} >
                <Form style={{ border:"1px solid maroon",padding:"25px",borderRadius:"8px"}}>
                    <h4 style={{fontWeight:"bolder"}}>Personal Loan Application Form</h4><br/>
                    <h5 style={{textAlign:"left",textDecoration:"underline"}}>Personal Details</h5>
                    
                    <Form.Group as={Col} controlId="formGridPersonal">
                        <Form.Row>
                            <Form.Group  controlId="formGridTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control as="select" defaultValue="Mr">
                                    <option>Mr.</option>
                                    <option>Miss.</option>
                                    <option>Mrs.</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your first name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="number" placeholder="Enter your Last Name" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                                <Form.Group as={Col} controlId="formGridDate">
                                    <Form.Label>D.O.B</Form.Label>
                                    <Form.Control type="date" placeholder="Enter your Date of Birth" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridStatus">
                                    <Form.Label>Martial Status</Form.Label>
                                    <Form.Control as="select" defaultValue="Single">
                                        <option>Single</option>
                                        <option>Married</option>
                                        <option>Window</option>
                                        <option>Widower</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridMobile">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control type="password" placeholder="Enter your phone number." />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>
                        </Form.Row>
                        

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                            </Form.Group>
                        </Form.Row>
                    </Form.Group>
                    <h5 style={{textAlign:"left",textDecoration:"underline"}}>Financial Details</h5>
                    <Form.Group as={Col} controlId="formGridFinancial">
                        <Form.Row>
                            <Form.Group as={Col}  controlId="formGridBank">
                                <Form.Label>Bank</Form.Label>
                                <Form.Control as="select">
                                        <option>Axis Bank</option>
                                        <option>Bank of Baroda</option>
                                        <option>Bank of India</option>
                                        <option>Canara Bank</option>
                                        <option>CSB Bank</option>
                                        <option>Federal Bank</option>
                                        <option>HDFC Bank</option>
                                        <option>ICICI Bank</option>
                                        <option>IDBI Bank</option>
                                        <option>Indian Bank</option>
                                        <option>Indian Overseas Bank</option>
                                        <option>IndusInd Bank</option>
                                        <option>Jammu & Kashmir Bank</option>
                                        <option>Karnataka Bank</option>
                                        <option>Kotak Mahindra Bank</option>
                                        <option>Punjab National Bank</option>
                                        <option>RBL Bank</option>
                                        <option>South Indian Bank</option>
                                        <option>State Bank of India</option>
                                        <option>UCO Bank</option>
                                        <option>Union Bank of India</option>
                                        <option>YES India</option>
                                        </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridBranch">
                                <Form.Label>Branch</Form.Label>
                                <Form.Control type="text" placeholder="Enter Branch" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                                <Form.Group as={Col} controlId="formGridIFSC">
                                    <Form.Label>IFSC Code</Form.Label>
                                    <Form.Control type="text" placeholder="Enter IFSC" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridDate">
                                    <Form.Label>Account Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your Account Number" />
                                </Form.Group>

                                <Form.Group  controlId="formGridType">
                                    <Form.Label>Account Type</Form.Label>
                                    <Form.Control as="select" defaultValue="Savings">
                                        <option>Savings</option>
                                        <option>Current</option>
                                        <option>NRI</option>
                                        
                                    </Form.Control>
                                </Form.Group>

                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridIFSC">
                                <Form.Label>Other Loans</Form.Label> <br />
                                    <div style={{display:"flex",justifyContent:"space-evenly"}}>
                                        <Form.Check type="radio" label=" Yes" />
                                        <Form.Check type="radio" label=" No"  />
                                    </div>
                                    {/* <Col >
                                    <Form.Label>Other Loan</Form.Label> <br />
                                    <Form.Check label="Yes" type="radio" />
                                    <Form.Check  label="No" type="radio"  />
                                </Col> */}
                                    
                                    </Form.Group>

                                <Form.Group as={Col} controlId="formGridDate">
                                    <Form.Label>Loan Details</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your Account Number" />
                                </Form.Group>
                                
                            </Form.Row>
                    </Form.Group>
                    <h5 style={{textAlign:"left",textDecoration:"underline"}}>Employment Details</h5>
                    <Form.Group as={Col} controlId="formGridEmployment">
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridJob">
                                <Form.Label>Job Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter Job Title" />
                            </Form.Group>
                            <Form.Group as={Col}  controlId="formGridJobType">
                                <Form.Label>Job Type</Form.Label>
                                <Form.Control as="select" defaultValue="Permanent">
                                        <option>Permanent</option>
                                        <option>Part Time</option>
                                        <option>Full Time</option>
                                        <option>Contract</option>
                                        <option>Internship</option>    
                                    </Form.Control>
                            </Form.Group>
                            
                        </Form.Row>
                    


                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCompany">
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Company Name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridAddress">
                                <Form.Label>Company Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter Company Address" />
                            </Form.Group>

                               
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridType">
                                <Form.Label>Experience</Form.Label>
                                <Form.Control type="number" placeholder="Enter Experience in months." />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridSalary">
                                <Form.Label>Salary</Form.Label>
                                <Form.Control type="number" placeholder="Enter CTC" />
                            </Form.Group>
                        
                        </Form.Row>

                    </Form.Group>
                    
                    <h5 style={{textAlign:"left",textDecoration:"underline"}}>Loan Details</h5>
                    <Form.Group as={Col} controlId="formGridLoan">
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridLoanAmount">
                                <Form.Label>Loan Amount</Form.Label>
                                <Form.Control type="number" placeholder="Enter Expected Loan Amount." />
                            </Form.Group>
                            <Form.Group as={Col}  controlId="formGridInterest">
                                <Form.Label>Interest %</Form.Label>
                                <Form.Control type="number" placeholder="20%" value="20%" readonly />   
                            </Form.Group>
                            
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridTenure">
                                <Form.Label>Tenure</Form.Label>
                                <Form.Control as="select" defaultValue="6 Months">
                                        <option>6 Months</option>
                                        <option>12 Months</option>
                                        <option>18 Months</option>
                                        <option>24 Months</option>
                                        <option>30 Months</option>
                                        <option>36 Months</option>
                                        <option>42 Months</option>
                                        <option>48 Months</option>
                                        <option>54 Months</option>
                                        <option>60 Months</option>
                                           
                                    </Form.Control>
                                
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEMI">
                                <Form.Label>EMI</Form.Label>
                                <Form.Control type="text" placeholder="2500" readonly/>
                            </Form.Group>

                               
                        </Form.Row>
                        

                    </Form.Group>

                   




                    
                        

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }

export default LoanApplication;