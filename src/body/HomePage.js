import React, {Component} from 'react';
import {Col, Grid, Panel, Row} from 'react-bootstrap'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <Panel>
                                <Panel.Body>Esto es la homepage</Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default HomePage;
