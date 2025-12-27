import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Helper to check if JWT is valid (not expired)
function isTokenValid(token) {
  if (!token) return false;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    // exp is in seconds
    if (!payload.exp) return true;
    return payload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
}

function CheckAuth({ children, isProtected }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const valid = isTokenValid(token);

    if (isProtected) {
      if (!valid) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
      } else {
        setLoading(false);
      }
    } else {
      if (valid) {
        navigate("/");
      } else {
        setLoading(false);
      }
    }
  }, [navigate, isProtected]);

  if (loading) {
    return <div>loading...</div>;
  }
  return children;
}

export default CheckAuth;
