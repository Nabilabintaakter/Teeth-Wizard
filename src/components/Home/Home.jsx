
import { NavLink, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import ServiceCard from '../ServiceCard/ServiceCard';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';

const Home = () => {
    const services = useLoaderData();
    const { servicesData, feedbackData } = services;
    return (
        <div className='container mx-auto'>
            <Banner></Banner>

            {/* our services section */}
            <Header title='Our Expert Dental Services' subTitle='Explore our exceptional dental services, tailored to meet your needs, ensuring a healthy, confident smile with expert care.'></Header>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 w-[80%] max-w-[1200px] mx-auto my-8'>
                {
                    servicesData.slice(0, 4).map((service, idx) => <ServiceCard key={idx} service={service}></ServiceCard>)
                }
            </div>
            <button className='btn btn-primary mx-auto block mt-5 font-bold mb-8'><NavLink to='/allTreatments'>Show More</NavLink></button>

            {/* feedback section */}
            <Header title='What Our Clients Say' subTitle='Hear from our happy clients! Their valuable feedback reflects our dedication to providing top-notch dental care and services.'></Header>
            <Feedback feedbackData={feedbackData}></Feedback>
        </div>
    );
};

export default Home;