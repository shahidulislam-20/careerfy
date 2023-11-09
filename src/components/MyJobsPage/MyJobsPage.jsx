import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PageTitle from "../Shared/Helmet/PageTitle";

const MyJobsPage = () => {

    const { user } = useContext(AuthContext);
    const [myJobs, setMyJobs] = useState([]);
    
    useEffect(() => {

        fetch(`https://careerfy-server-pink.vercel.app/jobs/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyJobs(data))

    }, [user?.email])
    

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://careerfy-server-pink.vercel.app/jobs/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your job deleted successfully.",
                                icon: "success"
                            });
                            const remaining = myJobs.filter(job => job._id !== id);
                            setMyJobs(remaining);
                        }
                    })
            }
        });
    }


    return (
        <div className="max-w-7xl mx-auto">
            <PageTitle title="Careerfy | My Posted Jobs"></PageTitle>
            <div>
                <div className="bg-primary-color lg:rounded-xl mt-10">
                    <h2 className="text-white text-center py-10 font-bold text-4xl">My Posted Jobs</h2>
                </div>
                <div className="mt-10 mb-20">
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
                            myJobs.length > 0 ? myJobs.map(job => <li
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
                                <div className="flex items-center gap-2">
                                    <Link to={`/update-job/${job._id}`}>
                                        <button className="text-primary-color font-semibold py-2 cursor-pointer px-2 border-2 border-primary-color hover:text-white hover:bg-primary-color transition ease-in-out rounded-lg">Update</button>
                                    </Link>
                                    <button onClick={() => handleDelete(job._id)} className="bg-primary-color text-white font-semibold py-2 px-2 border-2 border-primary-color hover:bg-transparent hover:text-primary-color transition ease-in-out rounded-md">Delete</button>
                                </div>
                            </li>) : <div className="text-center py-20 bg-gray-400">
                                <h3 className="text-2xl font-bold">You have not any posted job.</h3>
                                <p className="text-xl font-semibold">Please post a job.</p>
                            </div>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MyJobsPage;