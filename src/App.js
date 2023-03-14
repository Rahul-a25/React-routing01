
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Service from './component/Service';
import Project from './component/Project'; 
import Blog from './component/Blog'
import { Outlet, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route exact path='/React-routing01' element={<Home/>} />
      <Route path='About' element={<About/>} />
      <Route path='Contact' element={<Contact/>} />
      <Route path='Project' element={<Project/>} />
      <Route path='Service' element={<Service/>} />
      <Route path='Blog' element={<Blog/>} />
      <Route path='*' element={<><h1>No Pages</h1></>} />

   </Routes>
   
   
   </> 
  );
}

export default App;
