import React, { useState } from "react";
import "./login.scss";
import { AuthRequest } from "../../../../model/request/AuthRequest";
import AccountAPI from "../../../../api/Login/AccountAPI";
import { AccountModel } from "../../../../model/request/AccountModel";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Login: 1, Signup: 2
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const [loginCredentials, setLoginCredentials] = useState<AuthRequest>({
    gmail: "",
    password: ""
  });
  const [accountModel, setAccountModel] = useState<AccountModel>({
    name: "",
    gmail: "",
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

  const handleInputSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log("====================================");
    console.log("Name:", name);
    console.log("Value:", value);

    console.log("====================================");
    setAccountModel({ ...accountModel, [name]: value });
    console.log("Signup model", accountModel);
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
      if (response.status === 200) {
        const token = response.data.token;
        // Store token in local storage
        localStorage.setItem("token", token);
        navigate("/homepage");
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError("Login failed. Please check your username and password.");
    } finally {
      setLoading(false);
    }
  };

  const signUpFunction = async () => {
    setError("");
    setLoading(true);
    try {
      console.log("====================================");
      console.log("sign up model:", accountModel);
      console.log("====================================");
      const response = await AccountAPI.registerAccount(accountModel);
      console.log("signup successful:", response);
      if (response.status === 201) {
        console.log("Into handle success");

        setPage(2);
      }
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
          <input
            type="text"
            className="input"
            placeholder="Name"
            name="name"
            onChange={handleInputSignupChange}
          />
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="gmail"
            onChange={handleInputSignupChange}
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
            onChange={handleInputSignupChange}
          />
        </div>
        <button className="submit-btn" onClick={signUpFunction}>
          Sign up
        </button>
      </div>
      <div className={`login ${page === 1 ? "slide-up" : ""}`}>
        <div className="center">
          <h2 className="form-title" id="login" onClick={onClickLoginSwitch}>
            <span>or</span>Log in
          </h2>
          <div className="form-holder">
            <input
              type="text"
              value={loginCredentials.gmail}
              onChange={handleInputChange}
              className="input"
              placeholder="gmail"
              name="gmail"
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
