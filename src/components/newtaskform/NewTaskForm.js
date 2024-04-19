import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import TasksForms from '../forms/Forms';

function NewTaskForm({ isOpen, toggle }) {

    return (
        <div>

            <Modal isOpen={isOpen} toggle={toggle} >
                <ModalHeader toggle={toggle}>New Task</ModalHeader>
                <ModalBody>
                    <TasksForms/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Save
                    </Button>{' '}
                    <Button color="danger" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default NewTaskForm;