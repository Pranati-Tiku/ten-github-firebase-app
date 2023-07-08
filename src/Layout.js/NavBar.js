import React,{useContext,useState} from "react";
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavbarText } from "reactstrap";

import { NavLink,Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const NavBar=()=>{
    const context=useContext(UserContext)
    const[isOpen,setIsOpen]=useState(false)
    const toggle=()=>setIsOpen(!isOpen)
return(
    <Navbar color="info" light expand="md">
        <NavbarBrand>
            <Link to="/" style={{textDecoration:"none"}}className="text-white">GitFire App</Link>
        </NavbarBrand>
        <NavbarText className="text-white">
            {context.user?.email ?(context.user.email):("")}
        </NavbarText>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen}  navbar>
        <Nav className="ms-auto" navbar>
            {context.user ? ( 
            <NavItem>
                <NavLink to="/" style={{textDecoration:"none"}} className="text-white p-2">LogOut</NavLink>
            </NavItem>
            ):(
            <>
            <NavItem>
                <NavLink to="/" style={{textDecoration:"none"}} className="text-white p-2">SignUp</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/" style={{textDecoration:"none"}} className="text-white p-2">SignUp</NavLink>
             </NavItem>
            </>
            )}
       </Nav>
        </Collapse>
    </Navbar>)
}
export default NavBar;