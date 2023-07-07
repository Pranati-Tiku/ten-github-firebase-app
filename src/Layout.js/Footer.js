import React from "react";
import { Container } from "reactstrap";

const Footer=()=>{
    return (
        <Container 
        fluid
        tag="footer"
        className="text-center bg-info text-uppercase fixed-bottom p-3 text-white">
            GitHub App with Firebase
        </Container>
    )
}
export default Footer;