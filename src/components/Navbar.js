import React from 'react'; 
import { Link } from 'react-router-dom'; 
 
const Navbar = () => { 
    console.log("Navbar component rendered!");
   return ( 
       <nav className="navbar"> 
           <Link to="/">Home</Link> 
           <Link to="/projects">Projects</Link> 
           <Link to="/about">About</Link> 
           <Link to="/contact">Contact</Link> 
       </nav> 
   ); 
}; 
 
export default Navbar; 