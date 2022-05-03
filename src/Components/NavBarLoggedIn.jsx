import React from 'react';
import { Outlet, Link } from "react-router-dom";
import '../Stylesheets/NavBar.scss';
import logo from '../Images/logo.png'
/*
Navigation Bar Displayed at the top of every page
Will contain on not logged in page:
  Logo,
  Links:
    About Company,
will contain on logged in age:
  Logo,
  Links:
    Account
    Inventory
  Profile Icon
*/

const NavBarLoggedIn = () => {

  return (
    <div className='LoggedIn'>
     <img className='logo' alt='logo' src={logo}></img>
     {/* <h1 className='brand' >SafeSpace</h1> */}
     {/* <a href="aboutUs" className='deadLink1'> About Us </a>
     <a href="packages" className='deadLink2'> Packages </a> */}
     {/* <Link to='/account' id='accountLink' >Account</Link> */}
     {/* <Link to='/inventory' id='inventoryLink'>Inventory</Link> */}
     </div>
  )
  };

export default NavBarLoggedIn