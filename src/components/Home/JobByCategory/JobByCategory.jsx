import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const JobByCategory = () => {

    const [jobs, setJobs] = useState([]);
    const [displayJob, setDisplayJob] = useState([]);
    const [loadMore, setLoadMore] = useState(5);


    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [])


    const handleTab = (category) => {
        const filterJob = jobs.filter(job => job.category == category);
        setDisplayJob(filterJob);
    }


    //four category tab here
    const tabElement = [];
    for (let i = 1; i < 5; i++) {
        tabElement.push(<TabPanel key={i}><ul>
            <li className="border-2 hidden lg:block p-4 bg-primary-color text-white font-bold rounded-t-xl">
                <div className="grid grid-cols-7 gap-10 items-center">
                    <div className="lg:col-span-2 text-center">Job Title</div>
                    <div>Salary Range</div>
                    <div>Posted By</div>
                    <div>Posting Date</div>
                    <div>Deadline</div>
                    <div className='text-center'>Action</div>
                </div>
            </li>
            {
                displayJob.map(job => <li
                    className="grid lg:grid-cols-7 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 items-center p-4 border-b-2 border-r-2 border-l-2"
                    key={job._id}>
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-5">
                            <img className="h-14 w-14" src={job.banner_url} alt="bannerImage" />
                            <div>
                                <h3 className="font-semibold">{job.title}</h3>
                                <p><span>Applicant Number : </span>{job.applicant_number}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p><span className="lg:hidden font-semibold">Price Range : </span>{job.salary_range}</p>
                    </div>
                    <div>
                        <p><span className="lg:hidden font-semibold">Posted By : </span>{job.name}</p>
                    </div>
                    <div>
                        <p><span className="lg:hidden font-semibold">Posting Date : </span>{job.posting_date}</p>
                    </div>
                    <div>
                        <p><span className="lg:hidden font-semibold">Deadline : </span>{job.deadline}</p>
                    </div>
                    <div>
                        <Link to={`/job-details/${job._id}`}>
                            <button className="text-primary-color font-semibold py-2 cursor-pointer px-6 border-2 border-primary-color hover:text-white hover:bg-primary-color transition ease-in-out rounded-lg">View Details</button>
                        </Link>
                    </div>
                </li>)
            }</ul>
        </TabPanel>)
    }

    return (
        <div className="max-w-7xl mx-auto py-20">
            <div className='text-center mb-10'>
                <motion.h2 
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
                className='text-4xl font-bold uppercase mb-1'>Job by category</motion.h2>
                <motion.p
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{once: true}}
                transition={{
                    delay: 0.4,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 1
                }}
                >Recruitment Made Easy in 100 seconds</motion.p>
            </div>
            <Tabs>
                <TabList>
                    <Tab>All Jobs</Tab>
                    <Tab onClick={() => { handleTab("On Site") }}>On Site</Tab>
                    <Tab onClick={() => { handleTab("Remote") }}>Remote</Tab>
                    <Tab onClick={() => { handleTab("Part Time") }}>Part Time</Tab>
                    <Tab onClick={() => { handleTab("Hybrid") }}>Hybrid</Tab>
                </TabList>

                <TabPanel>
                    <ul>
                        <li className="border-2 hidden lg:block p-4 bg-primary-color text-white font-bold rounded-t-xl">
                            <div className="grid grid-cols-7 gap-10 items-center">
                                <div className="lg:col-span-2 text-center">Job Title</div>
                                <div>Salary Range</div>
                                <div>Posted By</div>
                                <div>Posting Date</div>
                                <div>Deadline</div>
                                <div className='text-center'>Action</div>
                            </div>
                        </li>
                        {
                            jobs.slice(0, loadMore).map(job => <li
                                className="grid lg:grid-cols-7 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 items-center p-4 border-b-2 border-r-2 border-l-2"
                                key={job._id}>
                                <div className="lg:col-span-2">
                                    <div className="flex items-center gap-5">
                                        <img className="h-14 w-14" src={job.banner_url} alt="bannerImage" />
                                        <div>
                                            <h3 className="font-semibold">{job.title}</h3>
                                            <p><span>Applicant Number : </span>{job.applicant_number}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p><span className="lg:hidden font-semibold">Price Range : </span>{job.salary_range}</p>
                                </div>
                                <div>
                                    <p><span className="lg:hidden font-semibold">Posted By : </span>{job.name}</p>
                                </div>
                                <div>
                                    <p><span className="lg:hidden font-semibold">Posting Date : </span>{job.posting_date}</p>
                                </div>
                                <div>
                                    <p><span className="lg:hidden font-semibold">Deadline : </span>{job.deadline}</p>
                                </div>
                                <div>
                                    <Link to={`/job-details/${job._id}`}>
                                        <button className="text-primary-color font-semibold py-2 cursor-pointer px-6 border-2 border-primary-color hover:text-white hover:bg-primary-color transition ease-in-out rounded-lg">View Details</button>
                                    </Link>
                                </div>
                            </li>)
                        }</ul>
                    {
                        loadMore == jobs.length ? <></> : <div className='text-center mt-10'>
                        <motion.button 
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{once: true}}
                        transition={{
                            delay: 0.4,
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1
                        }}
                        onClick={()=>setLoadMore(jobs.length)} className="bg-primary-color text-white font-semibold py-3 px-6 border-2 border-primary-color hover:bg-transparent hover:text-primary-color transition ease-in-out rounded-md">Load More Jobs</motion.button>
                    </div>
                    }
                </TabPanel>
                {tabElement}
            </Tabs>
        </div>
    );
};

export default JobByCategory;