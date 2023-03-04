import * as React from 'react';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { MenuItem } from '@mui/material';
import Radio from '@mui/material/Radio';

import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Other() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Conditions and Submission
      </Typography>


      
      <Grid item xs={12}>
        <FormControl>
      <FormLabel id="garden"> Garden Access</FormLabel>
      <RadioGroup
        row
        aria-labelledby="garden"
        name="garden"
      >
        <FormControlLabel value="Available" control={<Radio />} label="Available" />
        <FormControlLabel value="Not Available" control={<Radio />} label="Not Available" />
        
      
      </RadioGroup>
    </FormControl>
        </Grid> 

        <Grid item xs={12}>
        <FormControl>
      <FormLabel id="terrace"> Terrace Access</FormLabel>
      <RadioGroup
        row
        aria-labelledby="terrace"
        name="terrace"
      >
        <FormControlLabel value="Available" control={<Radio />} label="Available" />
        <FormControlLabel value="Not Available" control={<Radio />} label="Not Available" />
      </RadioGroup>
    </FormControl>
        </Grid> 

        <Grid item xs={12}>
        <FormControl>
      <FormLabel id="marital">Should Tenant be married?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="marital"
        name="marital"
        
      >
        <FormControlLabel value="yes"  control={<Radio />} label="Yes"  />
        <FormControlLabel value="No"  control={<Radio />} label="No"  />
        <FormControlLabel value="any" control={<Radio />} label="Any" />
        
      
      </RadioGroup>
    </FormControl>
        </Grid> 

        <Grid item xs={12}>
        <FormControl>
      <FormLabel id="employ">Should Tenant be employed?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="employ"
        name="employ"
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="any" control={<Radio />} label="Any" />
        
      
      </RadioGroup>
    </FormControl>
        </Grid> 

        
        <Grid item xs={12}>
        <FormControl>
      <FormLabel id="genderprefer">Are you looking For </FormLabel>
      <RadioGroup
        row
        aria-labelledby="prefer gender"
        name="gender"
      >
        <FormControlLabel value="male" control={<Radio />} label="Male Tenant" />
        <FormControlLabel value="Female" control={<Radio />} label="Female Tenats" />
        <FormControlLabel value="Any" control={<Radio />} label="Any" />
        
      
      </RadioGroup>
    </FormControl>
        </Grid> 


        <Grid item xs={12}>
        <FormControl>
      <FormLabel id="tenure">Tenant's Mimimum Tenure</FormLabel>
      <RadioGroup
        row
        aria-labelledby="tenure"
        name="tenure"
      >
        <FormControlLabel value="1" control={<Radio />} label="1 month" />
        <FormControlLabel value="3" control={<Radio />} label="3 months" />
        <FormControlLabel value="6" control={<Radio />} label="6 months" />
        <FormControlLabel value="1/more" control={<Radio />} label="1 year/more" />

        
      
      </RadioGroup>
    </FormControl>
        </Grid> 
        

        <p>Property Images</p>
        <form >
      <Input
        type="file"
        variant="outlined"
        
        inputProps={{ accept: 'image/*', multiple: true }} // Limit to image files
      />
      {/* <Button type="submit" size='small' variant="contained" color="primary">
        Upload
      </Button> */}
    </form>
    
    </React.Fragment>
  );
}