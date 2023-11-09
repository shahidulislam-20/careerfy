import jobImg from '../../assets/addajob.jpg';
import { useContext, useState } from "react";
import './AddAJob.css';
//react date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { format } from 'date-fns';
import Swal from 'sweetalert2';
import PageTitle from '../Shared/Helmet/PageTitle';

const AddAJob = () => {

    const {user} = useContext(AuthContext);

    const [deadlineDate, setDeadlineDate] = useState(new Date());
    const [postDate, setPostDate] = useState(new Date());

    const handleJobPost = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const name = form.name.value;
        const category = form.category.value;
        const salary = form.salary.value;
        const banner = form.banner.value;
        const applicant = form.applicant.value;
        const postingDate = format(postDate, 'yyyy-MM-dd');
        const deadline = format(deadlineDate, 'yyyy-MM-dd');
        const description = form.description.value;
        const jobPost = {title, name, email:user?.email, category, salary, banner, applicant, postingDate, deadline, description};
        console.log(jobPost);

        fetch('https://careerfy-server-nine.vercel.app/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobPost)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Job has been posted successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='relative lg:h-[1100px] h-[1600px]'>
            <PageTitle title="Careerfy | Post A Job"></PageTitle>
            <img className='object-cover h-full w-full' src={jobImg} alt="job" />
            <div className='absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.6)]'>
                <div className='bg-[rgba(0,0,0,0.8)] max-w-7xl mx-auto p-10 mb-10 mt-10 lg:rounded-xl'>
                    <h2 className='text-white text-4xl font-bold uppercase text-center'>Post A New Job</h2>
                </div>
                <div className="bg-[rgba(0,0,0,0.8)] max-w-7xl mx-auto text-white lg:px-20 px-5 py-20 rounded-xl">
                    <form onSubmit={handleJobPost} className='space-y-5'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                            <div>
                                <label htmlFor="title">Job Title</label>
                                <input className='w-full mt-1 outline-0 py-3 px-5 rounded-3xl bg-[#232a31]' type="text" name="title" id="title" placeholder="Job Title" />
                            </div>
                            <div>
                                <label htmlFor="name">User Name</label>
                                <input className='w-full mt-1 outline-0 py-3 px-5 rounded-3xl bg-[#232a31]' defaultValue={user?.displayName} type="text" name="name" id="name" placeholder="User Name" />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                            <div>
                                <label htmlFor="category">Job Category</label>
                                <select name="category" className='w-full mt-1 outline-0 py-3 px-5 rounded-3xl bg-[#232a31]'>
                                    <option value="On Site">On Site</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Part Time">Part Time</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="salary">Salary Range</label>
                                <input className='w-full mt-1 outline-0 py-3 px-5 rounded-3xl bg-[#232a31]' type="text" name="salary" id="salary" placeholder="Ex. 10,000 - 12,000" />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                            <div>
                                <label htmlFor="banner">Job Banner URL</label>
                                <input className='w-full mt-1 outline-0 py-3 px-5 rounded-3xl bg-[#232a31]' type="text" name="banner" id="banner" placeholder="Banner URL" />
                            </div>
                            <div>
                                <label htmlFor="applicant">Applicants Number</label>
                                <input className='w-full mt-1 outline-0 py-3 px-5 rounded-3xl bg-[#232a31]' defaultValue={0} type="text" name="applicant" id="applicant" placeholder="Applicants Number" />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                            <div>
                                <label htmlFor="postingDate">Job Posting Date</label>
                                <DatePicker selected={postDate} onChange={(date)=>setPostDate(date)} className='w-full mt-1 outline-0 py-3 px-5 rounded-3xl block bg-[#232a31]'/>
                            </div>
                            <div>
                                <label htmlFor="deadlineDate">Application Deadline</label>
                                <DatePicker dateFormat="MM/dd/yyyy" selected={deadlineDate} onChange={(date)=>setDeadlineDate(date)} className='w-full mt-1 outline-0 py-3 px-5 rounded-3xl block bg-[#232a31]'/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="description">Job Description</label>
                            <textarea cols="5" rows="5" className='w-full mt-1 outline-0 py-3 px-5 rounded-3xl bg-[#232a31]' type="text" name="description" id="description" placeholder='Job Description' />
                        </div>
                        <div>
                        <input className='text-primary-color font-semibold py-3 cursor-pointer px-6 border-2 border-primary-color hover:text-white hover:bg-primary-color transition ease-in-out rounded-3xl w-full' type="submit" value="Post Job" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAJob;