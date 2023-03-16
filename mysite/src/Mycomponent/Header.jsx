import React from 'react'
import login from './Login'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import Room from '../Pages/Rooms/Room'
import Flat from '../Pages/Flats/Flat'
import Hostel from '../Pages/Hostels/Hostel'
import { Link } from 'react-router-dom'
export default function Header() {

  return (
        <header >
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <div className="container-fluid">
          <Link className="navbar-brand" to="/">GharDera</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
              </li> 
              
          

             <li className="nav-item">
                <Link className="nav-link" to="/AboutUs">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact</Link>
              </li>
             
              
            </ul>
            
             {/* <form className="d-flex" role="search" style={{border:'3px solid #ccc ',borderRadius:'8px',padding:'2px 1px',backgroundColor:'white'}} >
              <input className="form-control " type="search" placeholder="Search" aria-label="Search" style={{border:'none',borderRadius:'8px',width:'100%',marginRight:'6px'}} />
              
              <span type='submit' className="fa fa-search my-2 " style={{fontSize:'20px'}}></span>

            </form>  */}
 
      
   <link to=''></link> 
 <Link to ='/profile' style={{fontSize:'30px',marginRight:'10px'}} > <i className='fas fa-user-alt' style={{color:'green'}}/> </Link>

            <button className="btn btn-outline-success mx-2 " type="submit" style={{color:'white'}}> <Link to="/Profilereg " className="nav-link" >Sign in</Link></button>

            <button className="btn btn-outline-success " type="submit" style={{color:'white'}}> <Link to="/Login " className="nav-link" >Login</Link></button>
          </div>
        </div>
      </nav>
      </header>
    
  )
}
