import React, {Component} from 'react';
import {Col, Grid, Panel, Row} from "react-bootstrap";

class User extends Component {

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <Panel>
                                <Panel.Body>
                                    <p>Esto son los usuarios</p>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

}

export default User;