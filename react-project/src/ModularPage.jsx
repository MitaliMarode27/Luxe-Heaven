import "./ModularPage.css";
import "./home.css"
import mainImg from "./ProjectImages/ModularMainImg.jpg";
import offerImg1 from "./ProjectImages/modularOfferImg1.avif";
import offerImg2 from "./ProjectImages/modularOfferImg2.jpg";
import offerImg3 from "./ProjectImages/modularOfferImg3.jpg";
import femaleUser from "./ProjectImages/femaleUser.webp";
import maleUser from "./ProjectImages/maleuser.jpg";
import lastdivImg from "./ProjectImages/modularlastdivImg.jpg";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Done } from "@material-ui/icons";
import { Navigate } from "react-router-dom";


const ModularPage = () => {
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


         const handleSubmit = async (evt) => {
           evt.preventDefault();  
           setShowMsg(true);    
           try{
            const response = await fetch(`http://localhost:5000/contact`,{
              method:"POST",
              headers:{
                'Content-Type' : 'application/json'
              },
              body: JSON.stringify({
                name : userDetails.name,
                email: userDetails.email, // Use userDetails.email
                message : userDetails.message
              }),
           });
           
           
      if(response.ok){
        const result = await response.json();
        alert(result.message);
        localStorage.setItem("token", result.token);
        navigate("/");
        setUserDetails({
          name : "",
          email : "",
          message: ""
        });
      }
      else{
        alert("Invalid credential. Please try again");
        setUserDetails({
          name : "",
          email : "",
          message: ""
        });
      }
      }
       catch(error){
        console.error("Error during login : ", error);
        alert("Login failed. Please try login")
        setUserDetails({
          email :"",
          password :""
        });
           }
       }


    return (
      <>
       <div className="WholeContent">
        <img style={{height:"550px"}} className="modularMainImg opacity-70 w-full" src={mainImg} alt="" />
         <Navbar/>  

                <div className="MainCaption shadow-xl transform transition duration-500 hover:scale-105">
            <h1 className=" display-6">" Revolutionize Your Space With <span className=" text-teal-500">Modular Perfection</span>. "</h1>
            <button className=" btn text-lg rounded py-3 mt-5 px-3 bg-teal-600 text-emerald-100 "><NavLink to="/contact">Book Your Consultation</NavLink></button>
            </div>  

            <div className='captionBox flex items-center justify-center shadow-xl bg-slate-100 h-96  mt-5 '>
  <div className='place-items-center shadow-xl p-10 transform transition duration-500 hover:scale-105'>
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
      <div className="modal-body" style={{height:"410px"}}>
      {showMsg ? (
                <div className="formSubmittedMsg text-center mx-auto mr-16 bg-sky-600 shadow-lg pr-4">
                  <p className="text-sky-700 text-lg mb-2">{userDetails.name}! Your Form Has Been Submitted <Done/>.</p>
                  <p className="text-sky-700 text-lg mb-2">We will contact you soon.</p>
                  <button onClick={() => setShowMsg(false)} data-bs-dismiss="modal" className="btn btn-outline-success mt-3 py-2 px-4">OK</button>
                </div>
              ) : (

                <form className="contact-form bg-zinc-200 text-center" style={{height:"380px"}} onSubmit={handleSubmit}>
    <input className="contactBoxInputs w-96 h-14 text-lg mt-6 pl-3 rounded-md" required type="text" value={userDetails.name} id="name" name="name"  onChange={inputEvt} placeholder="Your UserName...."/>
    <input className="contactBoxInputs w-96 h-14 text-lg mt-4 pl-3 rounded-md" required type="email" value={userDetails.email} id="email" name="email"  onChange={inputEvt} placeholder="Email ID...."/>
 <textarea name="message" onChange={inputEvt}
              value={userDetails.message}
              className="w-96 h-14 mt-4 m-2 pl-3"
              required placeholder="Your Message"> </textarea>

    <div class="form-check flex justify-center items-center my-2" style={{columnGap:"1rem"}}>
  <input class="form-check-input contactBoxInputs mt-2 h-5 w-5 pl-3 rounded-md" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label text-zinc-500 text-xl mt-2" for="flexCheckIndeterminate">
  Send me updates on WhatsApp
  </label>
</div>
     <button className=" btn btn-outline-danger rounded-full mt-4  px-3 text-lg ">Sumbit</button>
     </form>
                  )}
    </div>
  </div>
  </div>
  </div>




   

<h2 className=' display-6 pb-2 mt-5 text-center font-thin text-pretty font-serif'>What We Offer </h2>
<hr className=' w-96 mx-auto mb-3' />

<div className="offerCards flex justify-center items-center column-gap-5 gap-7 justify-items-center">
        <div className="py-10">
          <div className="rounded overflow-hidden shadow-lg w-full max-w-xs transform transition duration-500 hover:scale-105 hover:opacity-55">
            <img
              className="w-full h-48 object-cover"
              src={offerImg1}
              alt=""
            />
            <div className="px-4 py-2 text-sm">
              <div className="font-bold text-xl mb-2">Kitchen</div>
              <p className="text-gray-500 text-lg mb-3">
                A Well Organized Kitchen area is more than just Convenience - its's Lifestyle.
              </p>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="rounded overflow-hidden shadow-lg w-full max-w-xs transform transition duration-500 hover:scale-105 hover:opacity-55">
            <img
              className="w-full h-48 object-cover"
              src={offerImg2}
              alt=""
            />
            <div className="px-4 py-2 text-sm">
              <div className="font-bold text-xl mb-2">Wardrobe</div>
              <p className="text-gray-500 text-lg mb-3">
                Turn Your Wardrobe into a Masterpiece of Order and Elegance.
              </p>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="rounded overflow-hidden shadow-lg w-full max-w-xs transform transition duration-500 hover:scale-105 hover:opacity-55">
            <img
              className="w-full h-48 object-cover"
              src={offerImg3}
              alt=""
            />
            <div className="px-4 py-2 text-sm">
              <div className=" text-1xl mb-2 font-bold">Storage</div>
              <p className="text-gray-500 text-lg mb-3 ">
                Transform Your Cluttered Spaces into a Haven of Order and Elegance.
              </p>
            </div>
          </div>
        </div>
        </div>

<div className="TeamContainerwrapper bg-amber-50 p-2">
<h2 className='text-2xl pb-2 mt-2 text-center font-thin text-pretty font-serif'>The Team Behind Your Dream </h2>
 <h2 className=' container text-xl text-center pb-2 mt-3 font-thin text-pretty font-serif'>- It takes having the right people to bring dreams to life - and we make sure you get the best. -</h2>
 <div className="TeamMainBox flex  justify-center items-center p-4 " style={{columnGap:"7rem", marginLeft:"7rem"}} >

  <div className="TeamInfo mx-auto shadow-lg p-4 bg-white " style={{height:"600px", width:"550px",lineHeight:"3rem"}}>
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

      <div className="TeamInfo mx-auto bg-white shadow-lg  p-4 rounded" style={{height:"600px", width:"550px", lineHeight:"3rem"}}>
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
  
<div className="lastDiv flex justify-center items-center p-8 pb-2" style={{columnGap:"5rem"}}>
        <div className=" lastDivCaption p-5 mb-10 " style={{width:"600px", height:"350px"}}>
         <h1 className=" mb-4 text-4xl font-sans">All We Need is 45 Days</h1>
         <p className=" text-lg font-sans" style={{lineHeight:"2rem"}}>"Our interior design services deliver stunning transformation within just 45 days ,guaranteed! We focus on quality Craftmanship, innovative designs, and attention to detail, ensuring every project meets your expectations."</p>
         <button className="btn btn-outline-info mt-4"> <NavLink to="/contact">Contact Us Now</NavLink></button>
        </div>
     
        <img className="lastDivImg" style={{height:"500px", width:"600px"}} src={lastdivImg} alt="" />

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
  
  export default ModularPage;