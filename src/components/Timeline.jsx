function Timeline(){
    return(
        <main> 
            <div className="body-div-container">
        
            <br/>
            <br/>
                <div className="body-div-timeline-container-unit">
                    <h2>Timeline: Community Fitness Instructor</h2>
                    <img className="timeline-example-image" src="public/images/outdoor-community-yoga.jpg" alt = "Over 30 people are outside doing a stretch on the grass. The people are wearing work out clothes and are on their knee with hands outstretched turning to the side."/>
                </div>
                <br/>  
                <div className="body-div-timeline-container-unit">
                    <h2>Timeline: Hike Appalachian Trail</h2>
                    <img className="timeline-example-image" src="public/images/mount-washington.jpg" alt = "Green hillish mountain top with blue sky, white clouds and blue puddles of water."/>
                </div>
                <br/>         
                <div className="body-div-timeline-container-unit">
                    <h2>Timeline: Starter Home</h2>
                    <img className="timeline-example-image" src="public/images/single_family_starter_home_pool_view.jpg" alt="pool side view of a one story brown ranch house"/>
                    <br/>
                </div>
                <br/>


        </div>

            <section className ="view-action-bottom-buttons">
                <a className="nav-a-button" href="#" target ="_self">Create New Timeline</a>
            </section>
        </main>
    )
};

export default Timeline;