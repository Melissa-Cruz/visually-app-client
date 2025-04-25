function CreateNewTimeline() {
  return (
    <main className="main-add-moment-container">
      <div>
        <h1>Create a new timeline.</h1>
      </div>

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
            <label htmlFor="timeline_start_date">Timeline start date: </label>
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

          <div className="main-action-form-div-submit-container">
            <input
              className="main-action-form-div-input"
              type="submit"
              value="Save"
            />
          </div>
        </form>
      </div>
    </main>
  );
}

export default CreateNewTimeline;
