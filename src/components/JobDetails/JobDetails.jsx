import { useLoaderData } from "react-router-dom";
import companyLogo from '../../assets/company.png';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { format } from 'date-fns';
import emailjs from '@emailjs/browser';
//Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from "../Shared/Helmet/PageTitle";

const JobDetails = () => {

    const { user } = useContext(AuthContext);

    const { _id, title, name, banner_url, applicant_number, description, long_des, salary_range, deadline } = useLoaderData();

    const notify = () => toast.success('Applied Job Successfully!', {
        position: "top-center",
        hideProgressBar: true,
    })
    const postedJobError = () => toast.error('Your cannot apply your posted job.', {
        position: "top-center",
        hideProgressBar: true,
    })
    const deadLineError = () => toast.error('Job deadline is over.', {
        position: "top-center",
        hideProgressBar: true,
    })

    const updatedApplicant = parseInt(applicant_number) + 1;

    const todayDate = new Date();
    const deadlineDate = new Date(deadline);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const userName = form.username.value;
        const email = form.email.value;
        const resume = form.resume.value;
        const formData = { id: _id, userName, email, resume };
        console.log(formData);

        // configure Email JS
        const serviceID = 'service_2eed6lm';
        const templateID = 'template_uxtgunl';
        const publicKey = 'UxPJvEY3ZmfGEUZGA';

        // email js templateParams
        const templateParams = {
            from_name: 'Careerfy',
            from_email: email,
            to_name: userName,
            message: "Congratulations! You have successfully applied a job."
        }

        if (deadlineDate.setHours(0, 0, 0, 0) >= todayDate.setHours(0, 0, 0, 0)) {
            if (user?.displayName !== name) {
                fetch('https://careerfy-server-pink.vercel.app/applied-jobs', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {

                            //Update Applicant Number
                            fetch(`https://careerfy-server-pink.vercel.app/applicant-number/${_id}`, {
                                method: 'PATCH',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify({ applicant_number: updatedApplicant })
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data)
                                    if (data.modifiedCount > 0) {

                                        // Emailjs API
                                        emailjs.send(serviceID, templateID, templateParams, publicKey)
                                        .then(res => {
                                            console.log('email sent successfully', res)
                                        })
                                        .catch(error => console.log(error))
                                        notify();
                                    }
                                })
                        }
                    })
            } else {
                postedJobError();
            }
        } else {
            deadLineError();
        }
    }

    console.log(format(new Date(), 'yyyy-MM-dd'));

    return (
        <div className="pb-20">
            <PageTitle title="Careerfy | Job Details"></PageTitle>
            <div className="text-center border-b-2 py-10 mb-10">
                <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
                <p className="text-sm">Posted By : {name}</p>
            </div>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-4 px-5">
                <div className="lg:col-span-3">
                    <p className="text-2xl text-[#666666] mb-2">Overview</p>
                    <img className="w-full h-96 object-cover" src={banner_url} alt="banner-image" />
                    <h4 className="text-2xl text-[#666666] my-5">Job Description :</h4>
                    <p className="text-[#666666] mb-2">{description}</p>
                    <p className="text-[#666666] mb-2">{long_des}</p>
                </div>
                <div className="lg:pl-8 text-center pt-10">
                    <img className="bg-[#555] w-52 mx-auto lg:w-full" src={companyLogo} alt="logo" />
                    <p className="text-xl font-semibold my-5">Total Applicant : {applicant_number}</p>
                    <p className="font-semibold my-5">Salary Range : {salary_range}</p>
                    <button onClick={() => document.getElementById('my_modal_5').showModal()} className="text-primary-color font-semibold py-3 w-full cursor-pointer px-6 border-2 border-primary-color hover:text-white hover:bg-primary-color transition ease-in-out rounded-lg">Apply For Job</button>

                    {/* Modal */}
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box bg-[rgba(0,0,0,0.8)] text-[#aaa] border-black border-2">
                            <h3 className="font-semibold text-3xl text-center mt-10 mb-8">Apply Job Now</h3>
                            <form onSubmit={handleSubmit}>
                                <input className="px-4 bg-[#232a31] py-3 w-full rounded-3xl" defaultValue={user?.displayName} type="text" placeholder="Username" name="username" id="" />
                                <input className="px-4 bg-[#232a31] my-5 py-3 w-full rounded-3xl" defaultValue={user?.email} type="email" name="email" placeholder="User Email" id="" />
                                <input className="px-4 bg-[#232a31] py-3 w-full rounded-3xl" type="text" name="resume" placeholder="Resume Link" />
                                <input className="text-primary-color font-semibold py-3 cursor-pointer px-6 border-2 border-primary-color hover:text-white hover:bg-primary-color transition ease-in-out rounded-3xl mt-12" type="submit" value="Submit Application" />
                            </form>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn btn-ghost">Close</button>
                                </form>
                            </div>
                        </div>
                        <ToastContainer />
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;