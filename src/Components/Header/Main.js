import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import styled from "styled-components";
import company from '../../company_logo.svg'
import '../../App.css'


const Styles = styled.div`
  .nav-link:focus, .nav-link:hover {
    border-bottom: 2px #FE8369 solid;
    padding-bottom: 0px;
  },
    .navbar-expand-lg .navbar-collapse {
    justify-content: flex-end;
    color: black;
    padding-bottom: 0px;
  },
  .navbar-light .navbar-nav .nav-link {
    color: black;
  },
  .navbar-expand-lg {
    padding-bottom: 0px;
  }
 `;

const Header = () => {

  return (
    <Styles>
      <Container className="semibold">
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img width="80px" src={company} alt="Logo" />
          Buywithus
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              <Nav.Link href="#link">Services</Nav.Link>
              <Nav.Link href="#link">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Styles >
  )

}

export default Header;