import React from "react";
import Login from "../login/login";
import "./signup.css";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div className="bigdiv">
      <div className="buttons">
        <h2>create your account</h2>
        <p>start capturing you thourgh with clarity </p>
        <label htmlFor="username" className="label">
          username
        </label>
        <input
          type="username"
          placeholder="enter your name"
          className="hello"
        />
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
          create account
        </button>
        <p>
          already have an account{" "}
          <Link to="/Login" className="link">
            login
          </Link>
        </p>
      </div>
    </div>
  );
}
