
import React, { useState } from 'react'
import logo from './logo.svg';
import './Stylesheets/App.scss';
import './Stylesheets/Login.scss'
import LoginSignupContainer from './Containers/LoginSignupContainer.jsx'
import FeedContainer from './Containers/FeedContainer.jsx'
// import Signup from './Components/Signup.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/NavBar.jsx';

function App() {

  const [user, setUser] = useState({});
  console.log('user', user);

  return (
    <div className="App">
      

      <BrowserRouter>
      <Navbar user={user}/>
        <Routes>
          <Route path ='/' element={<LoginSignupContainer setUser={setUser}/> }/>
          {/* <Route path ='/signup' element={<Signup setUser = {setUser}/> }/> */}
          <Route path = '/feed' element={<FeedContainer user={user}/> }/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
