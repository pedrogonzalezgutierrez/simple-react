import React, {Component} from 'react';
import {Grid, Nav, Navbar, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <Grid>

                    <Navbar collapseOnSelect fluid>

                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to="/">Home</Link>
                            </Navbar.Brand>
                            <Navbar.Toggle/>
                        </Navbar.Header>

                        <Navbar.Collapse>
                            <Nav>
                                <LinkContainer to="/user">
                                    <NavItem eventKey={1}>Users</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/role">
                                    <NavItem eventKey={2}>Roles</NavItem>
                                </LinkContainer>
                            </Nav>
                            <Nav pullRight>
                                <NavItem eventKey={1}>Sign Up</NavItem>
                                <NavItem eventKey={2}>Login</NavItem>
                            </Nav>
                        </Navbar.Collapse>

                    </Navbar>

                </Grid>

            </div>
        );
    }
}

export default NavBar;
