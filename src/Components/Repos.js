import React,{useState,useEffect} from "react";
import { ListGroup,ListGroupItem } from "reactstrap";
import axios from "axios";

const Repos=({repos_url})=>{
const[repos,setRepos]=useState([])
const fetchRepos=async()=>{
   const {data}=await axios.get(repos_url)
   console.log(data);
   setRepos(data)
}
useEffect(()=>{
    fetchRepos();
},[repos_url])

return (
    <ListGroup>
        {repos.map(repo=>(
            <ListGroupItem key={repo.id}>
                <div className="text-primary">{repo.name}</div>
                <div className="text-primary">{repo.language}</div>
                <div className="text-primary">{repo.description}</div>
            </ListGroupItem>
        ))}
    </ListGroup>
)
}

export default Repos;