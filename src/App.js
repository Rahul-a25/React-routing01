import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Service from './component/Service';
import Project from './component/Project';
import { NavLink, Outlet, Route,Routes } from 'react-router-dom';

{/* <Home/>
   <About/> 
   <Contact/>
   <Service/>
   <Project/> */}
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Project' element={<Project/>} />
      <Route path='/Service' element={<Service/>} />
   </Routes>
   <Outlet/>
   
   </> 
  );
}

export default App;
