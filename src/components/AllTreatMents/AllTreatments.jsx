import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllTreatments = () => {
    const services = useLoaderData();
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 w-[80%] max-w-[1200px] mx-auto mt-8 mb-24'>
            {
                services.map((service, idx) => <ServiceCard key={idx} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default AllTreatments;