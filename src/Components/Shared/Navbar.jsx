import { Link, NavLink, Outlet } from 'react-router-dom';
import User from "../../Picture/user.png"
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';

const Navbar = () => {

    const {userfinal,Logout} = useContext(AuthContext)

    const handleClick = () =>{
         Logout()
         .then(res => {
            const sum = res.user
            console.log(sum)
         })
         .catch(error =>{
            console.log(error)
         })
    }
     
    const navlinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/career">Career</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>

    </>

    return (
        <div>
            <div className="navbar bg-base-100">
            
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navlinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={User} />
        </div>
      </label>
            {
                userfinal ? 
                <Link><button onClick={handleClick} className='btn'>Sign out</button></Link>
                : <Link><button className='btn'>Login</button></Link>

            }
          
        </div>
      </div>
        </div>
    );
};

export default Navbar;