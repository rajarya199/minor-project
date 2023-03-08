import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function Preference() {
  return (
    <div>
       <Typography variant="h5" gutterBottom>
        Roommate Preferences
      </Typography>
      <Grid container spacing={2}>
      
   
       
        <Grid item xs={12} sm={4}>
          <TextField
          required
            id="minage"
            name="minage"
            type="number" 
            label="Min-Age"
            fullWidth
            
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' ,min:'1',max:'100'}} 
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
          required
            id="maxage"
            name="maxage"
            type="number" 
            label="Max-Age"
            fullWidth
          
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' ,min:'1',max:'100'}} 
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
          required
            id="occupation"
            name="occupation"
            
            label="Occupation"
            fullWidth
          
            
          />
        </Grid>
        
        <Grid item xs={4}>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      
      </RadioGroup>
    </FormControl>
        </Grid>
        
        <Grid item xs={4}>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Parking</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
        </Grid>
        <Grid item xs={4}>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Smoker</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" /> 
      </RadioGroup>
    </FormControl>
        </Grid>
         
        <Grid item xs={4}>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Alcoholic</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
        
      
      </RadioGroup>
    </FormControl>
        </Grid>
        <Grid item xs={4}>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Pet Allows</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
        
      
      </RadioGroup>
    </FormControl>
        </Grid>

        <Grid item xs={4}>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Active</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group">
        <FormControlLabel value="yes" control={<Radio />} label="Early bird" />
        <FormControlLabel value="No" control={<Radio />} label="Night Owls" />
      </RadioGroup>
    </FormControl>
        </Grid>
        <Grid item xs={4}>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Partying</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group">
        <FormControlLabel value="high" control={<Radio />} label="High" />
        <FormControlLabel value="moderate" control={<Radio />} label="Moderate" />
        <FormControlLabel value="No" control={<Radio />} label="No" />

      </RadioGroup>
    </FormControl>
        </Grid>

        <Grid item xs={4}>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Married</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group">
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
        <FormControlLabel value="any" control={<Radio />} label="Any" />

      </RadioGroup>
    </FormControl>
        </Grid>

        
        <Grid item xs={4}>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Veg</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group">
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
        
     

      </RadioGroup>
    </FormControl>
        </Grid>
       

         
          
      
          

        

     
      </Grid>
    </div>
  )
}
