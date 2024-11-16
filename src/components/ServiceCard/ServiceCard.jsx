import React from 'react';

const ServiceCard = ({ service }) => {
    const { treatment, image, description, cost } = service
    return (
        <div className="h-[390px] md:h-[430px] border-[1px] shadow-md rounded-lg flex flex-col gap-3">
            <figure>
                <img className='h-48 object-cover w-full'
                    src={image}
                    alt="treatments" />
            </figure>
            <div className="p-3 flex flex-col gap-5 flex-1">
                <div className=' flex-1'>
                    <div className="flex justify-between">
                        <h1 className='text-xl font-bold'>{treatment}</h1>
                        <div className="badge badge-secondary px-3 flex"><h1>$</h1><h1>{cost}</h1></div>
                    </div>
                    <p className='' title={description}>{description.slice(0, 100)}...</p>
                </div>
                <div className="">
                    <button className="badge btn btn-sm rounded-xl font-bold btn-primary">Checkout More</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;