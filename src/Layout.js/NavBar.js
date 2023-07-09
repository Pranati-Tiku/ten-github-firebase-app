import React,{useContext,useState} from "react";
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavbarText } from "reactstrap";

import { NavLink,Link, useNavigate } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const NavBar=()=>{
    const context=useContext(UserContext)
    const navigate=useNavigate();
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
                <NavLink to="/signin" onClick={(e)=>{
                    e.preventDefault();
                context.setUser(null)
                navigate("/signin")}
                } style={{textDecoration:"none"}} className="text-white p-2">LogOut</NavLink>
            </NavItem>
            ):(
            <>
            <NavItem>
                <NavLink to="/signin" style={{textDecoration:"none"}} className="text-white p-2">SignIn</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/signup" style={{textDecoration:"none"}} className="text-white p-2">SignUp</NavLink>
             </NavItem>
            </>
            )}
       </Nav>
        </Collapse>
    </Navbar>)
}
export default NavBar;