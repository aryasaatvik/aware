import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import banner from '../img/banner.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
    return (
        <div>
            <Container>
                <Row>
                    <h1>Aware</h1>
                </Row>
                <Row>
                    <Col><img className="banner" src={banner} alt="banner" /></Col>
                </Row>
            </Container>

        </div>
        
    )
}

export default Header;