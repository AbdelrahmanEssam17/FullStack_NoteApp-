import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../apis/auth";
import { register as registerSchema } from "../../schemas/auth.schema";

export default function Signup() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = registerSchema.safeParse({
      username,
      email,
      password,
    });

    if (!result.success) {
      console.log(result.error.issues);
      return;
    }

    await register({
      username,
      email,
      password,
    });

    console.log("Register successful");
    navigate("/otp");
  };

  return (
    <div className="bigdiv">
      <form className="buttons" onSubmit={handleSubmit}>
        <h2>Create your account</h2>
        <p>Start capturing your thoughts with clarity</p>

        <label htmlFor="username" className="label">
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Enter your name"
          className="hello"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />

        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="hello"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />

        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="hello"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />

        <button type="submit" className="submit">
          Create Account
        </button>

        <p>
          Already have an account?{" "}
          <Link to="/login" className="link">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
