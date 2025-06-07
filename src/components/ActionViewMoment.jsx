function ActionViewMoment() {
  return (
    <main>
      <div className="body-div-container">
        <br />
        <br />
        <div className="body-div-timeline-container-unit">
          <h1>My [moment_title] moment.</h1>

          <img
            className="timeline-example-image"
            src="public/images/single_family_starter_home_pool_view.jpg"
            alt="pool side view of a one story brown ranch house"
          />
          <br />
          <div>
            <span> Description:[moment_description]</span>{" "}
          </div>
          <div>
            <span> Status:[moment_status]</span>{" "}
          </div>
          <div>
            <span> Feelings:[moment_feelings]</span>
          </div>
          <div>
            <span> Milestone:[moment_milestone]</span>
          </div>
          <div>
            <span> Date of monent:[moment_date]</span>
          </div>
        </div>
      </div>

      <section className="view-action-bottom-buttons">
        <a className="nav-a-button" href="#" target="_self">
          Share
        </a>
        <a className="nav-a-button" href="#" target="_self">
          Edit
        </a>
        <a className="nav-a-button" href="#" target="_self">
          View Timeline
        </a>
      </section>
    </main>
  );
}

export default ActionViewMoment;
