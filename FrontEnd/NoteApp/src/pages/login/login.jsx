import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login(title = "login") {
  return (
    <div className="bigdiv">
      <div className="buttons">
        <h2>Welcome Back</h2>

        <p>
          Enter your credentials to access your
          <br />
          workspace.
        </p>

        <label htmlFor="email" className="label">
          Email
        </label>
        <input type="email" placeholder="Enter your email" className="hello" />

        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          className="hello"
        />

        <button type="submit" className="submit">
          Login to workspace
        </button>

        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="link">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
