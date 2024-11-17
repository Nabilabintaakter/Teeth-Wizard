import { NavLink } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { treatment, image, description, cost,id } = service
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
                    <NavLink to={`/details/${id}`} className="badge btn btn-md rounded-md font-bold bg-green-600 text-white w-full">Checkout More</NavLink>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;