import React,{useState} from 'react';
import {Modal,Button} from 'react-bootstrap'

const CalculatorModal=(props)=> {
    const [rangeval, setRangeval] = useState(1999);
    const [tenureVal, setTenureVal] = useState(12);

    const imposeMinMax=(value, min, max)=> {
        if(parseInt(value) < min || isNaN(parseInt(value))) 
            return min; 
        else if(parseInt(value) > max) 
            return max; 
        else return value;
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    EMI Calculator
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal_container "style={{display:"flex",width:"100%",paddingRight:"0px"}}>
                    <div className="left_container" style={{width:"60%",}}>
                        <div className="text_container">
                            <div className="text_box" style={{display:"flex"}}>
                                <h6>Principal Amount</h6>
                                <input  type="text" 
                                    style={{height:"30px",width:"190px" , marginLeft:"auto",marginRight:"0px"}} 
                                    value={rangeval} 
                                    min="50000" 
                                    max="1500000" 
                                    readOnly
                                    step="50000"
                                    placeholder={rangeval}  
                                    onChange={(event) => setRangeval(event.target.value)}></input>
                            </div>
                           
                            <div style={{paddingTop:"4px",color:"red"}}>
                                <input className="custom-range" type="range" 
                                    id="points" 
                                    style={{width:"100%"}} 
                                    name="points" 
                                    min="50000" 
                                    max="1500000" 
                                    value={rangeval}
                                    
                                    onChange={(event) => setRangeval(event.target.value)} ></input>
                            </div>
                        </div>
                        <br/>
                        <div className="text_container"style={{ paddingBottom:"15px",}}>
                            <div className="em" style={{display:"flex"}}>
                                <h6>Interest Rate</h6>
                                <input 
                                    type="text" 
                                    style={{height:"30px",
                                            width:"190px" , 
                                            marginLeft:"auto",
                                            marginRight:"0px"}}
                                    value="14%"
                                    readOnly></input>
                            </div>
                        </div>
                        <br/>
                        <div className="text_container">
                            <div className="text_box" style={{display:"flex"}}>
                                <h6>Tenure</h6>
                                
                                <input 
                                    type="text" 
                                    style={{height:"30px",
                                        width:"190px" , 
                                        marginLeft:"auto",
                                        marginRight:"0px",
                                    }}
                                    min="12" 
                                    max="60"
                                    readOnly
                                    placeholder={tenureVal}
                                    value={tenureVal}
                                    onKeyUp={imposeMinMax({tenureVal}, 12, 60)}
                                    
                                    onChange={(event) => setTenureVal(event.target.value)} ></input>
                            </div>
                            
                            <div style={{paddingTop:"4px"}}>
                                <input className="custom-range" type="range" 
                                    id="point" 
                                    style={{width:"100%"}} 
                                    name="point" 
                                    min="12" 
                                    max="60" 
                                    step="6"
                                    onChange={(event) => setTenureVal(event.target.value)}></input>
                            </div>
                        </div>
                    </div>
                    <div className="right_container" style={{width:"30%",paddingLeft:"14px"}}>
                       <div style={{
                           width:"120%",
                           height:"100%", 
                           textAlign:"center", 
                           padding:"30%",
                           backgroundColor :"grey",
                           borderRadius:"13px"}}>
                       Equated Monthly Installments (EMI) Rs.4,500

                       </div>
                   </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CalculatorModal;
