import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { MdClearAll } from "react-icons/md";
import { HiMiniArrowTrendingUp, HiMiniArrowTrendingDown } from "react-icons/hi2";
import { FaTrashAlt } from "react-icons/fa";
import { TbTags } from "react-icons/tb";
import { useDispatch } from 'react-redux';
import { fetchAllTodos, fetchDeletedTodos } from '../../redux/todoSlice/ToDoSlice';
const Sidebar = ({id}) => {
    const dispatch = useDispatch();
    const handleOpenTrash = () => {
        console.log("open trash");
        dispatch(fetchDeletedTodos({id,is_deleted:true}));
    }

    const showAll = () => {
        console.log("all");
        dispatch(fetchAllTodos());
    }

    return (
        <div className="sidebar px-4 py-3" >
            <Nav vertical >
                <NavItem>
                    <NavLink href="#">
                        <MdClearAll />
                        <span className='px-1' onClick={showAll} >All</span></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <HiMiniArrowTrendingUp />
                        <span className='px-1'>Active</span></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <HiMiniArrowTrendingDown />
                        <span className='px-1'>Done</span></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <TbTags />
                        <span className='px-1'>Tags</span></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <FaTrashAlt size={12} />
                        <span className='px-1' onClick={handleOpenTrash} >Trash</span></NavLink>
                </NavItem>
            </Nav>
        </div>
    );
};

export default Sidebar;
