import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import './Usercard.css';

class Usercard extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
            </Card.Text>
                </Card.Body>
                <Card.Body>
                    <div className="buttonsArea">
                        <Button variant="primary">Primary</Button>
                        <Button variant="primary">Primary</Button>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

export default Usercard;