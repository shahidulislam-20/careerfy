import { Link } from 'react-router-dom';
import errorImg from '../../assets/404.png';

const ErrorPage = () => {
    return (
        <div>
            <div className='bg-[#121d28] text-center text-white min-h-screen pt-52'>
                <img className='mx-auto' src={errorImg} alt="error" />
                <h2 className='text-5xl font-bold mt-10 mb-5'>Ooops! Page Not Found!</h2>
                <p>Sorry ! We could not Find What You Are Looking for.</p>
                <Link to='/'>
                    <button className='bg-primary-color text-white font-semibold py-3 px-6 border-2 border-primary-color hover:bg-transparent hover:text-primary-color transition ease-in-out rounded-md mt-20'>Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;