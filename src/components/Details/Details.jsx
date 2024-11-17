import { Link, useLoaderData } from "react-router-dom";
import Modal from "../Modal/Modal";

const Details = () => {
    const singleData = useLoaderData();
    const { cost, description, treatment, image } = singleData;
    return (
        <div className="w-[80%] max-w-[1200px] mx-auto mt-6 md:mt-12">
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${image})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md flex flex-col justify-center items-center">
                        <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
                        <p className="mb-5">
                            {description}
                        </p>
                        <div className="flex items-center gap-3">
                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn bg-yellow-500 border-none">Book Appointment</button>
                            <Link to='/' className="btn bg-blue-500 border-none">Back to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Modal></Modal>
        </div>
    );
};

export default Details;