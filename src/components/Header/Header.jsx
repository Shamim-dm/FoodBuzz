import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (

<div className="navbar bg-base-100  ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><ActiveLink className='' to='/home'>Home</ActiveLink></li>
       
        <li><ActiveLink className='' to='/blog'>Blogs</ActiveLink></li>
        <li> <ActiveLink className='' to='/login'>Login</ActiveLink></li>
       
        <li> <ActiveLink className='' to='/register'>Register</ActiveLink></li>

      </ul>
    </div>
    <a className=" font-bold normal-case  sm:text-3xl">FoodBuzz</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><ActiveLink className='' to='/home'>Home</ActiveLink></li>
       
      <li><ActiveLink className='' to='/blog'>Blogs</ActiveLink></li>
      <li> <ActiveLink className='' to='/login'>Login</ActiveLink></li>
      <li> <ActiveLink className='' to='/register'>Register</ActiveLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button  className="btn-primary text-xs">Login</button>
  </div>
</div>


    );
};

export default Header;