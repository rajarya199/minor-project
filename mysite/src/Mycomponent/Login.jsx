import React,{useState} from 'react'
import Register from './Register'
import loginpic from '/src/images/login.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import loading from './Loading'
import error from './Error'
export default function login() {

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const [loading,setloading] = useState(false);
  const [error,seterror] = useState();

  const handleSubmit =  async (event) => {
    event.preventDefault();
    const user = {
      username,
      password
    };
    try {
      setloading(true);
      const result = (await axios.post('http://localhost:5000/api/auth/login', user)).data;
      setloading(false);
      localStorage.setItem('currentUser', JSON.stringify(result));
      window.location.href='/'

    } catch (error) {
      
      console.log(error);
      setloading(false);
      seterror(true);
    }
  };
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
    <form  action="/login" method="post" onSubmit={handleSubmit}>
    <label for="username"> <b>Username:</b></label><br/>
    <input type="text" id="username" name="username" required style= {{width:'100%',padding:'10px 10px',marginBottom:'10px'}}
    onChange={(event) => setusername(event.target.value)}/><br/>
    <label for="password"><b>Password:</b></label><br/>
    <input type="password" id="password" name="password"  required style= {{width:'100%',padding:'10px 10px'}}
    onChange={(event) => setpassword(event.target.value)}/><br/><br/>
    <button className="btn btn-outline-success mb-3" type="submit" style={{width:'40%'}}>Submit </button><br/>
    Not Register Yet.  
    <Link className='mx-4' to='/Profilereg ' style={{fontSize:'20px'}}>Register Now</Link><br/>
    <a className='mt-4' style={{fontSize:'20px'}} href="#">Forget Password?</a>

   
   
  </form> 


            </div>
            </div>
        </div>
   
    </div>
  )
}

