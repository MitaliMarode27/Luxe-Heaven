import { useEffect, useState } from "react";
import img from "./ProjectImages/loginPageImg.png";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../shared/validation.mjs";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../UserContext"; 

const Login = () => {
    const [userInfo, SetUserInfo] = useState({
        email:"",
        password:""
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();
     const { setToken } = useContext(UserContext); 
  
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
          : "Validation failed",{autoClose : 2000, toastId:'login-success', closeOnClick: true}
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
    toast.success("Logged in successfully");
    localStorage.setItem("token", result.token);
    setToken(result.token); // Set the token in context
    SetUserInfo({
      email :"",
      password :""
    });
setTimeout(() => {
    navigate("/");
  }, 1000);
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
        style={{ height: "100vh", width: "100%", columnGap: "1rem" }}
      >

<div className="d-flex align-items-center justify-center  py-5 shadow-lg mt-5"
          >
        <div>
          <img
            style={{ height: "500px", width: "600px" }}
            src={img}
            alt="Login Illustration"
          />
        </div>

        <div
          className=" p-4 px-5"
          style={{ height: "70%", width: "40%" }}
        >
          <h1 className="text-4xl mb-4 text-center text-slate-500">Login</h1>

          <form onSubmit={submit}>
            <label className="text-2xl m-1">Email</label>
            <input
              type="email"
              onChange={inputEvt}
              value={userInfo.email}
              style={{border:"1px solid gray"}}
              name="email"
              className="w-full h-14 m-2 pl-3 border-slate-400"
              required
              placeholder="Enter Your Email.."
              autoComplete="username"
            />
            
            <label className="text-2xl m-1">Password</label>
            <input
              type="password"
              onChange={inputEvt}
              value={userInfo.password}
              style={{border:"1px solid gray"}}
              name="password"
              className="w-full h-14 m-2 pl-3  border-slate-400"
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
        </div>
        </div>
      </div>


      <p className=" h-16 bg-slate-400 text-center text-3xl pt-3">@Thanks for Visiting 💗</p>
    </>

    )}

export default Login;