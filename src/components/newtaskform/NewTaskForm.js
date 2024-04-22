import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TasksForms from '../forms/Forms';
import { useDispatch } from 'react-redux';
import { addTodo} from '../../redux/todoSlice/ToDoSlice';

function NewTaskForm({ isOpen, toggle }) {

    const dispatch = useDispatch();

    const [newTask, setNewTask] = useState({
    });

    const handleSave = () => {
        dispatch(addTodo(newTask));
        toggle();
    }

    

    return (
        <div>

            <Modal isOpen={isOpen} toggle={toggle} >
                <ModalHeader toggle={toggle}>New Task</ModalHeader>
                <ModalBody>
                    <TasksForms />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSave}>
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