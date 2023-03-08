import React from 'react'
import { Link } from 'react-router-dom'



export default function () {
  return (
    <div>
        <div className=' d-flex justify-content-center mt-5' style={{fontSize:'30px',color:'indigo'}}>  <b> Advertise  Rooms, Apartment ,Hostel or Roommate </b>  </div>
   



<div className="list-group mt-3 mb-3"  style={{width: '20rem',
    border:'3px solid #ccc ',
    
    lineHeight:'65px',
    
    margin:'auto'}}>
        <Link to='/propertyform' className="list-group-item list-group-item-action  listbox" >
          Room
        </Link>
        <Link to='/postforroommate'className="list-group-item list-group-item-action listbox">Roommates</Link>
        <Link to='/propertyform' className="list-group-item list-group-item-action listbox">Flat/Appartment</Link>
        <Link to="/hostelform" className="list-group-item list-group-item-action listbox">Hostel</Link>
      </div>
        </div>
    
  )
}
