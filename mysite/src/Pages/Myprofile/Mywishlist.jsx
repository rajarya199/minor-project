import React from 'react'
import { Link } from 'react-router-dom'
import picI from '/src/images/roomin.jpg'
import hostel2 from '/src/images/hostel2.jpg'
import man2 from '/src/images/man2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt, faEnvelope,faRupeeSign ,faHeartCircleCheck} from '@fortawesome/free-solid-svg-icons';

export default function Mywishlist() {
  return (
    <div>
            <section className='mt-4' style={{borderBottom:'15px solid aliceblue',color:'green'}}>
              <div className='row'>
                
              <div className= '  mb-3' style={{marginLeft:'400px' , width:'300px',fontSize:'40px'}}> 

          
         My Wishlist
          </div>
          <div className= 'shadow  mb-3' style={{border:'solid #ccc',padding:'10px', borderRadius:'12px', width:'150px',marginLeft:'400px'}}> 

<FontAwesomeIcon icon={faHeartCircleCheck} style={{fontSize:'30px',color:'red'}} />
<span style={{marginLeft:'22px',fontSize:'30px'}}>3</span><br/>
</div>
              </div>
            
               </section>

            <div className='container mt-3 mb-5'>
        <div className='row'>
            <span className='mt-4 mx-5' style={{fontSize:'25px'}}> Properties</span>
        <div className=" col-lg-3 card mt-3 mb-3  bs" style={{width: '22rem',
    border:'3px solid #ccc ',
    padding:'1px ',
    borderRadius:'10px',
    margin:'auto'

    }}>
        <img src={picI} className="card-img-top" alt="..." style={{backgroundSize:'cover',height:'200px'}}/>
        
        <div className="card-body">
          <h4 className="card-title">Room for rent in Bhaktapur</h4>
          
          </div>
      
        <div className="list-group list-group-flush">
          <li className="list-group-item">Price: 7000</li>
          <li className="list-group-item">Location: Bhaktapur</li>
          <li className="list-group-item"> Single</li>
        </div>
        <div className='row'>
        <Link to="/viewproperty" className="btn btn-success mt-1  mb-1 " style={{width:'168px',marginLeft:'15px'}}>View </Link>
        <button type="button" className="btn btn-danger mt-1 mb-1" style={{width:'168px',marginLeft:'5px'}}>Remove</button>
        </div>
      


      </div>
      <div className=" col-lg-3 card mt-3 mb-3  bs" style={{width: '22rem',
    border:'3px solid #ccc ',
    padding:'1px ',
    borderRadius:'10px',
    margin:'auto'

    }}>
        <img src={picI} className="card-img-top" alt="..." style={{backgroundSize:'cover',height:'200px'}}/>
        
        <div className="card-body">
          <h4 className="card-title">Flat for rent in Bhaktapur</h4>
          
          </div>
      
        <div className="list-group list-group-flush">
          <li className="list-group-item">Price: 7000</li>
          <li className="list-group-item">Location: Bhaktapur</li>
          <li className="list-group-item"> Single</li>
        </div>
        <div className='row'>
        <Link to="/viewproperty" className="btn btn-success mt-1  mb-1 " style={{width:'168px',marginLeft:'15px'}}>View </Link>
        <button type="button" className="btn btn-danger mt-1 mb-1" style={{width:'168px',marginLeft:'5px'}}>Remove</button>
        </div>      

      </div>
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
        <div className='row'>
        <Link to="/viewhostel" className="btn btn-success mt-1  mb-1 " style={{width:'168px',marginLeft:'15px'}}>View </Link>
        <button type="button" className="btn btn-danger mt-1 mb-1" style={{width:'168px',marginLeft:'5px'}}>Remove</button>
        </div>
        
      </div>
        </div>
      </div>
      <div className='container mt-3 mb-3'>

      <span className='mt-3 mx-5' style={{fontSize:'30px',color:'green'}}> Roommate Post</span>
      <div className='row'>
      <div className='col-lg-6 mt-3'>
     <div className="card mb-3 bs" style={{maxWidth: '600px',height:"250px"}}>
        <div className="row g-0">
          <div className="col-md-4">
          <img src={man2} className="img-fluid rounded-start " alt="..." style={{height:'200px'}}/>

          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Roommate Required For Single Room  In Butwal </h5>
              <FontAwesomeIcon  icon={faMapMarkerAlt} /> <span style={{fontSize:'18px'}}>Milanchowk,Butwal-9</span> <br/>
              
              <FontAwesomeIcon icon={faRupeeSign} /><span style={{fontSize:'18px'}}>6000</span>
              <div style={{fontSize:'18px'}}> Looking For :Any (30-40 yrs)</div>
              <div style={{fontSize:'18px'}}> Type :Furnished  
 </div>
 <div className='row'>
        <Link to="/roommateview" className="btn btn-success mt-4 mb-1 " style={{width:'168px',marginLeft:'14px'}}>View </Link>
        <button type="button" className="btn btn-danger mt-4 mb-1" style={{width:'168px',marginLeft:'5px'}}>Remove</button>
      </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        <div className='col-lg-6 mt-3'>
     <div className="card mb-3 bs" style={{maxWidth: '600px',height:"250px"}}>
        <div className="row g-0">
          <div className="col-md-4">
          <img src={man2} className="img-fluid rounded-start " alt="..." style={{height:'200px'}}/>

          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Roommate Required For Single Room  In Butwal </h5>
              <FontAwesomeIcon  icon={faMapMarkerAlt} /> <span style={{fontSize:'18px'}}>Milanchowk,Butwal-9</span> <br/>
              
              <FontAwesomeIcon icon={faRupeeSign} /><span style={{fontSize:'18px'}}>6000</span>
              <div style={{fontSize:'18px'}}> Looking For :Any (30-40 yrs)</div>
              <div style={{fontSize:'18px'}}> Type :Furnished  
 </div>
 <div className='row'>
        <Link to="/roommateview" className="btn btn-success mt-4 mb-1 " style={{width:'168px',marginLeft:'14px'}}>View </Link>
        <button type="button" className="btn btn-danger mt-4 mb-1" style={{width:'168px',marginLeft:'5px'}}>Remove</button>
      </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
     
      </div>
    </div>
  )
}
