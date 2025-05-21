import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the token from localStorage
    localStorage.removeItem("token");

    // Redirect to the login page
    navigate("/login");
  }, [navigate]);

  return (
    <div className="text-center mt-5">
      <h1>You have been logged out successfully!</h1>
      <p>Redirecting to the login page...</p>
    </div>
  );
};

export default Logout;