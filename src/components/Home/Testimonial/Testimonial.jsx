import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import person from '../../../assets/person.png';
import { motion } from "framer-motion";

const Testimonial = () => {

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <div className="my-28 max-w-7xl mx-auto">
            <div>
                <div className="text-center">
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
                    className="text-4xl font-bold uppercase mb-1">What our clients are saying</motion.h2>
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
                    >Showing companies based on reviews and recent job openings</motion.p>
                </div>
                <div>
                    <Slider {...settings}>
                        <div className="p-5">
                            <motion.div 
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{once: true}}
                            transition={{
                                delay: 0.3,
                                x: { type: "spring", stiffness: 60 },
                                opacity: { duration: 1 },
                                ease: "easeIn",
                                duration: 1
                            }}
                            className="shadow-md p-5 mt-10 border rounded-lg">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, impedit voluptate rerum natus alias aperiam at, assumenda ut modi, facilis mollitia facere ab. Quas quaerat repellat ea excepturi esse dolore cum saepe facere error rem qui adipisci dolores doloremque officia, libero rerum dolorum blanditiis fugit vero aspernatur, corrupti dolorem ipsum!</p>
                                <div className="flex items-center gap-3 my-10">
                                    <img className="w-16 h-16" src={person} alt="person" />
                                    <div>
                                        <h4 className="font-semibold text-sm">Esther Howard</h4>
                                        <p className="text-sm">QA Tester</p>
                                        <div className="rating rating-sm">
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div 
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{once: true}}
                        transition={{
                            delay: 0.3,
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1
                        }}
                        className="p-5">
                            <div className="shadow-md p-5 mt-10 border rounded-lg">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, impedit voluptate rerum natus alias aperiam at, assumenda ut modi, facilis mollitia facere ab. Quas quaerat repellat ea excepturi esse dolore cum saepe facere error rem qui adipisci dolores doloremque officia, libero rerum dolorum blanditiis fugit vero aspernatur, corrupti dolorem ipsum!</p>
                                <div className="flex items-center gap-3 my-10">
                                    <img className="w-16 h-16" src={person} alt="person" />
                                    <div>
                                        <h4 className="font-semibold text-sm">Esther Howard</h4>
                                        <p className="text-sm">QA Tester</p>
                                        <div className="rating rating-sm">
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <div className="p-5">
                            <motion.div 
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
                            className="shadow-md p-5 mt-10 border rounded-lg">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, impedit voluptate rerum natus alias aperiam at, assumenda ut modi, facilis mollitia facere ab. Quas quaerat repellat ea excepturi esse dolore cum saepe facere error rem qui adipisci dolores doloremque officia, libero rerum dolorum blanditiis fugit vero aspernatur, corrupti dolorem ipsum!</p>
                                <div className="flex items-center gap-3 my-10">
                                    <img className="w-16 h-16" src={person} alt="person" />
                                    <div>
                                        <h4 className="font-semibold text-sm">Esther Howard</h4>
                                        <p className="text-sm">QA Tester</p>
                                        <div className="rating rating-sm">
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="p-5">
                            <div className="shadow-md p-5 mt-10 border rounded-lg">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, impedit voluptate rerum natus alias aperiam at, assumenda ut modi, facilis mollitia facere ab. Quas quaerat repellat ea excepturi esse dolore cum saepe facere error rem qui adipisci dolores doloremque officia, libero rerum dolorum blanditiis fugit vero aspernatur, corrupti dolorem ipsum!</p>
                                <div className="flex items-center gap-3 my-10">
                                    <img className="w-16 h-16" src={person} alt="person" />
                                    <div>
                                        <h4 className="font-semibold text-sm">Esther Howard</h4>
                                        <p className="text-sm">QA Tester</p>
                                        <div className="rating rating-sm">
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="shadow-md p-5 mt-10 border rounded-lg">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, impedit voluptate rerum natus alias aperiam at, assumenda ut modi, facilis mollitia facere ab. Quas quaerat repellat ea excepturi esse dolore cum saepe facere error rem qui adipisci dolores doloremque officia, libero rerum dolorum blanditiis fugit vero aspernatur, corrupti dolorem ipsum!</p>
                                <div className="flex items-center gap-3 my-10">
                                    <img className="w-16 h-16" src={person} alt="person" />
                                    <div>
                                        <h4 className="font-semibold text-sm">Esther Howard</h4>
                                        <p className="text-sm">QA Tester</p>
                                        <div className="rating rating-sm">
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="shadow-md p-5 mt-10 border rounded-lg">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, impedit voluptate rerum natus alias aperiam at, assumenda ut modi, facilis mollitia facere ab. Quas quaerat repellat ea excepturi esse dolore cum saepe facere error rem qui adipisci dolores doloremque officia, libero rerum dolorum blanditiis fugit vero aspernatur, corrupti dolorem ipsum!</p>
                                <div className="flex items-center gap-3 my-10">
                                    <img className="w-16 h-16" src={person} alt="person" />
                                    <div>
                                        <h4 className="font-semibold text-sm">Esther Howard</h4>
                                        <p className="text-sm">QA Tester</p>
                                        <div className="rating rating-sm">
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;