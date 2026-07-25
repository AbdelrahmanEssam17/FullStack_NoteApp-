import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { login as loginAPI } from "../../apis/auth";
import { login as loginSchema } from "../../schemas/auth.schema";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = loginSchema.safeParse({ email, password });

    if (!result.success) {
      setError("Please check your input");
      setLoading(false);
      return;
    }

    try {
      const response = await loginAPI(email, password);
      console.log("Login response:", response);

      // Assuming response contains token
      if (response.token) {
        login(response.token, response.user);
        navigate("/home");
      }
    } catch (err) {
      setError(err?.message || "Login failed");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bigdiv">
      <form className="buttons" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>

        <p>
          Enter your credentials to access your
          <br />
          workspace.
        </p>

        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="hello"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="submit" disabled={loading}>
          {loading ? "Loading..." : "Login to workspace"}
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="link">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
