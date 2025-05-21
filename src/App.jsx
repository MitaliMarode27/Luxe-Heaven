import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import "./index.css"
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Signup from "../Signup";
import Login from "./Login";
import Logout from "../Logout";
import UserProvider from "../UserContext";
import ProtectedRoute from "./ProtectedRoute";
import ContactPage from "./ContactPage";
import Service from "../Service";

const App = () => { 
  return (
    <UserProvider>
      <Routes>
      <Route path="/navbar" element={<Navbar/>} />
       <Route path="/" element={<ProtectedRoute> <Home/></ProtectedRoute>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/fullhome" element={<FullHomeInterior/>} />
        <Route path="/luxury" element={<LuxuryInterior/>} />
        <Route path="/howitworks" element={<HowItWorks/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/logout" element={<Logout/>} />
      </Routes> 
      </UserProvider>
  );
};

export default App;