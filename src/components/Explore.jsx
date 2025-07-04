function Explore() {
  return (
    <main>
      <div className="body-div-container">
        <div className="explore-div-container">
        <h1> Explore other visions</h1>
        {/* <span>Share your moments.</span> */}


        <div className="body-div-timeline-container-unit">
          <h2>Vision: Hike Appalachian Trail: Main to Georgia</h2>

          <img
            className="timeline-example-image"
            src="./images/mount-washington.jpg"
            alt="Green hillish mountain top with blue sky, white clouds and blue puddles of water."
          />
          <p></p>
        </div>
        <br />

        <div className="body-div-timeline-container-unit">
          <h2>Vision: Starter Home</h2>
          <img
            className="timeline-example-image"
            src="./images/single_family_starter_home_pool_view.jpg"
            alt="pool side view of a one story brown ranch house"
          />
          <p></p>
        </div>
        <br/>

        <div className="body-div-timeline-container-unit">
          <h2>Vision: Fitness Studio Owner</h2>
          <img
            className="timeline-example-image"
            src="./images/pexels-mart-production-7318661.jpg"
            alt="a fitness studio in white"
          />
          <p></p>
        </div>
      <br/>



        


        {/* <div>
          <span>Click on an image to share to social media. </span>
        </div> */}
      </div>
      </div>
    </main>
  );
}

export default Explore;
