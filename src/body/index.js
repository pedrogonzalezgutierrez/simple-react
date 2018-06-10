import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "./HomePage";
import UsersList from "./UsersList";
import RoleList from "./RoleList";

class Body extends Component {
    render() {
        return (
            // User el react-router-bootstrap": "0.24.4"
            <Router>
                <div>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/users" component={UsersList}/>
                    <Route path="/role" component={RoleList}/>
                </div>
            </Router>
        );
    }
}

export default Body;
