import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import Checkbox from '@mui/material/Checkbox';
import { MenuItem } from '@mui/material';
import Radio from '@mui/material/Radio';
import FormGroup from '@mui/material/FormGroup';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import FormControlLabel from '@mui/material/FormControlLabel';
export default function Facility() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Hostel Facilities/Amenities
      </Typography>
      
<div className='container '>
  <form>
  <div className='row'>
      <div className='col-lg-4 '>
      <div className="list-group list-group-flush">
      <FormControlLabel value="" control={<Checkbox /> } label="Water Supply 24 Hrs"  />
      <FormControlLabel value="" control={<Checkbox /> } label="Electricity 24 Hrs" /> 
      <FormControlLabel  value="" control={<Checkbox /> } label=" Parking" />
      <FormControlLabel  value="" control={<Checkbox /> } label="Locker" />
        <FormControlLabel value="" control={<Checkbox /> } label="Laundry" />
        <FormControlLabel value="" control={<Checkbox /> } label="Room cleanliness" />
        <FormControlLabel value="" control={<Checkbox /> } label="Geyser" />
        <FormControlLabel value="" control={<Checkbox /> } label="Homely Environment" />




     

      </div>
      </div>
      <div className='col-lg-4' >
      <div className="list-group list-group-flush">
      <FormControlLabel value="" control={<Checkbox /> } label=" TV room" />
      <FormControlLabel value="" control={<Checkbox /> } label=" AC" />
      <FormControlLabel value="" control={<Checkbox /> } label="C.C camera" />

      <FormControlLabel  value="" control={<Checkbox /> } label=" Fans" />
      <FormControlLabel  value="" control={<Checkbox /> } label=" Study Table" />
      <FormControlLabel value="" control={<Checkbox /> } label="Rack" /> 
      <FormControlLabel value="" control={<Checkbox /> } label="Attached Bathroom" />
      <FormControlLabel value="" control={<Checkbox /> } label="Furnished Rooms" />


      </div>
      </div>
      <div className='col-lg-4'>
      <div className="list-group list-group-flush">
      <FormControlLabel value="" control={<Checkbox /> } label="WIFI" />

      <FormControlLabel value="" control={<Checkbox /> } label=" Security Gaurd" />
      <FormControlLabel value="" control={<Checkbox /> } label=" Play Area" />
      <FormControlLabel  value="" control={<Checkbox /> } label=" Garden" />
      <FormControlLabel value="" control={<Checkbox /> } label="Hygenic Food" />
      <FormControlLabel value="" control={<Checkbox /> } label=" Non-Veg" />
      <FormControlLabel  value="" control={<Checkbox /> } label=" Veg" />   
      <FormControlLabel value="" control={<Checkbox /> } label="Peaceful Environment" />

        </div>
      </div>
    </div>
    </form>
    </div>
    </React.Fragment>
  );
}