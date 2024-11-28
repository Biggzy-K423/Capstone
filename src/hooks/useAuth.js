import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
  const location = useLocation();

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loginStatus);
  }, [location.pathname]);

  return isLoggedIn;
};

export default useAuth;
