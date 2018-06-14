import React, {Component} from 'react';
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Main from "../Main/Main";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <NavBar/>
                <Main/>
            </div>
        );
    }
}

export default App;
