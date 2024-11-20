import { useContext } from 'react';
import {NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const {user,handleSignOut} = useContext(AuthContext);
    const links = <>
        <NavLink className={({ isActive }) => isActive ? 'text-yellow-200 mr-5 font-semibold underline' : 'text-white mr-5'} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-yellow-200 mr-5 font-semibold underline' : 'text-white mr-5'} to='/allTreatments'>All Treatments</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-yellow-200 mr-5 font-semibold underline' : 'text-white mr-5'} to='/profile'>Profile</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-yellow-200 mr-5 font-semibold underline' : 'text-white mr-5'} to='/myAppointments'>My Appointments</NavLink>
    </>
    return (
        <div className="bg-blue-950 text-white">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </div>
                        <ul
                            tabIndex={0}
                            className="bg-blue-950 pl-3 menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-extrabold">TEETH WIZARD</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end mr-5">
                    {user ? <NavLink onClick={handleSignOut} className=" bg-white rounded-md border-none md:px-8 text-blue-950 font-semibold btn md:text-lg ">Logout</NavLink>
                    : 
                    <NavLink to='/login' className=" bg-white rounded-md border-none md:px-8 text-blue-950 font-semibold btn md:text-lg ">Login</NavLink>}
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;