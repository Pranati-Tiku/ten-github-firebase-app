import React,{useContext,useState} from "react";
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavbarText, Col } from "reactstrap";

import { NavLink,Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const NavBar=()=>{
return(
    <Navbar color="info" light expand="md">
        <NavbarBrand>
            <Link to="/" style={{textDecoration:"none"}}className="text-white">GitFire App</Link>
        </NavbarBrand>
        <NavbarToggler/>
        <Collapse navbar>
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink className="text-white">SignUp</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="text-white">SignUp</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="text-white">LogOut</NavLink>
            </NavItem>
        </Nav>
        </Collapse>
    </Navbar>)
}
export default NavBar;