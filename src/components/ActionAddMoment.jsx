function ActionAddMoment() {
  return (
    <main className="main-add-moment-container">
      <div>
        <h1>Add a Moment</h1>
        <p>Take a moment to upload your progress below.</p>
      </div>

      <div>
        <div className="drop-area">Upload image here to preview.</div>

        <form className="moment-form">
          <div>
            <label htmlFor="moment_title"> Moment Title:</label>
            <input type="text" name="moment_title" id="moment_title" />
          </div>

          <div>
            <label htmlFor="moment_description"> Description:</label>
            <textarea
              type="textarea"
              name="moment_description"
              id="moment_description"
            ></textarea>
          </div>

          <div>
            <label htmlFor="moment_status"> Status:</label>
            <select name="moment_status" id="moment_status">
              <option value="" disabled selected>
                Select
              </option>
              <option value="complete">Complete</option>
              <option value="in_progress">In Progress</option>
            </select>
          </div>

          <div>
            <label htmlFor="moment_feelings"> Feelings:</label>
            <input type="text" name="moment_feelings" id="moment_feelings" />
          </div>

          <div>
            <label htmlFor="moment_milestone"> Milestone:</label>
            <input
              type="text"
              name="moment_milestone"
              id="moment_milestone"
            />
          </div>

          <div>
            <label htmlFor="moment_date"> Date of moment:</label>
            <input
              type="date"
              name="moment_moment_date"
              id="moment_date"
            />
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

export default ActionAddMoment;
