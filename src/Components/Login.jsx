import React, { useEffect } from "react";
import "../Stylesheets/Login.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import logo from '../Images/logo.png'

//Login component


const Login = (props) => {
  // useForm hook returns an object containing a few properties.
  //register method helps register an input field into react hook form so that it is available for validation.
  //handleSubmit can handle two functions as arguments. first function passed as an arg will be onvoked along with registered field values when the form validation is successfull.
  const { register, handleSubmit } = useForm();

  //useState hook to track loggedin status
  //if logged in, navigate to /feed

  //grab location from browser, send latitude/longitude to yelp API
  //populate feed with those locations

  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(position => {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    })
  })

  const [loggedInState, setLoggedInState] = useState(false)

  return loggedInState ? <Navigate to="/feed" /> : (
    
    <div>
      <h2 className="SI">Please sign in</h2>
      <form
        className="LoginBox"
        onSubmit={handleSubmit((data) => {
          // console.log('handlesubmit data: ', data)
          const {username, password} = data
          console.log(username)
          console.log(password)
          console.log('latitude', latitude)
          console.log('longitude', longitude)
          //fetch request to server w/ email & password for login
          fetch("http://localhost:3000/login", {
            method: "POST",
            body: JSON.stringify({username, password, latitude, longitude}),
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
            }
          })
            .then((response) => response.json())
            .then((data) => {
              props.setUser(data.account);
              // console.log(data.account)
              setLoggedInState(true)
              props.setLocation(data.locations)
              // console.log(data.locations)
            })
            .catch((err) => {
              console.log("were getting an error", err);
              alert('Wrong username/password');
            });
          // fetch("http://localhost:3000/sendlocation", {
          //   method: "POST",
          //   body: JSON.stringify({latitude, longitude}),
          //   headers: {
          //     "Accept": "application/json",
          //     "Content-Type": "application/json",
          //   }
          // })
          //   .then((response) => response.json())
          //   .then((data) => {
          //     //set location state here
          //     props.setLocation(data)
          //   })
          //   .catch(error => console.log('error in login lat/long request: ', error))

          // create a post request then in the body send username and password
         // setData(JSON.stringify(data))
      })}>
      <div id="input-container" >
        <input {...register("username")} type="text" id="username" name="username" placeholder="Username" required />
        
      </div>
      <div className="input-container">
        <input {...register("password")} type="password" id="PW" name="password" placeholder="Password" required />
        
      </div>
      <button type="submit" className="submitbutton" >Submit</button>
    </form>
      
    </div>
  );
};

export default Login;