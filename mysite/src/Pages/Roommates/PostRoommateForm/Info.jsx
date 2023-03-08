import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';


export default function Info() {

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       Information
      </Typography>
      <Grid container spacing={3}>

      <Grid item xs={12} sm={4}>
      <TextField
            required
            id="Name"
            name="Name"
            label="name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
          required
            id="age"
            name="age"
            type="number" 
            label="Age"
            fullWidth
            variant="standard"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' ,min:'1',max:'100'}} 
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Price"
            name="Price"
            label="Price"
            type='number'
            fullWidth
            variant="standard"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' ,min:'1',max:'100'}} 

          />
          </Grid>
        <Grid item xs={12}>
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
       

        <Grid item xs={12} sm={4}>
          <TextField
          required
            id="type"
            name="type"
            label="Type"
            fullWidth
            select
            variant="standard"
          >
             <MenuItem value="Roommates" > Roommates</MenuItem>
      <MenuItem value="Flatmate ">Flatmates</MenuItem>
            </TextField>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
          required
            id="email"
            name="email"
            type="email" 
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
            label="  Email"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
          required
            id="phone no"
            name="phone no"
            type="tel" 
            label=" Contact No"
            fullWidth
            variant="standard"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
          
            id="r1phone no"
            name="r1phone no"
            type="tel" 
            label="Additional Contact No"
            fullWidth
            variant="standard"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="country"
            name="country"
            label="country"
            fullWidth
            defaultValue="Nepal"
            InputProps={{
              readOnly: true,
            }}
            variant="standard"

          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
          required
            id="Province"
            name="Province"
            label="Your Province"
            fullWidth
            select
            variant="standard"

          >
             <MenuItem value="koshi" >koshi</MenuItem>
      <MenuItem value="Madesh ">Madesh</MenuItem>
      <MenuItem value="Bagmati">Bagmati </MenuItem>
      <MenuItem value="Gandaki">Gandaki </MenuItem>
      <MenuItem value="Lumbini">Lumbini </MenuItem>
      <MenuItem value="Karnali">Karnali </MenuItem>
      <MenuItem value="Sudurpaschim">Sudurpaschim </MenuItem>
            </TextField>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
          required
            id="District"
            name="District"
            label="District"
            fullWidth
          select
    
            variant="standard"

          >
          
       <MenuItem  unselectable ><b>Koshi</b></MenuItem> 
    <MenuItem value="Bhojpur">Bhojpur</MenuItem>
    <MenuItem value="Dhankuta">Dhankuta</MenuItem>
    <MenuItem value="Ilam">Ilam</MenuItem>
    <MenuItem value="Jhapa">Jhapa</MenuItem>
    <MenuItem value="Khotang">Khotang</MenuItem>
    <MenuItem value="Morang">Morang</MenuItem>
    <MenuItem value="Okhaldhunga">Okhaldhunga</MenuItem>
    <MenuItem value="Panchthar">Panchthar</MenuItem>
    <MenuItem value="Sankhuwasabha">Sankhuwasabha</MenuItem>
    <MenuItem value="Solukhumbu">Solukhumbu</MenuItem>
    <MenuItem value="Sunsari">Sunsari</MenuItem>
    <MenuItem value="Taplejung">Taplejung</MenuItem>
    <MenuItem value="Terhathum">Terhathum</MenuItem>
    <MenuItem value="Udayapur">Udayapur</MenuItem>
  
  <MenuItem unselectable ><b>Madhesh Pradesh </b></MenuItem>
    <MenuItem value="Bara">Bara</MenuItem>
    <MenuItem value="Dhanusha">Dhanusha</MenuItem>
    <MenuItem value="Mahottari">Mahottari</MenuItem>
    <MenuItem value="Parsa">Parsa</MenuItem>
    <MenuItem value="Rautahat">Rautahat</MenuItem>
    <MenuItem value="Saptari">Saptari</MenuItem>
    <MenuItem value='sarlahi'>Sarlahi</MenuItem>
    <MenuItem value="Siraha">Siraha</MenuItem>
    
  
    <MenuItem unselectable ><b>Bagmati </b></MenuItem>
    <MenuItem value="Bhaktapur">Bhaktapur</MenuItem>
    <MenuItem value="Chitwan">Chitwan</MenuItem>
    <MenuItem value="Dhading">Dhading</MenuItem>
    <MenuItem value="Dolakha">Dolakha</MenuItem>
    <MenuItem value="Kathmandu">Kathmandu</MenuItem>
    <MenuItem value="Kavrepalanchok">Kavrepalanchok</MenuItem>
    <MenuItem value="Lalitpur">Lalitpur</MenuItem>
    <MenuItem value="Makwanpur">Makwanpur</MenuItem>
    <MenuItem value="Nuwakot">Nuwakot</MenuItem>
    <MenuItem value="Rasuwa">Rasuwa</MenuItem>
    <MenuItem value="Ramechhap">Ramechhap</MenuItem>
    <MenuItem value="Sindhuli">Sindhuli</MenuItem>
    <MenuItem value="Sindhupalchok">Sindhupalchok</MenuItem>
  


  <MenuItem unselectable ><b>Gandaki Province</b></MenuItem>
    <MenuItem value="Baglung">Baglung</MenuItem>
    <MenuItem value="Gorkha">Gorkha</MenuItem>
    <MenuItem value="Kaski">Kaski</MenuItem>
    <MenuItem value="Lamjung">Lamjung</MenuItem>
    <MenuItem value="Manang">Manang</MenuItem>
    <MenuItem value="Mustang">Mustang</MenuItem>
    <MenuItem value="Myagdi">Myagdi</MenuItem>
    <MenuItem value="Nawalpur">Nawalpur</MenuItem>
    <MenuItem value="Parbat">Parbat</MenuItem>
<MenuItem value="Syangja">Syangja</MenuItem>
<MenuItem value="Tanahun">Tanahun</MenuItem>
    


    <MenuItem unselectable ><b>Lumbini Province</b></MenuItem>
    <MenuItem value="Arghakhanchi">Arghakhanchi</MenuItem>
    <MenuItem value="Banke">Banke</MenuItem>
    <MenuItem value="Bardiya">Bardiya</MenuItem>
    <MenuItem value="Dang">Dang</MenuItem>
    <MenuItem value="Gulmi">Gulmi</MenuItem>
    <MenuItem value="Kapilvastu">Kapilvastu</MenuItem>
    <MenuItem value="Parasi">Parasi</MenuItem>
    <MenuItem value="Palpa">Palpa</MenuItem>
    <MenuItem value="Pyuthan">Pyuthan</MenuItem>
    <MenuItem value="Rolpa">Rolpa</MenuItem>
    <MenuItem value="Rukum Purba"> Rukum Purba</MenuItem>
    <MenuItem value="Rupandehi">Rupandehi</MenuItem>
    
  


  <MenuItem unselectable ><b>Karnali Province</b></MenuItem>
    <MenuItem value="Dailekh">Dailekh</MenuItem>
    <MenuItem value="Dolpa">Dolpa</MenuItem>
    <MenuItem value="Humla">Humla</MenuItem>
    <MenuItem value="Jajarkot">Jajarkot</MenuItem>
    <MenuItem value="Jumla">Jumla</MenuItem>
    <MenuItem value="Kalikot">Kalikot</MenuItem>
    <MenuItem value="Mugu">Mugu</MenuItem>
    <MenuItem value="Rukum Paschim"> Rukum Paschim</MenuItem>

    <MenuItem value="Salyan">Salyan</MenuItem>
    <MenuItem value="Surkhet">Surkhet</MenuItem>


  
  <MenuItem unselectable ><b>Sudurpaschim Province</b></MenuItem>
    <MenuItem value="Achham">Achham</MenuItem>
    <MenuItem value="Baitadi">Baitadi</MenuItem>
    <MenuItem value="Bajhang">Bajhang</MenuItem>
    <MenuItem value="Bajura">Bajura</MenuItem>
    <MenuItem value="Dadeldhura">Dadeldhura</MenuItem>
    <MenuItem value="Darchula">Darchula</MenuItem>
    <MenuItem value="Doti">Doti</MenuItem>
    <MenuItem value='Kailali'>Kailali</MenuItem>
    <MenuItem value="Kanchanpur">Kanchanpur</MenuItem>
    
  
  
          </TextField>
        </Grid> 

        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="vdc/municipality"
            name="vdc/munici"
            label="Municipality/VDC"
            fullWidth
    
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="ward"
            name="ward"
            type='number'
            label="Ward No"
            fullWidth
            
            variant="standard"
            inputProps={{ pattern: "[0-9]*" ,min:'1',max:'32'}}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Tol"
            name="tol"
            
            label="Tol/Street"
            fullWidth
            variant="standard"
          />
        </Grid> 
        <Grid item xs={12}>
          <TextField
        
            id="discription"
            name="Discription"
            multiline
            rows={8}
            label="Description"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} >
        <h5> Profile Image </h5>
        </Grid>

        <Grid item xs={12}>

        <form >
      <Input
        type="file"
        variant="outlined"
        
        inputProps={{ accept: 'image/*'}} 
      />
     
    </form>
    </Grid>
       

       
       
      

      

    


      </Grid>
    </React.Fragment>
  );
}