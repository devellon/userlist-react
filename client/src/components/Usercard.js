import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import './Usercard.css';
import { deleteUser } from '../actions/apiCalls';
import ModalDetails from './ModalDetails';
import EditUserModal from './EditUserModal';


const Usercard = ({ id, name, surname, job, removeUser }) => {
    const fullName = `${name} ${surname}`;

    return (
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" />
            <Card.Body>
                <Card.Title className="name">{fullName}</Card.Title>
                <Card.Text>

                </Card.Text>
            </Card.Body>
            <Card.Body>
                <div className="buttonsArea">
                    <ModalDetails job={job} />
                    <EditUserModal id={id} name={name} surname={surname} job={job} />
                    <Button variant="danger" size="sm" onClick={removeUser(id)}> Delete</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

const mapDispatchToProps = dispatch => ({
    removeUser(id) {
        return () => {
            dispatch(deleteUser(id));
        };
    }
})

export default connect(null, mapDispatchToProps)(Usercard);