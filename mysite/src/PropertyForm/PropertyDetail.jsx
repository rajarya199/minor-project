import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { MenuItem } from '@mui/material';
import Radio from '@mui/material/Radio';

import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function PropertyDetail() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Property Details
      </Typography>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <TextField
          required
            id="property type"
            name="property type"
            
            label="Choose your Property Type"
            fullWidth
            variant="standard"
            select
          >
            <MenuItem value='Room'> Room</MenuItem>
            <MenuItem value='Flat'> Flat/Appartments</MenuItem>
            <MenuItem value='Hostel'> Hostel</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <TextField
        
            id="discription"
            name="Discription"
            multiline
            rows={8}
            label="Description of property"
            fullWidth
            
             
          />
        </Grid>

        <Grid item xs={12} >
          <TextField
            required
            id="room no"
            name="room no"
            type='number'
            label="No of Rooms"
            fullWidth
            
            
            inputProps={{ pattern: "[0-9]*" ,min:'1',max:'100'}}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="bhk"
            name="bhk"
            type='number'
            label="BHK"
            fullWidth
            
            
            inputProps={{ pattern: "[0-9]*" ,min:'0',max:'100'}}
          />
        </Grid>

        <Grid item xs={12} >
          <TextField
            required
            id="bathroom no"
            name="bathroom no"
            type='number'
            label="Bathrooms"
            fullWidth
            
            
            inputProps={{ pattern: "[0-9]*" ,min:'0',max:'100'}}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="price"
            name="price"
            type='number'
            label="Price"
            fullWidth
            inputProps={{ pattern: "[0-9]*" ,min:'0' ,step:'500'}}
          />
        </Grid>

        <Grid item xs={12}>
        <FormControl>
      <FormLabel id="watersupply">Water Supply</FormLabel>
      <RadioGroup
        row
        aria-labelledby="watersupply"
        name="watersupply"
      >
        <FormControlLabel value="Available" control={<Radio />} label="Available" />
        <FormControlLabel value="Not Available" control={<Radio />} label="Not Available" />
        
      
      </RadioGroup>
    </FormControl>
        
        </Grid> 

        <Grid item xs={12}>
        <FormControl>
      <FormLabel id="electricity">Electricity</FormLabel>
      <RadioGroup
        row
        aria-labelledby="electricity"
        name="electricity"
      >
        <FormControlLabel value="Available" control={<Radio />} label="Available" />
        <FormControlLabel value="Not Available" control={<Radio />} label="Not Available" />
        
      
      </RadioGroup>
    </FormControl>
        
        </Grid> 


        <Grid item xs={12}>
        <FormControl>
      <FormLabel id="parking">Parking Space</FormLabel>
      <RadioGroup
        row
        aria-labelledby="parking"
        name="parking"
      >
        <FormControlLabel value="Available" control={<Radio />} label="Available" />
        <FormControlLabel value="Not Available" control={<Radio />} label="Not Available" />
        
      
      </RadioGroup>
    </FormControl>
        
        </Grid> 

       

        <Grid item xs={12}>
        <FormControl>
      <FormLabel id="lift">Lift/Escalator</FormLabel>
      <RadioGroup
        row
        aria-labelledby="lift"
        name="lift"
      >
        <FormControlLabel value="Available" control={<Radio />} label="Available" />
        <FormControlLabel value="Not Available" control={<Radio />} label="Not Available" />
      </RadioGroup>
    </FormControl>
        
        </Grid> 

      </Grid>
    </React.Fragment>
  );
}