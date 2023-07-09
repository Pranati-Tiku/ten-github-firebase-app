import { useState,useContext, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

//react router
import {BrowserRouter as Router,Routes,Route,Link, useNavigate} from "react-router-dom"

//Toast
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css"

//firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
//components
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import NotFound from './Pages/NotFound';


import './App.css';
import { UserContext } from './context/UserContext';
import Footer from './Layout.js/Footer';
import NavBar from './Layout.js/NavBar';

import { FirebaseConfig } from './Config/FirebaseConfig';
//init firebase
firebase.initializeApp(FirebaseConfig)

const App=()=> {
  //v.imp to keep it null
  const[user,setUser]=useState(null)
  return (
   <Router>
    <ToastContainer/>
    <UserContext.Provider value={{user,setUser}}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </UserContext.Provider>
   </Router>
  );
}

export default App;
