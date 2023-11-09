import { Link, NavLink } from "react-router-dom";
import person from '../../../assets/person.png';
import './Navbar.css';
import logo from '../../../assets/logo.png';
import Button from "../../Reusable/Button/Button";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
//Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const notify = () => toast.success('Sign Out Successfully!', {
        position: "top-center",
        hideProgressBar: true,
    })

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/add-a-job'>Add A Job</NavLink></li>
        <li><NavLink to='/all-job-page'>All Jobs</NavLink></li>
        <li><NavLink to='/my-job-page'>My Jobs</NavLink></li>
        <li><NavLink to='/applied-jobs'>Applied Jobs</NavLink></li>
        <li><NavLink to='/blog'>Blogs</NavLink></li>
    </>

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result)
                notify();
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className="shadow-md py-3">
            <div className="max-w-7xl mx-auto">
                <div className="navbar flex-col md:flex-row bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <Link className="flex gap-1 items-center" to="/">
                            <img className="h-10 w-10" src={logo} alt="logo" />
                            <h3 className="text-primary-color uppercase font-bold text-2xl">Career<span className="text-gray-700">fy</span></h3>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end w-full md:justify-end justify-center">
                        {
                            user ? <>
                                <img className="h-11 w-11 rounded-full" src={user?.photoURL ? user?.photoURL : person} alt="avater" />
                                <p className="mr-5 ml-2 uppercase font-semibold">{user?.displayName}</p>
                                <span onClick={handleSignOut}><Button text="Sign Out"></Button></span>
                            </>
                                :
                                <div className="mt-5 md:mt-0">
                                    <Link className="mr-3" to='/login'>
                                        <Button text="LogIn"></Button>
                                    </Link>
                                    <Link to='/register'>
                                        <Button text="Register"></Button>
                                    </Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Navbar;