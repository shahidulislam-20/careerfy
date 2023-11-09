import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { FaAngleRight, FaFacebook, FaLinkedin, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import Button from '../../Reusable/Button/Button';


const Footer = () => {
    return (
        <div className='py-20 bg-[#000] text-[#f2f2f2]'>
            <div className='max-w-7xl mx-auto'>
                <footer className='grid lg:grid-cols-4 grid-cols-1 lg:text-left text-center gap-5'>
                    <div>
                        <div className='flex items-center lg:justify-start justify-center mb-5'>
                            <img className='h-12' src={logo} alt="logo" />
                            <p className='font-bold text-3xl uppercase'><span className='text-primary-color'>Career</span>fy</p>
                        </div>
                        <p className='mt-5 mb-2'>Mirpur-1, Dhaka, Bangladesh</p>
                        <p>Need to help? 24/7</p>
                        <p className='flex items-center gap-2 justify-center lg:justify-start text-sm mb-3'><FaPhoneAlt></FaPhoneAlt> +8801700000001</p>
                        <p>&copy; 2023 Careerfy, All Rights Reserved.</p>
                    </div>
                    <div>
                        <h3 className='text-xl font-bold mb-5'>Quick Links</h3>
                        <ul>
                            <li className='my-2 hover:text-primary-color'><Link to="/all-job-page" className='flex items-center gap-2 justify-center lg:justify-start'><FaAngleRight></FaAngleRight>Browse Jobs</Link></li>
                            <li className='my-2 hover:text-primary-color'><Link to="/add-a-job" className='flex items-center gap-2 justify-center lg:justify-start'><FaAngleRight></FaAngleRight>Post New Job</Link></li>
                            <li className='my-2 hover:text-primary-color'><Link to="/my-job-page" className='flex items-center gap-2 justify-center lg:justify-start'><FaAngleRight></FaAngleRight>My Posted Job</Link></li>
                            <li className='my-2 hover:text-primary-color'><Link to="/applied-jobs" className='flex items-center gap-2 justify-center lg:justify-start'><FaAngleRight></FaAngleRight>My Applied Jobs</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-xl font-bold mb-5'>Follow us on</h3>
                        <ul>
                            <li className='my-2 hover:text-primary-color'><Link to="https://web.facebook.com" className='flex items-center gap-2 justify-center lg:justify-start'><FaAngleRight></FaAngleRight><FaFacebook></FaFacebook>Facebook</Link></li>
                            <li className='my-2 hover:text-primary-color'><Link to="https://www.twitter.com" className='flex items-center gap-2 justify-center lg:justify-start'><FaAngleRight></FaAngleRight><FaTwitter></FaTwitter>Twitter</Link></li>
                            <li className='my-2 hover:text-primary-color'><Link to="https://www.linkedin.com" className='flex items-center gap-2 justify-center lg:justify-start'><FaAngleRight></FaAngleRight><FaLinkedin></FaLinkedin>LinkedIn</Link></li>
                            <li className='my-2 hover:text-primary-color'><Link to="https://www.youtube.com" className='flex items-center gap-2 justify-center lg:justify-start'><FaAngleRight></FaAngleRight><FaYoutube></FaYoutube>Youtube</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-xl font-bold mb-5'>Stay with us</h3>
                        <ul>
                            <li className='my-2 hover:text-primary-color'><Link to="/register" className='flex items-center gap-2 justify-center lg:justify-start'><FaAngleRight></FaAngleRight>Register</Link></li>
                            <li className='my-2 hover:text-primary-color'><Link to="/login" className='flex items-center gap-2 justify-center lg:justify-start'><FaAngleRight></FaAngleRight>Login</Link></li>
                        </ul>
                        <Link to="/blog">
                            <Button text="Blogs"></Button>
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;