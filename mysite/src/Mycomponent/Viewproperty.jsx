
import React ,{ useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import picI from '/src/images/roomin.jpg'
import room9 from '/src/images/room9.jpg'




  import {
    
    MDBCarousel,
    MDBCarouselItem,
    
  } from 'mdb-react-ui-kit';
export default function Viewproperty() {

   


  return (
    <div>
      <div style={{backgroundColor:'aliceblue'}}>
        <div className='container'  >
        <div className='row'>
        <div className='col-lg-8 mt-2'>
                <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block  '
        itemId={1}
        src={picI}
        alt='...'
        style={{height:'cover '}}
      >
        {/* <h6>pict1</h6>
        <p>..</p> */}
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={room9}
        alt='...'
      >
        
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
        alt='...'
      >
        {/* <h5>pict3</h5>
        <p>..</p> */}
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
        <div className='col-lg-4 mt-2' >
                    <div  className=' mt-3 bs' style={{border:' solid #ccc ',  padding:'1px ', borderRadius:'10px',}}>
                        <h4 className='mt-3 mx-2 ' style={{color:'green'}}> <b>Room For Rent In Satbobato</b></h4><br/>
            
                        <FontAwesomeIcon  style={{marginLeft:'3em'}} icon={faMapMarkerAlt} /> <span style={{fontSize:'20px',}}> Satdobato</span> 

                        <div className='mx-5 mb-2 mt-2' style={{fontSize:'20px'}}> Price: Rs 100000 </div>
                        <FontAwesomeIcon className='mb-2' style={{marginLeft:'3em'}} icon={faPhone} /><span style={{fontSize:'20px'}}>12345678 ,345678 </span> <br/>

                     
                     
                     <Link to="/Mywishlist" className="btn btn-primary  mb-3 mx-5 mt-3">Add To My wishlist</Link>
                     </div>

                    
    </div>
    </div>
</div>
</div>
<div className='mt-4'>
<nav>
  <div class="nav nav-tabs nav-justified" id="nav-tab" role="tablist" >
    <button class="nav-link active" id="nav-desc-tab" data-bs-toggle="tab" data-bs-target="#nav-desc" type="button" role="tab" aria-controls="nav-desc" aria-selected="true">Description </button>
    <button class="nav-link" id="nav-info-tab" data-bs-toggle="tab" data-bs-target="#nav-info" type="button" role="tab" aria-controls="nav-info" aria-selected="false">Information</button>
    <button class="nav-link" id="nav-facility-tab" data-bs-toggle="tab" data-bs-target="#nav-facility" type="button" role="tab" aria-controls="nav-facility" aria-selected="false">Facilities and Amenities</button>
    <button class="nav-link" id="nav-cond-tab" data-bs-toggle="tab" data-bs-target="#nav-cond" type="button" role="tab" aria-controls="nav-condition" aria-selected="false">Condition</button>
    <button class="nav-link" id="nav-maps-tab" data-bs-toggle="tab" data-bs-target="#nav-maps" type="button" role="tab" aria-controls="nav-maps" aria-selected="false">Maps</button>
    <button class="nav-link" id="nav-comm-tab" data-bs-toggle="tab" data-bs-target="#nav-comm" type="button" role="tab" aria-controls="nav-comment" aria-selected="false">Comment</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent" style={{backgroundColor:'aliceblue'}}>
  <div class="tab-pane fade show active" id="nav-desc" role="tabpanel" aria-labelledby="nav-desc-tab" tabindex="0">
    <p  className='mt-2' style={{fontFamily:'sans-serif'}}>
        <h4> A house with 1 floor is built in an area of 3.1 aana is located at Suryabinayak, Bhaktapur, and is available for sale.It is 1 km far from Arniko Highway, Suryabinayak Chowk. It has faced towards the south direction and has road access of 13 feet.
        Located In Manjri B.K, Taluka Haveli,<br/> 
        These Semi/Fully-Equipped Co-Living Studios And 1 BHKs Feature All Basic Amenities And An Exclusive Game Room For Its Residents.
         With Rent Starting At Just ₹5,500/ Bed, You Can Share Your Space With A Friend Or Live By Yourself. <br/>
         Away From The Chaos Of Setting Up A House Or Paying A Huge Sum As Security Deposit, Enjoy The Perks Of Living In A Comfy Home. </h4>


    </p>
    
    </div>
  <div class="tab-pane fade" id="nav-info" role="tabpanel" aria-labelledby="nav-info-tab" tabindex="0">
  <table className=' mt-3 mx-5 me-3 mb-3' style={{fontFamily:'sans-serif',borderCollapse:'collapse',
width:'90%' }}>
  <tr>
    <td>Property Type</td>
    <td>Room</td>
    
  </tr>
  <tr>
    <td>Ad.</td>
    <td>For Rent</td>
  </tr>

  <tr>
    <td>Property Address</td>
    <td>Satdobato</td>
  </tr>

 
  <tr>
    <td>Property Faced </td>
    <td>North</td>

  </tr>
  <tr>
    <td>Floor</td>
    <td>2nd storey house</td>
  </tr>
  <tr>
    <td>Bedrooms</td>
    <td>2</td>
  </tr>
  <tr>
    <td>Bathrooms</td>
    <td>2</td>
  </tr>
  <tr>
    <td>Kitchen</td>
    <td>2</td>
  </tr>
  <tr>
    <td>Hall</td>
    <td>2</td>
  </tr>

  <tr>
    <td>Furnished</td>
    <td>Not</td>
  </tr>


  
</table>

  
  
  </div>
  <div class="tab-pane fade" id="nav-facility" role="tabpanel" aria-labelledby="nav-facility-tab" tabindex="0">

  <table className=' mt-3 mx-5 me-3 mb-3' style={{fontFamily:'sans-serif',borderCollapse:'collapse',
width:'90%' }}>
  <tr>
    <td>Parking</td>
    <td>Available</td>
    <td> bike only </td>
  </tr>
  <tr>
    <td>Water Supply</td>
    <td>Available</td>
    <td> 24 hrs </td>
  </tr>
  <tr>
    <td>Electricity</td>
    <td>Available</td>
    <td> Backup inveter/solor also </td>
  </tr>
  <tr>
    <td>waste management</td>
    <td>Available</td>
    <td> - </td>
  </tr>

  <tr>
    <td>Lift/Escalator</td>
    <td> Not Available</td>
    <td> - </td>
  </tr>

  <tr>
    <td>Garden Acesss</td>
    <td>Available</td>
    <td> open space for children </td>
  </tr>

  <tr>
    <td>Teracce Access</td>
    <td>Available</td>
    <td> -</td>
  </tr>
</table>



  </div>
  <div class="tab-pane fade" id="nav-cond" role="tabpanel" aria-labelledby="nav-condition-tab" tabindex="0">
    <div >
  <ul className='mt-2 mx-3'>
   <li > <h2  style={{color:'green'}}>For Tenants</h2></li>
   <ul  style={{listStyleType: 'square',fontSize:'160%'}}>
   <li> Employed : yes</li>
  <li>Married : Any /No/Yes</li>
  <li> Gender: Any</li>
  <li>Pets: Not allowed</li>
   </ul>
  
  
</ul>
</div> 
</div>

<div class="tab-pane fade" id="nav-maps" role="tabpanel" aria-labelledby="nav-condition-maps" tabindex="0">

    <h4 className='mt-2 mb-3 mx-5'> Kun Mandir Ma Janxau Yatri!!</h4>

</div>
<div class="tab-pane fade" id="nav-comm" role="tabpanel" aria-labelledby="nav-condition-comment" tabindex="0">
       
<div >

<div className="container mt-2 mb-3 contactContent" >
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
