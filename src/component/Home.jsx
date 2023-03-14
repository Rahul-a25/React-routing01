import React from 'react'
import "./home.css"
import { FaPlayCircle } from "react-icons/fa";
import { Outlet, NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
   
     <header className='navsection'>
        <div className="same logo">
            <img width={125} height={75} src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png" alt="" />
        </div>
        <div className="same content">
          <ul>
            <li>
             <NavLink to="/">Home</NavLink> </li>
            <li>
            <NavLink to="/about">About</NavLink>
               </li>
            <li>
            <NavLink to="/project">Project</NavLink>
              </li>
            <li>
            <NavLink to="/Service"> Services</NavLink>
             </li>
            <li>
            <NavLink to="/Blog"> Blog </NavLink>
             </li>
            <li>
            <NavLink to="/Contact">Contact</NavLink>
              </li>
          </ul>
      <Outlet/>
        </div>
        <div className="same btn">
          <button>Enquire Now</button>
        </div>
     </header> 

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
