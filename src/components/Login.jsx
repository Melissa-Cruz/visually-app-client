import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login({ user, setUser }) {
  const navigate = useNavigate();

  if (user.username) {
    navigate("/createnewvision");
  }

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    console.log(body);

    fetch(`${API_BASE_URL}/auth/login/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        console.log(result.data);
        console.log("success the Login");
        localStorage.setItem("user", JSON.stringify(result.data));
        setUser(result.data);
        navigate("/createnewvision");
      })
      // .then(navigate("/admin"))
      .catch((error) => console.log(error));
  };

  return (
    <main>
      <div className="body-div-container">
        <div className="body-main-div-white-container">
          <div className="div-h1-white-container">
            <div className="main-div-mini-logo-container">
              <a href="#" target="_self">
                <img
                  src="./images/Visually_timeline_app_logo.svg"
                  alt="the company logo is the word visually written in cursive font in a red-pink color"
                />
              </a>
            </div>
            <div className="div-h1-container">
                <h1>Welcome to Visually</h1>
            <p className="subtitle-slogan">
              Bring your vision board into vision steps.
            </p>
            </div>
          </div>

          <div className="body-div-login-form-container">
            <form onSubmit={handleLoginFormSubmit}>
              <div className="form-div-spacing">
                <label htmlFor="username:">Username</label>
                <input
                  className="login-form-input-style"
                  type="username"
                  name="username"
                  id="username"
                  placeholder="username"
                />
              </div>

              <div className="form-div-spacing">
                <label htmlFor="password:">Password</label>
                <input
                  className="login-form-input-style"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>

              <div className="form-div-spacing">
                <a href="#" target="_self">
                  Forgot password
                </a>
              </div>

              <div className="form-div-spacing">
                <input
                  className="form-button-style"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>

            {/* <div className="form-div-spacing">
              <div className="form-div-spacing">Or</div>
              <button className="form-button-style">
                <a href="#" target="_blank">
                  {" "}
                  Continue with Google
                </a>{" "}
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
