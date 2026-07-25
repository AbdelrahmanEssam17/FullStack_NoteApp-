import React from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="bigdiv">
      <div className="navbar">
        <p>Note app</p>

        <div className="links">
          <ul className="linkss">
            {isAuthPage ? (
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
                <button className="logout">Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
