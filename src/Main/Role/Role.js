import React, {Component} from 'react';
import {Col, Grid, ListGroupItem, Panel, Row} from "react-bootstrap";

class Role extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    async componentDidMount() {
        const res = await fetch("http://localhost:5000/role");
        const result = await res.json();
        this.setState({
            items: result
        });
    }

    render() {
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
                                    {myList}
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }


}

export default Role;