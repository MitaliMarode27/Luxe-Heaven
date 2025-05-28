import mainImg from "./ProjectImages/HowitWorksMainImg.jpg";
import Meeting from "./ProjectImages/howitWorksMeetingImg.webp";
import Booking from "./ProjectImages/howitworksBookImg.avif";
import Deal from "./ProjectImages/howitworksDealimg.jpg";
import finalInstallation from "./ProjectImages/howitworksFinalInstallationImg.png";
import Ready from "./ProjectImages/howitworksChillImg.jpg";
import "./HowitWork.css";
import Navbar from "./Navbar";
import { Category, Done, VerifiedUser } from "@material-ui/icons";
import { useState } from "react";
import { Navigate } from "react-router-dom";


const HowItWork = () => {

    const [userDetails,setUserDetails] = useState({
      name:"",
      email:"",
      message:""
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
        Navigate("/");
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
    <div>
      <img style={{height:"600px"}} className="HowItWorksMainImg w-full opacity-65" src={mainImg} alt="" />
      <div className="MainHeading">
        <h1 className="display-6 text-5xl text-gray-600 font-serif px-8 py-4 shadow-xl">How It <span className=" text-slate-500" >Works❔</span></h1>
      </div>
      <Navbar/>


<div className="StepBox text-center">
  <h1 className=" text-center text-5xl my-2 p-4 mt-3 text-slate-700" >Your Dream Home in 5 Steps!</h1>
  <p className=" text-center text-lg text-slate-500">Looking to design your home interiors? Here's how you can get started.</p>
  <div className="Fivesteps flex justify-center items-center mt-3" style={{columnGap:"2rem"}}>
    <div>
    <img className="h-24 w-24 shadow-lg rounded-full hover:opacity-55 hover:rotate-12  transition-transform duration-700" src={Meeting} alt="" />
    <p className=" text-center text-md text-slate-500">Meet Designer</p>
    </div>
    <div>
    <img className="h-24 w-24 shadow-lg rounded-full hover:opacity-55 hover:rotate-12  transition-transform duration-700" src={Booking} alt="" />
    <p className=" text-center text-md text-slate-500">Book Luxeheaven</p>
    </div>
    <div>
    <img className="h-24 w-24 shadow-lg rounded-full hover:opacity-55 hover:rotate-12  transition-transform duration-700" src={Deal} alt="" />
    <p className=" text-center text-md text-slate-500">Execution begins</p>
    </div>
    <div>
    <img className="h-24 w-24 shadow-lg rounded-full hover:opacity-55 hover:rotate-12  transition-transform duration-700" src={finalInstallation} alt="" />
    <p className=" text-center text-md text-slate-500">Final Installation</p>
    </div>
    <div>
    <img className="h-24 w-24 shadow-lg rounded-full hover:opacity-55 hover:rotate-12  transition-transform duration-700" src={Ready} alt="" />
    <p className=" text-center text-md text-slate-500">Move in</p>
    </div>
  </div>
  <button className="btn mx-auto btn-outline-secondary my-3 text-center rounded-full py-2 px-4 text-lg " data-bs-target="#mymodel" data-bs-toggle="modal">Start Your Project Now</button>
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



<br />
      <div>
        <div className="meetingBox container flex justify-center items-center">
           <img className="HowItWorksImgs" src={Meeting} alt="" />
           <div className="placeorderDiv p-6 " style={{width:"600px", height:"350px"}}>
              <h1 className=" text-5xl text-slate-700  pb-6">Meet Your Designer</h1>
              <ul role="list" class="list-disc marker:text-slate-500 ...">
  <li className="text-xl font-bold pb-2 text-gray-500">It all begin with a form</li>
   <p className="text-lg text-gray-400">Let's get acquainted. The more we learn about you, the better we can design your home.</p>
   <button className="btn btn-outline-secondary rounded-full px-4 py-2 mt-3"  data-bs-target="#mymodel" data-bs-toggle="modal">Fill Your Form</button>
   <br /><br />
  <li className="text-xl font-bold pb-2 text-gray-500">Get Free Consultation</li>
  <p className="text-lg text-gray-400">Talk to your designer and get personalised design and quote for your dream home.</p>
</ul>
           </div>
        </div>
      </div>
<br /><br />

      <div>
        <div className="meetingBox container flex justify-center items-center">
           <img className="HowItWorksImgs" src={Booking} alt="" />
           <div className="placeorderDiv p-6 " style={{width:"600px", height:"350px"}}>
              <h1 className=" text-5xl text-slate-700  pb-6">Book <Category style={{ fontSize: "2rem" }} />LuxeHaven</h1>
              <ul role="list" class="list-disc marker:text-slate-500 ...">
  <li className="text-xl font-bold pb-2 text-gray-500">Pay the Booking Amount to Seal the Deal</li>
   <p className="text-lg text-gray-400">Onece You're happy with what we've proposed, pay 10% of the final quote or Rs.30000 (Whichever is Higher) to book us.</p>
   <br /><br />
  <li className="text-xl font-bold pb-2 text-gray-500">Finalise Your Home Design</li>
  <p className="text-lg text-gray-400">It's time to deep dive into the nitty-gritties & pick your favorite materials, finishes, etc.</p>
</ul>
           </div>
        </div>
      </div>
      <br /><br /><br />



      <div>
        <div className="meetingBox container flex justify-center items-center">
           <img className="HowItWorksImgs" src={Deal} alt="" />
           <div className="placeorderDiv p-6 " style={{width:"600px", height:"350px"}}>
              <h1 className=" text-5xl text-slate-700  pb-6">Place the Order </h1>
              <ul role="list" class="list-disc marker:text-slate-500 ...">
  <li className="text-xl font-bold pb-2 text-gray-500">Confairm Your Order with 50% Payment</li>
   <p className="text-lg text-gray-400">Finalise the Design by making a Cumulative 50% Payment, and your Project is now off to a good start.</p>
   <br /><br />
  <li className="text-xl font-bold pb-2 text-gray-500">Work Commences</li>
  <p className="text-lg text-gray-400">Civil Work begins on site. Keep a tab on your Project status on my Account.</p>
</ul>
           </div>
        </div>
      </div>

<br /><br />

<div className=" py-6 w-full bg-slate-600">
    <h1 className=" text-center text-4xl text-slate-200"><VerifiedUser style={{ fontSize: "3rem" }} /> You're Half Way There. Your Order are Raised !</h1>
</div>
<br /><br />

      <div>
        <div className="meetingBox container flex justify-center items-center">
           <img className="HowItWorksImgs" src={finalInstallation} alt="" />
           <div className="placeorderDiv p-6 " style={{width:"600px", height:"350px"}}>
              <h1 className=" text-5xl text-slate-700  pb-6">Final Installations</h1>
              <ul role="list" class="list-disc marker:text-slate-500 ...">
  <li className="text-xl font-bold pb-2 text-gray-500">Pay 100% at Intimation of Material Dispath</li>
   <p className="text-lg text-gray-400">Once the material are ready for dispatch, you'll be intimated. Make the balance payment and we'll head to the last leg of your project.</p>
   <br /><br />
  <li className="text-xl font-bold pb-2 text-gray-500">Installation</li>
  <p className="text-lg text-gray-400">Order get delivered on-site and installation happens as per design.</p>
</ul>
           </div>
        </div>
      </div>

      <div className=" py-6 w-full bg-slate-600">
    <h1 className=" text-center text-4xl text-slate-200"><VerifiedUser style={{ fontSize: "3rem" }} /> Hurrah! Complete Payment Has Been Made !</h1>
</div>
<br /><br />

<div>
        <div className="meetingBox container flex justify-center items-center">
           <img className="HowItWorksImgs" src={Ready} alt="" />
           <div className="placeorderDiv p-6 " style={{width:"600px", height:"350px"}}>
              <h1 className=" text-5xl text-slate-700  pb-6">Move in! </h1>
              <ul role="list" class="list-disc marker:text-slate-500 ...">
  <li className="text-xl font-bold pb-2 text-gray-500">Move in!</li>
   <p className="text-lg text-gray-400">Your dream home is now a reality! It's time to make new memories! Do avail the free professional session of your #LuxeHaven.</p>
</ul>
           </div>
        </div>
      </div>

<br /><br />
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
  );
};

export default HowItWork;