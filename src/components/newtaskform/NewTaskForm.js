import React from 'react';
import {  Modal, ModalHeader, ModalBody } from 'reactstrap';
import TasksForms from '../forms/Forms';


function NewTaskForm({ isOpen, toggle }) {
  
    return (
        <div>

            <Modal isOpen={isOpen} toggle={toggle} >
                <ModalHeader toggle={toggle}>New Task</ModalHeader>
                <ModalBody>
                    <TasksForms  toggle={toggle} />
                </ModalBody>
            </Modal>
        </div>
    );
}

export default NewTaskForm;