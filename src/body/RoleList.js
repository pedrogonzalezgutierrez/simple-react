import React, {Component} from 'react';
import {Col, Grid, Panel, Row} from 'react-bootstrap'
import ListGroup from "react-bootstrap/es/ListGroup";
import ListGroupItem from "react-bootstrap/es/ListGroupItem";

class RoleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    async componentDidMount() {
        // Fetch the request
        const res = await fetch("http://localhost:5000/role");
        console.log(res);

        // Parse the request to JSON
        const result = await res.json();
        console.log(result);

        this.setState({
            items: result
        });
    }

    render() {
        /*
        const myList = this.state.items.map((element, index) => {
            return <li key={index}>{element.id} - {element.name}</li>;
        });
        */
        const myList = this.state.items.map((element, index) => {
            return <ListGroupItem key={element.id}>{element.name}</ListGroupItem>
        });

        return (
            <div>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <Panel>
                                <Panel.Body>
                                    <ListGroup>
                                        {myList}
                                    </ListGroup>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default RoleList;
