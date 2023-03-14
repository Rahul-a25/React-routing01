import React from 'react'
import Navbar from './Navbar'
const Blog = () => {
  return (
    <>
    <Navbar/>
    <div>
      <h1>Blog</h1>
      <h1 style={{fontSize:"100px"}}>Looking for a MEP Contractor in Dubai?</h1>
      <div style={{display:"flex", alignItems:"center", marginLeft:"20px"}}>
        <img width={48} height={48} src="https://sanity-cms-ivory.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F254we8ul%2Fproduction%2F1fdc860ad042502821a1d272e825cb4d866093ec-172x88.png%3Frect%3D42%2C0%2C88%2C88%26w%3D96%26h%3D96%26fit%3Dcrop%26auto%3Dformat&w=96&q=75" alt="" />
        <h2>Urban Science</h2>
      </div>
      <img width={1550} height={800} src="https://sanity-cms-ivory.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F254we8ul%2Fproduction%2F48790c9d995dbc0c283e7265fc8b472aed26b0c6-650x510.jpg%3Frect%3D0%2C93%2C650%2C325%26w%3D2000%26h%3D1000%26fit%3Dmax%26auto%3Dformat&w=1920&q=75" alt="" />
    </div>
    </>
  )
}

export default Blog
