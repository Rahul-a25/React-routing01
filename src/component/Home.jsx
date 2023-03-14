import React from 'react'
import "./home.css"
import { FaPlayCircle } from "react-icons/fa";
import { Outlet, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
   
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
           <img width={700} height={400} src="https://www.urbansciencemep.com/_next/static/images/banner-thumb-ce9763d5a9793e4688afdc229399007a.png" alt="" />
          
         </div>
     </main>
    </>
  )
}

export default Home
