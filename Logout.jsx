import { useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";

const Logout = () => {
  const { setUser, setToken } = useContext(UserContext);
  const navigate = useNavigate();
  const hasLoggedOut = useRef(false);

  useEffect(() => {
    if (hasLoggedOut.current) return;
    hasLoggedOut.current = true;

    localStorage.removeItem("token");
    setUser(null);
    if (setToken) setToken(null);
    toast("Logged out successfully!",{autoClose : 2000,toastId:'logout-success', closeOnClick: true});
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }, [setUser, setToken, navigate]);

  return (
    <div className="text-center mt-5">
      <h1>You have been logged out successfully!</h1>
      <p>Redirecting to the login page...</p>
    </div>
  );
};

export default Logout;