function Action(){
    return (
        <main>
            <div className="main-div-action-h1">
                <h1>What action would you like to take?</h1>
            </div>
            <form className="main-action-form">   
                <div>
                    <input type="radio" id="action_upload_progress" name="action_type" value="ActionUploadProgress"/>
                    <label> Upload progress, feelings, or blocker for your vision.</label>
                </div>
                <br/>

                <div>
                    <input type="radio" id="action_modify_timeline" name="action_type" value="ActionModifyTimeline"/>
                    <label> Modify a timeline like add milestone of details.</label>
                </div>
                <br/>

                <div>
                    <input type="radio" id="action_create_timeline" name="action_type" value="ActionCreateTimeline"/>
                    <label> Create a new timeline or vision.</label>
                </div>

                <div className="main-action-form-div-submit-container"><input className="main-action-form-div-input" type="submit" value="Submit"/>
                </div>

    `
            </form>

    </main>
    )
}; 

export default Action;