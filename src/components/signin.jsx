import React from "react";

function Signin() {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2 className="signin-title">Sign In</h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="signin-input"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="signin-input"
        />

        <button className="signin-btn">Login</button>

        <p className="signin-text">
          Don't have account? <span>Register</span>
        </p>
      </div>
    </div>
  );
}

export default Signin;
