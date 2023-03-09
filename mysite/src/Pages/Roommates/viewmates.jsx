import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import man2 from '/src/images/man2.jpg'

import { faPhone, faMapMarkerAlt, faEnvelope,faRupeeSign,faUser } from '@fortawesome/free-solid-svg-icons';
import {
    
    MDBCarousel,
    MDBCarouselItem,
    
  } from 'mdb-react-ui-kit';

export default function viewmates() {
  return (
    <div style={{backgroundColor:'aliceblue'}}   >
      
            <div className='container ' >
            <h2 className='mt-1' style={{marginLeft:'200px'}}>Flatmate Required For 1 BHK Flat In Pulchowk </h2>

                <div className='row'>
                    <div className='col-lg-3'>
                        <div className="col-md-7 mt-1 mx-3">
                        <img src={man2} className="img-fluid rounded-start" alt="..."  style={{height:'200px'}}/>
                        </div>
                    </div>
                    <div className='col-lg-5'>
                        <h5>      Hello<br/>
                        I am Hari Bahadur . I am a 21 year old 1st year Engineering student in Pulchowk Campus.. I am looking for flatmate to share my flat. I am flexible and social. Please write to me if you are comfortable to share with me. I am ok with shared properrty</h5>
                       </div>
                    <div className='col-lg-4 mt-2' >
                    <div  className=' mt-2 mb-3 bs' style={{border:' solid #ccc ',  padding:'1px ', borderRadius:'10px',height:'250px',lineHeight:'35px'}}>
                         <FontAwesomeIcon  style={{marginLeft:'3em'}} icon={faMapMarkerAlt} /> <span style={{fontSize:'20px',marginLeft:'10px'}}> Pulchowk</span> <br/>
                         <FontAwesomeIcon style={{marginLeft:'3em'}} icon={faRupeeSign} /><span style={{fontSize:'18px',marginLeft:'10px'}}>100000</span> <br/>
                         <FontAwesomeIcon style={{marginLeft:'3em'}} icon={faUser} /><span style={{fontSize:'18px',marginLeft:'10px'}}>Hari Bahadur</span><br/>
                         <FontAwesomeIcon style={{marginLeft:'3em'}} icon={faEnvelope} /><span style={{fontSize:'18px',marginLeft:'10px'}}>contact@hari.com</span><br/>

                        <FontAwesomeIcon className='mb-2' style={{marginLeft:'3em'}} icon={faPhone} /><span style={{fontSize:'20px',marginLeft:'10px'}}>12345678 ,345678 </span> <br/>
                        <Link to="/Mywishlist" className="btn btn-primary  mb-3 mx-4 mt-3 ">Add To My wishlist</Link>

                     </div>              
                 </div>

                </div>

            </div>
            

    

              <div style={{backgroundColor:'aliceblue'}}>
        <div className='container'  >
        <div className='row'>
        <div className='col-lg-8 mt-2'>
                <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block  '
        itemId={1}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
        alt='...'
        style={{height:'cover '}}
      >
  
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
        alt='...'
      >
        
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
        alt='...'
      >
    
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
        <div className='col-lg-4 mt-2' >
                    <div  className=' mt-3 mb-3' style={{border:' solid #ccc ',  padding:'1px ', borderRadius:'10px',}}>
                        <h5 className='mt-3 mx-3 ' > Room Ammenities And Facilities</h5><br/>
                        <ul style={{marginLeft:'20px',fontSize:"18px"}}>
                            <li> Bedroom: 2</li>
                            <li> Bathroom:1</li>
                            <li> Kitchen: 1 </li>
                            <li> Parking:yes</li>
                            <li> Garden/Terrace: yes</li>
                            <li> Furnishing: Furnished</li>
                            <li> Wifi: yes</li>
                            <li> Electricity: 24/7</li>
                            <li> Watersupply: 24/7</li>

                        </ul>
                     </div>

                    
    </div>
    </div>
</div>
</div>
      
      <section style={{backgroundColor:'aliceblue'}}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
                <h5 className='mt-3'>About me</h5>
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
            <div className='col-lg-6'>
            <h5 className='mt-3'>Roommate Preferences</h5>
                <div className='row' style={{lineHeight:'35px'}}>

                <div className='col-lg-5 mb-3'>
              
              Gender <br/>
               Min-Age <br/>
               Max-Age <br/>

              Occupation<br/>
              Smoker?<br/>
              pets?<br/>
              Early bird/Night Owl?<br/>
              Partying<br/>
              Alcoholic<br/>
              Married<br/>
              Veg<br/>

            </div>
            <div className='col-lg-5'>
              
              Male <br/>
              20 yrs <br/>
              30 yrs<br/>
              Not Specified<br/>
              No <br/>
               Not Specified <br/>
               Not Specified<br/>
              Yes,(moderate) <br/>
              Non-Alcoholic<br/>
               Any<br/>
               yes<br/>
            </div>
            
            
        
           
            </div>

            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
            <h4 style={{marginLeft:'400px'}}> Location</h4>
            .........<br/>
            <br/>
            <br/>
            <br/>
        </div>
      </section>

    </div>
  )
}
