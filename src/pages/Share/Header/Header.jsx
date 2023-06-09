import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../provider/AuthProviders';
import ActiveLink from '../../ActiveLink/ActiveLink';
import { FaUserCircle } from 'react-icons/fa';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <div className='   py-3 px-2'>

            <div className="navbar rounded-2xl ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 ">
                            <li><ActiveLink to='/'>Home</ActiveLink></li>
                            <li tabIndex={0}>
                                <ActiveLink to='/blogs' className="justify-between">
                                    Blogs
                                </ActiveLink>

                            </li>
                            <li><ActiveLink to='/about'>About</ActiveLink></li>
                        </ul>
                    </div>
                    <a className=" font-bold normal-case text-xl  md:text-3xl">F<span className='text-red-500'>oo</span>dB<span className='text-sky-600'>u</span>zz</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        <li><ActiveLink to='/'>Home</ActiveLink></li>
                        <li tabIndex={0}>
                            <ActiveLink to='/blogs'>
                                Blogs
                            </ActiveLink>

                        </li>
                        <li><ActiveLink to='about' >About</ActiveLink></li>
                    </ul>
                </div>

                <div className="navbar-end gap-2">
                    {
                        user && <img className='w-12 h-12 c rounded-full' src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' />
                    }
                    {user ? <Link onClick={handleLogout} className="btn text-xs  bg-purple-900">Logout</Link> :
                        <Link to='/login' className="btn">Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Header;