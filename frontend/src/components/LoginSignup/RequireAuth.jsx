import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom"; // Import Outlet from react-router-dom
import useAuth from "../../../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.roles?.find(role => allowedRoles?.includes(role))) {
      navigate('/login'); // Redirect to the login page
    }
  }, [auth, allowedRoles, navigate]);

  return (
    auth?.roles?.some(role => allowedRoles?.includes(role)) ? <Outlet /> : null
    // Use Outlet to render child routes
  );
}

export default RequireAuth;
