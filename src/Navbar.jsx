import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);
  return(
    <>
    <div className=" d-flex align-items-center justify-evenly  bg-slate-400 h-14 text-2xl m-3" style={{columnGap:"20rem"}}>
      <div >
     <span className="text-2xl text-gray-100 mr-4">MItaliMaRode</span>
     </div>
      <div className=" d-flex align-items-center justify-evenly ml-8  text-2xl ">
        <NavLink className=" mr-14" to="/">Home</NavLink>
        <NavLink className=" mr-14" to="/about">About</NavLink>
        <NavLink className=" mr-14" to="/contact">Contact</NavLink>
        <NavLink className=" mr-14" to="/service">Service</NavLink>
        <NavLink className=" mr-14" to="/login">Login</NavLink>
        <NavLink className=" mr-14" to="/signup">SignUp</NavLink>
        <NavLink className=" mr-14" to="/logout">Logout</NavLink>
        {user && <li><a href="/logout">Logout</a></li>}
      </div>
      </div>
    </>
  )
}

export default Navbar;