import React from 'react'
import { Link } from 'react-router-dom';
import man2 from '/src/images/man2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt, faEnvelope,faRupeeSign,faUser,faBuildingCircleArrowRight,faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';



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
      <section className='mb-3'>
        <div className='row'>
         
          <div className='mx-5 mt-2  mb-2  shadow' style={{border:'solid #ccc',padding:'10px', borderRadius:'5px', width:'200px'}}> 
          <Link to='/Myproperty'>
          <FontAwesomeIcon icon={faBuildingCircleArrowRight} style={{fontSize:'50px',color:'indigo'}} />
          </Link>
        <span style={{marginLeft:'22px',fontSize:'30px'}}>5</span><br/>
          My Properties
          </div>
      
         
          <div className='mx-5 mt-2  mb-2  shadow' style={{border:'solid #ccc',padding:'10px', borderRadius:'5px', width:'200px'}}> 
          <Link to='/Mywishlist'>

          <FontAwesomeIcon icon={faHeartCircleCheck} style={{fontSize:'50px',color:'red'}} />
          </Link> 
          <span style={{marginLeft:'22px',fontSize:'30px'}}>3</span><br/>

          My favourite
          </div>

        </div>
      </section>
      <section  style={{borderBottom:'25px solid aliceblue',borderTop:'25px solid aliceblue',backgroundColor:''}}>
        <div className="container pt-4">
          <h1 className="text-center">About Me</h1>
          <div className="row mt-4">
            <div className="col-lg-4">
           
            <div className="col-md-7 mt-1 mx-3" >
                        <img src={man2} className="img-fluid rounded-start" alt="..."  style={{height:'200px'}}/>
                        </div>
            </div>
            <div className="col-lg-8">
              
              <div className="row mt-3" style={{lineHeight:'50px'}}>
                <div className="col-md-6">
                
                   <FontAwesomeIcon style={{marginLeft:'3em'}} icon={faUser} /><span style={{fontSize:'18px',marginLeft:'10px'}}>Hari Bahadur</span><br/>
                         <FontAwesomeIcon style={{marginLeft:'3em'}} icon={faEnvelope} /><span style={{fontSize:'18px',marginLeft:'10px'}}>contact@hari.com</span><br/>
                         <FontAwesomeIcon  style={{marginLeft:'3em'}} icon={faMapMarkerAlt} /> <span style={{fontSize:'20px',marginLeft:'10px'}}> Pulchowk</span> <br/>
                     

                        <FontAwesomeIcon className='mb-2' style={{marginLeft:'3em'}} icon={faPhone} /><span style={{fontSize:'20px',marginLeft:'10px'}}>12345678 ,345678 </span> <br/>
                </div>
                <div className="col-md-6">
               
                          
                          
                  <ul style={{fontSize:'18px'}}>
                    <li> Gender:Male</li>
                    <li>DOB:1995-09-10</li>
                    <li>   Occupation:Students</li>
                  </ul>
                </div>
              </div>
              <div className="row mt-3">
                <p style={{fontSize:'18px'}}>  My name is Hari Bahadur..I was born in  Malika VDC of Gulmi district.I  grew up in Butwal,Rupandehi.
                    I complete my schooling here only and i completed my under graduate in Butwal.I am pursuing my engineering from Pulchowk campus
                  .For study ,i have been in ktm for past  year.
                </p></div>
            </div>
          </div>
        </div></section>
        <table className=' mt-2 mx-5 me-3 mb-2' style={{fontFamily:'sans-serif',borderCollapse:'collapse',
width:'90%' }}>
  <tr>
    <td>Name</td>
    <td>Hari Bahadur</td>
  </tr>
  <tr>
    <td>Gender</td>
    <td>Male</td>
  </tr>
  <tr>
    <td>Age</td>
    <td>23</td>
  </tr>
  <tr>
    <td>Occupation</td>
    <td>Student</td>
  </tr>
  <tr>
    <td>Smoker?</td>
    <td> No</td>
  </tr>
  <tr>
    <td>Any pets?</td>
    <td>No</td>
  </tr>
  <tr>
    <td> Early bird/Night Owl?</td>
    <td>Night Owl</td>
  </tr>
  <tr>
    <td>Partying</td>
    <td>yes</td>
  </tr>
  <tr>
    <td>Alcoholic</td>
    <td>Non-Alcoholic</td>
  </tr>
  <tr>
    <td>Married</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Veg</td>
    <td> yes</td>
  </tr>

 
</table>
     
        

    </div>
  )
}
