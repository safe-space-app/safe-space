
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
  const [location, setLocation] = useState([])

  return (
    <div className="App">
      

      <BrowserRouter>
      <Navbar user={user}/>
        <Routes>
          <Route path ='/' element={<LoginSignupContainer location={location} setLocation={setLocation} setUser={setUser}/> }/>
          <Route path = '/feed' element={<FeedContainer location={location} setLocation={setLocation} user={user}/> }/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
