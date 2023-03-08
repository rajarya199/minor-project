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

export default function Roombed() {
  return (
    <div>
      
      <Grid container spacing={2}>
      <Grid item xs={12} sx={{marginTop:3}} >
        <h5> <b> Rooms</b> </h5>
    </Grid>

      <Grid item xs={12} >
        <h5> One Sitter Room </h5>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Total beds"
            name="Total beds"
            label="Total Beds"
           
            fullWidth
            type='number'
            inputProps={{ pattern: "[0-9]*" ,min:'0'}}

            variant="standard"
          />
          </Grid>
          <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Available Beds"
            name="Available Beds"
            label="Available Beds"
            fullWidth
            
            type='number'
            inputProps={{ pattern: "[0-9]*" ,min:'0'}}
            variant="standard"
          />
          </Grid>
          <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Price/Bed"
            name="Price/Bed"
            label="Price/Bed"
            fullWidth
            variant="standard"
            type='number'
            inputProps={{ pattern: "[0-9]*" ,min:'0'}}
  
          />
          </Grid>

          <Grid item xs={12} >
        <h5> Two Sitter Room </h5>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Total beds"
            name="Total beds"
            label="Total Beds"
            fullWidth
            type='number'
            inputProps={{ pattern: "[0-9]*" ,min:'0'}}
            variant="standard"
          />
          </Grid>
          <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Available Beds"
            name="Available Beds"
            label="Available Beds"
            fullWidth
            type='number'
            inputProps={{ pattern: "[0-9]*" ,min:'0'}}
            variant="standard"
          />
          </Grid>
          <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Price/Bed"
            name="Price/Bed"
            label="Price/Bed"
            fullWidth
            variant="standard"
            type='number'
            inputProps={{ pattern: "[0-9]*" ,min:'0',step:'100'}}
          />
          </Grid>


          <Grid item xs={12} >
        <h5> Three Sitter Room </h5>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Total beds"
            name="Total beds"
            label="Total Beds"
            fullWidth
            type='number'
            inputProps={{ pattern: "[0-9]*" ,min:'0'}}
            variant="standard"
          />
          </Grid>
          <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Available Beds"
            name="Available Beds"
            label="Available Beds"
            fullWidth
            type='number'
            inputProps={{ pattern: "[0-9]*" ,min:'0'}}
            variant="standard"
          />
          </Grid>
          <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Price/Bed"
            name="Price/Bed"
            label="Price/Bed"
            fullWidth
            type='number'
            inputProps={{ pattern: "[0-9]*" ,min:'0',step:'100'}}
            variant="standard"
          />
          </Grid>
          <Grid item xs={12} >
        <h5> Four Sitter Room </h5>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Total beds"
            name="Total beds"
            label="Total Beds"
            fullWidth
            type='number'
            inputProps={{ pattern: "[0-9]*" ,min:'0'}}
            variant="standard"
          />
          </Grid>
          <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Available Beds"
            name="Available Beds"
            label="Available Beds"
            fullWidth
            type='number'
            inputProps={{ pattern: "[0-9]*" ,min:'0'}}
            variant="standard"
          />
          </Grid>
          <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Price/Bed"
            name="Price/Bed"
            label="Price/Bed"
            fullWidth
            type='number'
            inputProps={{ pattern: "[0-9]*" ,min:'0',step:'100'}}
            variant="standard"
          />
          </Grid>

          <Grid item xs={12} >
        <h5> Meal Schedule </h5>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="Breakfast-time "
            name="Breakfast-time"
            label="Breakfast-time"
            fullWidth
            variant="standard"
            placeholder='6-7:30'
          />
          </Grid>

          <Grid item xs={12} sm={3}>
          <TextField
            required
            id="Launch-time "
            name="Launch-time"
            label="Launch-time"
            fullWidth
            variant="standard"
            placeholder='9-11'
          />
          </Grid>

          <Grid item xs={12} sm={3}>
          <TextField
            required
            id="Snack-time "
            name="Snack-time "
            label="Snack-time "
            fullWidth
            variant="standard"
            placeholder='2-4'
          />
          </Grid>

          <Grid item xs={12} sm={3}>
          <TextField
            required
            id="Dinner-time "
            name="Dinner-time " 
            label="Dinner-time  "
            fullWidth
            variant="standard"
            placeholder='7-9'
          />
          </Grid>
          

        

     
      </Grid>
    </div>
  )
}
