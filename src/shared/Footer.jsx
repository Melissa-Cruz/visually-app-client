import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Footer(){

    return(

        <footer className="footer-container">
            <div>
                <h3>Links</h3>
                <div>


       
                <Link  to="/">Home</Link>

                </div>
                <div>
                <Link to="/timeline">Visions</Link>                </div>
                <div>
                <Link to="/createnewvision">Add a Vision</Link>
                </div>
                <div>
<Link  to="/explore">Explore</Link>                </div>
            </div>

            <div>
                <h3>A Product of</h3>
                
                <a href="#" target="_blank">Melissa Cruz</a> 
            </div>


        </footer>

    )
};

export default Footer;