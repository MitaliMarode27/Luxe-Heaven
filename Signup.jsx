import { useState } from "react";
import img from "../react-project/src/ProjectImages/AboutpageImg1.jpg";
import Navbar from "./src/Navbar";
import { signupSchema } from "../shared/validation.mjs";
import { MenuBook } from "@material-ui/icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const [showInfo, setShowinfo] = useState([]);
  const [displaymsg, setdisplaymsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const inputEvt = (evt) => {
    const { name, value } = evt.target;
    setUserInfo((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const showDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/signup/fetch`, {
        method: "GET",
      });
      if (response.ok) {
        const result = await response.json();
        setShowinfo(result.data || []);
        setdisplaymsg(true);
      } else {
        setShowinfo([]);
        setdisplaymsg(false);
      }
    } catch (error) {
      console.error(error);
      setShowinfo([]);
      setdisplaymsg(false);
    } finally {
      setLoading(false);
    }
  };

  const submit = async (evt) => {
    evt.preventDefault();

    // Client-side validation using Zod
     try {
      signupSchema.parse(userInfo);
    } catch (validationError) {
      toast.error(
        validationError.errors
          ? validationError.errors[0].message
          : "Validation failed"
      );
      return;
    }


    setError(""); // Clear previous errors

    try {
      const response = await fetch(`http://localhost:5000/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      if (response.ok) {
        const result = await response.json();
        setUserInfo({
          name: "",
          email: "",
          phone: "",
          password: "",
        });
        alert("Your Form Has been Submitted!...");
        showDetails(); // Optionally refresh user info
      } else {
        const result = await response.json();
        setError(result.message || "Error in Submitting the Form!...");
      }
    } catch (error) {
      setError("Failed to submit the form!");
      console.error("Failed to submit the form:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="d-flex align-items-center justify-center" style={{ height: "80vh", width: "100%", columnGap: "1rem" }}>
        <div>
          <img style={{ height: "500px", width: "500px" }} src={img} alt="" />
        </div>

        {displaymsg && (
          <div className="bg-slate-100 p-4">
            <h1 className="text-center text-lg pb-2">User Info</h1>
            {showInfo.length === 0 ? (
              <p>No User Information Available</p>
            ) : (
              Array.isArray(showInfo) &&
              showInfo.map((val, index) => (
                <div key={index}>
                  <ul className="shadow-lg p-4 mb-3 text-base">
                    <li><strong>UserName</strong> {val.name}</li>
                    <li><strong>Email</strong>: {val.email}</li>
                    <li><strong>Phone Number:</strong> {val.phone}</li>
                  </ul>
                </div>
              ))
            )}
          </div>
        )}

        <div className="bg-slate-400 p-4 px-5" style={{ height: "100%", width: "40%" }}>
          <button type="button" onClick={showDetails}><MenuBook />History</button>
          <h1 className="text-4xl text-center text-white">Registration Form</h1>
          <form onSubmit={submit}>
            <label className="text-2xl m-1">Name</label>
            <input type="text" onChange={inputEvt} value={userInfo.name} name="name" className="w-full m-2 h-13 pl-3" required placeholder="Enter Your Name.." />

            <label className="text-2xl m-1">Email</label>
            <input type="email" onChange={inputEvt} value={userInfo.email} name="email" className="w-full h-13 m-2 pl-3" required placeholder="Enter Your Email.." />

            <label className="text-2xl m-1">Phone</label>
            <input type="number" onChange={inputEvt} value={userInfo.phone} name="phone" className="w-full h-13 m-2 pl-3" required placeholder="Enter Your Phone.." />

            <label className="text-2xl m-1">Password</label>
            <input type="password" onChange={inputEvt} value={userInfo.password} name="password" autoComplete="current-password" className="w-full h-13 m-2 pl-3" required placeholder="Enter Your Password.." />

            <button className="btn btn-secondary mt-4 py-2 px-4">Register Now</button>
          </form>
                     {error && (
            <div className=" ml-6 text-xl mt-2 text-center p-2 bg-gray-200" style={{ color: "red",  marginBottom: "10px" }}>{error}</div>
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
      <p className="h-16 bg-slate-400 text-center text-3xl pt-3">@Thanks for Visiting 💗</p>
    </>
  );
};

export default Signup;