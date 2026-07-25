import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bigdiv">
      <div className="navbar">
        <p>Note app</p>

        <div className="links">
          <ul className="linkss">
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

            <li>
              <button>logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
