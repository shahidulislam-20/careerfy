import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import PageTitle from "../Shared/Helmet/PageTitle";


const AllJobsPage = () => {

    const allJobs = useLoaderData();
    const [query, setQuery] = useState('');
    

    return (
        <div className="max-w-7xl mx-auto">
            <PageTitle title="Careerfy | Browse all jobs"></PageTitle>
            <div>
                <div className="bg-primary-color rounded-xl mt-10 text-center">
                    <h2 className="text-white text-center pt-10 pb-5 font-bold text-4xl">Find Your Job</h2>
                    <div>
                        <input value={query} onChange={(e) => setQuery(e.target.value)} className='p-3 md:w-96 rounded-3xl mb-10 outline-none border-2' type="text" placeholder='Search here...' />
                    </div>
                </div>
                <div className="my-10">
                    <ul>
                        <li className="border-2 hidden lg:block p-4 bg-primary-color text-white font-bold rounded-t-xl">
                            <div className="grid grid-cols-6 gap-10 items-center">
                                <div className="lg:col-span-2 text-center">Job Title</div>
                                <div>Salary Range</div>
                                <div>Posting Date</div>
                                <div>Deadline</div>
                                <div>Action</div>
                            </div>
                        </li>
                        {
                            allJobs.filter(job => {
                                return query.toLowerCase() == '' ? job : job.title.toLowerCase().includes(query)
                            }).map(job => <li
                                className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 items-center p-4 border-b-2 border-r-2 border-l-2"
                                key={job._id}>
                                <div className="lg:col-span-2">
                                    <div className="flex items-center gap-5">
                                        <img className="h-14 w-14" src={job.banner_url} alt="bannerImage" />
                                        <div>
                                            <h3 className="font-semibold">{job.title}</h3>
                                            <p>{job.name}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p><span className="lg:hidden font-semibold">Price Range : </span>{job.salary_range}</p>
                                </div>
                                <div>
                                    <p><span className="lg:hidden font-semibold">Posting Date : </span>{job.posting_date}</p>
                                </div>
                                <div>
                                    <p><span className="lg:hidden font-semibold">Deadline : </span>{job.deadline}</p>
                                </div>
                                <div>
                                    <Link to={`/job-details/${job._id}`}>
                                        <button className="text-primary-color font-semibold py-2 cursor-pointer px-6 border-2 border-primary-color hover:text-white hover:bg-primary-color transition ease-in-out rounded-lg">Details</button>
                                    </Link>
                                </div>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AllJobsPage;

