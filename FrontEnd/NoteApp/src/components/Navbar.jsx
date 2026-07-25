import React, { useContext } from "react";
import "./navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { token, logout } = useContext(AuthContext);

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="bigdiv">
      <div className="navbar">
        <p
          onClick={() => navigate(token ? "/home" : "/login")}
          style={{ cursor: "pointer" }}
        >
          Note app
        </p>

        <div className="links">
          <ul className="linkss">
            {!token || isAuthPage ? (
              <>
                <li>
                  <Link to="/login" className="point">
                    Login
                  </Link>
                </li>

                <li>
                  <Link to="/signup" className="point">
                    Signup
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <button className="logout" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
