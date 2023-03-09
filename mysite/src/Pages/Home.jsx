import React from 'react'
import Subhead from '../Mycomponent/Subhead'
import Mysearch from '../Mycomponent/Mysearch'
import Addpost from '../Mycomponent/Addpost'
import roomie from '/src/images/roomie.jpg'
import rent1 from '/src/images/rent1.jpg'
import flat from '/src/images/flats.png'
import flat2 from '/src/images/flat2.png'

import room2 from '/src/images/room2.png'
import room4 from '/src/images/room4.png'
import hostel2 from '/src/images/hostel2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom'
export default function Home() {
  return (
    < >
      <div className=' d-flex  justify-content-end   ' style={{backgroundColor:'#E0F0FF',height:'50px' ,alignItems:'center'}}>
     <Link to ='/Mywishlist' style={{marginRight:'10px'}} >  <button type="button" className="btn btn-success me-3 ">  <FontAwesomeIcon icon={faHeart} /> Wishlist</button>  </Link>
    
      
      
      <Link to='/Addpost' > <button type="button" className="btn btn-success me-3 "> Post Listing</button></Link>
      </div>
    <Mysearch></Mysearch>
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4' >
              <p style={{fontSize:'50px',lineHeight:'80px',fontFamily:'sans-serif'}}> Looking For A 
                <p style={{color:'green'}}> Compatible Roommates </p> 

          </p>
          <p style={{fontSize:'20px'}}>Don't waste time searching. Find like minded Roommates to share comfortable space.
             </p>
             <Link to='/roommate'>  <button type="button-lg" className="btn mb-3 abc" >Find Roommate</button></Link>
        
      </div>
      <div className='col-lg-8'>
      <img src={roomie} className="roomie-img" alt="..." style={{backgroundSize:'auto',height:'500px'}}/>

      </div>
      </div>
      </div>
    </section>
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
          <img src={rent1} className="roomie-img" alt="..." style={{backgroundSize:'auto',height:'500px'}}/>

          </div>
          <div className='col-lg-4'>
          <p style={{fontSize:'50px',lineHeight:'80px',fontFamily:'sans-serif'}}> Do you have   
          <p style={{color:'green'}}>Property to Rent?</p> 
          </p>
          <p style={{fontSize:'20px'}}> Rent your Property to tenants who are best fit according to your requirment/demands.
          List your properties today within few minutes.<br/><br/>
          <Link to='/propertyform'>  <button type="button-lg" className="btn mb-3 abc" >List your Property</button></Link>

</p>
          </div>
        </div>
      </div>
    </section>
    
    <section style={{backgroundColor:'aliceblue'}}>
      <div className=' container ' >
        <div className='row  '  >
          <div className='col-lg-4 mt-3 mb-3 '>
            <div className='card servicesText bs'>
                  <div className="card-body">
                  <img src={room2} className="roomie-img" alt="..." style={{backgroundSize:'auto',height:'200px'}}/>

                          <h4 className="card-title mt-3">looking for a Room</h4>
                          <p className="card-text mt-3">  If you are in search for a perfect room for rent at your desired loacation .Then stop wondering at door to door for serching best match.You can simply search for rooms with desired facilities at desired location.
                          </p>
                          <Link to='/Room'> <button type="button" className="btn  me-3 "> Search Room</button></Link>

                  </div>


            </div>
          </div>

          <div className='col-lg-4 mt-3 mb-3 '>
            <div className='card servicesText bs'>
                  <div className="card-body">
                                        
                  <img src={flat} className="roomie-img" alt="..." style={{backgroundSize:'auto',height:'200px'}}/>
                                        

                                        <h4 className="card-title mt-3">Flats/Appartments</h4>
                                        <p className="card-text mt-3"> Are you planning to shift in a flats or Appartment ,you are in the right way.just search for flat according to your needs 
                                        </p>
                                        <Link to='/Flat'> <button type="button" className="btn  me-3 "> Search Flat/Appartment</button></Link>

                  </div>


            </div>
          </div>


          
          <div className='col-lg-4 mt-3 mb-3 '>
            <div className='card servicesText bs'>
                  <div className="card-body">
                                        
                  <img src={hostel2} className="roomie-img" alt="..." style={{backgroundSize:'auto',height:'200px'}}/>


                                        <h4 className="card-title mt-3">Hostel</h4>
                                        <p className="card-text mt-3"> Not Everyone can afford the cost of rent,Appartment in the Town.
                                        Also may not have enough time for house chores.So,it can br better idea for them live in hostel.
                                        </p>
                                        <Link to='/Hostel'> <button type="button" className="btn  me-3 "> Search Hostel</button></Link>

                  </div>


            </div>
          </div>

          
          <div className='col-lg-4 mt-3 mb-3 '>
            <div className='card servicesText bs'>
                  <div className="card-body">
                                        
                  <img src={room4} className="roomie-img" alt="..." style={{backgroundSize:'auto',height:'200px'}}/>


                                        <h4 className="card-title mt-3">Rent your Room</h4>
                                        <p className="card-text mt-3"> 
                                        If you are planning to give your Flat for the rent and are searching for the tenants then you can advertise your Room in our sites. 

                                        </p>
                                        <Link to='propertyform'> <button type="button" className="btn  me-3 ">  Add Room</button></Link>

                  </div>


            </div>
          </div>


          <div className='col-lg-4 mt-3 mb-3 '>
            <div className='card servicesText bs'>
                  <div className="card-body">
                                        
                  <img src={flat2} className="roomie-img" alt="..." style={{backgroundSize:'auto',height:'200px'}}/>

                                        <h4 className="card-title mt-3">Rent your flat</h4>
                                        <p className="card-text mt-3">
                                          If you are planning to give your Flat for the rent and are searching for the tenants then you can advertise your Room in our sites. 
                                        </p>
                                        <Link to='/propertyform'> <button type="button" className="btn me-3 ">  Add Flat</button></Link>

                  </div>


            </div>
          </div>


        </div>
        </div>
    </section>
  
    </>
  )
}
