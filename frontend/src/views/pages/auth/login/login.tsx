import React, { useState } from "react";
import "./login.scss";

const Login = () => {
  // Login: 1, Signup: 2
  const [page, setPage] = useState(1);

  console.log(page === 1 ? "slide-up login" : "login");

  const onClickLoginSwitch = () => {
    if (page === 1) {
      setPage(2);
    }
  };
  const onClickSignupSwitch = () => {
    setPage(1);
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
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <button className="submit-btn">Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
