import React from 'react';
import '../Stylesheets/Login.scss';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useEffect } from 'react'

import SignUpDeclined from './SignUpDeclined.jsx';

const SignUp = (props) => {

  const { register, handleSubmit } = useForm();
  // variable to determine if we get an error back from the signup
  const [signUpDeclined, handleSignup] = useState(false);

  const signUpFail = [];
  signUpFail.push(<SignUpDeclined signUpDeclined={signUpDeclined}/>)

  

  return (
    <div id={'signup-container'}>
      <h2 className='SI'>Please sign up</h2>
      <form onSubmit={ handleSubmit((data) => {
        console.log('creating a user')
        console.log(data)
        // {username: xxxx , password: yyyy}
        fetch('http://localhost:3000/createAccount', {
          headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(resData => { 
          // if the object on resData.message exists - > setUser using the input data
          // else skip over
          // // if we receive an error object as a response
          if (resData.err) {
            handleSignup(true);
          }
          else if (resData.message) {
            handleSignup(false);
            props.setUser(data);
          }
        })
        .catch(err => {
          // if we catch an error, log the message to the console
          console.log('were getting an error', err);
        });
      })}>
        <div className="input-container" key={13}>
          <input key = {"e"} {...register("username")} type="text" id="namesignup" username="username" placeholder="Username" required />
          {/* {renderErrorMessage("Please enter username")} */}
        </div>
        <div className="input-container" key={14}>
          <input key = {"f"} {...register("email")} type="text" id="emailsignup" name="email" placeholder="Email" required />
          {/* {renderErrorMessage("Please enter password")} */}
        </div>
        <div className="input-container" key={15}>
          <input key = {"g"} {...register("password")} type="password" id="pwsignup" name="password" placeholder="Password" required />
          {/* {renderErrorMessage("Please enter password")} */}
        {/* </div> */}
        {/* <div className="input-container" key={16}>
          <select {...register("type")} id="dropdownlogin" placeholder='Category'>
            <option key = {"a"} value = "Small Business" label = "Small Business" />
            <option key = {"b"} value = "Online Store" label = "Online Store" />
            <option key = {"c"} value = "Restaurant" label = "Restaurant" />
            <option key = {"d"} value = "Personal" label = "Personal" />
          </select> */}
          {/* {renderErrorMessage("Please enter password")} */}
          {/* if sign up declined, empty div else render the Username Already Taken*/}
          {signUpFail}
          <br></br>
        <input type="submit" className="submitbutton"/>
        
        </div>
        
      </form>
    </div>
  );
};

export default SignUp;