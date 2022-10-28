import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import ReactTooltip from 'react-tooltip';
import { useState } from 'react';
import logo from '../../../assests/logo.png'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState('');

    const toggler = e => {
        const newTheme = e.target.checked;
        setTheme(newTheme)
    }


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className='shadow-md hover:shadow-xl w-screen'>
            <div className='lg:container mx-auto px-4 '>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div>
                            <Link to="/"><img className='max-h-16' src={logo} alt="" /></Link>
                        </div>
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/courses">All Courses</Link></li>
                                <li><Link to="/blogs">Blog</Link></li>
                                <li><Link to="/faq">FAQ</Link></li>
                                <li><Link to="/login" className="btn btn-outline btn-sm mr-2">Login</Link></li>
                                <li><Link to="/register" className="btn btn-outline btn-sm hidden lg:flex">Register</Link></li>
                            </ul>
                        </div>
                        <Link to="/" className="text-2xl font-bold px-5 "><span className='lg:hidden'>SE</span><span className='hidden lg:inline'>School of Excellence</span></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li className='font-medium'><Link to="/">Home</Link></li>
                            <li className='font-medium'><Link to="/courses">All Courses</Link></li>
                            <li className='font-medium'><Link to="/blogs">Blog</Link></li>
                            <li className='font-medium'><Link to="/faq">FAQ</Link></li>
                        </ul>
                    </div>

                    <div className="form-control navbar-end">
                        <label className="label cursor-pointer">
                            <span className="label-text mr-3 opacity-60">
                                {
                                    theme ? 'Dark ' : 'Light '
                                }
                            </span>
                            <input onChange={toggler} name='theme' type="checkbox" className="toggle toggle-sm" />
                        </label>

                    </div>

                    <div className="navbar-end">
                        {
                            user?.uid ?
                                <>
                                    <div className='dropdown dropdown-end'>
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div data-tip={user?.displayName}>
                                                {
                                                    user?.photoURL ?
                                                        <img data-tip={user?.displayName} className="w-10 rounded-full" src={user?.photoURL} alt='' />
                                                        : <FaUserAlt />
                                                }
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                            <li className='mr-2 mt-2 text-sm font-medium text-center'>{user.displayName}</li>
                                            <li>
                                                <Link className="justify-between">
                                                    Profile
                                                </Link>
                                            </li>
                                            <li><button onClick={handleLogOut}><Link className='btn btn-outline btn-sm'>Logout</Link></button></li>
                                        </ul>
                                    </div>
                                </>
                                :
                                <>
                                    <Link to="/login" className="btn btn-outline btn-sm mr-2">Login</Link>
                                    <Link to="/register" className="btn btn-outline btn-sm hidden lg:flex">Register</Link>
                                </>
                        }
                    </div>

                </div>
            </div>
            <ReactTooltip />
        </div>
    );
};

export default Header;