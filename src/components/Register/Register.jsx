import { FaEnvelope, FaGoogle, FaLock, FaPhotoVideo, FaUser } from 'react-icons/fa';
import registerImg from '../../assets/register.jpg';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
//Toastify
//Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const {createUser, googleSignIn, userUpdate} = useContext(AuthContext);

    const notify = () => toast.success('Register Successfully!', {
        position: "top-center",
        hideProgressBar: true,
    })

    const errorNotify = (text) => toast.error(text, {
        position: "top-center",
        hideProgressBar: true,
    })

    const handleRegister = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const user = {name, email, password, photo};
        console.log(user);

        createUser(email, password)
        .then(result => {
            console.log(result.user)
            userUpdate(name, photo)
            .then(result => {
                console.log(result)
                notify();
            })
            .catch(error => {
                console.log(error)
            })
        })
        .catch(error => {
            console.log(error)
            errorNotify(error.message);
        })
    }

    const handleGoogleRegister = () => {
        googleSignIn()
        .then(result => {
            console.log(result)
            notify();
        })
        .catch(error => {
            console.log(error)
            errorNotify(error.message);
        })
    }

    return (
        <div>
            <div className='relative'>
                <img className='w-full h-[900px] object-cover' src={registerImg} alt="register" />
                <div className='absolute h-full w-full top-0 left-0 bg-[rgba(30,49,66,0.76)] flex items-center justify-center'>
                    <div className='lg:w-1/2 w-full lg:mx-0 mx-5 bg-[rgba(0,0,0,0.7)] text-center md:p-20 py-10 px-5 text-white rounded-xl'>
                        <h2 className='text-white font-bold text-5xl uppercase mb-10'>Register</h2>
                        <form onSubmit={handleRegister}>
                            <div className='mb-5 flex items-center'>
                                <label className='bg-[#232a31] py-4 pl-4 pr-2 rounded-l-3xl' htmlFor="name">
                                    <FaUser className='text-[#777b7f]'></FaUser>
                                </label>
                                <input className='bg-[#232a31] outline-none text-white w-full p-3 rounded-r-3xl' type="text" name="name" placeholder='Full Name' id="name" />
                            </div>
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
                            <div className='mb-5 flex items-center'>
                                <label className='bg-[#232a31] py-4 pl-4 pr-2 rounded-l-3xl' htmlFor="photo">
                                    <FaPhotoVideo className='text-[#777b7f]'></FaPhotoVideo>
                                </label>
                                <input className='bg-[#232a31] outline-none text-white w-full p-3 rounded-r-3xl' type="text" name="photo" placeholder='Photo URL' id="photo" />
                            </div>
                            <div>
                                <input className='text-primary-color font-semibold py-3 cursor-pointer px-6 border-2 border-primary-color hover:text-white hover:bg-primary-color transition ease-in-out rounded-3xl w-full' type="submit" value="Register" />
                            </div>
                        </form>
                        <div className='mt-8 text-center'>
                            <p>Or Register with</p>
                            <button onClick={handleGoogleRegister} className='text-primary-color font-semibold py-2 px-6 border-2 border-primary-color hover:text-white hover:bg-primary-color transition ease-in-out rounded-3xl flex items-center justify-center gap-2 mt-5 mx-auto'>
                                <FaGoogle></FaGoogle>
                                Google
                            </button>
                            <p className='mt-5'>Already have an account? Please <Link to='/login' className='font-semibold text-primary-color underline'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;