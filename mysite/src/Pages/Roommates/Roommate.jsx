import React from 'react'
import { Link } from 'react-router-dom';
import roomie from '/src/images/roomie.jpg'
import man from '/src/images/man.png'
import omen from '/src/images/omen.jpg'
import omen2 from '/src/images/omen2.jpg'

import man2 from '/src/images/man2.jpg'




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt, faEnvelope,faRupeeSign } from '@fortawesome/free-solid-svg-icons';
export default function Roommate() {
  return (
    <div>
       <section>
      <div className='container'>
        <div className='row'>
       
      <div className='col-lg-8'>
      <img src={roomie} className="roomie-img" alt="..." style={{backgroundSize:'auto',height:'500px'}}/>

      </div>
      <div className='col-lg-4' >
              <p style={{fontSize:'50px',lineHeight:'80px',fontFamily:'sans-serif'}}> Looking For A 
                <p style={{color:'green'}}> Compatible Roommates </p> 

          </p>
          <p style={{fontSize:'20px'}}> Find like minded Roommates to share comfortable space.
             </p>
             <Link to='/postforroommate'>  <button type="button-lg" className="btn mb-3 btn-success abc" >Post For Roommates</button></Link>
        
      </div>
      </div>
      </div>
    </section>
    <div className='container'>
        <div className='row'>
        <div className='col-lg-6 mt-3'>
        <div className="card mb-3 bs" style={{maxWidth: '600px',height:'200px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={man} className="img-fluid rounded-start" alt="..." style={{height:'200px'}} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Flatmate Required For 1 BHK Flat In Pulchowk </h5>
              <FontAwesomeIcon  icon={faMapMarkerAlt} /> <span style={{fontSize:'18px'}}>Pulchowk,Lalitpur-3</span> <br/>
              
              <FontAwesomeIcon icon={faRupeeSign} /><span style={{fontSize:'18px'}}>10000</span>
              <div style={{fontSize:'18px'}}> Looking For :Male (20-30 yrs)</div>
              <div style={{fontSize:'18px'}}> Type :Furnished  <Link to="/roommateview" className="btn btn-primary  " style={{marginLeft:"50px",width:'150px'}}>View</Link>
 </div>
            </div>
          </div>
        </div>
      </div>
        </div>
     <div className='col-lg-6 mt-3'>
     <div className="card mb-3 bs" style={{maxWidth: '600px',height:"200px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={omen} className="img-fluid rounded-start " alt="..." style={{height:'200px'}}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Roommate Required For Single Room  In Butwal </h5>
              <FontAwesomeIcon  icon={faMapMarkerAlt} /> <span style={{fontSize:'18px'}}>Milanchowk,Butwal-9</span> <br/>
              
              <FontAwesomeIcon icon={faRupeeSign} /><span style={{fontSize:'18px'}}>6000</span>
              <div style={{fontSize:'18px'}}> Looking For :Any</div>
              <div style={{fontSize:'18px'}}> Type :Furnished  <Link to="/roommateview" className="btn btn-primary  " style={{marginLeft:"50px",width:'150px'}}>View</Link>
 </div>
            </div>
          </div>
        </div>
      </div>
        </div>

        <div className='col-lg-6 mt-3'>
     <div className="card mb-3 bs" style={{maxWidth: '600px',height:"200px"}}>
        <div className="row g-0">
          <div className="col-md-4">
          <img src={omen2} className="img-fluid rounded-start " alt="..." style={{height:'200px'}}/>

          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Roommate Required For Single Room  In Butwal </h5>
              <FontAwesomeIcon  icon={faMapMarkerAlt} /> <span style={{fontSize:'18px'}}>Devinagar,Butwal-12</span> <br/>
              
              <FontAwesomeIcon icon={faRupeeSign} /><span style={{fontSize:'18px'}}>6000</span>
              <div style={{fontSize:'18px'}}> Looking For :Female</div>
              <div style={{fontSize:'18px'}}> Type :Furnished  <Link to="/roommateview" className="btn btn-primary  " style={{marginLeft:"50px",width:'150px'}}>View</Link>
 </div>
            </div>
          </div>
        </div>
      </div>
        </div>

        <div className='col-lg-6 mt-3'>
     <div className="card mb-3 bs" style={{maxWidth: '600px',height:"200px"}}>
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
              <div style={{fontSize:'18px'}}> Type :Furnished  <Link to="/roommateview" className="btn btn-primary  " style={{marginLeft:"50px",width:'150px'}}>View</Link>
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
