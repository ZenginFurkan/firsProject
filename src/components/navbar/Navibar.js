// Navibar.js
import React, { useState, useEffect } from "react";
import search_icon_light from "../../assets/search-w.png";
import NewTaskForm from "../newtaskform/NewTaskForm";
import { Navbar, NavbarBrand } from "reactstrap";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../redux/todoSlice/searchQuery";

function Navibar() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("")
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(setSearchQuery(searchTerm));
  }, [searchTerm, dispatch]);

  const onSearch = (term) => {
    // Arama işlemini gerçekleştir
    console.log("Arama yapıldı: ", term);
  };
  
  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const toggleModal = () => {
    setmodalIsOpen(!modalIsOpen);
  };

  return (
    <div className="navbar-border navbar-container navbar">
      <Navbar>
        <NavbarBrand>
          <h2>Tasks</h2>
          <h5>Home | Apps</h5>
        </NavbarBrand>
        <div className="search-box ">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img src={search_icon_light} alt="" onClick={handleSearch} />{" "}
        </div>
        <div>
          <button className="nw-button" onClick={toggleModal}>
            <span className="plus-icon">+</span>
            New Task
          </button>
          <NewTaskForm isOpen={modalIsOpen} toggle={toggleModal} />
        </div>
      </Navbar>
      {/* <div className="search-results">{searchTerm && handleSearch()}</div> */}{" "}
      {/* Arama sonucunu gösteren kısmı kaldır */}
    </div>
  );
}

export default Navibar;
