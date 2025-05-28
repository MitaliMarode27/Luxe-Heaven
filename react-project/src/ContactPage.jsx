import Navbar from "./Navbar";
import img from "./ProjectImages/howitworksBookImg.avif";
import { useState } from "react";

const ContactPage = () => {
        const [userInfo, SetUserInfo] = useState({
            name : "",
            email:"",
           message :""
        });
    
      
        const inputEvt = (evt) => {
          const { name, value } = evt.target;
          SetUserInfo((prevDetails) => ({
            ...prevDetails,
            [name]: value
          }));
         }
      
    
         const submit = async (evt) => {
           evt.preventDefault();      
           try{
            const response = await fetch(`http://localhost:5000/contact`,{
              method:"POST",
              headers:{
                'Content-Type' : 'application/json'
              },
              body: JSON.stringify({
                name : userInfo.name,
                email: userInfo.email, // Use userInfo.email
                message : userInfo.message
              }),
           });
           
           
      if(response.ok){
        const result = await response.json();
        alert(result.message);
        localStorage.setItem("token", result.token);
        navigate("/");
        SetUserInfo({
          name : "",
          email : "",
          message: ""
        });
      }
      else{
        alert("Invalid credential. Please try again");
        SetUserInfo({
          name : "",
          email : "",
          message: ""
        });
      }
      }
       catch(error){
        console.error("Error during login : ", error);
        alert("Login failed. Please try login")
        SetUserInfo({
          email :"",
          password :""
        });
           }
       }
      
      
    
    return(
        <>
      <Navbar/>
        <div
        className="d-flex align-items-center justify-center"
        style={{ height: "80vh", width: "100%", columnGap: "1rem" }}
      >
        <div>
          <img
            style={{ height: "500px", width: "500px" }}
            src={img}
            alt="Login Illustration"
          />
        </div>

        <div
          className="bg-zinc-300 p-4 px-5"
          style={{ height: "90%", width: "40%" }}
        >
          <h1 className="text-4xl text-center text-white">Contact Form</h1>

          <label className="text-2xl m-1">UserName</label>
            <input
              type="text"
              onChange={inputEvt}
              value={userInfo.name}
              name="name"
              className="w-full h-14 m-2 pl-3"
              required
              placeholder="Enter Your Usename.."
              
            />

          <form onSubmit={submit}>
            <label className="text-2xl m-1">Email</label>
            <input
              type="email"
              onChange={inputEvt}
              value={userInfo.email}
              name="email"
              className="w-full h-14 m-2 pl-3"
              required
              placeholder="Enter Your Email.."
              autoComplete="username"
            />
            
            <label className="text-2xl m-1">Message</label>
            <textarea name="message" onChange={inputEvt}
              value={userInfo.message}
              className="w-full h-17 m-2 pl-3"
              required placeholder="Your Message"> </textarea>
           
            <button
              type="submit"
              className="btn btn-secondary mt-4 py-2 px-4" >
              Login
            </button>
          </form>
        </div>
      </div>


      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1198023128563!2d79.16484087471758!3d21.14763008368622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c73c54962fcb%3A0xbadbe0c4c7f02dd2!2sPardi%20police%20station!5e0!3m2!1sen!2sin!4v1745736289040!5m2!1sen!2sin"
        width="1500"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <br />
      <p className=" h-16 bg-slate-400 text-center text-3xl pt-3">@Thanks for Visiting 💗</p>

        </>
    )
}

export default ContactPage;