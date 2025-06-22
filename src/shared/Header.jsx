import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header({ user, setUser }) {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
//   const handleLogout = (e) => {};

  // const url = "https://course-project-codesquad-comics-server.onrender.com/logout";

  const handleLogout = (e)=>{
  fetch(`${API_BASE_URL}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // it doesn't specify in the directions but I need it needs a body
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setUser({});
      localStorage.removeItem("user");
      navigate("/admin");
    })
    .catch((error) => {
      console.log(error);
      navigate("/signup");
    });
  };
  return (
    <header>
      <div className="header-div-container">
        <div className="header-div-logo-container">
          <a href="#" target="_self">
            <img
              src="./images/Visually_timeline_app_logo.svg"
              alt="the company logo is the word visually written in cursive font in a red-pink color"
            />
          </a>
        </div>

        {/* <div class="header-nav-account-container"> */}
        {/* the nav was working */}
        {/* <nav class="header-nav-account-container">
                        <a class="nav-a-button" href="#" target="_self">Login</a>
                        <div class="divider"/> 
                        <a class="nav-a-button" href="#" target="_self">Sign Up</a>
                    </nav> */}
        {/* </div> */}

        <nav className="header-nav-account-container">
          {/* <Link to="/">HOME</Link> */}

          {/* <Link to="/about">ABOUT</Link> */}
          {user.username ? (
            ((<Link className="nav-a-button" to="/admin">Admin</Link>),
            (
              <a href="#" onClick={handleLogout}>
                LOGOUT
              </a>
            ))
          ) : (
            <Link className="nav-a-button"   to="/login">Login</Link>
          )}

          {/* <Link to="/Login">Login</Link> */}

          <div className="divider" />
          <Link className="nav-a-button"  to="/signup">Sign Up</Link>
        </nav>
      </div>

      <nav className="header-nav-lower-container">
        <a className="nav-a-button" href="#" target="_self">
          Timeline
        </a>
        <div className="divider" />
        <div className="divider" />
        <Link className="nav-a-button"   to="/createnewvision">Add a Vision</Link>
        <div className="divider" />
        <div className="divider" />
        <Link className="nav-a-button"   to="/explore">Explore</Link>
{/* 
        <a className="nav-a-button" href="#" target="_self">
          Explore
        </a> */}
      </nav>

      <div>
        <i className="fa-solid fa-bars"></i>
      </div>
    </header>
  );
}

export default Header;
