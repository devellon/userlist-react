import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import './Usercard.css';
import { deleteUser } from './apiCalls';


const Usercard = ({ key, id, name, surname, job, removeUser }) => {
    const fullName = `${name} ${surname}`;

    return (
        <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" />
            <Card.Body>
                <Card.Title className="name">{fullName}</Card.Title>
                <Card.Text>

                </Card.Text>
            </Card.Body>
            <Card.Body>
                <div className="buttonsArea">
                    <Button variant="primary">Details</Button>
                    <Button variant="danger" onClick={removeUser(id)}> Delete</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

/*const mapStateToProps = state => ({
    users: state.users.items
})*/

const mapDispatchToProps = dispatch => ({
    removeUser(id) {
        return () => {
            dispatch(deleteUser(id));
        };
    },
})

export default connect(/*mapStateToProps,*/null, mapDispatchToProps)(Usercard);