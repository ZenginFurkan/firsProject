import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
}
  from 'reactstrap';
import PropTypes from 'prop-types';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { deleteTodo, fetchAllTodos, updateTodo } from '../../redux/todoSlice/ToDoSlice';

function DropdownSelect({ direction, id, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const handleCompleted = () => {
    setDropdownOpen(true);
    dispatch(updateTodo({ id, complated: true }));

  }

  const handleDelete = () => {
    setDropdownOpen(true);
    dispatch(deleteTodo({id,deleted:true})).then(() => {
        dispatch(fetchAllTodos());
    });
}

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction} className='btn'>
        <DropdownToggle ><HiOutlineDotsHorizontal /></DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem onClick={handleCompleted} >Complated</DropdownItem>
          <DropdownItem onClick={handleDelete} >Delete</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

DropdownSelect.propTypes = {
  direction: PropTypes.string,
};

export default DropdownSelect;