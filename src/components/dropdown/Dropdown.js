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
import { deleteTodo, fetchTodos, updateTodo } from '../../redux/todoSlice/ToDoSlice';

function DropdownSelect({ direction, id, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const handleCompleted = () => {
    setDropdownOpen(true);
    dispatch(updateTodo({ id, is_completed: true }));

  }

  const handleDelete = () => {
    setDropdownOpen(true);
    dispatch(deleteTodo({ id })).then((res) => {
      console.log(res);
      dispatch(fetchTodos());
    })
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