import React, { Component } from 'react'
import './Navigation.css'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class Navigation extends Component {
    render() {
        return (
            <div >
                <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor:"#5F021F",color:"white", fontSize:"larger" }}>
                    <Navbar.Brand href="#home" style={{fontFamily:"Comic Sans MS",fontSize:"25px",fontWeight:"bold" }}>MoneyHue</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link eventKey={2} href="#memes">
                                Home
                            </Nav.Link>
                            <NavDropdown title="Loans" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Car Loans</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Home Loans</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Personal Loans</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Credit Cards</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link eventKey={2} href="#memes">
                                Login
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Register
                            </Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>    
            </div>
        )
    }
}

export default Navigation;