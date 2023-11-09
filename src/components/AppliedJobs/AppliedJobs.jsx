import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import PageTitle from "../Shared/Helmet/PageTitle";


const AppliedJobs = () => {

    const { user } = useContext(AuthContext);
    const allJobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [filterJob, setFilterJob] = useState('');

    useEffect(() => {
        fetch(`https://careerfy-server-pink.vercel.app/applied-jobs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAppliedJobs(data))
    }, [user?.email])

    const myAppliedJobs = allJobs.filter(job => {
        return appliedJobs.find(applyJob => applyJob.id == job._id);
    })    

    console.log(filterJob)
    

    return (
        <div className="max-w-7xl mx-auto">
            <PageTitle title="Careerfy | My Applied Jobs"></PageTitle>
            <div>
                <div className="bg-primary-color lg:rounded-xl my-10">
                    <h2 className="text-white text-center py-10 font-bold text-4xl">My Applied Jobs</h2>
                </div>
                <div className="bg-primary-color lg:w-72 p-5 mx-auto text-center lg:rounded-t-3xl">
                    <label className="text-white font-bold mr-3" htmlFor="cat">Filter by category</label>
                    <select onChange={(e)=>setFilterJob(e.target.value)} id="cat">
                        <option value="all">All</option>
                        <option value="On Site">On Site</option>
                        <option value="Remote">Remote</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                </div>
                <div className="mb-20">
                    <ul>
                        <li className="hidden lg:block p-4 bg-primary-color text-white font-bold rounded-t-xl">
                            <div className="grid grid-cols-5 gap-10 items-center">
                                <div className="lg:col-span-2 text-center">Job Title</div>
                                <div>Salary Range</div>
                                <div>Posting Date</div>
                                <div>Deadline</div>
                            </div>
                        </li>
                        {
                           myAppliedJobs.length>0 ? myAppliedJobs.filter(job => {
                                return filterJob.toLowerCase() == "" || filterJob.toLowerCase() == "all" ? job : job.category.toLowerCase().includes(filterJob.toLowerCase());
                            }).map(job => <li
                                className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 items-center p-4 border-b-2 border-r-2 border-l-2"
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
                            </li>) : <div className="text-center py-20 bg-gray-400">
                                <h3 className="text-2xl font-bold">You have not any applied job.</h3>
                                <p className="text-xl font-semibold">Please apply a job.</p>
                            </div>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;