import React from 'react'
import "./home.css"
import { FaPlayCircle } from "react-icons/fa";
import { Outlet, NavLink } from "react-router-dom";
import Navbar from './Navbar';
const Home = () => {
  return (
    <>
    <Navbar/>
     <main style={{width:"100%"}}>
         <div className="leftmain">
           <p className='uper'>
           Leading MEP & Facility management <br /> company in Dubai
           </p>
           <p className="lower">
           Urban Science is always ready to accept your challenges <br />
           Meeting your goals is our main objective. Professional <br />
           services for facility management & MEP works.
           </p>
          
          <div className="thirdlower">
            <button>Company Profile</button>
            <button className='hide' > <FaPlayCircle className='icon'/>Watch Video</button>
          </div>
           
         </div>

         <div className="rightmain">
           <img width={700} height={400} src="https://media.istockphoto.com/id/1074286356/photo/staying-late-for-a-video-conference.jpg?s=612x612&w=0&k=20&c=LSYqYc96rZ0Cignutff8hlgi8pVUCWHr0f4GnzOVMqU=" alt="" />
         </div>
     </main>
    </>
  )
}

export default Home
