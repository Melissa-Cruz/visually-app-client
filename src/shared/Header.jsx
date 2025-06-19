function Header(){
    return(
        <header>

            <div class="header-div-container">

                <div class="header-div-logo-container">
                    <a href="#" target ="_self">
                        <img src="./images/Visually_timeline_app_logo.svg" alt="the company logo is the word visually written in cursive font in a red-pink color"/>

                    </a>
                </div>

                {/* <div class="header-nav-account-container"> */}
                    <nav class="header-nav-account-container">
                        <a class="nav-a-button" href="#" target="_self">Login</a>
                        <div class="divider"/> 
                        <a class="nav-a-button" href="#" target="_self">Sign Up</a>
                    </nav>
                {/* </div> */}

            </div>


            <nav class ="header-nav-lower-container">
                <a class="nav-a-button" href="#" target="_self">Timeline</a>
                <div class="divider"/> 
                <div class="divider"/> 
                <a class="nav-a-button" href="#" target="_self">Action</a>
                <div class="divider"/> 
                <div class="divider"/> 
                <a class="nav-a-button" href="#" target="_self">Explore</a>

            </nav>

            
            <div>
                <i class="fa-solid fa-bars"></i>
            </div>

        </header>
    )
};

export default Header;