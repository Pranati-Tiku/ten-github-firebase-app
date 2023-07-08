import React, { useContext, useState } from "react";
import { Container,Input,Button,Row,Col, InputGroup } from "reactstrap";
import { UserContext } from "../context/UserContext";
import axios from "axios"
import { ToastContainer,toast } from "react-toastify";
import UserCard from "../Components/UserCard";
import Repos from "../Components/Repos";

const Home=()=>{
    const context=useContext(UserContext);
    const[query,setQuery]=useState("")
    const[user,setUser]=useState(null)

    const fetchDetails=async ()=>{
        try{
        const {data}=await axios.get(`https://api.github.com/users/${query}`)
        console.log(data);
        setUser(data)
        }catch(error){
        toast("User us not availabel",{
            type:"error"
        })
        }
    }

    return (
        <Container fluid>
            <Row className="mt-3">
                <Col md="5">
                    <InputGroup>
                    <Input
                    type="text"
                    placeholder="Enter Username"
                    value={query}
                    onChange={e=>setQuery(e.target.value)}
                    />
                    <Button color="primary" onClick={fetchDetails}>Fetch user</Button>
                    </InputGroup>
                    {user ? (
                        <>
                        <UserCard user={user}/>
                        <Repos repos_url={user.repos_url}/>
                        </>
                    ):(toast("User is not available"))}
                </Col>
                <Col md="7"></Col>
            </Row>
        </Container>
        
    )
}
export default Home;