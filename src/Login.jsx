import { useState } from "react";
import img from "./ProjectImages/AboutpageImg1.jpg";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../shared/validation.mjs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const [userInfo, SetUserInfo] = useState({
        email:"",
        password:""
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const inputEvt = (evt) => {
      const { name, value } = evt.target;
      SetUserInfo((prevDetails) => ({
        ...prevDetails,
        [name]: value
      }));
     }
  

     const userAuthentication = async () => {
       try {
        const response = await fetch("https://localhost:")
       } catch (error) {
        
       }
     }


     const submit = async (evt) => {
       evt.preventDefault();
  
          try {
      loginSchema.parse(userInfo);
    } catch (validationError) {
      toast.error(
        validationError.errors
          ? validationError.errors[0].message
          : "Validation failed"
      );
      return;
    }
       

       try{
        const response = await fetch(`http://localhost:5000/login`,{
          method:"POST",
          headers:{
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
            email: userInfo.email, // Use userInfo.email
            password: userInfo.password, // Use userInfo.password
          }),
       });
      
  if(response.ok){
    const result = await response.json();
    alert(result.message);
    localStorage.setItem("token", result.token);
    navigate("/");
    SetUserInfo({
      email :"",
      password :""
    });
  }
  else{
    alert("Invalid credential. Please try again");
    SetUserInfo({
      email :"",
      password :""
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
          className="bg-slate-400 p-4 px-5"
          style={{ height: "70%", width: "40%" }}
        >
          <h1 className="text-4xl text-center text-white">Login Form</h1>

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
            
            <label className="text-2xl m-1">Password</label>
            <input
              type="password"
              onChange={inputEvt}
              value={userInfo.password}
              name="password"
              className="w-full h-14 m-2 pl-3"
              required
              placeholder="Enter Your Password.."
              autoComplete="current-password"
            />
           <button
              type="submit"
              className="btn btn-secondary mt-4 py-2 px-4" >
              Login
            </button>
          </form>
           {error && (
            <div className=" ml-6 text-xl text-center p-2 bg-gray-200" style={{ color: "red",  marginBottom: "10px" }}>{error}</div>
          )}
      <ToastContainer/>
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

    )}

export default Login;