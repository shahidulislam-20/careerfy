import { useEffect, useState } from 'react';
import bannerImg from '../../../assets/banner.jpg';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Banner = () => {

    const [allData, setAllData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://careerfy-server-nine.vercel.app/jobs')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])



    return (
        <div>
            <div className='relative'>
                <img className='w-full h-[700px] object-cover' src={bannerImg} alt="banner" />
                <div className='absolute top-0 left-0 h-full w-full bg-[rgba(30,49,66,0.76)]'>
                    <div className='text-center mt-52  px-5'>
                        <div>
                            <motion.h1
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{once: true}}
                                transition={{
                                    delay: 0.3,
                                    x: { type: "spring", stiffness: 60 },
                                    opacity: { duration: 1 },
                                    ease: "easeIn",
                                    duration: 1
                                }}
                                className='text-white font-bold lg:text-6xl md:text-5xl text-4xl'>Aim Higher. Reach Farther. Dream Bigger.
                            </motion.h1>
                            <motion.p 
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{once: true}}
                            transition={{
                                delay: 0.5,
                                x: { type: "spring", stiffness: 70 },
                                opacity: { duration: 1 },
                                ease: "easeIn",
                                duration: 1
                            }}
                            className='text-white md:text-xl text-sm mt-5'>A better career is out there. We will help you find it. We are your first step to becoming everything you want to be.</motion.p>
                        </div>
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{once: true}}
                            transition={{
                                delay: 0.2,
                                x: { type: "spring", stiffness: 60 },
                                opacity: { duration: 1 },
                                ease: "easeIn",
                                duration: 1
                            }}
                        >
                            <input
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                                className='p-3 md:w-96 rounded-l-3xl lg:mt-28 md:mt-16 mt-5 outline-none border-2' type="text"
                                placeholder='Search Jobs...' />
                            <button className='bg-primary-color text-white font-semibold py-3 px-6 border-2 border-primary-color hover:bg-transparent hover:text-primary-color transition ease-in-out rounded-r-3xl'>Search</button>
                            <div className='h-52 overflow-auto md:w-[450px] w-[280px] mx-auto '>
                                {
                                    allData.filter(job => {
                                        return search.toLowerCase() == '' ? '' : job.title.toLowerCase().includes(search)
                                    }).map(data => <Link to={`/job-details/${data._id}`}
                                        key={data._id}
                                        className='p-3 block text-white bg-[rgba(255,255,255,0.2)] hover:text-primary-color'
                                    >{data.title}</Link>)
                                }
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;