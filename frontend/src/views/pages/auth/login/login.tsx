import React, { useState } from "react";
import "./login.scss";
import { AuthRequest } from "../../../../model/request/AuthRequest";
import AccountAPI from "../../../../api/Login/AccountAPI";
const Login = () => {
  // Login: 1, Signup: 2
  const [page, setPage] = useState(1);
  const [loginCredentials, setLoginCredentials] = useState<AuthRequest>({
    username: "",
    password: ""
  });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onClickLoginSwitch = () => {
    if (page === 1) {
      setPage(2);
    }
  };
  const onClickSignupSwitch = () => {
    setPage(1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log("====================================");
    console.log("Name:", name);
    console.log("Value:", value);

    console.log("====================================");
    setLoginCredentials({ ...loginCredentials, [name]: value });
    console.log("LoginCredentials", loginCredentials);
  };

  const loginFunction = async () => {
    setError("");
    setLoading(true);
    try {
      console.log("====================================");
      console.log("Login credentials:", loginCredentials);
      console.log("====================================");
      const response = await AccountAPI.loginAccount(loginCredentials);
      console.log("Login successful:", response);
      // Handle successful login, e.g., store token or redirect
    } catch (err) {
      console.error("Login failed:", err);
      setError("Login failed. Please check your username and password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-structor">
      <div className={`signup ${page == 2 ? "slide-up " : ""}`}>
        <h2 className="form-title" id="signup" onClick={onClickSignupSwitch}>
          <span>or</span>Sign up
        </h2>
        <div className="form-holder">
          <input type="text" className="input" placeholder="Name" />
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
        </div>
        <button className="submit-btn">Sign up</button>
      </div>
      <div className={`login ${page === 1 ? "slide-up" : ""}`}>
        <div className="center">
          <h2 className="form-title" id="login" onClick={onClickLoginSwitch}>
            <span>or</span>Log in
          </h2>
          <div className="form-holder">
            <input
              type="email"
              value={loginCredentials.username}
              onChange={handleInputChange}
              className="input"
              placeholder="Email"
              name="username"
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              value={loginCredentials.password}
              onChange={handleInputChange}
            />
          </div>
          <button
            className="submit-btn"
            onClick={loginFunction}
            disabled={loading}
          >
            Log in
          </button>
          {loading ? "Logging in..." : "Log in"}
          {error &&
            <p className="error-message">
              {error}
            </p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
