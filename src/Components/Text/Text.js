import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import '../../App.css'

const styles = {
    color: 'black',
    fontFamily: '"Acme", sans-serif',
    fontSize: "30px",
    textAlign: "right"
}

const Text = () => {
    return (
        <Container style={{ marginTop: "35px" }}>
            <Row>
                <Col md={{ span: 8, offset: 4 }}>
                    <p style={styles}>
                        WELCOME TO THE <br />
                        AUSTRALIA 1<sup>st</sup> <br />
                        REAL ESTATE
        </p>
                </Col>
            </Row>
            <Row>
                <Col style={{ textAlign: "center", color: "white", fontSize: "40px", textShadow: "#898c91 2px 0 10px" }}>
                    <p className="regular">Search Australia's home of property</p>
                </Col>
            </Row>
        </Container>
    )
};

export default Text;