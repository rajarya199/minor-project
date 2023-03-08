import React from 'react'
import { Link } from 'react-router-dom'
import roomie from '/src/images/hostel.jpg'

import picI from '/src/images/roomin.jpg'
import hostel2 from '/src/images/hostel2.jpg'
import hostel1 from '/src/images/hostel1.jpg'
import hostel3 from '/src/images/hostel3.jfif'



export default function Hostel() {
  return (
    
       <div  >
          <section>
      <div className='container'>
        <div className='row'>
        <div className='col-lg-4' >
              <p style={{fontSize:'50px',lineHeight:'80px',fontFamily:'sans-serif'}}> Looking For A 
                <p style={{color:'green'}}> Hostel </p> 

          </p>
          <p style={{fontSize:'20px'}}> Stop wandering around the city in search of Hostel.you can search hostel here according to your need.<br/><br/><br/>
          You can also list Your Hostel here  
             </p>
             <Link to='/hostelform'>  <button type="button-lg" className="btn btn-success mb-3 abc" >Add Hostel</button></Link>
        
      </div>
       
      <div className='col-lg-8'>
      <img src={roomie} className="roomie-img" alt="..." style={{backgroundSize:'auto',height:'500px'}}/>

      </div>
     
      </div>
      </div>
    </section>
      
<div className='container'>
  <div className='row'>
      <div className=" clg-lg-3 card mt-3 mb-3 shadow-lg" style={{width: '22rem',
    border:'3px solid #ccc ',
    padding:'1px ',
    borderRadius:'10px',
    margin:'auto'

    }}>
        <img src={hostel2} className="card-img-top" alt="..." style={{backgroundSize:'cover',height:'200px'}}/>
        
        <div className="card-body">
          <h4 className="card-title">Delhibazar Boys Hostel</h4>
          
          </div>
      
        <div className="list-group list-group-flush">
        <li className="list-group-item">Min-Price:10000</li>
          <li className="list-group-item">Max-Price:13000</li>
          <li className="list-group-item">Location:Delhibazar</li>
          
        </div>

         <Link  to="/viewhostel" className="btn btn-success  mb-1 ">View </Link> 
        
      </div>
      <div className=" clg-lg-6 card mt-3 mb-3 shadow-lg" style={{width: '22rem',
    border:'3px solid #ccc ',
    padding:'1px ',
    borderRadius:'10px',
    margin:'auto'

    }}>
        <img src={hostel3} className="card-img-top" alt="..." style={{backgroundSize:'cover',height:'200px'}}/>
        
        <div className="card-body">
          <h4 className="card-title">Chapagaun Boys Hostel</h4>
          
          </div>
      
        <div className="list-group list-group-flush">
          <li className="list-group-item">Min-Price:10500</li>
          <li className="list-group-item">Max-Price:13000</li>

          <li className="list-group-item">Location:Satdobato</li>
      
        </div>
        <Link to="/viewhostel" className="btn btn-success  mb-1 ">View </Link>
        
      </div>
      <div className=" clg-lg-9 card mt-3 mb-3 shadow-lg" style={{width: '22rem',
    border:'3px solid #ccc ',
    padding:'1px ',
    borderRadius:'10px',
    margin:'auto'

    }}>
        <img src={hostel1} className="card-img-top" alt="..." style={{backgroundSize:'cover',height:'200px'}}/>
        
        <div className="card-body">
          <h4 className="card-title"> Namaste Girls Hostel </h4>
          
          </div>
      
        <div className="list-group list-group-flush">
        <li className="list-group-item">Min-Price:10500</li>
          <li className="list-group-item">Max-Price:13000</li>
          <li className="list-group-item">Location:Baneshwor</li>
        </div>
        <a href="#" className="btn btn-success  mb-1 ">View </a>
        
      </div>
      </div>
</div>


      

    </div>
  )
}
