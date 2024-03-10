import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <ol style={{ 'listStyle': 'none', 'display': 'flex', 'gap': '80px', 'fontSize': '2rem' }}>
            <li> <NavLink to='/'>Home</NavLink></li>
            <li> <NavLink to='/about'>About</NavLink></li>
            <li> <NavLink to='/services'>Services</NavLink></li>
            <li> <NavLink to='/search'>Search</NavLink></li>
            <li> <NavLink to='/users'>Users</NavLink></li>
            <li> <NavLink to='/contact'>Contact </NavLink>
                <ul>
                    <li> <NavLink to='/contact/name'>Name</NavLink></li>
                </ul>
            </li >
        </ol >
    )
}

export default Navbar;