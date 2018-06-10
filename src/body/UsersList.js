import React, { Component } from 'react';
import {Col, Grid, Panel, Row} from 'react-bootstrap'
class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    async componentDidMount() {
        const res = await fetch("https://swapi.co/api/people/");
        const result = await res.json();

        this.setState({
            items: result.results
        });
    }

    render() {
        const myList = this.state.items.map((element, index) => {
            return <li key={index}>{element.name}</li>;
        });

        return (
            <div>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <Panel>
                                <Panel.Body>
                                    <ul>
                                        {myList}
                                    </ul>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default UsersList;
