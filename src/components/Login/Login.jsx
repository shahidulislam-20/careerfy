import { useContext } from 'react';
import loginImg from '../../assets/login.jpg';
import { FaEnvelope, FaGoogle, FaLock } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../AuthProvider/AuthProvider';
//Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const notify = () => toast.success('SignIn Successfully!', {
        position: "top-center",
        hideProgressBar: true,
    })

    const errorNotify = (text) => toast.error(text, {
        position: "top-center",
        hideProgressBar: true,
    })

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                notify();
                {
                    location.state ? navigate(`${location.state}`) : navigate("/")
                }
            })
            .catch(error => {
                console.log(error)
                errorNotify(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result)
                notify();
                {
                    location.state ? navigate(`${location.state}`) : navigate("/")
                }
            })
            .catch(error => {
                console.log(error)
                errorNotify(error.message);
            })
    }

    return (
        <div>
            <div className='relative'>
                <img className='w-full h-[800px] object-cover' src={loginImg} alt="login" />
                <div className='absolute h-full w-full top-0 left-0 bg-[rgba(30,49,66,0.76)] flex items-center justify-center'>
                    <div className='lg:w-1/2 w-full lg:mx-0 mx-5 bg-[rgba(0,0,0,0.7)] text-center md:p-20 py-10 px-5 text-white rounded-xl'>
                        <h2 className='text-white font-bold text-5xl uppercase mb-10'>Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className='mb-5 flex items-center'>
                                <label className='bg-[#232a31] py-4 pl-4 pr-2 rounded-l-3xl' htmlFor="email">
                                    <FaEnvelope className='text-[#777b7f]'></FaEnvelope>
                                </label>
                                <input className='bg-[#232a31] outline-none text-white w-full p-3 rounded-r-3xl' type="email" name="email" placeholder='Email Address' id="email" />
                            </div>
                            <div className='mb-5 flex items-center'>
                                <label className='bg-[#232a31] py-4 pl-4 pr-2 rounded-l-3xl' htmlFor="password">
                                    <FaLock className='text-[#777b7f]'></FaLock>
                                </label>
                                <input className='bg-[#232a31] outline-none text-white w-full p-3 rounded-r-3xl' type="password" name="password" placeholder='Password' id="password" />
                            </div>
                            <div>
                                <input className='text-primary-color font-semibold py-3 cursor-pointer px-6 border-2 border-primary-color hover:text-white hover:bg-primary-color transition ease-in-out rounded-3xl w-full' type="submit" value="Login" />
                            </div>
                        </form>
                        <div className='mt-8 text-center'>
                            <p>Or Login with</p>
                            <button onClick={handleGoogleSignIn} className='text-primary-color font-semibold py-2 px-6 border-2 border-primary-color hover:text-white hover:bg-primary-color transition ease-in-out rounded-3xl flex items-center justify-center gap-2 mt-5 mx-auto'>
                                <FaGoogle></FaGoogle>
                                Google
                            </button>
                            <p className='mt-5'>New to Careerfy? Please <Link to='/register' className='font-semibold text-primary-color underline'>Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>

    );
};

export default Login;