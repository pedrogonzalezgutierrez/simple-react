import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from "./Home/Home";
import Role from "./Role/Role";
import User from "./User/User";

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/role' component={Role}/>
                <Route path='/user' component={User}/>
            </Switch>
        );
    };

}

export default Main;