import React from 'react';
// import Login from '../Components/Login.jsx';
//import SignUp from '../components/SignUp.jsx';
import LoginSignup from  "../Components/LoginSignup.jsx"
import '../Stylesheets/Login.scss';
import NavBar from '../Components/NavBar.jsx'
import logo from '../Images/logo.png'
//Page that returns the login and signup components

const LoginSignupContainer = (props) => {
  return (
    <div className='LSPage'>
     
      <div className="LoginSignupBox">

          <img alt='logo' id='signupLogo' src={logo}></img>

        <h1 className="welcome">Welcome</h1>
        <div className="LogSign">
          <LoginSignup setUser = {props.setUser} location={props.location} setLocation={props.setLocation}/>
        </div>
      </div>

    </div>
  );
};

export default LoginSignupContainer;