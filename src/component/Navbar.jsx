import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import "./navbar.css"
import { MdMail ,MdLocalPhone} from "react-icons/md";
const Navbar = () => {
  return (
    <div>
        <div style={{display:"flex" , float:"right",marginBottom:"-40px"  }}>
                <a style={{marginRight:"10px", color:"#596AFF",borderBottom:"2px solid #596AFF,",cursor:"pointer"}}> <MdLocalPhone/>0509418224</a>
                <a style={{color:"#596AFF" ,borderBottom:"2px solid #596AFF ",cursor:"pointer"}} > <MdMail/>enquiry@urbansciencemep.com</a>
            </div>
      <header className='navsection'>
        <div className="same logo">
            <img width={125} height={75} src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png" alt="" />
        </div>
        <div className="same content">
            <nav>
          <ul>
            <li>
             <NavLink style={{textDecoration:"none"}} to="/">Home</NavLink> </li>
            <li>
            <NavLink style={{textDecoration:"none"}} to="/about">About</NavLink>
               </li>
            <li>
            <NavLink style={{textDecoration:"none"}} to="/project">Project</NavLink>
              </li>
            <li>
            <NavLink style={{textDecoration:"none"}} to="/Service"> Services</NavLink>
             </li>
            <li>
            <NavLink style={{textDecoration:"none"}} to="/Blog"> Blog </NavLink>
             </li>
            <li>
            <NavLink style={{textDecoration:"none"}} to="/Contact">Contact</NavLink>
              </li>
          </ul>
          </nav>
          <Outlet/>
        </div>
       
        <div className="same btn">
          <button>Enquire Now</button>
        </div>
     </header> 
    </div>
  )
}

export default Navbar
