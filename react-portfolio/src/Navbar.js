import React from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
    return (

        <Navbar className="navigationbar" bg="info" variant="dark">
            <Navbar.Brand href="/">Claudio Gallo</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar>

    );
};

export default NavBar;