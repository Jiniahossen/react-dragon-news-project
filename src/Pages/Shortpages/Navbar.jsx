import { Link, NavLink } from "react-router-dom";
import userpic from '../../assets/user.png'


const Navbar = () => {


    const navlinks = <>
        <NavLink to='/'> <li> Home</li></NavLink>
        <NavLink to='/about'> <li> About</li></NavLink>
        <NavLink to='/career'> <li> Career</li></NavLink>
    </>
    return (
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
                <a className="btn btn-ghost normal-case text-xl"></a>
            </div>
            <div className="navbar-center lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4 text-[#706F6F] text-base font-poppins font-medium">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end flex gap-2">

                    <img src={userpic} className="w-8" alt="" />
                    <button>
                        <Link className="bg-[#403F3F] text-white text-base font-poppins font-medium px-3 py-1" to='/login'>Login</Link>
                    </button>
            </div>
        </div>
    );
};

export default Navbar;