import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Mycomponent/Header'
import Subhead from './Mycomponent/Subhead'
import Footer from './Mycomponent/Footer'
import Login from './Mycomponent/Login'
import Register from './Mycomponent/Register'
import Mysearch from './Mycomponent/Mysearch'
import Contact from './Pages/Contact'
import About from './Pages/About'
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Home from './Pages/Home'
import Room from './Pages/Rooms/Room'
import AddRoom from './Pages/Rooms/AddRoom'
import Flat from './Pages/Flats/Flat'
import Axios from 'axios'
import Hostel from './Pages/Hostels/Hostel'
import Addpost from './Mycomponent/Addpost'
import Listform from './Mycomponent/Listform'
import RoomFolder from './Pages/Rooms/RoomFolder'
function App() {
  return (
    <BrowserRouter>
   <Header></Header>
   <div style={{ margin: '55px 80px' }}></div>
    <Subhead> </Subhead>
    
    



    <Routes>
    <Route path='/' element={<Home/>}></Route>
    
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        <Route path='/AboutUs' element={<About></About>} ></Route>
        <Route path='/Room' element={<Room></Room>}></Route>
        <Route path='/AddRoom' element={<AddRoom></AddRoom>}></Route>
        <Route path='/Flat' element={<Flat></Flat>}></Route>
        <Route path='/Hostel' element ={<Hostel></Hostel>}></Route>
        <Route path='/Addpost' element={<Addpost></Addpost>}></Route>
        <Route path='/listform' element={<Listform></Listform>}></Route>
        <Route path='/roomfolder' element={<RoomFolder></RoomFolder>}></Route>
    </Routes>
  
    <Footer/>
    </BrowserRouter>
  )
}

export default App
