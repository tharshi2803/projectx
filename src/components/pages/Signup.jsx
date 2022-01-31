import React, { useState } from "react";
import "../pages/signup.css";
import { useSpring, animated } from "react-spring";


function Signup() {
    const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
    const loginProps = useSpring({ 
        left: registrationFormStatus ? -500 : 0, // Login form sliding positions
    });
    const signupProps = useSpring({
        left: registrationFormStatus ? 0 : 500, // Signup form sliding positions 
    });

    const loginBtnProps = useSpring({
        borderBottom: registrationFormStatus 
          ? "solid 0px transparent"
          : "solid 2px #191970",  //Animate bottom border of login button
    });
    const signupBtnProps = useSpring({
        borderBottom: registrationFormStatus
          ? "solid 2px #191970"
          : "solid 0px transparent", //Animate bottom border of signup button
    });

    function signupClicked() {
        setRegistartionFormStatus(true);
    }
    function loginClicked() {
        setRegistartionFormStatus(false);
    }

    return (
      
        <div className="login-signup-wrapper">
        <div className="nav-buttons">
            <animated.button
                onClick={loginClicked}
                className="loginBtn"
                style={loginBtnProps}
            >
            Login
            </animated.button>
            <animated.button
                onClick={signupClicked}
                className="signupBtn"
                style={signupBtnProps}
            >
            SignUp
            </animated.button>
        </div>
        <div className="form-group">
            <animated.form action="" id="loginform" style={loginProps}>
            <LoginForm />
            </animated.form>
            <animated.form action="" id="signupform" style={signupProps}>
            <SignupForm />
            </animated.form>
        </div>
        <animated.div className="forgot-panel" style={loginProps}>
            <a herf="#">Forgot your password</a>
        </animated.div>
        </div>
        

    );
}

function LoginForm() {
  return (
    <React.Fragment>
      <label for="username">USERNAME</label>
      <input type="text" id="username" />
      <label for="password">PASSWORD</label>
      <input type="text" id="password" />
      <input type="submit" value="submit" className="submit" />
    </React.Fragment>
  );
}

function SignupForm() {
  return (
    <React.Fragment>
      <label for="fullname">full name</label>
      <input type="text" id="fullname" />
      <label for="email">email</label>
      <input type="text" id="email" />
      <label for="password">password</label>
      <input type="text" id="password" />
      <label for="confirmpassword">confirm password</label>
      <input type="text" id="confirmpassword" />
      <input type="submit" value="submit" className="submit" />
    </React.Fragment>
  );
}

export default Signup;