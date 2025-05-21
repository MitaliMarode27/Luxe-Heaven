import "./Contact.css";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import mainImg from "./ProjectImages/ContactPageMainImg.jpg";
import { Done, Menu } from "@material-ui/icons";
import "./Contact.css";

const Contact = () => {

  const [userDetails,setUserDetails] = useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    propertyname:""
})
const [showMsg,setShowMsg] = useState(false);
const [info,setinfo] = useState([]);
const [showinfo, setShowinfo] = useState(false);

const getInfo = async () => {
  try{
    const response = await fetch(`http://localhost:3000/contact/fetch`) ;
    if(response.ok) {
      const data = await response.json();
      setinfo(data.database || []);
    }
    else{
      setinfo([]);
    }
  }
  catch(error){
    console.error("Error fetching stored URLs:", error);
    setinfo([])
  }
}

useEffect(() => {
  getInfo();
},[]);

const inputEvt = (evt) => {
 const { name, value } = evt.target;
 setUserDetails((prevDetails) => ({
   ...prevDetails,
   [name]: value
 }));
}


const handleSubmit = async (evt) => {
  evt.preventDefault(); // Prevent the default form submission behavior

  const formattedUserDetails = {
    ...userDetails,
    phone: Number(userDetails.phone),
  };
  
  try {
    const response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedUserDetails), // Send the form data as JSON
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result.message); // Log the success message from the backend
      setShowMsg(true); // Show the success message on the frontend
      getInfo()
    } else {
      console.error("Failed to submit the form");
    }
  } catch (error) {
    console.error("Error submitting the form:", error);
  }
};


  return (
<div>
    <div className="ContactBox p-5 flex justify-center items-center mt-5">
      <img style={{height:"80vh", width:"60%"}}  className="contactImg rounded-lg opacity-75" src={mainImg} alt="" />


    <div style={{height:"80vh", width:"50%"}} className="userInputBox rounded-lg shadow-lg text-center bg-cyan-800">
      <button onClick={() => {setShowinfo(!showinfo)}}  className="btn btn-light me-0"><Menu/></button>

      {
        showinfo && (
          <div className=" bg-slate-100 p-4">
<h1>User Info</h1>
{info.length === 0 ? (<p>No User Information Available</p>) : 
(
 <div >
<ul>
{Array.isArray(info) && info.map((item, idx) => (
  <div key={idx} className="p-8 shadow-lg mt-3" style={{ width: "400px" }}>
    <li>Name: {item.fname}</li>
    <li>Email: {item.email}</li>
    <li>Phone No: {item.phone}</li>
    <li>Password: {item.password}</li>
    <li>Property Name: {item.propertyName}</li>
  </div>
))} </ul>
 </div>

)
} 
</div>

        )
      }
      
    <form className="contact-form" onSubmit={handleSubmit} action="/contact" method="post">
   <h1 className=" text-4xl mt-4 text-cyan-200">Talk With Designer</h1>
    <input className="contactBoxInputs w-96 h-14 text-lg mt-5 pl-3 rounded-md" required type="text" value={userDetails.name} id="name" name="name"  onChange={inputEvt} placeholder="Your Name...."/>
    <input className="contactBoxInputs w-96 h-14 text-lg mt-3 pl-3 rounded-md" required type="email" value={userDetails.email} id="email" name="email"  onChange={inputEvt} placeholder="Email ID...."/>
    <input className="contactBoxInputs w-96 h-14 text-lg mt-3 pl-3 rounded-md" required type="phone" value={userDetails.phone} id="phone" name="phone"  onChange={inputEvt} placeholder="Phone Number...."/>


    <div class="form-check flex justify-center items-center my-2" style={{columnGap:"1rem"}}>
  <input class="form-check-input contactBoxInputs mt-4 h-5 w-5 pl-3 rounded-md" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label text-cyan-200 text-xl mt-4" for="flexCheckIndeterminate">
  Send me updates on WhatsApp
  </label>
</div>
     <input className="contactBoxInputs w-96 h-14 text-lg mt-3 pl-3 rounded-md" type="propertyname" id="propertyname" required name="propertyname" value={userDetails.propertyname}  onChange={inputEvt} placeholder="Property Name" />
     <br />
     <button className=" btn btn-outline-light rounded-full mt-4 py-2 px-3 text-lg">Get Free Quote</button>
     </form>
  </div>

     <Navbar/>

    </div>

    {showMsg && (
        <div className="formSubmittedMsg text-center bg-sky-600 shadow-lg">
          <p className=" text-sky-700 text-lg mb-2">{userDetails.name}! Your Form Has Been Submited <Done/>.</p>
          <p className=" text-sky-700 text-lg mb-2">We will Contact You Soon .</p>
          <button onClick={() => {setShowMsg(false)}} className="btn btn-outline-success mt-3  py-2 px-4">OK</button>
        </div>
      )}



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

export default Contact;