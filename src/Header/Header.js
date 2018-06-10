import React, {Component} from 'react';
import {Col, Grid, PageHeader, Row} from 'react-bootstrap'

class Header extends Component {
    render() {
        return (
            // https://reacttraining.com/react-router/web/example/basic
            <div>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <PageHeader>
                                Example page header <small>Subtext for header</small>
                            </PageHeader>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Header;
