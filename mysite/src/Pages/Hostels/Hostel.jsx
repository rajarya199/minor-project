import React from 'react'
import { Link } from 'react-router-dom'
import Listform from '../../Mycomponent/Listform'
import picI from '/src/images/roomin.jpg'
export default function Hostel() {
  return (
    
       <div>
      <div className=' d-flex  justify-content-end' style={{backgroundColor:'#c5e0e5',height:'55px' ,alignItems:'center'}}>
      <Link to='/Listform'> <button type="button" className="btn btn-success me-3 "> Add Hostel</button></Link>
      </div>

      <div className="card mt-3 mb-3 shadow-lg" style={{width: '22rem',
    border:'3px solid #ccc ',
    padding:'1px ',
    borderRadius:'10px',
    margin:'auto'

    }}>
        <img src={picI} className="card-img-top" alt="..." style={{backgroundSize:'cover',height:'200px'}}/>
        
        <div className="card-body">
          <h4 className="card-title">Hostel  in nakhipot</h4>
          
          </div>
      
        <div className="list-group list-group-flush">
          <li className="list-group-item">Price</li>
          <li className="list-group-item">Location</li>
          <li className="list-group-item"> 1/2/3 sitter</li>
        </div>
        <a href="#" className="btn btn-success  mb-1 ">View </a>
        
      </div>



      

    </div>
  )
}
