function Signup() {

  return   ( 
    <main>
    <div className="body-main-div-white-container">
        <div className="div-h1-white-container">
        <div className="main-div-mini-logo-container">
            <a href="index.html" target="_self">
            <img
                src="public/images/Visually_timeline_app_logo.svg"
                alt="the company logo is the word visually written in cursive font in a red-pink color"
            />
            </a>
        </div>
        <h1>Welcome to Visually</h1>
        <p className="subtitle-slogan">
            Bring your vision board into vision steps.
        </p>
        </div>

        <div className="body-div-login-form-container">
        <form>
            <div className="form-div-spacing">
            <label htmlFor="first_name">First Name</label>
            <input
                className="login-form-input-style"
                type="text"
                name="first_name"
                id="first_name"
                placeholder="First Name"
            />
            </div>

            <div className="form-div-spacing">
            <label htmlFor="last_name">Last Name</label>
            <input
                className="login-form-input-style"
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last Name"
            />
            </div>


            <div>
            <label htmlFor="email_address">Email</label>
            <input
                className="login-form-input-style"
                type="email"
                name="email_address"
                id="email_address"
                placeholder="Email"
            />
            </div>

            <div className="form-div-spacing">
            <label htmlFor="password">Password</label>
            <input
                className="login-form-input-style"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
            />
            </div>

            <div className="form-div-spacing">
            <a href="#" target="_self">
                Forgot password
            </a>
            </div>

            <div className="form-div-spacing">
            <input
                className="form-button-style"
                type="button"
                value="Submit"
            />
            </div>
        </form>

        <div className="form-div-spacing">
            <div className="form-div-spacing">Or</div>
            <button className="form-button-style">
            <a href="#" target="_blank">
                {" "}
                Continue with Google
            </a>{" "}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signup;
