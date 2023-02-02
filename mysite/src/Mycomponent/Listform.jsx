import React from 'react'

export default function Listform() {
  return (
    <div>
    <form action="/register" method='post'>
      <div className='container' style={{border:'3px solid #ccc ' ,
    width:'500px',
    padding:'20px ',
    borderRadius:'10px',
    margin:'auto',
    height:'auto',
    backgroundColor:'ButtonHighlight',
    backgroundColor:'aliceblue'}}>


        <h1 style={{color:'green'}}>List Your Property</h1>
        <label htmlFor="username"><b>Username</b></label> <br/>
    <input type="text" placeholder="Enter Your Name" name="username" id="username"  className='listforms' required /><br/>
    
    <label htmlFor="email"><b>Email</b></label> <br/>
          <input type="text" placeholder="Enter Email" name="email" id="email"   className='listforms' required /><br/>
    
          <label htmlFor="gender"><b>Gender</b></label> <br/>
    <input type="radio" id="male" name="gender" value="Male" style={{marginRight:'10px',scale:'1.5'}} /><label htmlFor='male'style={{marginRight:'35px',fontSize:'22px'}}>Male </label>
    <input type="radio" id="female" name="gender" value="Female"  style={{marginRight:'10px',scale:'1.5'}}/><label htmlFor='female' style={{marginRight:'35px',fontSize:'22px'}}>Female </label>
    <input type="radio" id="other" name="gender" value="Other"  style={{marginRight:'10px',scale:'1.5'}}/><label htmlFor='other' style={{marginRight:'35px',fontSize:'22px',marginBottom:'10px'}}>Other </label>
    <br/>

    <label htmlFor="phone"><b>Phone Number :</b></label>
        <input className='listforms'
          type="tel"
          id="phone"
          name="phone"
          required
        /> <br/>



 <label htmlFor="country"><b>Country</b></label>
 <input type="text"  name="country" id="country"   className='listforms' readOnly required /><br/>

 <label htmlFor="province"><b>Province</b></label>
    <select id="province" name="province" className='listforms' required>
      <option value="" > Select province</option>
      <option value="province 1">Province 1</option>
      <option value="Madesh ">Madesh</option>
      <option value="Bagmati">Bagmati</option>
      <option value="Gandaki">Gandaki</option>
      <option value="Lumbini">Lumbini</option>
      <option value="Karnali">Karnali</option>
      <option value="Sudurpaschim">Sudurpaschim</option>
    </select>

    <label htmlFor="district"><b>District</b></label>
 <input type="text"  name="district" id="district" placeholder='Enter District'  className='listforms' required /><br/>

 <label htmlFor="municipality"><b>Municipality/VDC</b></label>
 <input type="text"  name="municipality" id="municipality"  className='listforms'placeholder='Enter your Municipality/VDC' required /><br/>
 <label htmlFor="ward"><b>Ward No.</b></label>
 <input type="text"  name="ward" id="ward"  className='listforms'placeholder='Enter your Ward no.' required /><br/>
 <label htmlFor="street"><b>Street/Tole</b></label>
 <input type="text"  name="street" id="street"  className='listforms'placeholder='Enter your Street/Tole.' required /><br/>


 <label htmlFor="Property">Property Type</label>
    <select id="Property" name="Property" className='listforms' required>
      <option value="" > Select Property </option>
      <option value="room">Room</option>
      <option value="flat">Flat</option>
      <option value="hostel">Hostel</option>
    
    </select><br/>
    <label htmlFor='comment'><b>Description:</b> </label>
    <textarea className="form-control" rows={8} id="comment" name="text" placeholder="Description" defaultValue={""} /><br/>

    <label htmlFor='room no'><b>No Of Rooms</b> </label>
    <input type="number" id="room no" name="room no" className='listforms' step="1" min='1' max='100'/><br/>

    <label htmlFor='bhk'><b>BHK</b> </label>
    <input type="number" id="bhk" name="bhk" className='listforms' step="1" min='0' max='10'/><br/>

    <label htmlFor='Bathroom'><b>No Of Bathroom</b> </label>
    <input type="number" id="Bathroom" name="Bathroom" className='listforms' step="1" min='0' max='150'/><br/>

    <label htmlFor='price'><b>Price</b></label>
    <input type="number" id='price' name='price' className='listforms' step='500' min='0'/><br/>

<label htmlFor='watersupply'><b>Water Supply</b> </label>
<select id="watersupply" name="watersupply" className='listforms' required>
      <option value="available">Available</option>
      <option value=" not available"> Not Available</option>
    </select><br/>

    <label htmlFor='Electricity'><b>Electricity</b> </label>
<select id="Electricity" name="Electricity" className='listforms' required>
      <option value="available">Available</option>
      <option value=" not available"> Not Available</option>
    </select><br/>

    <label htmlFor='parking'><b>Parking'</b> </label>
<select id="parking'" name="parking" className='listforms' required>
      <option value="available">Available</option>
      <option value=" not available"> Not Available</option>
    </select><br/>

    <label htmlFor='wastemanage'><b>Waste Management</b> </label>
<select id="wastemanage'" name="wastemanage" className='listforms' required>
      <option value="available">Yes</option>
      <option value=" not available"> No </option>
    </select><br/>

    <label htmlFor='lift'><b>Lift/Escalator </b> </label>
<select id="lift" name="lift" className='listforms' required>
      <option value="available">Yes</option>
      <option value=" not available"> No </option>
    </select><br/>

    <label htmlFor='garden'><b>Garden access </b> </label>
<select id="garden" name="garden" className='listforms' required>
      <option value="available">Yes</option>
      <option value=" not available"> No </option>
    </select><br/>


    <label htmlFor='terrace'><b>Terrace access </b> </label>
<select id="terrac" name="terrac" className='listforms' required>
      <option value="available">Yes</option>
      <option value=" not available"> No</option>
    </select><br/>
    <label htmlFor='employed'><b>Should Tenant be Employed? </b> </label>
<select id="employed" name="employed" className='listforms' required>
      <option value="yes">Yes</option>
      <option value=" not "> No</option>
    </select><br/>
    <label htmlFor='married'><b>Should Tenant be Married? </b> </label>
<select id="married" name="married" className='listforms' required>
      <option value="yes">Yes</option>
      <option value=" not "> No</option>
    </select><br/>

        <label htmlFor='garden'><b>Property Image: </b> </label><br/>
  <input type="file" id="files" name="files" multiple/><br/><br/>
  <button type="reset" className="btn btn-outline-danger  mb-3  "  style={{width:'40%',marginRight:'50px'}}>Cancel</button>
 <button type="submit" className="btn btn-outline-success mb-3 "  style={{width:'40%'}}>Add</button>
      
      </div>
      </form>
    </div>
  )
}

