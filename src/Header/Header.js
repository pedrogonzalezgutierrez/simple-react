import React, {Component} from 'react';
import {Col, Grid, PageHeader, Row} from 'react-bootstrap'

class Header extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <PageHeader>Simple React Application</PageHeader>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Header;
