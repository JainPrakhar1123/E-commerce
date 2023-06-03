import React, { useState } from 'react'
import "./LogIn.css"
import logo from './assets/amzon1.png';
import { Link ,useNavigate} from 'react-router-dom';
import { auth } from './firebase';
function LogIn() {
  const history=useNavigate();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const signIn=e=>{
    e.preventDefault();
     
    //some fancy firebase login shittt....
    auth
         .signInWithEmailAndPassword(email,password)
         .then((auth)=>{
          //it successfully created a new use with email and password
          // console.log(auth);
          if(auth){
            history('/')
          }
        })
        .catch(error=>alert(error.message))

  }
  const register=e=>{
    e.preventDefault();
    
    auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
          //it successfully created a bew use with email and password
          // console.log(auth);
          if(auth){
            history('/')
          }
        })
        .catch(error=>alert(error.message))
    //some facncy firevase login shittt....
  }

  return (
    <div className='login'>
        <Link to='/'>
      <img src={logo} className='login_logo' />
      </Link>

      <div className='login_container'>
        <h1>Sign-in</h1>
        <form >
            <h5>E-mail or mobile phone number</h5>
            <input type="text"  value={email} onChange={e=>setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input type="password"  value={password} onChange={e=>setPassword(e.target.value)}/>
            <button type='submit' onClick={signIn} className='login_signinButton'>Sign-In</button>
        </form>
        <p>
            By signing-in,you agree to the Amazone's FAKE CLONE Condition of Use & Sale. Please see our Privacy  Notice.
        </p>
        <button onClick={register} className='login_registerButton'>Create your Amazon account </button>
      </div>
    </div>
    
  )
}

export default LogIn
