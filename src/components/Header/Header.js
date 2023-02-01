import React from 'react'
import './Header.css';
import { Col, Row } from 'react-bootstrap';
const Header = () => {
    return(
        <Row>
            <Col>
            <div className='root'>To do list</div>
            </Col>
        </Row>
    
    );
}


export default Header;