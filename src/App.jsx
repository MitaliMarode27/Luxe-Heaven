import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import Login from "./Login";
import Home from "./Home";
import About from "./About";
import ContactPage from "./ContactPage";
import Service from "../Service";
import FullHome from "./FullHome";
import LuxuryPage from "./LuxuryPage";
import HowItWork from "./HowItWork";
import ModularPage from "./ModularPage";
import Navbar from "./Navbar";
import Logout from "../Logout";
import Signup from "../Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { user,loading } = useContext(UserContext);

   if (loading) {
    return (
      <>
        <Navbar />
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    );
  }
  
  return (
    <>
      <Navbar />
       <ToastContainer autoClose={2000} rtl={false} closeOnClick />
      <Routes>
        {!user ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/service" element={<Service />} />
            <Route path="/modular" element={<ModularPage />} />
            <Route path="/fullhome" element={<FullHome />} />
            <Route path="/luxury" element={<LuxuryPage />} />
            <Route path="/howitworks" element={<HowItWork />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;