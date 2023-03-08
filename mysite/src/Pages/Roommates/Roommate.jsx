import React from 'react'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt, faEnvelope,faRupeeSign } from '@fortawesome/free-solid-svg-icons';
export default function Roommate() {
  return (
    <div className='container'>
        <div className='row'>
        <div className='col-lg-6 mt-3'>
        <div className="card mb-3 bs" style={{maxWidth: '600px',height:'200px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="img_avatar.png" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Flatmate Required For 1 BHK Flat In Pulchowk </h5>
              <FontAwesomeIcon  icon={faMapMarkerAlt} /> <span style={{fontSize:'18px'}}>Pulchowk,Lalitpur-3</span> <br/>
              
              <FontAwesomeIcon icon={faRupeeSign} /><span style={{fontSize:'18px'}}>10000</span>
              <div style={{fontSize:'18px'}}> Looking For :Male</div>
              <div style={{fontSize:'18px'}}> Type :Furnished  <Link to="/" className="btn btn-primary  " style={{marginLeft:"50px",width:'150px'}}>View</Link>
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
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Roommate Required For Single Room  In Butwal </h5>
              <FontAwesomeIcon  icon={faMapMarkerAlt} /> <span style={{fontSize:'18px'}}>Milanchowk,Butwal-9</span> <br/>
              
              <FontAwesomeIcon icon={faRupeeSign} /><span style={{fontSize:'18px'}}>6000</span>
              <div style={{fontSize:'18px'}}> Looking For :Any</div>
              <div style={{fontSize:'18px'}}> Type :Furnished  <Link to="/" className="btn btn-primary  " style={{marginLeft:"50px",width:'150px'}}>View</Link>
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
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Roommate Required For Single Room  In Butwal </h5>
              <FontAwesomeIcon  icon={faMapMarkerAlt} /> <span style={{fontSize:'18px'}}>Devinagar,Butwal-12</span> <br/>
              
              <FontAwesomeIcon icon={faRupeeSign} /><span style={{fontSize:'18px'}}>6000</span>
              <div style={{fontSize:'18px'}}> Looking For :Female</div>
              <div style={{fontSize:'18px'}}> Type :Furnished  <Link to="/" className="btn btn-primary  " style={{marginLeft:"50px",width:'150px'}}>View</Link>
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
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Roommate Required For Single Room  In Butwal </h5>
              <FontAwesomeIcon  icon={faMapMarkerAlt} /> <span style={{fontSize:'18px'}}>Milanchowk,Butwal-9</span> <br/>
              
              <FontAwesomeIcon icon={faRupeeSign} /><span style={{fontSize:'18px'}}>6000</span>
              <div style={{fontSize:'18px'}}> Looking For :Any</div>
              <div style={{fontSize:'18px'}}> Type :Furnished  <Link to="/" className="btn btn-primary  " style={{marginLeft:"50px",width:'150px'}}>View</Link>
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
