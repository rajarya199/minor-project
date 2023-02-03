import React from 'react'
import Register from './Register'
import loginpic from '/src/images/login.jpg'
import { Link } from 'react-router-dom'
export default function login() {
  return (
    
       <div className='container ' style={{backgroundColor:'white'}}>
        <div className='row'>
          <div className='col-lg-6'>
          <img src={loginpic} className="login-img" alt="..." style={{backgroundSize:'cover',height:'500px'}}/>
          </div >
          <div className='col-lg-6'>
          <div className='mt-5 bs ' style={{border:'3px solid #ccc ' ,
     width:'350px',
     padding:'25px ',
     borderRadius:'10px',
     height:'350px',
     marginLeft:'150px',
     backgroundColor:'ButtonHighlight',
    
    backgroundColor:'aliceblue'}}>
    <form  action="/login" method="post">
    <label for="username"> <b>Username:</b></label><br/>
    <input type="text" id="username" name="username" required style= {{width:'100%',padding:'10px 10px',marginBottom:'10px'}}/><br/>
    <label for="password"><b>Password:</b></label><br/>
    <input type="password" id="password" name="password"  required style= {{width:'100%',padding:'10px 10px'}}/><br/><br/>
    <button className="btn btn-outline-success mb-3" type="submit" style={{width:'40%'}}>Submit </button><br/>
    Not Register Yet.  
    <Link className='mx-4' to='/Register' style={{fontSize:'20px'}}>Register Now</Link><br/>
    <a className='mt-4' style={{fontSize:'20px'}} href="#">Forget Password?</a>

   
   
  </form> 


            </div>
            </div>
        </div>
   
    </div>
  )
}

