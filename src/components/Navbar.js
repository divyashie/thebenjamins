import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';


class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#182978", fontFamily: "Cinzel"}} variant="dark">
                <Navbar.Brand style={{ fontSize: "30px"}}>BrightChoice</Navbar.Brand>
            </Navbar>
        )
    }
}

export default NavBar;