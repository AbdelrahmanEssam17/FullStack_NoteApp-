import React from "react";
import { Link } from "react-router-dom";
import Signup from "../signup/signup";
import "./login.css";
export default function Login() {
  return (
    <div className="bigdiv">
      <div className="buttons">
        <label htmlFor="email" className="label">
          email
        </label>
        <input type="email" placeholder="enter your email" className="hello" />
        <label htmlFor="password" className="label">
          password
        </label>
        <input
          type="password"
          placeholder="enter your password"
          className="hello"
        />
        <button type="submit" className="submit">
          submit
        </button>
        <p>
          dont have an a account{" "}
          <Link to="/Signup" className="link">
            signup
          </Link>
        </p>
      </div>
    </div>
  );
}
