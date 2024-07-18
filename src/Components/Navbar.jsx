import {Route, Routes,Link} from "react-router-dom"
import {RadioGroup,Stack,Radio,Button,Drawer,DrawerOverlay,DrawerContent,DrawerHeader,DrawerBody,useDisclosure, Heading} from "@chakra-ui/react"
import { useState } from "react"
import bansal_logo from "../assets/bansal_logo.jpg"
import alumni from "../assets/alumni.png"
import sports from "../assets/sports.png"
import activities from "../assets/activities.png"
import certificate from "../assets/certificate.png"
import gallery from "../assets/galary.png"
import "../Styling/Navbar.css"

function Navbar(){
     const { isOpen, onOpen, onClose } = useDisclosure()
     const [placement, setPlacement] = useState('left')

     return <>
     <div className="navbar-cont">
     <div style={{padding:"10px 5px",display:"flex",justifyContent:"space-evenly",width:"50%",fontFamily:"sans-serif",fontWeight:"bold",fontSize:"20px"}} className="navbar-container">
      <Link colorScheme='blue' onClick={onOpen}>Menu</Link>
      <Link to="/online_mcq_web">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/skill-test">Skill-Test</Link>
    </div>
    <div className="welcome-script">
      <marquee direction="left">Welcome to bansal college of engineering online MCQ exam test, it will help you to improve your skills. - "THANK YOU"</marquee>
    </div>
      </div> 
    <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
               <div>
                    <img src={bansal_logo} alt="" />
               </div>
             <div className="nav-items" style={{border:"3px solid blue",height:"80vh",width:"100%",marginTop:"2vh",borderRadius:"10px",padding:"10px"}}>
             <div style={{display:"flex",alignItems:"center"}}>
              <img src={alumni} alt="" />
             <Heading size="sm" p="2vh" ><Link to="/alumnis">Alumni</Link></Heading>
              </div>

              <div style={{display:"flex",alignItems:"center"}}>
                <img src={sports} alt=""  style={{width:"12%"}}/>
             <Heading size="sm" p="2vh"><Link to="/sports">Sports</Link></Heading>
              </div>

             <div style={{display:"flex",alignItems:"center"}}>
              <img src={certificate} alt=""  style={{width:"12%"}}/>
             <Heading size="sm" p="2vh"><Link to="/certifications">Certification</Link></Heading>
             </div>

             <div style={{display:"flex",alignItems:"center"}}>
              <img src={activities} alt="" style={{width:"12%"}}/>
             <Heading size="sm" p="2vh"><Link to="/cultural-activities">Cultural Activities</Link></Heading>
             </div>

             <div style={{display:"flex",alignItems:"center"}}>
             <img src={gallery} alt="" style={{width:"10%"}}/>
             <Heading size="sm" p="2vh"><Link to="/gallary">Gallary</Link></Heading>
             </div>
             </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
     </>
}
export default Navbar