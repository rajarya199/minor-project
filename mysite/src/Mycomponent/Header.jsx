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
              
              <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu">
            <li><Link className="dropdown-item" to="/Room">Room</Link></li>
            <li><Link className="dropdown-item" to="/Flat">Flat/appartment</Link></li>
            
            <li><Link className="dropdown-item" to="/Hostel">Hostels</Link></li>
            <li><a className="dropdown-item" href="#">Roommates</a></li>
          </ul>
          </li>

             <li className="nav-item">
                <Link className="nav-link" to="/AboutUs">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact</Link>
              </li>
             
              
            </ul>
            
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  />
              <button className="btn btn-outline-success me-2" type="submit" >Search</button>
            </form>
            <button className="btn btn-outline-success " type="submit"> <Link to="/Login " className="nav-link" >Login</Link></button>
          </div>
        </div>
      </nav>
      </header>
    
  )
}
