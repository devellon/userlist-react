import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import EditUserModalForm from './EditUserModalForm';

const EditUserModal = ({ id, name, surname, job }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const defaultValues = {
        id: id,
        name: name,
        surname: surname,
        job: job
    }

    return (
        <>
            <Button variant="primary" size="sm" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditUserModalForm handleClose={handleClose} defaultValues={defaultValues}/>
                </Modal.Body>
            </Modal>
        </>
    );

}

export default EditUserModal;