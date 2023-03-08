import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';


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
        Room's Facilities/Amenities
      </Typography>
      <Grid container spacing={3}> 
      <Grid item xs={12} sm={4}>
          <TextField
          required
            id="bedroom"
            name="bedroom"
            type="number" 
            label="Bedrooms"
            fullWidth
            
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' ,min:'1',max:'100'}} 
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
          required
            id="bathroom"
            name="bathroom"
            type="number" 
            label="Bathrooms"
            fullWidth
            
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' ,min:'1',max:'100'}} 
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
          required
            id="kitchen"
            name="kitchen"
            type="number" 
            label="kitchen"
            fullWidth
            
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' ,min:'0',max:'100'}} 
          />
        </Grid>
      
      </Grid>
<div className='container mt-3 '>
  <form>
  <div className='row'>

      <div className='col-lg-4 '>
      <div className="list-group list-group-flush">
      <FormControlLabel value="" control={<Checkbox /> } label="Water Supply 24 Hrs"  />
      <FormControlLabel value="" control={<Checkbox /> } label="Electricity 24 Hrs" /> 
      <FormControlLabel  value="" control={<Checkbox /> } label=" Parking" />

      </div>
      </div>
      <div className='col-lg-4' >
      <div className="list-group list-group-flush">
      <FormControlLabel value="" control={<Checkbox /> } label=" Garden Acess" />
      <FormControlLabel value="" control={<Checkbox /> } label=" Terrace Acesss" />


      </div>
      </div>
      <div className='col-lg-4'>
      <div className="list-group list-group-flush">
      <FormControlLabel value="" control={<Checkbox /> } label="Furnished Rooms" />
      <FormControlLabel value="" control={<Checkbox /> } label=" WIFI" />
        </div>
      </div>
    </div>
    </form>
    </div>

    <Grid item xs={12} >
        <h5> Room Image </h5>
        </Grid>

        <Grid item xs={12}>

        <form >
      <Input
        type="file"
        variant="outlined"
        
        inputProps={{ accept: 'image/*',multiple: true}} 
      />
     
    </form>
    </Grid>
    </React.Fragment>
  );
}