import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useState } from 'react';


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
  const [schoolInput, setSchoolInput] = useState('');
  const [schools, setSchools] = useState([]);

  const handleSchoolInputChange = (event) => {
    setSchoolInput(event.target.value);
  };

  const handleAddSchool = () => {
    if (schoolInput.trim() !== '') {
      setSchools([...schools, schoolInput]);
      setSchoolInput('');
    }
  };
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Final Submission
      </Typography>
     
      <Grid container spacing={3} sx={{marginTop:3 ,marginLeft:5}}>

        <form>
        

      <TextField
        label="Enter a nearby School/Institute/Banks"
        value={schoolInput}
        onChange={handleSchoolInputChange}
        fullWidth
        sx={{marginTop:5}}
      />
      
      <Button variant="contained" color="primary" onClick={handleAddSchool} disabled={schoolInput.trim() === '' } sx={{marginTop:3}}>
        Add Nearby Location
      </Button>
      <ul>
        {schools.map((school, index) => (
          <li key={index}>{school}</li>
        ))}
      </ul>

      </form>

        <Grid item xs={12} sx={{marginTop:5}}>
        <h5> Hostel Image </h5>
        </Grid>
        <Grid item xs={12}>

        <form >
      <Input
        type="file"
        variant="outlined"
        required
        inputProps={{ accept: 'image/*', multiple: true }} 
      />
     
    </form>

</Grid>
    <Grid item xs={12} >
        <h5> Hostel Registration Image </h5>
        </Grid>

        <Grid item xs={12}>

        <form >
      <Input
        type="file"
        variant="outlined"
        
        inputProps={{ accept: 'image/*', multiple: true }} 
      />
     
    </form>
    </Grid>
    </Grid>
    </React.Fragment>
  );
}