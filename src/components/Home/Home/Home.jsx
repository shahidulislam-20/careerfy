import PageTitle from "../../Shared/Helmet/PageTitle";
import Banner from "../Banner/Banner";
import DoSection from "../DoSection/DoSection";
import JobByCategory from "../JobByCategory/JobByCategory";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <PageTitle title="Careerfy | Home - Find your job"></PageTitle>
            <Banner></Banner>
            <JobByCategory></JobByCategory>
            <DoSection></DoSection>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;