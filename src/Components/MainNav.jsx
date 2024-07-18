import { Heading } from "@chakra-ui/react"
import bansal_logo from "../assets/bansal_logo.jpg"
import profile from "../assets/profile.png"
import "../Styling/MainNav.css"
function MainNav(){

     return <>
      <div className="main-container">
          <div className="bansalLogo">
               <img src={bansal_logo} alt="" style={{width:"100%"}} />
          </div>
          <div className="bansalheading">
               <Heading size="lg">Bansal College Of Engineering</Heading>
          </div>
          <div className="userProfile">
               <img src={profile} alt="" style={{width:"100%"}}/>
          </div>
      </div>
     </>
}
export default MainNav