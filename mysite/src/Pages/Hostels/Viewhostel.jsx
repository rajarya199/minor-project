
import React ,{ useState } from 'react'
import { Link } from 'react-router-dom';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faPhone, faMapMarkerAlt, faEnvelope,faBed } from '@fortawesome/free-solid-svg-icons';
 import hostel5 from '/src/images/hostel5.jpg'
 import hostel8 from '/src/images/hostel8.jpg'

 import hostel13 from '/src/images/hostel13.png'
 

 

  import {
    
    MDBCarousel,
    MDBCarouselItem,
    
  } from 'mdb-react-ui-kit';
export default function Viewhostel() {

   


  return (
    <div  >
        <div style={{backgroundColor:'aliceblue'}}>
        <div className='container'  >
            
        <div className='row'>
        <div className='col-lg-8 mt-2'>
                <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block  '
        itemId={1}
        src={hostel5}
        alt='...'
        // style={{height:'cover '}}
      >
        {/* <h6>pict1</h6>
        <p>..</p> */}
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={hostel13}
        alt='...'
      >
        
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={hostel8}
        alt='...'
      >
        
        {/* <p>..</p>  */}
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
        alt='...'
      >
        
        {/* <p>..</p>  */}
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
        <div className='col-lg-4 mt-2 mb-5' style={{backgroundColor:'aliceblue'}}>
                    <div  className=' mt-3 bs ' style={{border:' solid #ccc ',  padding:'1px ', borderRadius:'10px',width:'100%' }}>
                        <h4 className='mt-3 mx-2 ' style={{color:'green'}}> <b>Chapagaun Boys Hostelllllllll</b></h4><br/>
                        
                        <FontAwesomeIcon  style={{marginLeft:'3em'}} icon={faMapMarkerAlt} /> <span style={{fontSize:'20px',}}> Satdobato</span> 
                        <div className='mx-5 mb-2 mt-2' style={{fontSize:'20px'}}>Min-Price: Rs 100000 </div>
                        <div className='mx-5 mb-2' style={{fontSize:'20px'}}> Max-Price: Rs 120000 </div>
                       
                     <FontAwesomeIcon className='mt-2' style={{marginLeft:'3em'}} icon={faPhone} /><span style={{fontSize:'20px'}}>12345678 ,345678 </span> <br/>
                     <FontAwesomeIcon className='mt-2'style={{marginLeft:'3em'}} icon={faEnvelope} /><span style={{fontSize:'20px'}}>cpgaunboy@gmail.com</span><br />

                     <FontAwesomeIcon  className='mt-2 '  style={{marginLeft:'3em'}} icon={faBed} /><span style={{fontSize:'20px',marginBottom:'2px'}}> Available:3</span>
                     <br/>
                     
                     <Link to="/" className="btn btn-primary  mb-3 mx-4 mt-3 ">Add To My wishlist</Link>
                     <Link to='/hosteladmitform'className="btn btn-primary  mb-3  mt-3 "> Book Now </Link>

                     </div>

                    
    </div>
    </div>
</div>
</div>
<div className='mt-5'>
<div className="list-group list-group-flush" style={{fontSize:"120%"}}>


          <li className="list-group-item">
          <span  style={{marginLeft:'50px'}} > Room Type</span>
          <span  style={{marginLeft:'200px'}}> Price/Bed</span>
          <span  style={{marginLeft:'200px',marginRight:'200px'}}> Total Bed </span>
          <span className='mx-4'> Available Bed</span>
          </li>
          <li className="list-group-item">
          <span style={{marginLeft:'50px'}} > 1-Sitter</span>
          <span  style={{marginLeft:'250px'}}> 13000</span>
          <span  style={{marginLeft:'250px',marginRight:'250px'}}> 05 </span>
          <span className='mx-4'> 1 </span>
          </li>
          <li className="list-group-item">
          <span style={{marginLeft:'50px'}} > 2-Sitter</span>
          <span  style={{marginLeft:'250px'}}> 12000</span>
          <span  style={{marginLeft:'250px',marginRight:'250px'}}> 08 </span>
          <span className='mx-4'> 4 </span>
          </li>
          <li className="list-group-item">
          <span style={{marginLeft:'50px'}}> 3-Sitter</span>
          <span  style={{marginLeft:'250px'}}> 11000</span>
          <span  style={{marginLeft:'250px',marginRight:'250px'}}> 12 </span>
          <span className='mx-4'> - </span>
          </li>
          <li className="list-group-item">
          <span style={{marginLeft:'50px'}}> 4-Sitter</span>
          <span  style={{marginLeft:'250px'}}> 10000</span>
          <span  style={{marginLeft:'250px',marginRight:'250px'}}> 08 </span>
          <span className='mx-4'> 2</span>
          </li>
          
        </div>
</div>

<div className='mt-4'>
<nav>
  <div class="nav nav-tabs nav-justified" id="nav-tab" role="tablist" >
    <button class="nav-link active" id="nav-desc-tab" data-bs-toggle="tab" data-bs-target="#nav-desc" type="button" role="tab" aria-controls="nav-desc" aria-selected="true">Description </button>
    <button class="nav-link" id="nav-facility-tab" data-bs-toggle="tab" data-bs-target="#nav-facility" type="button" role="tab" aria-controls="nav-facility" aria-selected="false">Facilities and Amenities</button>

    <button class="nav-link" id="nav-info-tab" data-bs-toggle="tab" data-bs-target="#nav-info" type="button" role="tab" aria-controls="nav-info" aria-selected="false">Meal Schedule</button>
    <button class="nav-link" id="nav-cond-tab" data-bs-toggle="tab" data-bs-target="#nav-cond" type="button" role="tab" aria-controls="nav-condition" aria-selected="false">Nearby Location</button>
    <button class="nav-link" id="nav-maps-tab" data-bs-toggle="tab" data-bs-target="#nav-maps" type="button" role="tab" aria-controls="nav-maps" aria-selected="false">Maps</button>
    <button class="nav-link" id="nav-comm-tab" data-bs-toggle="tab" data-bs-target="#nav-comm" type="button" role="tab" aria-controls="nav-comment" aria-selected="false">Comment</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent" style={{backgroundColor:'aliceblue'}}>
  <div class="tab-pane fade show active" id="nav-desc" role="tabpanel" aria-labelledby="nav-desc-tab" tabindex="0">
    <p className='mt-2 mb-2' style={{fontFamily:'sans-serif'}}>
        <h4> 
        This hostel is run by a family and it has homely environment with hygienic food. We provide 24-hr wi-fi and hot/cold water facility. The hostel Management play vital role in student's daily educational activities. The student should strictly follow the hostel's rules and regulations. we have neat and clean rooms with beautiful beds & bathrooms. we are fully oriented in student's future development.There are various academic institutes nearby this hostel. We provides quality services for students consisting of various value added services.
         </h4>


    </p>
    
    </div>
  <div class="tab-pane fade" id="nav-info" role="tabpanel" aria-labelledby="nav-info-tab" tabindex="0">
  <table className=' mt-2 mx-5 me-3 mb-2' style={{fontFamily:'sans-serif',borderCollapse:'collapse',
width:'90%' }}>
  <tr>
    <td>Day-time</td>
    <td>Breakfast</td>
    <td>Launch</td>
    <td>Snacks</td>
    <td>Dinner</td>


    
  </tr>
  <tr>
    <td> Sun-Sat</td>
    <td>6:00-8:00 AM</td>
    <td>9:00 AM-12:00 PM </td>
    <td>2:30-4:30 PM </td>
    <td>7:00-9:00 PM </td>


 </tr>
</table>

  
  
  </div>
  <div class="tab-pane fade" id="nav-facility" role="tabpanel" aria-labelledby="nav-facility-tab" tabindex="0">

        <div className='container mt-2 ' style={{marginLeft:'50px'}}>
          <div className="row mb-2" style={{fontSize:'120%'}}>
            <div className='col-lg-3 mb-3'>
              WIFI 
            </div>
            <div className='col-lg-3'>
              Water Supply
            </div>
            <div className='col-lg-3'>
              ELectricity
            </div>
            <div className='col-lg-3'>
              TV room
            </div>
            <div className='col-lg-3'>
              C.C camera
            </div>
            <div className='col-lg-3'>
          Veg Food
            </div>
            <div className='col-lg-3'>
          Non-Veg Food
            </div>
            <div className='col-lg-3'>
          Laundry
            </div>
            <div className='col-lg-3'>
          --
            </div>
            <div className='col-lg-3'>
          --
            </div>
            <div className='col-lg-3'>
          --
            </div>
            <div className='col-lg-3'>
          --
            </div>
            <div className='col-lg-3'>
          --
            </div>

          </div>
        </div>
 



  </div>
  <div class="tab-pane fade" id="nav-cond" role="tabpanel" aria-labelledby="nav-condition-tab" tabindex="0">
  <ul className='mt-2 mx-3'>
   <li> <h2 style={{color:'green'}}>Nearby Schools/Institute/Office/Banks</h2></li>
   <ul  style={{listStyleType: 'square',fontSize:'140%'}}>
   <li> NCE college</li>
  <li>Cosmos College</li>
  <li> Global IME bank</li>
  <li>Hope Techical College</li>
   </ul>
  
  
</ul> 
</div>

<div class="tab-pane fade" id="nav-maps" role="tabpanel" aria-labelledby="nav-condition-maps" tabindex="0">

    <h4 className='mt-2 mb-2 mx-5'> Kun Mandir Ma Janxau Yatri!!</h4>

</div>
<div class="tab-pane fade" id="nav-comm" role="tabpanel" aria-labelledby="nav-condition-comment" tabindex="0">
       
<div >

<div className="container mt-2 mb-2 contactContent" >
 <h1 className="text-left"> Add comment</h1>
 <div className="row mt-4">
   <div className="col-lg-4 mb-3 shadow" style={{ border:'3px solid #ccc',borderRadius:'10px'}}>
     <form>
       <input type="text" className="form-control mt-3 " placeholder="Name" required />
       <input type="email" className="form-control mt-3" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"  required/>
       
       <div className="mb-3 mt-3">
         <textarea className="form-control" rows={5} id="comment" name="text" placeholder="Comment" defaultValue={""} />
       </div>
     </form>
     <button type="button" className="btn btn-success mt-3 mb-3 ">Submit</button>
   </div>


   <div className="col-lg-8  "  >
     <div className=" mt-10"  style={{marginLeft:'200px'}}>
         <p>comment1</p>
         <p>comment2</p>

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
