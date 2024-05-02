import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { MdClearAll } from "react-icons/md";
import {
  HiMiniArrowTrendingUp,
  HiMiniArrowTrendingDown,
} from "react-icons/hi2";
import { FaTrashAlt } from "react-icons/fa";
import { TbTags } from "react-icons/tb";
import { useDispatch} from "react-redux";
import { fetchAllTodos } from "../../redux/todoSlice/ToDoSlice";
import { fetchTags } from "../../redux/todoSlice/tagsSlice";
import { setIsTagsPage } from "../../redux/pagecontrol/PageControl";
const Sidebar = () => {
  const dispatch = useDispatch();

  const handleOpenTrash = () => {
    console.log("open trash");
    dispatch(fetchAllTodos({ deleted: "true" }));
    dispatch(setIsTagsPage(false));
  };

  const showAll = () => {
    console.log("all");
    dispatch(fetchAllTodos({ deleted: "false" }));
    dispatch(setIsTagsPage(false));

  };

  const showDone = () => {
    dispatch(fetchAllTodos({ complated: "true" }));
    dispatch(setIsTagsPage(false));

  };

  const showActive = () => {
    dispatch(fetchAllTodos({ complated: "false" }));
    dispatch(setIsTagsPage(false));
  };

  const showTags = () => {
    dispatch(fetchTags());
    dispatch(setIsTagsPage(true));
  }
  return (
    <div className="sidebar px-4 py-3">
      <Nav vertical>
        <NavItem>
          <NavLink href="#">
            <MdClearAll />
            <span className="px-1" onClick={showAll}>
              All
            </span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <HiMiniArrowTrendingUp />
            <span onClick={showActive} className="px-1">
              Active
            </span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <HiMiniArrowTrendingDown />
            <span onClick={showDone} className="px-1">
              Done
            </span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <TbTags />
            <span onClick={showTags} className="px-1">
              Tags
            </span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <FaTrashAlt size={12} />
            <span className="px-1" onClick={handleOpenTrash}>
              Trash
            </span>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Sidebar;
