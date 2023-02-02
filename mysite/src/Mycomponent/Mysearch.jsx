import React from 'react'
import './mysearch.css'


export default function Mysearch() {
  return (
    <div className=' flex' style={{width:'100%',
    backgroundImage:'url(" /src/images/ktmcity2.jpg")',
    height:'550px',
    backgroundSize:'cover',
    
    
    }}>
   
  <form className='container mt-10' style={{display:'flex' ,backgroundColor:'#e9e9e9',
  translate:'0px 250px'

  }}>
      
      <input className="form-control mt-3 mb-3 fixed mx-1" type="search" placeholder="Search" aria-label="Search"  />
      <select id="options" name="options" className='mt-3 mb-3 mx-1' style={{ width:'500px'}}>
      <option value="location">Location</option>
      <option value="kathmandu">Kathmandu</option>
      <option value="Lalitpur">Lalitpur </option>
      <option value="Bhaktapur">Bhaktapur </option>
      
    </select>
    <select id="options" name="options" className='mt-3 mb-3 mx-1 ' style={{ width:'500px'}}>
      <option value="option1">All categories</option>
      <option value="option2">Room</option>
      <option value="option3">hostel </option>
      <option value="option4">Flat </option>
      <option value="option5">Roomates </option>
    </select>
                <button className="btn btn-outline-success  me-1 mt-3 mb-3 mx-1 " type="submit " style={{ width: '100px',color:'black' }}>Search</button>
      </form> 


</div>

    

  )
}
