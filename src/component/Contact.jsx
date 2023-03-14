import React from 'react'
import Navbar from './Navbar'
import { MdMail ,MdLocalPhone} from "react-icons/md";
import "./contact.css";
const Contact = () => {
  return (
    <>
    <Navbar />
    <div>
    <main style={{width:"100%"}}>
      <div style={{width:"40%",marginLeft:"100px"}} className='left'>
        <h1>I Connect With Us</h1>
        <h2>Enquiry</h2>
        <p style={{fontSize:"20px"}}> <MdMail/>enquiry@urbansciencemep.coms</p>
        <p><MdLocalPhone/> 0509418224</p>
        <hr  />
         
        <h1>Procurement Team</h1>
        <p style={{fontSize:"20px"}}> <MdMail/>enquiry@urbansciencemep.coms</p>
        <p><MdLocalPhone/> +971 543565450</p>
        <hr />

        <h1>General Enquiry</h1>
        <p><MdLocalPhone/> 0509418224</p>
        <hr />
      </div>
      
      <div style={{width:"40%"}} className='right'>
        <form  action="">
          <label htmlFor="">Name</label> <br />
          <input type="text" name="" placeholder='Enter your Name' id="" />
          <label htmlFor="">Email</label> <br />
          <input type="email" />
          <label htmlFor="">Country</label>
          <select name="" id="">
            <option value="">UAE</option>
            <option value="">India</option>
            <option value="">Etc</option>
          </select>
          <label htmlFor="">Contact Number</label><br />
          <input type="text" />
          <label htmlFor="">Expected date</label> <br />
          <input type="date" />
          <label htmlFor="">Message</label><br />
          <textarea style={{width:"600px",borderRadius:"10px"}} name="" id="" cols="30" rows="10"></textarea>
          
        </form>
      </div>
    </main>
    </div>
    </>
  )
}

export default Contact
