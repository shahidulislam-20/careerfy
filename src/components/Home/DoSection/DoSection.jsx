import do1 from '../../../assets/do1.png'
import do2 from '../../../assets/do2.png'
import do3 from '../../../assets/do3.png'
import do4 from '../../../assets/do4.png'
import { motion } from "framer-motion";

const DoSection = () => {
    return (
        <div className="bg-[#F5F5F5]">
            <div className="max-w-7xl mx-auto py-20">
                <div className="text-center">
                    <motion.h2
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.2,
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1
                        }}
                        className="text-4xl font-bold uppercase mb-1">What can I do with careerfy?</motion.h2>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.4,
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1
                        }}
                    >Streamline your hiring process with strategic channels to reach qualified candidates</motion.p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 mx-5 lg:mx-0 grid-cols-1 gap-10 mt-10">
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.2,
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1
                        }}
                        className='text-center bg-white px-5 py-10 rounded-lg shadow-md'>
                        <img className='w-14 h-14 mb-5 mx-auto' src={do1} alt="do" />
                        <h3 className='font-bold text-xl mb-2'>Reduce Hiring bias</h3>
                        <p>Structured digital interviews increase the predictive validity of your hires by 65%.</p>
                    </motion.div>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.4,
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1
                        }}
                        className='text-center bg-white px-5 py-10 rounded-lg shadow-md'>
                        <img className='w-14 h-14 mb-5 mx-auto' src={do2} alt="do" />
                        <h3 className='font-bold text-xl mb-2'>Save time & headspace</h3>
                        <p>Reduce your time-to-hire by up to 75% and free up headspace for other HR</p>
                    </motion.div>

                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.6,
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1
                        }}
                        className='text-center bg-white px-5 py-10 rounded-lg shadow-md'>
                        <img className='w-14 h-14 mb-5 mx-auto' src={do3} alt="do" />
                        <h3 className='font-bold text-xl mb-2'>Min. Environmental Impact</h3>
                        <p>Did you know? U.S. office workers use ~10,000 sheets of paper every year.</p>
                    </motion.div>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.8,
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1
                        }}
                        className='text-center bg-white px-5 py-10 rounded-lg shadow-md'>
                        <img className='w-14 h-14 mb-5 mx-auto' src={do4} alt="do" />
                        <h3 className='font-bold text-xl mb-2'>Reduce Hiring bias</h3>
                        <p>Structured digital interviews increase the predictive validity of your hires by 65%.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default DoSection;