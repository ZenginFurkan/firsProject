import React, { useState } from 'react';
import search_icon_light from "../../assets/search-w.png";
import NewTaskForm from "../newtaskform/NewTaskForm";
import { Navbar, NavbarBrand } from 'reactstrap';

function Navibar() {

  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const toggleModal = () => {
    setmodalIsOpen(!modalIsOpen)
  }


  return (
    <div className='navbar-border navbar-container navbar'>
      <Navbar>
        <NavbarBrand>
          <h2>Tasks</h2>
          <h5>Home | Apps</h5>
        </NavbarBrand>
        <div className='search-box '>
          <input type='text' placeholder='Search' />
          <img src={search_icon_light} alt='' />
        </div>
        <div>
          <button className='nw-button' onClick={toggleModal}  >
            <span className='plus-icon'>+</span>
            New Task
          </button>
          <NewTaskForm isOpen={modalIsOpen} toggle={toggleModal} />
        </div>
      </Navbar>
    </div>

  );
}

export default Navibar;

