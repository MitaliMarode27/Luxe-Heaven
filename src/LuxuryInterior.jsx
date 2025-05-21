import Navbar from "./Navbar";
import img1 from "./ProjectImages/LuxuryImg1.webp";
import img2 from "./ProjectImages/interor.png";
import bedroomImg from "./ProjectImages/luxurybedroomimg.jpg";
import dressingImg from "./ProjectImages/luxuryimg5.jpg";
import bathroomImg from "./ProjectImages/luxurybathroomimg.jpg";
import GardenVideo from './ProjectImages/gardenVideo.mp4';
import "./luxuryinterior.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Done } from "@material-ui/icons";

const LuxuryInterior = () => {
  const [userDetails,setUserDetails] = useState({
    name:"",
    email:"",
    phone:"",
    propertyname:""
})
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

  return (
   <>
      <div>
   <div className="headerDiv bg-stone-200 flex justify-evenly items-center" >
    <img className="headerImg"  style={{height:"600px"}} src={img1} alt="" />
    <div style={{height:"200px",width:"600px"}} className="luxuryCaption mr-20 p-5 text-center ">
      <p className=" text-4xl text-stone-500" style={{lineHeight:"3rem"}}>" Designing Spaces that inspire a <span className=" text-5xl text-stone-600">Luxurious</span> Lifestyles. "</p>
      <button className=" btn bg-stone-400 text-stone-100 mt-4 py-3 text-lg px-5 rounded-full"><NavLink to="/contact">Begin your Journey</NavLink></button>
    </div>
    <Navbar/>
   </div>

   <div className="secondDiv bg-slate-600 flex justify-evenly items-center pt-2">
   <div style={{height:"500px",width:"700px"}} className="luxuryCaption2 mr-20 p-5">
      <p className=" text-4xl text-slate-300" style={{lineHeight:"3rem"}}>Crafting interiors that go beyond aesthetics, offering a seamless blend of elegance comfort, and sophistication. </p>
      <p style={{lineHeight:"2rem"}} className=" text-gray-400 text-xl">We belive that homes are more than meets the eye. They're a culmination of scentific design and passionate craftmanship woven together  to narrate a story. One that resonates with your begin. At Vinciago, we craft enchanting homes that redefine luxury and comfort for you. </p>
      <button className=" btn bg-slate-400 text-slate-50 mt-4 py-3 text-lg px-5 rounded-full" data-bs-target="#mymodel" data-bs-toggle="modal">Get in touch</button>
    </div>
   <img className="mirrorimg"  style={{height:"600px"}} src={img2} alt="" />
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
                  <p className="text-sky-700 text-lg mb-2">{userDetails.name}! Your Form Has Been Submitted <Done/>.</p>
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




<div className=" bg-neutral-200">
  <h2 className=' text-3xl pb-2 pt-5 text-center font-thin text-pretty font-serif'>" Your Private Slice of Paradise. "</h2>
<hr className=' w-96 mx-auto mb-4' />

  <header className="hero-section text-center">
           <video className="hero-video" autoPlay loop muted>
             <source src={GardenVideo} type="video/mp4" />
             Your browser does not support the video tag.
           </video>
         </header>
</div>   

<div className="WholeProcess container bg-stone-400 py-3 ">
  <h1 className=" text-center text-3xl mt-2  text-stone-700">How we bring Luxurious homes to life</h1>
  <hr className=' w-96 mx-auto mt-3 mb-3 py-3' />
  <div className="processMaindiv flex justify-center items-center" style={{columnGap:"3rem"}}>
   <span className="text-3xl">1</span> <div className="ProcessBox p-3 bg-stone-300  py-2 shadow-lg">
      <h1 className="text-stone-600 text-2xl">Design Consultation</h1>
      <p className="text-stone-600 text-lg">Immerse yourself in connection with our design experts as they serve you with best of aesthetic home solutions.</p>
      </div>
      <span className="text-3xl">2</span> <div className="ProcessBox p-3 bg-stone-300 py-2 shadow-lg">
      <h1 className="text-stone-600 text-2xl">Holistic Interior Solution</h1>
      <p className="text-stone-600 text-lg">Witness the epitome of excellence as we seamlessly Orchestrate an end-to-end interiors journey for you.</p>
      </div>
  </div>
<br /><br />
  <div className="processMaindiv  flex justify-center items-center" style={{columnGap:"3rem"}}>
  <span className="text-3xl">3</span> <div className="ProcessBox p-3 bg-stone-300 py-2 shadow-lg">
      <h1 className="text-stone-600 text-2xl">Project Management </h1>
      <p className="text-stone-600 text-lg">Lean back and watch your dedicated team effortlessly unfold your vision into a luxury  abode</p>
      </div>
      <span className="text-3xl">4</span><div className="ProcessBox p-3 bg-stone-300 py-2 shadow-lg">
      <h1 className="text-stone-600 text-2xl">Styling</h1>
      <p className="text-stone-600 text-lg">Beholds our stylists a touch of fitness and elevate your space to narrate your essence of living.</p>
      </div>
  </div>
</div>



<div className="designMainDiv bg-slate-600 py-3">
<h2 className=' display-5 pb-2 mt-4 text-center text-slate-300 font-thin text-pretty font-serif'>- Design Styles -</h2>
<hr className=' bg-slate-300 w-80 mx-auto mb-3' />

<div className=" designImgs row d-flex justify-content-center ml-16  align-items-center">
<div className="py-5 col">
      <div style={{height:"500px"}} className=" col-lg-4 col-sm-12 col-md-6 projectCard rounded overflow-hidden shadow-xl w-full max-w-sm transform transition duration-500 hover:scale-105">
        <img
          className="projectImgs w-full h-full object-cover"
          src={bedroomImg}
          alt=""
        />                   
        </div>
        <div className="designInfo ProjectsTypes px-4 py-2 text-sm shadow-2xl  bg-slate-100 w-80 p-4 pb-3 text-center" style={{position:"relative",bottom:"2rem", left:"2rem"}}>
          <div className="font-thin text-2xl mb-1 text-center">Bedroom</div>
          <button className="btn btn-outline-secondary w-full " type="button" >
                Include
              </button>
      </div>
    </div>

    <div className="py-5 col">
      <div style={{height:"500px"}} className="col-lg-4 col-sm-12 col-md-6 projectCard rounded overflow-hidden shadow-xl w-full max-w-sm transform transition duration-500 hover:scale-105">
        <img
          className="projectImgs w-full h-full object-cover"
          src={dressingImg}
          alt=""
        />
      </div>
      <div className="designInfo ProjectsTypes px-4 py-2 text-sm shadow-2xl  bg-slate-100 w-80 p-4 pb-3 text-center" style={{position:"relative",bottom:"2rem", left:"2rem"}}>
          <div className="font-thin text-2xl mb-1 text-center">Dressing</div>
          <button className="btn btn-outline-secondary w-full" type="button" >
                Include
              </button>                    
        </div>
    </div>

    <div className="py-5 col">
      <div style={{height:"500px"}} className="col-lg-4  col-sm-12 col-md-6 projectCard rounded overflow-hidden shadow-xl w-full max-w-sm transform transition duration-500 hover:scale-105">
        <img
          className="projectImgs w-full h-full object-cover"
          src={bathroomImg}
          alt=""
        />            
      </div>
      <div className="designInfo ProjectsTypes px-4 py-2 text-sm shadow-2xl bg-slate-100 w-80 p-4 pb-3 text-center" style={{position:"relative",bottom:"2rem", left:"2rem"}} >
          <div className="font-thin text-2xl mb-1 text-center">Wardrobe</div>
          <button className="btn btn-outline-secondary w-full" type="button" >
                Include
              </button>                         
        </div>
    </div>
    </div>
    </div>


    <div className='captionBox flex items-center justify-center shadow-xl bg-slate-100 h-48 '>
  <div className='place-items-center p-10 '>
      <h3 className='Caption text-slate-700  display-6 pb-6 '>" Refer Your Friend & earn 40% of their Project value "</h3>
      <button className='btn btn-outline-secondary rounded-full text-xl place-items-center p-2 px-4 py-2 hover:shadow-2xl transition-transform duration-500'>Refer</button>
      </div>
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
   </div>
   </>
  );
};

export default LuxuryInterior;