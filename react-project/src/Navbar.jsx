import { NavLink } from "react-router-dom";
import "./home.css";
import { useState } from "react";
import { Category } from '@material-ui/icons';


const Navbar = () => {  

      const [menuActive, setMenuActive] = useState(false);
    
      const toggleMenu = () => {
        setMenuActive(!menuActive);
      };
    

    return(
        <>
 <nav className="navbar bg-black bg-opacity-50 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center p-4">
     <NavLink className="navbar-brand text-3xl font-thin mb-5 text-white" to="/"><Category style={{ fontSize: "3rem" }} />LuxeHaven</NavLink>
    <div className={`navbar-menu ${menuActive ? 'block' : 'hidden'} lg:flex lg:items-center lg:space-x-4`}>
        <NavLink className="nav-link text-white" to="/">Home</NavLink>
        <NavLink className="nav-link text-white" to="/howitworks">HowItWorks</NavLink>
         <NavLink className="nav-link text-white" to="/About">About</NavLink>
         <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
</div>
       <div className="navbar-toggle block lg:hidden" onClick={toggleMenu}>
     <span className="navbar-toggler-icon"></span>
         <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
             </div>
                </div>
                 </nav> 
        </>
    )
}

export default Navbar;