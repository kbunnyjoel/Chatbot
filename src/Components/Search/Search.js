import React from 'react'
import { Row, Col, Container, Dropdown, Button } from 'react-bootstrap'
import styled from "styled-components";
import '../../App.css'


const Styles = styled.div`
.btn-primary:not(:disabled):not(.disabled).active:focus, .btn-primary:not(:disabled):not(.disabled):active:focus, .show>.btn-primary.dropdown-toggle:focus {
    box-shadow: none; 
},
.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
    color: black;
    background-color: transparent; 
     border-color: none; 
},
.btn-primary.focus, .btn-primary:focus {
    color: black;
     background-color: transparent; 
     border-color: transparent; 
     box-shadow: none; 
},
.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
    color: black;
     background-color: transparent; 
     border-color: transparent; 
},
.btn-primary:hover {
    color: black;
     background-color: none; 
     border-color: transparent; 
},
.btn-primary {
    color: black;
    font-size: 20px;
     background-color: transparent; 
     border-color: transparent; 
},
.btn:hover {
    color: black;
    text-decoration: none;
},
.dropdown-toggle::after {
    color: #FE8369;
    margin-left: 50px;
},
 `;

const Search = () => {
    return (
        <Styles>
            <Container style={{ marginTop: "35px" }}>
                <Row style={{ backgroundColor: "white" }}>
                    <Col xs={3} style={{ borderRight: "1px solid black" }}>
                        <label style={{ fontSize: "10px", marginLeft: "15px" }}>Property Type</label>
                        <Dropdown style={{ marginTop: "-10px" }}>
                            <Dropdown.Toggle id="dropdown-basic">
                                ANY
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Buy</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Rent</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Sell</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>

                    <Col xs={3} style={{ borderRight: "1px solid black" }}>
                        <label style={{ fontSize: "10px", marginLeft: "15px" }}>Location</label>
                        <Dropdown style={{ marginTop: "-10px" }}>
                            <Dropdown.Toggle id="dropdown-basic">
                                City
  </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Melbourne</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Sydney</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Adelaide</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col xs={3}>
                        <label style={{ fontSize: "10px", marginLeft: "15px" }}>Price Range</label>
                        <Dropdown style={{ marginTop: "-10px" }}>
                            <Dropdown.Toggle id="dropdown-basic">
                                200K - 300K
  </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">300K - 400K</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">400K - 500K</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">500K - 600K</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col xs={3} style={{ verticalAlign: "center", textAlign: "center" }}>
                        <Button style={{ marginRight: '-15px', float: "right", backgroundColor: "#FE8369", width: "100%", height: "100%", color: "white" }}> SEARCH</Button>
                    </Col>

                </Row>
                <div id="pb-widget"></div>

            </Container>
        </Styles>
    )
};

export default Search;