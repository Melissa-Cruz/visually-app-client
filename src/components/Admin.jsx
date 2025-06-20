import React, { useEffect, useState } from "react";

function Admin() {

  const API_BASE_URL= import.meta.env.VITE_API_BASE_URL;
  const [timelines, setTimelines] = useState([]);


  return (
  
  <main>
  <div>
    
    
    Admin

    Currently set up as the page the user see's after logging in. So after they log in they  should see their Vision/Timelines.




  </div>
  </main>)
  ;
}

export default Admin;
