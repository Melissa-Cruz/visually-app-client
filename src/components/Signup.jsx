import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ user, setUser }) {
  const navigate = useNavigate();
  if (user.username) {
    navigate("/admin");
  }

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleSignupFormSubmit = (e) => {
    e.preventDefault();

    const body = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      emailAddress: e.target.emailAddress.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };

    fetch(`${API_BASE_URL}/auth/register`, {
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
        console.log("success for sign up");
        localStorage.setItem("user", JSON.stringify(result.data));

        setUser(result.data);
        navigate("/admin");
      })
      .catch((error) => console.log(error));
  };


  const handleRegisterWithGoogle = (e) =>{
    e.preventDefault();

    fetch(`${API_BASE_URL}/auth/login/google`,  {
        mode:'cors',
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          
        },
        // body: JSON.stringify(body),
      })
        // .then((response) => response.json())
        // .then((result) => {
        //   console.log(result);
        //   console.log(result.data);
        //   console.log("success for sign up");
        //   localStorage.setItem("user", JSON.stringify(result.data));
  
        //   setUser(result.data);
        //   navigate("/admin");
        // })
        // .catch((error) => console.log(error));
    };
  


//   }


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
            <form onSubmit={handleSignupFormSubmit}>
              <div className="form-div-spacing">
                <label htmlFor="firstName">First Name</label>
                <input
                  className="login-form-input-style"
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                />
              </div>

              <div className="form-div-spacing">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className="login-form-input-style"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                />
              </div>

              <div>
                <label htmlFor="emailAddress">Email</label>
                <input
                  className="login-form-input-style"
                  type="email"
                  name="emailAddress"
                  id="emailAddress"
                  placeholder="Email"
                />
              </div>

              <div>
                <label htmlFor="username">Username</label>
                <input
                  className="login-form-input-style"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                />
              </div>

              <div className="form-div-spacing">
                <label htmlFor="password">Password</label>
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

            <div className="form-div-spacing">
              <div className="form-div-spacing">Or</div>


              {/* <button className="form-button-style" onClick={handleRegisterWithGoogle}> */}
                <form  action="${API_BASE_URL}/auth/login/google" method="GET">
                    <input className="form-button-style" type="submit" value="Continue with Google"/>
                </form>
                {/* <a href="#" target="_blank">
                  {" "} */}
                  {/* Continue with Google */}
                {/* </a>{" "} */}
              {/* </button> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signup;
