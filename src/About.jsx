import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import img from "./ProjectImages/howitworksBookImg.avif"

const About = () => {
    return(
      <>
      <Navbar/>
           <div className="d-flex align-items-center justify-center bg-slate-700" style={{height:"90vh", width:"100%", columnGap:"1rem"}}>
            <div className=" p-4 text-slate-100" style={{height:"500px", width:"500px"}}>
                <h1 className=" text-4xl pb-4">Why Choose Us ?</h1>
                <p className="text-lg pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eius, voluptatum, fugit, vero nemo ipsam nostrum hic commodi perspiciatis deleniti ab.  </p>
                <p className="text-lg pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eius, voluptatum, fugit, vero nemo ipsam nostrum hic commodi perspiciatis deleniti </p>
                <p className="text-lg pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eius, voluptatum, fugit, vero nemo ipsam nostrum hic commodi perspiciatis deleniti ab. </p>
                <p className="text-lg pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eius, voluptatum, fugit,  </p>

                <div className="d-flex align-items-center  py-2 px-4  " style={{columnGap:"1rem"}}>
                <button className="btn btn-outline-info"><NavLink to="/signup">Contact Now</NavLink></button>
                <button className="btn btn-outline-light"><NavLink to="/about" >Learn More</NavLink></button>
                </div>
            </div>
        
            <div className="">
                <img style={{height:"500px", width:"500px"}} src={img} alt="img"/>
            </div>
           </div>
        <br />
           <p className=" h-16 bg-slate-400 text-center text-3xl pt-3">@Thanks for Visiting 💗</p>
        
      </>
    )
  }
  
  export default About;