import { NavLink } from 'react-router-dom';
import interiorMainVideo from './ProjectImages/interiorMainVideo.mp4';
import Img2 from "./ProjectImages/AboutpageImg2.jpg";
import userImg1 from "./ProjectImages/AboutpageuserImg1.jpg";
import userImg2 from "./ProjectImages/AboutpageuserImg2.jpg";
import modularImg from "./ProjectImages/HomePageModularImg.jpg";
import FullInteriorImg from "./ProjectImages/HomeFullInteriorImg.jpg";
import luxuryImg from "./ProjectImages/HomeLuxuryImg.jpg";
import ProjectImg1 from "./ProjectImages/HomeProjectImg1.jpeg";
import ProjectImg2 from "./ProjectImages/HomeProjectImg2.webp";
import ProjectImg3 from "./ProjectImages/HomeProjectImg3.jpg";
import img1 from "./ProjectImages/homeImg1.jpg";
import img2 from "./ProjectImages/homeImg2.jpg";
import img3 from "./ProjectImages/homeImg3.jpg";
import img4 from "./ProjectImages/homeImg4.jpg";
import img5 from "./ProjectImages/homeImg5.jpg";
import femaleUser from "./ProjectImages/femaleUser.webp";
import maleUser from "./ProjectImages/maleuser.jpg";
import "./home.css";
import { Category, Done } from '@material-ui/icons';
import { useState } from 'react';

const Home = () => {
  const [userDetails,setUserDetails] = useState({
    name:"",
    email:"",
    phone:"",
    propertyname:""
})

  const [menuActive, setMenuActive] = useState(false);
  const [showMsg,setShowMsg] = useState(false);
  

  const inputEvt = (evt) => {
   const { name, value } = evt.target;
   setUserDetails((prevDetails) => ({
     ...prevDetails,
     [name]: value
   }));
  }
  
  
  const handleSubmit = (evt) => {
   evt.preventDefault();
   setShowMsg(true); 
  
  };


  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };


  return (
    <>
    <div className='WholeContent'>

    <nav className="navbar bg-black bg-opacity-50 fixed w-full z-10 top-0">
          <div className="container mx-auto flex justify-between items-center p-4">
            <NavLink className="navbar-brand text-3xl font-thin mb-5 text-white" to="/"><Category style={{ fontSize: "3rem" }} />LuxeHaven</NavLink>
            <div className={`navbar-menu ${menuActive ? 'block' : 'hidden'} lg:flex lg:items-center lg:space-x-4`}>
              <NavLink className="nav-link text-white" to="/" onClick={() => handleLinkClick('/')}>Home</NavLink>
              <NavLink className="nav-link text-white" to="/howitworks"  onClick={() => handleLinkClick('/howitworks')}>HowItWorks</NavLink>
              <NavLink className="nav-link text-white" to="/about" onClick={() => handleLinkClick('/about')}>About</NavLink>
              <NavLink className="nav-link text-white" to="/contact" onClick={() => handleLinkClick('/contact')}>Contact</NavLink>
            </div>
            <div className="navbar-toggle block lg:hidden" onClick={toggleMenu}>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </div>
          </div>
        </nav>


       <header className="hero-section text-center">
        <video className="hero-video" autoPlay loop muted>
          <source src={interiorMainVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>
    </div>



    <div className="container text-center mt-4">
      <h2 className=' display-5 pb-3 text-pretty font-serif '>Offerings</h2>
      <hr className=' w-80 mx-auto mb-5 ' />

  <div className="offerings row ml-28">
    <div className="col offeringBox ">
    <NavLink to="/modular"  onClick={() => handleLinkClick('/modular')}>
     <img className='offerImg h-80 shadow-lg p-8 hover:opacity-50 hover:rotate-12  transition-transform duration-700' style={{borderRadius:"50%"}} src={modularImg} alt="" />
      </NavLink>
      <p className='offerText text-3xl font-thin mt-3 mr-28 text-pretty'>Modular Interior</p>
    </div>
    <div className="col offeringBox ">
    <NavLink to="/fullhome"  onClick={() => handleLinkClick('/fullhome')}>
    <img className='offerImg h-80 shadow-lg p-8 hover:opacity-50 hover:rotate-12  transition-transform duration-700' style={{borderRadius:"50%"}} src={FullInteriorImg} alt="" />
    </NavLink>
    <p className='offerText text-3xl font-thin mt-3 mr-28'>Full Home Interior</p>
    </div>
    <div className="col offeringBox ">
    <NavLink to="/luxury" onClick={() => handleLinkClick('/luxury')}>
    <img className='offerImg h-80 w-80 shadow-lg p-8 hover:opacity-50 hover:rotate-12  transition-transform duration-700' style={{borderRadius:"50%"}} src={luxuryImg} alt="" />
    </NavLink>
    <p className=' offerText text-3xl font-thin mt-3 mr-28'>Luxury Interior</p>
    </div>
  </div>
</div>


<div className='captionBox flex items-center justify-center shadow-xl bg-slate-400 h-96 mt-4'>
  <div className='place-items-center shadow-xl p-10 bg-slate-300 transform transition duration-500 hover:scale-105'>
      <h3 className='Caption text-slate-700  display-6 pb-6 '>" Turning Ordinary Space into Extraordinary Experiences "</h3>
      <p className=' text-xl text-center pb-6 text-slate-800'>Contact Us Today To begin your design journey. Your dream home awaits!</p>
      <button className='btn btn-outline-secondary place-items-center p-2  hover:shadow-2xl transition-transform duration-500' data-bs-target="#mymodel" data-bs-toggle="modal">START YOUR PROJECT</button>
      </div>
</div>


<div className="modal" id="mymodel" tabindex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title ml-3 mx-auto text-red-600 text-2xl">Submit Your Details</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      {showMsg ? (
                <div className="formSubmittedMsg text-center mx-auto mr-16 bg-sky-600 shadow-lg pr-4">
                  <p className="text-sky-700 text-lg mb-2">{userDetails.name}! Your Form Has Been Submitted <Done />.</p>
                  <p className="text-sky-700 text-lg mb-2">We will contact you soon.</p>
                  <button onClick={() => setShowMsg(false)} data-bs-dismiss="modal" className="btn btn-outline-success mt-3 py-2 px-4">OK</button>
                </div>
              ) : (

                <form className="contact-form bg-zinc-200 text-center" onSubmit={handleSubmit}>
    <input className="contactBoxInputs w-96 h-14 text-lg mt-5 pl-3 rounded-md" required type="text" value={userDetails.name} id="name" name="name"  onChange={inputEvt} placeholder="Your Name...."/>
    <input className="contactBoxInputs w-96 h-14 text-lg mt-3 pl-3 rounded-md" required type="email" value={userDetails.email} id="email" name="email"  onChange={inputEvt} placeholder="Email ID...."/>
    <input className="contactBoxInputs w-96 h-14 text-lg mt-3 pl-3 rounded-md" required type="phone" value={userDetails.phone} id="phone" name="phone"  onChange={inputEvt} placeholder="Phone Number...."/>


    <div class="form-check flex justify-center items-center my-2" style={{columnGap:"1rem"}}>
  <input class="form-check-input contactBoxInputs mt-4 h-5 w-5 pl-3 rounded-md" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label text-zinc-500 text-xl mt-4" for="flexCheckIndeterminate">
  Send me updates on WhatsApp
  </label>
</div>
     <input className="contactBoxInputs w-96 h-14 text-lg mt-3 pl-3 rounded-md" type="propertyname" id="propertyname" required name="propertyname" value={userDetails.propertyname}  onChange={inputEvt} placeholder="Property Name" />
     <br />
     <button className=" btn btn-outline-danger rounded-full mt-4 py-2 px-3 text-lg mb-3">Get Free Quote</button>
     </form>
                  )}

              <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
  </div>
  </div>




<h2 className=' display-5 pb-2 mt-4 text-center font-thin text-pretty font-serif'>Projects</h2>
<hr className=' w-80 mx-auto mb-5' />

<div className=" row d-flex justify-content-center ml-7  align-items-center">
<div className="py-10 col ">
      <div style={{height:"500px"}} className=" col-lg-4 col-sm-12 col-md-6 projectCard rounded overflow-hidden shadow-xl w-full max-w-sm transform transition duration-500 hover:scale-105 hover:opacity-55">
        <img
          className="projectImgs w-full h-full object-cover"
          src={ProjectImg1}
          alt=""
        />                   
        </div>
        <div className="ProjectsTypes px-4 py-2 text-sm shadow-2xl  bg-slate-100 w-80 p-4 pb-3 text-center" style={{position:"relative",bottom:"2rem", left:"2rem"}}>
          <div className="font-thin text-2xl mb-1 text-center">Residential Projects</div>
          <button className="btn btn-outline-secondary w-full " type="button" >
                Include
              </button>
      </div>
    </div>

    <div className="py-10 col ">
      <div style={{height:"500px"}} className="col-lg-4 col-sm-12 col-md-6 projectCard rounded overflow-hidden shadow-xl w-full max-w-sm transform transition duration-500 hover:scale-105 hover:opacity-55">
        <img
          className="projectImgs w-full h-full object-cover"
          src={ProjectImg2}
          alt=""
        />
      </div>
      <div className="ProjectsTypes px-4 py-2 text-sm shadow-2xl  bg-slate-100 w-80 p-4 pb-3 text-center" style={{position:"relative",bottom:"2rem", left:"2rem"}}>
          <div className="font-thin text-2xl mb-1 text-center">Commercial Projects</div>
          <button className="btn btn-outline-secondary w-full" type="button" >
                Include
              </button>                    
        </div>
    </div>

    <div className="py-10 col ">
      <div style={{height:"500px"}} className="col-lg-4  col-sm-12 col-md-6 projectCard rounded overflow-hidden shadow-xl w-full max-w-sm transform transition duration-500 hover:scale-105 hover:opacity-55">
        <img
          className="projectImgs w-full h-full object-cover"
          src={ProjectImg3}
          alt=""
        />            
      </div>
      <div className="ProjectsTypes px-4 py-2 text-sm shadow-2xl bg-slate-100 w-80 p-4 pb-3 text-center" style={{position:"relative",bottom:"2rem", left:"2rem"}} >
          <div className="font-thin text-2xl mb-1 text-center">Commercial Projects</div>
          <button className="btn btn-outline-secondary w-full" type="button" >
                Include
              </button>                         
        </div>
    </div>
    </div>

 <h1 className=' text-pretty text-center text-2xl mb-3'>"Transforming Spaces, Elevating Lifestyles - Your Dream Interiors Starts Here!"</h1>
 <p className=' text-3xl text-center font-thin mt-1 mb-1'>@LuxeHaven</p>
 <hr className=' w-80 mx-auto mb-5' />
 <div className='imgGallery flex justify-center items-center' style={{columnGap:"3rem"}}>
    <img className='imgs h-60 w-60 shadow-2xl transform transition duration-300 hover:scale-105 hover:opacity-55' src={img1} alt="" />
    <img className='imgs h-60 w-60 shadow-2xl transform transition duration-300 hover:scale-105 hover:opacity-55' src={img2} alt="" />
    <img className='imgs h-60 w-60 shadow-2xl transform transition duration-300 hover:scale-105 hover:opacity-55' src={img3} alt="" />
    <img className='imgs h-60 w-60 shadow-2xl transform transition duration-300 hover:scale-105 hover:opacity-55' src={img4} alt="" />
    <img className='imgs h-60 w-60 shadow-2xl transform transition duration-300 hover:scale-105 hover:opacity-55' src={img5} alt="" />
 </div>
<br /><br /><br /><br />



<div className="TeamContainerwrapper bg-slate-200 p-2">
<h2 className='text-2xl pb-2 mt-2 text-center font-thin text-pretty font-serif text-slate-600'>The Team Behind Your Dream </h2>
 <h2 className=' container text-xl text-center pb-2 mt-3 font-thin text-pretty font-serif text-slate-500'>- It takes having the right people to bring dreams to life - and we make sure you get the best. -</h2>
 <div className="TeamMainBox flex  justify-center items-center p-4 " style={{columnGap:"7rem", marginLeft:"7rem"}} >

  <div className="TeamInfo shadow-lg p-4 bg-white " style={{height:"600px", width:"550px",lineHeight:"3rem"}}>
  <div className="profile flex justify-center items-center  " style={{columnGap:"2rem"}}>
      <div>
            <img style={{height:"200px", width:"400px"}} className="TeamImg shadow-md " src={femaleUser} alt="" />            
      </div>

      <div className="teamWork" style={{lineHeight:"2rem"}}>
      <h1 className="text-3xl ">Your Designer</h1>
        <h2 className=" mt-3 font-bold mb-3 text-lg text-pink-400">An Expert in Full Home Design</h2>
        <p className="text-lg ">Your Designer will Translate Your Family's Personality and needs into a Wholesome Design.</p>
      </div>
      </div>

      
      <div className=" ml-4 text-lg  mt-3" style={{lineHeight:"2rem"}}>
            <p><span className=" font-bold">Education</span> : <span className=" ml-20  ">Masters/Bachelors in interior Design</span></p>
            <p> <span className=" font-bold">Typical Experience</span> : <span className=" ml-4">6+ Years</span></p>
            <p><span className=" font-bold">Projects Managed</span> : <span className=" ml-4">Over 25 Homes</span></p>
            <p><span className=" font-bold">Top Skills</span> :            
             <ul role="list" class="info list-disc marker:text-pink-400 ... ml-44  mb-4" style={{lineHeight:"2rem"}}>
              <li>Experience in Designing Across Styles & Themes</li>
              <li>Space Planning</li>
              <li>Civil/Core Material Know How</li>
              <li>Furniture & Furnishing</li>
              <li>Budget Planning and Pricing</li>
              </ul></p>
        <p></p>
      </div>


      </div>

      <div className="TeamInfo bg-white shadow-lg  p-4 rounded" style={{height:"600px", width:"550px", lineHeight:"3rem"}}>
  <div className="profile flex  justify-center items-center" style={{columnGap:"2rem"}}>
      <div>
            <img style={{height:"200px", width:"350px"}} className="TeamImg shadow-md " src={maleUser} alt="" />            
      </div>

      <div className="teamWork" style={{lineHeight:"2rem"}}>
      <h1 className="text-4xl">Your Operation Lead</h1>
        <h2 className=" mt-3 font-bold mb-3 text-lg text-sky-400">An Expert in Project Management</h2>
        <p className="text-lg">Your rep on Site, Your Operations Lead will Ensure a Perfect and Complete Home Transformation.</p>
      </div>
      </div>

      
      <div className=" ml-4 text-lg mt-3" style={{lineHeight:"2rem"}}>
            <p><span className=" font-bold">Education</span> : <span className=" ml-20">Civil Engineer</span></p>
            <p><span className=" font-bold">Typical Experience</span> : <span className=" ml-3">4+ Years</span></p>
            <p><span className="font-bold">Projects Managed</span> : <span className=" ml-4">Over 40 Homes</span></p>
            <p><span className="font-bold">Top Skills</span> : <ul role="list" class="info list-disc marker:text-sky-500 ... ml-44 mb-4" style={{lineHeight:"2rem"}}>
              <li>Project Planning</li>
              <li>Onsite Progress & Tracking</li>
              <li>Custom Work/Services Audit</li>
              <li>Quality Adherence</li>
              <li>Vendor Management</li>
              </ul></p>
        <p></p>
      </div>
      </div>
<br /><br />
      </div>
  </div>

   <div className="text-center py-3">
    <h1 className=" text-4xl py-3">The Team</h1>
    <hr className=' w-96 mx-auto mb-3' />
    <p className=" text-2xl pb-3">Get to know the team that'll be with you every step of the way</p>

    <div className="Achivements flex justify-center items-center"style={{columnGap:"2rem"}}>
      <div className=" p-4 " style={{height:"250px", width:"400px"}}>
        <img className="h-24 w-28 mx-auto " src={Img2} alt="" />
        <div>
          <p className="text-2xl font-bold">The Design Lead (DL)</p>
          <p className="text-lg ">The Design  Lead gets to know your requirements and your lifestyle intimately to ensure your home is a reflection of who you are.</p>
        </div>
      </div>

      <div className=" p-4" style={{height:"250px", width:"400px"}}>
        <img className="h-24 w-28 mx-auto " src={userImg2} alt="" />
        <div>
          <p className="text-2xl font-bold">The Business Manager (BM)</p>
          <p className="text-lg ">To ensure your home journey is smooth sailing, your Business Manager oversees the entire design process and ensure there are no hiccups.</p>
        </div>
      </div>

     <div className=" p-4" style={{height:"250px", width:"400px"}}>
        <img className="h-24 w-28 mx-auto " src={userImg1} alt="" />
        <div>
          <p className="text-2xl font-bold">The Project Manager (PM)</p>
          <p className="text-lg ">Your Project Manager streers the execution. They make it their life's mission get your home ready in time.</p>
        </div>
      </div>
    </div>
    <br /><br />

</div>
   
<div className=" text-center w-full py-14 bg-gray-400 my-4">
<h1 className=" text-4xl py-4 text-gray-700">Your Dream Home is Just a Click Away</h1>
  <button className=" btn btn-outline-light rounded-full py-2 px-8 text-lg "><NavLink to="/contact">Get Started</NavLink></button>
</div>


    <footer className="footer bg-slate-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; 2025 LuxeHaven. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Home;


