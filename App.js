
import './App.css';
import { useState } from "react";
import './App.css';
import {getAuth,GoogleAuthProvider,signInWithPopup,signOut}from 'firebase/auth'
import firebaseConfig from './firebaseConfig';

import { initializeApp } from "firebase/app";

function App() {
  const [user,setuser]= useState({
    isSignUser: false,
    displayName: '',
    email:'',
    photo: ''

  })
 
  const sisss = ()=>{
    signOut(auth,provider)
    .then(res=>{
      const sigdhout = {
        isSignUser:false,
        displayName:'',
        email:'',
        photo:''
      }

      setuser(sigdhout)
     

    })
   
  }
    
  const auth = getAuth()
  const provider = new GoogleAuthProvider();
  const handleSignIn = () =>{
  signInWithPopup(auth,provider)
    .then(res => {
      const {displayName,email,photoURL} = res.user
    const isSign = {
      isSignUser: true,
      displayName: displayName,
      email: email,
      photo: photoURL
    }
    setuser(isSign)
    
    })
    
  }

  return (
    <div className="App">
 <button onClick={ handleSignIn}>signIn</button> <button onClick={sisss}>signOut</button>
 <h1>{user.displayName}</h1>
 <h1>{user.email}</h1>
 <img src={user.photo} alt="" />
    
    </div>
  )
}

export default App;
