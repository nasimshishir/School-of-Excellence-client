import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import ReactTooltip from 'react-tooltip';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className='shadow-md hover:shadow-xl w-screen'>
            <div className='container mx-auto px-4 '>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link>Item 1</Link></li>
                                <li tabIndex={0}>
                                    <Link className="justify-between">
                                        Parent
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </Link>
                                    <ul className="p-2">
                                        <li><Link>Submenu 1</Link></li>
                                        <li><Link>Submenu 2</Link></li>
                                    </ul>
                                </li>
                                <li><Link>Item 3</Link></li>
                            </ul>
                        </div>
                        <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li className='font-medium'><Link to="/">Home</Link></li>
                            <li className='font-medium'><Link to="/courses">All Courses</Link></li>
                            <li className='font-medium'><Link to="/blogs">Blog</Link></li>
                            <li className='font-medium'><Link to="/faq">FAQ</Link></li>
                            <li className='font-medium'><Link to="/checkout/5">Checkout</Link></li>
                        </ul>
                    </div>

                    <div className="form-control navbar-end">
                        <label className="label cursor-pointer">
                            <span className="label-text text-sm mr-3 opacity-60">Dark Mode</span>
                            <input type="checkbox" className="toggle toggle-sm" />
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
                                            <li><button onClick={handleLogOut}><Link>Logout</Link></button></li>
                                        </ul>
                                    </div>
                                </>
                                :
                                <>
                                    <Link to="/login" className="btn btn-outline btn-sm mr-2">Login</Link>
                                    <Link to="/register" className="btn btn-outline btn-sm">Register</Link>
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