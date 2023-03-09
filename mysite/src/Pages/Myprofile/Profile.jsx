import React from 'react'
import { Link } from 'react-router-dom';
import man2 from '/src/images/man2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt, faEnvelope,faRupeeSign,faUser } from '@fortawesome/free-solid-svg-icons';
import { green } from '@mui/material/colors';


export default function Profile() {
  return (
    <div>
            
      <nav className="navbar bg-body-tertiary fixed">
        <div className="container-fluid">
          <div className=' d-flex '  style={{fontSize:'30px',color:'green' }}>
          My Profile
          </div>
        
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">My Profile</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to='/Profile'>Profile</Link>
                </li>
                <li className="nav-item">

                  <Link className="nav-link" to="/Myproperty">My Property</Link>
                </li>
                <li className="nav-item">
                    
                  <Link className="nav-link" to="/Mywishlist">My wishlist</Link>
                </li>
              
              </ul>
             
            </div>
          </div>
        </div>
      </nav>
      <div className='container mb-3 mt-2'>
        <div className='row'>
            <div className='col-lg-4'>
            <div className="col-md-7 mt-1 mx-3">
                        <img src={man2} className="img-fluid rounded-start" alt="..."  style={{height:'200px'}}/>
                        </div>
            </div>
            <div className='col-lg-8'>
                <div className='row' style={{border:' solid #ccc ',  padding:'1px ', borderRadius:'10px',height:'200px',lineHeight:'35px'}}>
                <div  className=' col-lg-6 mt-2 mb-3 ' >
            <FontAwesomeIcon style={{marginLeft:'3em'}} icon={faUser} /><span style={{fontSize:'18px',marginLeft:'10px'}}>Hari Bahadur</span><br/>
                         <FontAwesomeIcon style={{marginLeft:'3em'}} icon={faEnvelope} /><span style={{fontSize:'18px',marginLeft:'10px'}}>contact@hari.com</span><br/>
                         <FontAwesomeIcon  style={{marginLeft:'3em'}} icon={faMapMarkerAlt} /> <span style={{fontSize:'20px',marginLeft:'10px'}}> Pulchowk</span> <br/>
                     

                        <FontAwesomeIcon className='mb-2' style={{marginLeft:'3em'}} icon={faPhone} /><span style={{fontSize:'20px',marginLeft:'10px'}}>12345678 ,345678 </span> <br/>
                     </div> 
                    <div className='col-lg-4  mt-2 mb-3' style={{fontSize:'18px'}}>
                            Gender:Male 
                            Age: 21yrs
                            Occupation:Students
                    </div>
                </div>

          

            </div>
        </div>

      </div>
        <div className='container'>
            <div className='row'>
            <div className='col-lg-6'>
                <h5 className='mt-5'>About me</h5>
                <div className='row' style={{lineHeight:'35px'}}>

                <div className='col-lg-5 mb-3'>
              Name <br/>
              Gender <br/>
              Age <br/>
              Occupation<br/>
              Smoker?<br/>
              Any pets?<br/>
              Early bird/Night Owl?<br/>
              Partying<br/>
              Alcoholic<br/>
              Married<br/>
              Veg<br/>

            </div>
            <div className='col-lg-5'>
              Hari Bahadur <br/>
              Male <br/>
              22 yrs <br/>
              Student <br/>
              No <br/>
               No <br/>
               Night Owl<br/>
              Yes,(moderate) <br/>
              Non-Alcoholic<br/>
               No<br/>
               yes<br/>
            </div>
            
            
        
           
            </div>
            </div>
            </div>
   
            </div>

    </div>
  )
}
