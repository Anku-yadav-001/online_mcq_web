import {Route, Routes,Link} from "react-router-dom"
import Home from "../Pages/Home.jsx"
import Login from "../Pages/Login.jsx"
import Signin from "../Pages/Signin.jsx"
import About from "../Pages/About.jsx"
import Alumni from "../Pages/Alumni.jsx"
import Sports from "../Pages/Sports.jsx"
import Certificate from "../Pages/Certificate.jsx"
import CulturalActivities from "../Pages/CulturalActivities.jsx"
import SliderComp from "../Components/Slider.jsx"
import Gallary from "../Pages/Gallary.jsx"
export function AllRoutes(){

     return <>
     <Routes>
       <Route path="/" element={<SliderComp/>}/>
      <Route path="/home"  element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/alumnis" element={<Alumni/>}/>
      <Route path="/sports" element={<Sports/>}/>
      <Route path="/certifications" element={<Certificate/>}/>
      <Route path="/cultural-activities" element={<CulturalActivities/>}/>
      <Route path="/gallary" element={<Gallary/>}/>
    </Routes>
     </>
}