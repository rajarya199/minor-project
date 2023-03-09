
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
import Viewproperty from './Mycomponent/Viewproperty'
import Hostelform from './form1/Hostelform'
import Propertyadd  from './PropertyForm/Propertyadd'
import Hosteladd from './Pages/Hostels/HostelAddform/Hosteladd'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Roommate from './Pages/Roommates/Roommate'
import Viewhostel from './Pages/Hostels/Viewhostel'
import Viewmates from'./Pages/Roommates/viewmates'
import Postroommate from './Pages/Roommates/PostRoommateForm/Postroommate'
import Profilereg from './Mycomponent/profilereg'
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
        <Route path='/viewproperty' element={<Viewproperty></Viewproperty>}></Route>
        <Route path='/hosteladmitform' element={<Hostelform></Hostelform>}></Route>
        <Route path='/propertyform' element={<Propertyadd></Propertyadd>}></Route>
        <Route path='/hostelform' element={<Hosteladd></Hosteladd>}></Route>
        <Route path='/viewhostel' element={<Viewhostel></Viewhostel>}></Route>
        <Route path='/Roommate' element={<Roommate></Roommate>}></Route>
        <Route path='/roommateview' element={<Viewmates></Viewmates>}></Route>
        <Route path='/postforroommate' element={<Postroommate></Postroommate>}></Route>
        <Route path='/ProfileReg' element={<Profilereg></Profilereg>}></Route>





    </Routes>
  
    <Footer/>
    </BrowserRouter>
  )
}

export default App
