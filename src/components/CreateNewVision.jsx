import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateNewVision() {
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


  const [formData, setFormData] = useState(localStorage.getItem("formData") || {});

  // const [formData, setFormData] = useState({
  //   timeline_name: "",
  //   timeline_description: "",
  //   timeline_start_date: "",
  //   timeline_steps: "",
  // });


  const handleCreateNewVision = (e) => {
    e.preventDefault();

    const body = {
      timeline_name: e.target.timeline_name.value,
      timeline_description: e.target.timeline_description.value,
      timeline_start_date: e.target.timeline_start_date.value,
      timeline_steps: e.target.timeline_steps.value,
    };
    console.log(body);

    console.log(e.target.timeline_name.value);
    console.log(e.target.timeline_description.value);
    console.log(e.target.timeline_start_date.value);
    console.log(e.target.timeline_steps.value);

    fetch(`${API_BASE_URL}/api/create/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log("body is ... ");
        // console.log(body);
        console.log(result);
        console.log(result.data);
        console.log("uploaded a new vision");
        localStorage.setItem("formData", JSON.stringify(result.data));
        setFormData(result.data);
        navigate("/timeline");
      })
      .catch((error) => console.log(error));
  };

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

              <form className="moment-form" onSubmit={handleCreateNewVision}>
                <div>
                  <label htmlFor="timeline_name"> Vision Name:</label>
                  <input type="text" name="timeline_name" id="timeline_name" />
                </div>

                <div>
                  <label htmlFor="timeline_description">
                    {" "}
                    Why do you want to pursue this vision?:
                  </label>
                  <textarea
                    type="text"
                    name="timeline_description"
                    id="timeline_description"
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

                {/* <div>
                <label htmlFor="moment_milestones"> Milestone:</label>
                <input
                  type="text"
                  name="moment_milestones"
                  id="moment_milestones"
                />
              </div> */}

                <div>
                  <label htmlFor="timeline_steps"> Steps:</label>
                  <input
                    type="text"
                    name="timeline_steps"
                    id="timeline_steps"
                  />
                </div>
                <br />
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
