import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown,Navbar,Nav, } from 'react-bootstrap';

import { Link } from "react-scroll";


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
    offset={-240}
    duration={500}
>
      <Nav.Link href="/Despre">Despre Noi</Nav.Link> </Link>
       <Link
    activeClass="active"
    to="ServiciiID"
    spy={true}
    smooth={true}
    offset={-240}
    duration={500}>
      <Nav.Link activeClassName="active" href="/Servicii">Servicii</Nav.Link></Link>
      <Link
    activeClass="active"
    to="galerie"
    spy={true}
    smooth={true}
    offset={-240}
    duration={500}
>      <Nav.Link href="./Galerie/Galerie">Galerie Foto</Nav.Link>
    </Link>
    </Nav>
    <Nav>
    <NavDropdown title="Preturi" id="collasible-nav-dropdown">
       <Link
    activeClass="active"
    to="interior"
    spy={true}
    smooth={true}
    offset={-240}
    duration={500}
>  
<NavDropdown.Item href="./Preturiinterior">Detaiing Interior</NavDropdown.Item>   
    </Link> 
        <NavDropdown.Item href="./Preturi/Preturi.html">Detailing Exterior</NavDropdown.Item>
      </NavDropdown>
     <Link
    activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-240}
    duration={500}
>      <Nav.Link  href="./Contact/Contact"> Contact</Nav.Link>
</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

)
}

export default Navigation;