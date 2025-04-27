import React, { useState, useEffect } from "react";

function Home() {
  const [moments, setMoments] = useState([]);

  const url = "https://visually.free.beeceptor.com/api/moments";

  useEffect(() => {
    fetch(`${url}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setMoments(result.data.moments);
      });
  });

  return (
    <main>
      <div className="body-div-container">
        <h1>Bring your next vision board into vision steps.</h1>
        <br />

        <div className="body-div-timeline-container-unit">
          <h2>Vision: Community Fitness Instructor</h2>
          <img
            className="timeline-example-image"
            src="public/images/outdoor-community-yoga.jpg"
            alt="People are outside doing a stretch on the grass. The people are wearing work out clothes and are on their knee with hands outstretched turning to the side."
          />
        </div>

        <br />

        <div>
          <h3>Vision Steps</h3>{" "}
        </div>
        <div className="body-div-vision-steps-collage-container">
          <div>
            <h3>Vision Step: Explore Studios</h3>
            <img
              className="timeline-example-image"
              src="public/images/indoor-community-yoga.jpg"
              alt="People are indoors in work out clothes laying out their identical yoga mats"
            />
          </div>
          <div className="div-time-bar"></div>
          <div>
            <h3>Vision Step: Choose a Home Studio </h3>
            <img
              className="timeline-example-image"
              src="public/images/puppy-pose-in-class-yoga.jpg"
              alt="Three people lined up  doing puppy pose on their yoga mat."
            />
          </div>
          <div className="div-time-bar"></div>
          <div className="timeline-example-image">
            <h3>Vision Step: Saving for Teacher Training</h3>
            <img
              class="timeline-example-image"
              src="public/images/savings-calculator-on-laptop.jpg"
              alt="Cash piles, calculator and spreadsheet open on laptop. "
            />
          </div>

          <div className="div-time-bar"></div>

          <div>
            <h3>Vision Step: Enjoy the Practice</h3>
            <img
              className="timeline-example-image"
              src="public/images/yoga-class-touch-toes.jpg"
              alt="FPeople are in yoga attire on their mat all standing up and reaching for their toes."
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
