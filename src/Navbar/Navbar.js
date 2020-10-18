import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown,Navbar,Nav, } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import { Link } from "react-scroll";
import './Navbar.css';

const Navigation = () => {
	return(
   
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Navbar.Brand href="./poza/Poza.js">Acasa</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Link
    activeClass="active"
    to="despre-noi"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>
      <Nav.Link href="/Pretu">Despre Noi</Nav.Link> </Link>
       <Link
    activeClass="active"
    to="ServiciiID"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}>
      <Nav.Link activeClassName="active" href="/Servicii">Servicii</Nav.Link></Link>
      <NavDropdown title="Preturi" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/Preturiinterior">Detaiing Interior</NavDropdown.Item>     
        <NavDropdown.Item href="./Preturi/Preturi.html">Detailing Exterior</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="/Galerie">Galerie Foto</Nav.Link>
      <Nav.Link  href="/Contact">
        Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

)
}

export default Navigation;