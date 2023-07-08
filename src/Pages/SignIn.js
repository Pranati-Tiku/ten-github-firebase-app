import React, { useContext, useState } from "react";
import { Container,Row,Col,Form,FormGroup,Input,Label,Card,CardFooter,CardBody,CardHeader,Button } from "reactstrap";
import firebase from "firebase/compat/app"
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";

const SignIn=()=>{
    const context=useContext(UserContext)
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const handleSignIn=()=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(res=>{
            console.log(res);
            context.setUser({email:res.user.email,uid:res.user.uid})
        })
        .catch(error=>{
            console.log(error);
            toast(error.message,{
                type:"error"
            })
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        handleSignIn();
    }
    return (
     <Container className="text-center">
        <Row>
            <Col lg={6} className="offset-lg-3 mt-5">
            <Card>
               <Form onSubmit={handleSubmit}>
               <CardHeader>SignIn Here</CardHeader>
               <CardBody>
                <FormGroup row>
                    <Label for="email" sm={3}>Email</Label>
                    <Col sm={9}>
                    <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="pwd" sm={3}>Password</Label>
                    <Col sm={9}>
                    <Input
                    id="pwd"
                    name="pwd"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}/>
                    </Col>
                </FormGroup>
               </CardBody>
               <CardFooter>
                <Button block color="primary" type="submit">SignIn</Button>
               </CardFooter>
               </Form>
            </Card>
            </Col>
        </Row>
     </Container>
    )
}
export default SignIn;