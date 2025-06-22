import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function CreateNewVision() {
  return (
    <main>
      <div className="body-div-container">
        <div className="body-vision-form-container">
          <div>
            <h1>Create a new Vision with</h1>
            <div className="vision-mini-logo-container">
               <img
                  src="./images/Visually_timeline_app_logo.svg"
                  alt="the company logo is the word visually written in cursive font in a red-pink color"
                />
            </div>
          </div>
          <div className="body-div-login-form-container">
          <div>
            <p>Upload your vision board.</p>

            <div className="drop-area">Upload collage here.</div>

            <form className="moment-form">
              <div>
                <label htmlFor="timeline_name"> Timeline Name:</label>
                <input type="text" name="timeline_name" id="timeline_name" />
              </div>

              <div>
                <label htmlFor="timeline_description">
                  {" "}
                  Why do you want to pursue this vision?:
                </label>
                <textarea
                  type="textarea"
                  name="timeline_description"
                  id="timeline"
                ></textarea>
              </div>

              <div>
                <label htmlFor="timeline_start_date">
                  Timeline start date:{" "}
                </label>
                <input
                  type="date"
                  name="timeline_start_date"
                  id="timeline_start_date"
                />
              </div>

              <div>
                <label htmlFor="moment_milestones"> Milestone:</label>
                <input
                  type="text"
                  name="moment_milestones"
                  id="moment_milestones"
                />
              </div>

              <div>
                <label htmlFor="timeline_steps"> Steps:</label>
                <input type="text" name="timeline_steps" id="timeline_steps" />
              </div>

              <div className="form-div-spacing">
                <input
                  className="form-button-style"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CreateNewVision;
