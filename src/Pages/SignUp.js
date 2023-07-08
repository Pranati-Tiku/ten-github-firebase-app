import React, { useContext, useState } from "react";
import { Container,Row,Col,Form,FormGroup,Button,Input,Label,Card,CardBody,CardFooter,CardHeader } from "reactstrap";
import firebase from "firebase/compat/app"
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from '../context/UserContext';
import { useNavigate } from "react-router-dom";

const SignUp=()=>{
    const navigate=useNavigate();
    const context=useContext(UserContext);
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const handleSignUp=()=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(res=>{
            console.log(res)
            context.setUser({email:res.user.email, uid:res.user.uid})
        })
        .catch(error=>{
            console.log(error)
            toast(error.message,{
                type:"error"
            })
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        handleSignUp();
    }
    if(context.user?.uid){
        navigate("/")
    }
    return (
        <Container className="text-center">
            <Row>
                <Col lg={6} className="offset-lg-3 mt-5">
                    <Card>
                        <Form onSubmit={handleSubmit}>
                            <CardHeader>SignUp Here</CardHeader>
                            <CardBody>
                                <FormGroup row>
                                    <Label for="email" sm={3}>Email</Label>
                                    <Col sm={9}>
                                        <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={e=>setEmail(e.target.value)}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="password" sm={3}>Password</Label>
                                    <Col sm={9}>
                                        <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={e=>setPassword(e.target.value)}
                                        />
                                    </Col>
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <Button block color="primary" type="submit">SignUp</Button>
                            </CardFooter>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default SignUp;