import React, {Component} from 'react';
import {Navbar} from "react-bootstrap";
import NavItem from "react-bootstrap/es/NavItem";
import Nav from "react-bootstrap/es/Nav";
import Grid from "react-bootstrap/es/Grid";

class NavBar extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Navbar>
                        <Nav>
                            <NavItem eventKey={1} href="/">Home</NavItem>
                            <NavItem eventKey={2} href="/users">User List</NavItem>
                            <NavItem eventKey={3} href="/role">Role List</NavItem>
                        </Nav>
                    </Navbar>
                </Grid>
            </div>
        );
    }
}

export default NavBar;
