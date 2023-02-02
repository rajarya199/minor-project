import React from 'react'
import login from './Login'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

function Register() {
 


  return (
    <div className='container'>
     <div className ='mt-5 mb-5 shadow-lg bs' style={{border:'3px solid #ccc ' ,
    width:'500px',
    padding:'20px ',
    borderRadius:'10px',
    margin:'auto',
    height:'auto',
    backgroundColor:'ButtonHighlight',
    backgroundColor:'aliceblue'
    
    
    }} >
        
        <form action="/register" method='post'>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="username"><b>Username</b></label> <br/>
          <input type="text" placeholder="Enter Your Name" name="username" id="username"   required style= {{width:'100%',padding:'10px 10px',marginBottom:'10px'}}/><br/>
          <label htmlFor="email"><b>Email</b></label> <br/>
          <input type="text" placeholder="Enter Email" name="email" id="email" required style= {{width:'100%',padding:'10px 10px',marginBottom:'10px'}}/><br/>
          <label htmlFor="psw"><b>Password</b></label><br/>
          <input type="password" placeholder="Enter Password" name="password" id="psw"required style= {{width:'100%',padding:'10px 10px',marginBottom:'10px'}}/><br/>
          <label htmlFor="psw-repeat"><b>Confirm Password</b></label><br/>
          <input type="password" placeholder="Confirm Password" name="cpasssword" id="c-psw"  required style= {{width:'100%',padding:'10px 10px',marginBottom:'10px'}}/><br/>
          <hr />
          <p>By creating an account you agree to our <a href="#">Terms &amp; Privacy</a>.</p>
          <button type="submit" className="btn btn-outline-success mb-3"  style={{width:'40%'}}>Register</button>
        </div>
        <div className="container signin">
          <p>Already have an account? <Link to="/Login">Sign in</Link>.</p>
        </div>
      </form>
      
    </div>..
    </div>
  )
}

export default Register
